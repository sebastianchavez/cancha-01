/**
 * reservas.js
 * Lógica del flujo de reserva: armado de la reserva en memoria,
 * validaciones y creación/persistencia.
 */

const ReservaFlow = {
  /* =========================================================
     Estado temporal (memoria) - se persiste tras pago
     ========================================================= */
  build({ courtId, date, startTime, duration, players, notes }) {
    const cancha = Catalog.canchasById(courtId);
    if (!cancha) throw new Error('Cancha no encontrada.');
    if (!date) throw new Error('Seleccione una fecha.');
    if (!startTime) throw new Error('Seleccione una hora.');
    if (isPastDate(date)) throw new Error('No se puede reservar en fechas pasadas.');
    if (isPastDateTime(date, startTime)) throw new Error('La hora seleccionada ya pasó.');

    const dur = Number(duration) || 1;
    if (dur < 1 || dur > 4) throw new Error('Duración inválida (1 a 4 horas).');

    // Validar conflicto
    if (Reservas.hasConflict(cancha.id, date, startTime, dur)) {
      throw new Error('Ese horario ya está reservado. Por favor elige otro.');
    }

    const total = cancha.precioHora * dur;
    return {
      courtId: cancha.id,
      courtName: cancha.nombre,
      courtTipo: cancha.tipo,
      courtSuperficie: cancha.superficie,
      date,
      startTime,
      duration: dur,
      players: Number(players) || 10,
      notes: notes || '',
      total,
      precioHora: cancha.precioHora
    };
  },

  /* =========================================================
     Crea reserva pendiente
     ========================================================= */
  create(data) {
    const user = Session.current();
    if (!user) throw new Error('Debes iniciar sesión para reservar.');
    return Reservas.create({ ...data, userId: user.id, status: 'pendiente' });
  },

  /* =========================================================
     Anula reserva
     ========================================================= */
  cancel(id, reason) {
    return Reservas.cancel(id, reason);
  },

  /* =========================================================
     Render helpers - Lista de reservas del usuario
     ========================================================= */
  userReservations(userId) {
    return Reservas.byUser(userId).sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  filterByStatus(userId, statusKey) {
    const list = this.userReservations(userId);
    const today = todayISO();
    if (statusKey === 'proximas') {
      return list.filter(r => r.date >= today && r.status !== 'cancelada');
    }
    if (statusKey === 'pasadas') {
      return list.filter(r => r.date < today || r.status === 'completada');
    }
    if (statusKey === 'canceladas') {
      return list.filter(r => r.status === 'cancelada');
    }
    if (statusKey === 'pendientes') {
      return list.filter(r => r.status === 'pendiente');
    }
    return list;
  }
};