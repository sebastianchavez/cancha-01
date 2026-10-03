/**
 * pago.js
 * Lógica de validación y procesamiento de pagos con tarjeta.
 */

const Pago = {
  /* =========================================================
     Validación de tarjeta
     ========================================================= */
  detectBrand(num) {
    const cleaned = num.replace(/\s/g, '');
    if (/^4/.test(cleaned)) return 'VISA';
    if (/^5[1-5]/.test(cleaned) || /^2[2-7]/.test(cleaned)) return 'MASTERCARD';
    if (/^3[47]/.test(cleaned)) return 'AMEX';
    if (/^6(?:011|5)/.test(cleaned)) return 'DISCOVER';
    return 'CARD';
  },

  luhn(num) {
    const cleaned = num.replace(/\D/g, '');
    if (cleaned.length < 13) return false;
    let sum = 0;
    let shouldDouble = false;
    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned.charAt(i), 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  },

  validateCard({ number, holder, cvv, expiry }) {
    const errors = [];
    const cleaned = String(number).replace(/\s/g, '');
    if (!cleaned) errors.push('Número de tarjeta requerido.');
    else if (!this.luhn(cleaned)) errors.push('Número de tarjeta inválido.');

    if (!holder || String(holder).trim().length < 3) errors.push('Nombre del titular requerido.');
    if (!cvv || !/^\d{3,4}$/.test(String(cvv))) errors.push('CVV inválido (3 o 4 dígitos).');

    if (!expiry || !/^\d{2}\/\d{2}$/.test(expiry)) {
      errors.push('Fecha de expiración inválida (MM/AA).');
    } else {
      const [mm, yy] = expiry.split('/').map(Number);
      const now = new Date();
      const expDate = new Date(2000 + yy, mm - 1, 1);
      expDate.setMonth(expDate.getMonth() + 1);
      if (expDate <= now) errors.push('La tarjeta está vencida.');
    }

    return errors;
  },

  formatCardNumber(value) {
    const cleaned = String(value).replace(/\D/g, '').slice(0, 19);
    return cleaned.replace(/(.{4})/g, '$1 ').trim();
  },

  formatExpiry(value) {
    const cleaned = String(value).replace(/\D/g, '').slice(0, 4);
    if (cleaned.length >= 3) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return cleaned;
  },

  /* =========================================================
     Procesar pago (simulado)
     ========================================================= */
  process({ reservationId, number, expiry, holder, cvv }) {
    const errors = this.validateCard({ number, holder, cvv, expiry });
    if (errors.length) throw new Error(errors[0]);

    const cleaned = String(number).replace(/\s/g, '');
    const brand = this.detectBrand(cleaned);
    const last4 = cleaned.slice(-4);

    const reservation = Reservas.findById(reservationId);
    if (!reservation) throw new Error('Reserva no encontrada.');

    // Simulación: aprueba 95%, rechaza si los últimos 4 dígitos son "0000"
    let status = 'aprobado';
    if (last4 === '0000') status = 'rechazado';

    const payment = Pagos.create({
      reservationId,
      cardLast4: last4,
      cardBrand: brand,
      cardHolder: holder,
      amount: reservation.total,
      status
    });

    if (status === 'aprobado') {
      Reservas.update(reservationId, { status: 'confirmada' });
    }

    return payment;
  }
};