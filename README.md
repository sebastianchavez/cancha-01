# Golazo Sports Club — Sistema de Reservas

Template completo de un sistema de reservas para canchas de fútbol deportivas, construido con **HTML + CSS + JavaScript nativo + Tailwind CSS por CDN**.

## ⚽ Características

- 🏟️ **6 canchas** (F5, F7, F11 - sintéticas y pasto natural)
- 📅 **Reservas online** con stepper visual y validación de disponibilidad
- 💳 **Pago con tarjeta** (validación Luhn + detección de marca)
- 👤 **Autenticación completa** (login, registro, recuperación)
- 📋 **Mi perfil** con historial, edición y cambio de contraseña
- ❌ **Anulación de reservas** con política de reembolso
- 🎨 **Diseño moderno** deportivo (verde/azul + acentos amarillos)
- 📱 **100% responsive** mobile/tablet/desktop
- 💾 **Persistencia en localStorage** (sin backend)

## 🚀 Cómo usar

1. Abre `index.html` en cualquier navegador moderno
2. Los datos de demo se crean automáticamente en `localStorage`
3. Inicia sesión con la cuenta demo:
   - **Email:** `demo@cancha.com`
   - **Password:** `123456`

## 📂 Estructura del proyecto

```
cancha-01/
├── index.html                          # Landing page
├── pages/
│   ├── reserva.html                    # Formulario de reserva (stepper)
│   ├── confirmacion.html               # Confirmación de cita
│   ├── pago.html                       # Pago con tarjeta
│   ├── pago-confirmacion.html          # Comprobante
│   ├── servicios.html                  # Nuestros servicios + membresías
│   ├── contacto.html                   # Contacto + mapa + horarios
│   ├── galeria.html                    # Galería con filtros y lightbox
│   ├── clases.html                     # Horario de clases
│   ├── precios.html                    # Tabla de precios
│   ├── login.html                      # Iniciar sesión
│   ├── registro.html                   # Registro
│   ├── recuperar.html                  # Recuperar contraseña
│   ├── terminos.html                   # Términos y condiciones
│   ├── privacidad.html                 # Políticas de privacidad
│   ├── perfil.html                     # Mi perfil + historial
│   └── reserva-detalle.html            # Detalle + anular
├── assets/
│   ├── css/styles.css                  # Estilos custom
│   ├── js/
│   │   ├── data.js                     # Mock data + persistencia
│   │   ├── ui.js                       # Componentes UI (navbar, modal, toast)
│   │   ├── auth.js                     # Login / registro / perfil
│   │   ├── reservas.js                 # Lógica de reservas
│   │   ├── pago.js                     # Validación tarjeta + procesamiento
│   │   └── app.js                      # Bootstrap
│   └── img/                             # Imágenes (vacío - usa SVG inline)
└── README.md
```

## 🎨 Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| Verde | `#16a34a` | Primary - canchas, CTAs |
| Azul | `#1d4ed8` | Secondary - links, badges |
| Amarillo | `#facc15` | Acento - CTAs destacados |
| Slate | `#0f172a` | Texto, fondos oscuros |

## 💾 Modelo de datos

### Usuarios (`canchas_users`)
```js
{
  id: 'user_xxx',
  name: 'Sebastián Castro',
  email: 'demo@cancha.com',
  phone: '987654321',
  dni: '12345678',
  password: '123456',
  createdAt: '2026-01-15T...'
}
```

### Reservas (`canchas_reservas`)
```js
{
  id: 'res_xxx',
  userId: 'user_xxx',
  courtId: 'f5-sintetica-1',
  date: '2026-10-05',
  startTime: '20:00',
  duration: 2,        // horas
  status: 'pendiente'|'confirmada'|'en_curso'|'completada'|'cancelada',
  total: 120,
  notes: 'Partido con amigos',
  players: 10,
  createdAt: '...'
}
```

### Pagos (`canchas_pagos`)
```js
{
  id: 'pay_xxx',
  reservationId: 'res_xxx',
  cardLast4: '4242',
  cardBrand: 'VISA',
  cardHolder: 'SEBASTIAN CASTRO',
  amount: 120,
  status: 'aprobado'|'rechazado',
  operationNumber: 'OP-XXX',
  paidAt: '...'
}
```

## 🔄 Flujo de reserva

```
index.html
    ↓
[Login/Registro] ← (opcional, antes de pagar)
    ↓
reserva.html (selecciona cancha/fecha/hora)
    ↓
confirmacion.html (revisa resumen)
    ↓
pago.html (ingresa tarjeta)
    ↓
pago-confirmacion.html (comprobante)
    ↓
perfil.html (ver historial)
    ↓
reserva-detalle.html (detalle + anular)
```

## 🧪 Funciones de prueba en consola

```js
resetDemo()           // Reinicia todos los datos
Seedear más usuarios  // Editar data.js → seedDatabase()
```

## 💳 Tarjetas de prueba para pago

- **Cualquier número Luhn válido:** 4242 4242 4242 4242
- **Tarjeta rechazada:** cualquier número que termine en `0000`
- **CVV:** cualquier 3 dígitos
- **Fecha:** futura (ej: 12/28)

## 🔧 Stack técnico

- **HTML5** semántico
- **CSS3** con Tailwind CSS 3 vía CDN (Play CDN)
- **JavaScript** nativo (ES6+) sin frameworks
- **localStorage** para persistencia
- **Sin dependencias** externas más allá de Tailwind y Google Fonts

## 📱 Compatibilidad

- ✅ Chrome / Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Mobile browsers (iOS/Android)

## 📝 Notas

- Este es un **template de demostración** — no tiene backend real
- Las "imágenes" son SVG inline (sin assets externos)
- Para producción, conecta la capa `data.js` con un backend real
- Las validaciones de tarjeta son completas (Luhn), pero no se procesa el cargo

## 📄 Licencia

Template libre para uso comercial y personal. Personaliza a tu gusto.