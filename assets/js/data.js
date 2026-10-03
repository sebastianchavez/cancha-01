/**
 * data.js
 * Mock data + capa de persistencia en localStorage.
 * Simula un backend para el template.
 */

const DB_KEYS = {
  users: 'canchas_users',
  reservations: 'canchas_reservas',
  payments: 'canchas_pagos',
  session: 'canchas_session',
  contact: 'canchas_contact_messages',
  seeded: 'canchas_seeded_v1'
};

/* =========================================================
   MOCK DATA - Catálogo de canchas
   ========================================================= */
const CANCHAS = [
  {
    id: 'f5-sintetica-1',
    nombre: 'Cancha Fútbol 5 - Sintética #1',
    tipo: 'Fútbol 5',
    superficie: 'Grass sintético',
    capacidad: 10,
    precioHora: 60,
    iluminada: true,
    techada: false,
    imagen: 'f5-1',
    descripcion: 'Cancha de fútbol 5 con grass sintético de última generación, iluminación LED y arcos profesionales.',
    servicios: ['Vestuarios', 'Estacionamiento', 'Buffet']
  },
  {
    id: 'f5-sintetica-2',
    nombre: 'Cancha Fútbol 5 - Sintética #2',
    tipo: 'Fútbol 5',
    superficie: 'Grass sintético',
    capacidad: 10,
    precioHora: 60,
    iluminada: true,
    techada: true,
    imagen: 'f5-2',
    descripcion: 'Cancha techada de fútbol 5, ideal para jugar bajo cualquier clima.',
    servicios: ['Vestuarios', 'Estacionamiento']
  },
  {
    id: 'f7-sintetica-1',
    nombre: 'Cancha Fútbol 7 - Sintética',
    tipo: 'Fútbol 7',
    superficie: 'Grass sintético',
    capacidad: 14,
    precioHora: 90,
    iluminada: true,
    techada: false,
    imagen: 'f7-1',
    descripcion: 'Cancha de fútbol 7 con dimensiones reglamentarias y grass sintético premium.',
    servicios: ['Vestuarios', 'Estacionamiento', 'Buffet', 'Arbitraje']
  },
  {
    id: 'f7-pasto-1',
    nombre: 'Cancha Fútbol 7 - Pasto Natural',
    tipo: 'Fútbol 7',
    superficie: 'Pasto natural',
    capacidad: 14,
    precioHora: 110,
    iluminada: true,
    techada: false,
    imagen: 'f7-2',
    descripcion: 'Cancha con pasto natural, perfecta para encuentros competitivos.',
    servicios: ['Vestuarios', 'Estacionamiento', 'Arbitraje']
  },
  {
    id: 'f11-sintetica-1',
    nombre: 'Cancha Fútbol 11 - Sintética',
    tipo: 'Fútbol 11',
    superficie: 'Grass sintético',
    capacidad: 22,
    precioHora: 140,
    iluminada: true,
    techada: false,
    imagen: 'f11-1',
    descripcion: 'Cancha de fútbol 11 con grass sintético profesional y graderías.',
    servicios: ['Vestuarios', 'Estacionamiento', 'Buffet', 'Arbitraje', 'Graderías']
  },
  {
    id: 'f11-pasto-1',
    nombre: 'Cancha Fútbol 11 - Pasto Natural',
    tipo: 'Fútbol 11',
    superficie: 'Pasto natural',
    capacidad: 22,
    precioHora: 180,
    iluminada: true,
    techada: false,
    imagen: 'f11-2',
    descripcion: 'Cancha profesional de pasto natural, sede de torneos locales.',
    servicios: ['Vestuarios', 'Estacionamiento', 'Arbitraje', 'Graderías']
  }
];

/* =========================================================
   MOCK DATA - Clases / entrenamientos
   ========================================================= */
const CLASES = [
  { id: 'c1', nombre: 'Escuela de Fútbol Infantil', profesor: 'Carlos Méndez', dias: ['Lun', 'Mié', 'Vie'], hora: '16:00 - 17:30', edades: '6 - 12 años', precio: 250, cupos: 50 },
  { id: 'c2', nombre: 'Tecnificación Juvenil', profesor: 'Luis Rojas', dias: ['Mar', 'Jue'], hora: '17:00 - 18:30', edades: '13 - 17 años', precio: 280, cupos: 30 },
  { id: 'c3', nombre: 'Fútbol para Adultos', profesor: 'Miguel Ángel Torres', dias: ['Lun', 'Mié', 'Vie'], hora: '20:00 - 22:00', edades: '18+ años', precio: 200, cupos: 22 },
  { id: 'c4', nombre: 'Arquería y Portería', profesor: 'Jorge Salinas', dias: ['Sáb'], hora: '09:00 - 11:00', edades: '12+ años', precio: 150, cupos: 8 },
  { id: 'c5', nombre: 'Preparación Física', profesor: 'Ana Lucía Vega', dias: ['Mar', 'Jue'], hora: '19:00 - 20:30', edades: '14+ años', precio: 220, cupos: 20 },
  { id: 'c6', nombre: 'Fútbol Femenino', profesor: 'María José Paz', dias: ['Mar', 'Jue'], hora: '18:00 - 19:30', edades: '14+ años', precio: 180, cupos: 30 }
];

/* =========================================================
   MOCK DATA - Galería
   ========================================================= */
const GALERIA = [
  { id: 'g1', titulo: 'Torneo Apertura 2026', categoria: 'torneos', descripcion: 'Final del torneo apertura 2026 entre equipos locales.' },
  { id: 'g2', titulo: 'Cancha Fútbol 5 Techada', categoria: 'canchas', descripcion: 'Vista panorámica de nuestra cancha techada.' },
  { id: 'g3', titulo: 'Escuela Infantil', categoria: 'clases', descripcion: 'Entrenamiento de la escuela infantil.' },
  { id: 'g4', titulo: 'Fútbol 11 Pasto Natural', categoria: 'canchas', descripcion: 'Nuestra cancha estrella de pasto natural.' },
  { id: 'g5', titulo: 'Evento Empresarial', categoria: 'eventos', descripcion: 'Torneo corporativo para empresa cliente.' },
  { id: 'g6', titulo: 'Tecnificación Juvenil', categoria: 'clases', descripcion: 'Sesión de tecnificación con jóvenes promesas.' },
  { id: 'g7', titulo: 'Noche de Fútbol', categoria: 'eventos', descripcion: 'Encuentros nocturnos con iluminación LED.' },
  { id: 'g8', titulo: 'Vestidores Modernos', categoria: 'instalaciones', descripcion: 'Vestidores totalmente equipados.' },
  { id: 'g9', titulo: 'Buffet y Cafetería', categoria: 'instalaciones', descripcion: 'Zona de descanso y cafetería.' },
  { id: 'g10', titulo: 'Torneo Relámpago', categoria: 'torneos', descripcion: 'Torneo relámpago de fin de semana.' },
  { id: 'g11', titulo: 'Cancha Fútbol 7', categoria: 'canchas', descripcion: 'Cancha de fútbol 7 sintética.' },
  { id: 'g12', titulo: 'Clase de Arqueros', categoria: 'clases', descripcion: 'Especialización para porteros.' }
];

/* =========================================================
   MOCK DATA - Servicios
   ========================================================= */
const SERVICIOS = [
  {
    id: 's1',
    titulo: 'Alquiler de Canchas',
    icono: 'soccer',
    descripcion: 'Reserva canchas de fútbol 5, 7 y 11 con superficies sintéticas y naturales. Disponibilidad por horas.',
    precioDesde: 60
  },
  {
    id: 's2',
    titulo: 'Escuela de Fútbol',
    icono: 'academy',
    descripcion: 'Programas de formación para niños, jóvenes y adultos con entrenadores certificados.',
    precioDesde: 150
  },
  {
    id: 's3',
    titulo: 'Torneos y Eventos',
    icono: 'trophy',
    descripcion: 'Organización de torneos corporativos, barriales y empresariales con arbitraje incluido.',
    precioDesde: 800
  },
  {
    id: 's4',
    titulo: 'Eventos Sociales',
    icono: 'party',
    descripcion: 'Celebra cumpleaños, despedidas y eventos especiales con paquetes personalizados.',
    precioDesde: 350
  },
  {
    id: 's5',
    titulo: 'Entrenamiento Personal',
    icono: 'trainer',
    descripcion: 'Sesiones individuales o grupales con entrenadores especializados.',
    precioDesde: 80
  },
  {
    id: 's6',
    titulo: 'Alquiler de Buffet',
    icono: 'buffet',
    descripcion: 'Espacio de catering y bebidas para complementar tu partido.',
    precioDesde: 50
  }
];

/* =========================================================
   Horarios de atención
   ========================================================= */
const HORARIOS = [
  { dia: 'Lunes', atencion: '07:00 - 23:00', reservas: '07:00 - 22:00' },
  { dia: 'Martes', atencion: '07:00 - 23:00', reservas: '07:00 - 22:00' },
  { dia: 'Miércoles', atencion: '07:00 - 23:00', reservas: '07:00 - 22:00' },
  { dia: 'Jueves', atencion: '07:00 - 23:00', reservas: '07:00 - 22:00' },
  { dia: 'Viernes', atencion: '07:00 - 01:00', reservas: '07:00 - 00:00' },
  { dia: 'Sábado', atencion: '08:00 - 01:00', reservas: '08:00 - 00:00' },
  { dia: 'Domingo', atencion: '08:00 - 22:00', reservas: '08:00 - 21:00' }
];

/* =========================================================
   Información del negocio
   ========================================================= */
const BUSINESS_INFO = {
  nombre: 'Golazo Sports Club',
  eslogan: 'Tu cancha, tu pasión',
  telefono: '+51 987 654 321',
  whatsapp: '+51987654321',
  email: 'contacto@golazosports.com',
  direccion: 'Av. Deportiva 123, San Miguel, Lima - Perú',
  referencia: 'A 2 cuadras del Óvalo de la Av. La Marina',
  coordenadas: { lat: -12.0464, lng: -77.0428 },
  redes: {
    facebook: 'https://facebook.com/golazosports',
    instagram: 'https://instagram.com/golazosports',
    tiktok: 'https://tiktok.com/@golazosports',
    youtube: 'https://youtube.com/@golazosports'
  }
};

/* =========================================================
   Helpers de storage
   ========================================================= */
const Store = {
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      console.error('Store.get error', key, e);
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Store.set error', key, e);
      return false;
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clearAll() {
    Object.values(DB_KEYS).forEach(k => localStorage.removeItem(k));
  }
};

/* =========================================================
   Helpers de ID y formato
   ========================================================= */
function uid(prefix = 'id') {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function formatCurrency(amount) {
  return `S/ ${Number(amount).toFixed(2)}`;
}

function formatDate(iso, opts = {}) {
  const d = typeof iso === 'string' ? new Date(iso) : iso;
  if (isNaN(d.getTime())) return '';
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  if (opts.short) {
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }
  return d.toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' });
}

function formatDateTime(iso) {
  const d = typeof iso === 'string' ? new Date(iso) : iso;
  if (isNaN(d.getTime())) return '';
  return `${formatDate(d)} ${d.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })}`;
}

function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
}

function toLocalDateKey(date) {
  const d = typeof date === 'string' ? new Date(date) : date;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function isPastDate(dateISO) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateISO);
  target.setHours(0, 0, 0, 0);
  return target < today;
}

function isPastDateTime(dateISO, timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  const target = new Date(dateISO);
  target.setHours(h, m, 0, 0);
  return target < new Date();
}

/* =========================================================
   Seeding - datos iniciales (usuarios demo + reservas)
   ========================================================= */
function seedDatabase(force = false) {
  if (!force && Store.get(DB_KEYS.seeded)) return;

  // Limpia claves antes de sembrar
  Store.remove(DB_KEYS.users);
  Store.remove(DB_KEYS.reservations);
  Store.remove(DB_KEYS.payments);

  const users = [
    {
      id: 'user_demo',
      name: 'Sebastián Castro',
      email: 'demo@cancha.com',
      phone: '987654321',
      dni: '12345678',
      password: '123456',
      createdAt: '2026-01-15T10:00:00.000Z'
    },
    {
      id: 'user_admin',
      name: 'Administrador',
      email: 'admin@cancha.com',
      phone: '999888777',
      dni: '87654321',
      password: 'admin123',
      createdAt: '2025-06-01T08:00:00.000Z',
      role: 'admin'
    }
  ];
  Store.set(DB_KEYS.users, users);

  const reservations = [
    {
      id: 'res_001',
      userId: 'user_demo',
      courtId: 'f5-sintetica-1',
      date: todayISO(-7),
      startTime: '20:00',
      duration: 1,
      status: 'completada',
      total: 60,
      notes: 'Partido con amigos',
      players: 10,
      createdAt: new Date(Date.now() - 8 * 86400000).toISOString()
    },
    {
      id: 'res_002',
      userId: 'user_demo',
      courtId: 'f7-sintetica-1',
      date: todayISO(-2),
      startTime: '18:00',
      duration: 2,
      status: 'completada',
      total: 180,
      notes: 'Torneo barrial',
      players: 14,
      createdAt: new Date(Date.now() - 3 * 86400000).toISOString()
    },
    {
      id: 'res_003',
      userId: 'user_demo',
      courtId: 'f11-sintetica-1',
      date: todayISO(5),
      startTime: '19:00',
      duration: 2,
      status: 'confirmada',
      total: 280,
      notes: 'Final del torneo',
      players: 22,
      createdAt: new Date(Date.now() - 1 * 86400000).toISOString()
    },
    {
      id: 'res_004',
      userId: 'user_demo',
      courtId: 'f5-sintetica-2',
      date: todayISO(12),
      startTime: '21:00',
      duration: 1,
      status: 'pendiente',
      total: 60,
      notes: 'Esperando pago',
      players: 8,
      createdAt: new Date().toISOString()
    },
    {
      id: 'res_005',
      userId: 'user_demo',
      courtId: 'f7-pasto-1',
      date: todayISO(-20),
      startTime: '17:00',
      duration: 1,
      status: 'cancelada',
      total: 110,
      notes: 'Lluvia',
      players: 10,
      createdAt: new Date(Date.now() - 22 * 86400000).toISOString()
    }
  ];
  Store.set(DB_KEYS.reservations, reservations);

  const payments = [
    { id: 'pay_001', reservationId: 'res_001', cardLast4: '4242', cardBrand: 'VISA', amount: 60, status: 'aprobado', paidAt: new Date(Date.now() - 8 * 86400000).toISOString() },
    { id: 'pay_002', reservationId: 'res_002', cardLast4: '5555', cardBrand: 'MASTERCARD', amount: 180, status: 'aprobado', paidAt: new Date(Date.now() - 3 * 86400000).toISOString() },
    { id: 'pay_003', reservationId: 'res_003', cardLast4: '4242', cardBrand: 'VISA', amount: 280, status: 'aprobado', paidAt: new Date(Date.now() - 1 * 86400000).toISOString() }
  ];
  Store.set(DB_KEYS.payments, payments);

  Store.set(DB_KEYS.seeded, true);
}

/* =========================================================
   API de dominio - Usuarios
   ========================================================= */
const Users = {
  list() { return Store.get(DB_KEYS.users, []); },
  findById(id) { return this.list().find(u => u.id === id) || null; },
  findByEmail(email) {
    return this.list().find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
  },
  create(data) {
    const users = this.list();
    if (this.findByEmail(data.email)) {
      throw new Error('El correo ya está registrado.');
    }
    const user = {
      id: uid('user'),
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      dni: data.dni?.trim() || '',
      password: data.password,
      createdAt: new Date().toISOString()
    };
    users.push(user);
    Store.set(DB_KEYS.users, users);
    return user;
  },
  update(id, changes) {
    const users = this.list();
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return null;
    users[idx] = { ...users[idx], ...changes };
    Store.set(DB_KEYS.users, users);
    return users[idx];
  },
  remove(id) {
    const users = this.list().filter(u => u.id !== id);
    Store.set(DB_KEYS.users, users);
  }
};

/* =========================================================
   API de dominio - Sesión
   ========================================================= */
const Session = {
  current() {
    const s = Store.get(DB_KEYS.session);
    if (!s) return null;
    return Users.findById(s.userId);
  },
  isLogged() { return !!this.current(); },
  login(email, password) {
    const user = Users.findByEmail(email);
    if (!user) throw new Error('Usuario no encontrado.');
    if (user.password !== password) throw new Error('Contraseña incorrecta.');
    Store.set(DB_KEYS.session, { userId: user.id, loggedAt: new Date().toISOString() });
    return user;
  },
  logout() {
    Store.remove(DB_KEYS.session);
  },
  require(redirectTo = 'login.html') {
    if (!this.isLogged()) {
      window.location.href = redirectTo;
      return false;
    }
    return true;
  }
};

/* =========================================================
   API de dominio - Reservas
   ========================================================= */
const Reservas = {
  list() { return Store.get(DB_KEYS.reservations, []); },
  findById(id) { return this.list().find(r => r.id === id) || null; },
  byUser(userId) { return this.list().filter(r => r.userId === userId); },
  create(data) {
    const reservations = this.list();
    const res = {
      id: uid('res'),
      userId: data.userId,
      courtId: data.courtId,
      date: data.date,
      startTime: data.startTime,
      duration: data.duration,
      status: data.status || 'pendiente',
      total: data.total,
      notes: data.notes || '',
      players: data.players || 10,
      createdAt: new Date().toISOString()
    };
    reservations.push(res);
    Store.set(DB_KEYS.reservations, reservations);
    return res;
  },
  update(id, changes) {
    const list = this.list();
    const idx = list.findIndex(r => r.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...changes };
    Store.set(DB_KEYS.reservations, list);
    return list[idx];
  },
  cancel(id, reason = '') {
    const res = this.findById(id);
    if (!res) throw new Error('Reserva no encontrada.');
    const now = new Date();
    const target = new Date(`${res.date}T${res.startTime}:00`);
    const diffH = (target - now) / 3600000;
    if (diffH < 24 && res.status !== 'pendiente' && res.status !== 'confirmada') {
      throw new Error('Solo se pueden anular reservas con al menos 24h de anticipación.');
    }
    if (res.status === 'cancelada' || res.status === 'completada') {
      throw new Error(`La reserva ya está ${res.status}.`);
    }
    return this.update(id, {
      status: 'cancelada',
      cancelReason: reason,
      cancelledAt: new Date().toISOString()
    });
  },
  hasConflict(courtId, date, startTime, duration, ignoreId = null) {
    const slots = this.timeSlots(startTime, duration);
    return this.list().some(r => {
      if (r.id === ignoreId) return false;
      if (r.courtId !== courtId) return false;
      if (r.date !== date) return false;
      if (r.status === 'cancelada') return false;
      const rSlots = this.timeSlots(r.startTime, r.duration);
      return slots.some(s => rSlots.includes(s));
    });
  },
  timeSlots(startTime, duration) {
    const [h, m] = startTime.split(':').map(Number);
    const start = h * 60 + m;
    const arr = [];
    for (let i = 0; i < duration * 60; i += 60) {
      const total = start + i;
      const hh = Math.floor(total / 60);
      const mm = total % 60;
      arr.push(`${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`);
    }
    return arr;
  },
  occupiedByCourtDate(courtId, date) {
    const occupied = [];
    this.list().forEach(r => {
      if (r.courtId !== courtId) return;
      if (r.date !== date) return;
      if (r.status === 'cancelada') return;
      this.timeSlots(r.startTime, r.duration).forEach(s => occupied.push(s));
    });
    return occupied;
  },
  delete(id) {
    const list = this.list().filter(r => r.id !== id);
    Store.set(DB_KEYS.reservations, list);
  }
};

/* =========================================================
   API de dominio - Pagos
   ========================================================= */
const Pagos = {
  list() { return Store.get(DB_KEYS.payments, []); },
  findById(id) { return this.list().find(p => p.id === id) || null; },
  byReservation(reservationId) { return this.list().filter(p => p.reservationId === reservationId); },
  create(data) {
    const list = this.list();
    const pay = {
      id: uid('pay'),
      reservationId: data.reservationId,
      cardLast4: data.cardLast4,
      cardBrand: data.cardBrand,
      cardHolder: data.cardHolder,
      amount: data.amount,
      status: data.status || 'aprobado',
      operationNumber: 'OP-' + Date.now().toString(36).toUpperCase(),
      paidAt: new Date().toISOString()
    };
    list.push(pay);
    Store.set(DB_KEYS.payments, list);
    return pay;
  }
};

/* =========================================================
   API - Mensajes de contacto
   ========================================================= */
const Contacto = {
  list() { return Store.get(DB_KEYS.contact, []); },
  create(data) {
    const list = this.list();
    const msg = {
      id: uid('msg'),
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      subject: data.subject || 'Consulta general',
      message: data.message,
      createdAt: new Date().toISOString(),
      read: false
    };
    list.push(msg);
    Store.set(DB_KEYS.contact, list);
    return msg;
  }
};

/* =========================================================
   Catálogos - export para uso en HTML
   ========================================================= */
const Catalog = {
  canchas() { return CANCHAS; },
  canchasById(id) { return CANCHAS.find(c => c.id === id) || null; },
  clases() { return CLASES; },
  galeria() { return GALERIA; },
  servicios() { return SERVICIOS; },
  horarios() { return HORARIOS; },
  business() { return BUSINESS_INFO; }
};

/* =========================================================
   Reset (util)
   ========================================================= */
function resetDemo() {
  Store.clearAll();
  seedDatabase(true);
  console.info('Demo data reiniciada.');
  location.reload();
}

/* =========================================================
   Bootstrap inicial
   ========================================================= */
seedDatabase();