/**
 * ui.js
 * Componentes UI compartidos: navbar, footer, toasts, modales, helpers DOM.
 */

const UI = {
  /* =========================================================
     Paths helpers
     ========================================================= */
  isInPages() { return window.location.pathname.includes('/pages/'); },
  prefix() { return this.isInPages() ? '../' : ''; },
  page(name) { return `${this.prefix()}pages/${name}`; },

  /* =========================================================
     Iconos SVG inline (deporte / UI)
     ========================================================= */
  icons: {
    menu: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>',
    close: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',
    user: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>',
    logout: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>',
    chevronDown: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>',
    soccer: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-11h2v3h3v2h-3v3h-2v-3H8v-2h3V9z"/></svg>',
    trophy: '<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v3c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 14.63 21 12.55 21 10V7c0-1.1-.9-2-2-2zM5 10V7h2v3.82C5.84 10.4 5 9.3 5 10zm14 0c0 .7-.84.4-2-.18V7h2v3z"/></svg>',
    check: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>',
    x: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',
    arrowRight: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>',
    phone: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',
    mail: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    pin: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    clock: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    star: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    warning: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>',
    info: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  },

  /* =========================================================
     Navbar
     ========================================================= */
  renderNavbar(activeKey = 'home') {
    // Idempotent: si ya existe navbar, no duplicar
    if (document.querySelector('nav[data-app-navbar]')) {
      this.updateNavbarState(activeKey);
      this.updateFooterYear();
      return;
    }

    const user = Session.current();
    const p = this.prefix();

    const links = [
      { key: 'home', label: 'Inicio', href: `${p}index.html` },
      { key: 'servicios', label: 'Servicios', href: `${p}pages/servicios.html` },
      { key: 'clases', label: 'Clases', href: `${p}pages/clases.html` },
      { key: 'precios', label: 'Precios', href: `${p}pages/precios.html` },
      { key: 'galeria', label: 'Galería', href: `${p}pages/galeria.html` },
      { key: 'contacto', label: 'Contacto', href: `${p}pages/contacto.html` }
    ];

    const linksHTML = links.map(l => `
      <a href="${l.href}" data-nav-link="${l.key}" class="px-3 py-2 text-sm font-medium rounded-md transition-colors ${l.key === activeKey
        ? 'text-white bg-green-600'
        : 'text-slate-700 hover:text-green-600 hover:bg-green-50'}">
        ${l.label}
      </a>
    `).join('');

    const mobileLinksHTML = links.map(l => `
      <a href="${l.href}" data-nav-mobile="${l.key}" class="block px-3 py-2 rounded-md text-base font-medium ${l.key === activeKey
        ? 'text-white bg-green-600'
        : 'text-slate-700 hover:bg-green-50'}">
        ${l.label}
      </a>
    `).join('');

    const userMenu = user ? `
      <div class="relative" id="user-menu-wrapper">
        <button id="user-menu-btn" class="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100">
          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white font-bold">
            ${user.name.charAt(0).toUpperCase()}
          </div>
          <span class="hidden md:inline">${user.name.split(' ')[0]}</span>
          ${this.icons.chevronDown}
        </button>
        <div id="user-menu-dropdown" class="hidden absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-200 z-50">
          <div class="px-4 py-3 border-b border-slate-100">
            <p class="text-sm font-semibold text-slate-900">${user.name}</p>
            <p class="text-xs text-slate-500 truncate">${user.email}</p>
          </div>
          <a href="${p}pages/perfil.html" class="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
            ${this.icons.user}<span>Mi perfil</span>
          </a>
          <a href="${p}pages/reserva.html" class="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
            ${this.icons.soccer}<span>Nueva reserva</span>
          </a>
          <button id="nav-logout" class="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 border-t border-slate-100">
            ${this.icons.logout}<span>Cerrar sesión</span>
          </button>
        </div>
      </div>
    ` : `
      <a href="${p}pages/login.html" class="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 hover:text-green-600">
        Ingresar
      </a>
      <a href="${p}pages/registro.html" class="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors">
        Registrarse
      </a>
    `;

    const navbarHTML = `
      <nav data-app-navbar class="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-40 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center gap-8">
              <a href="${p}index.html" class="flex items-center gap-2">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white">
                  ${this.icons.soccer}
                </div>
                <div>
                  <div class="font-black text-lg leading-none text-slate-900">Golazo</div>
                  <div class="text-[10px] uppercase tracking-wider text-green-600 font-bold">Sports Club</div>
                </div>
              </a>
              <div class="hidden lg:flex items-center gap-1">
                ${linksHTML}
              </div>
            </div>
            <div class="flex items-center gap-2">
              <a href="${p}pages/reserva.html" class="hidden md:inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-white bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-md transition-colors">
                Reservar ahora
                ${this.icons.arrowRight}
              </a>
              ${userMenu}
              <button id="mobile-menu-btn" class="lg:hidden p-2 text-slate-600 hover:text-slate-900">
                ${this.icons.menu}
              </button>
            </div>
          </div>
          <div id="mobile-menu" class="hidden lg:hidden pb-4 space-y-1">
            ${mobileLinksHTML}
            <a href="${p}pages/reserva.html" class="block px-3 py-2 mt-2 rounded-md text-base font-semibold text-slate-900 bg-yellow-400">
              Reservar ahora
            </a>
          </div>
        </div>
      </nav>
    `;

    const placeholder = document.getElementById('navbar');
    if (placeholder) placeholder.outerHTML = navbarHTML;
    else document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    this.bindNavbarEvents();
  },

bindNavbarEvents() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }
    const userBtn = document.getElementById('user-menu-btn');
    const dropdown = document.getElementById('user-menu-dropdown');
    if (userBtn && dropdown) {
      userBtn.addEventListener('click', e => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
      });
      document.addEventListener('click', e => {
        if (!document.getElementById('user-menu-wrapper').contains(e.target)) {
          dropdown.classList.add('hidden');
        }
      });
    }
    const logoutBtn = document.getElementById('nav-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', e => {
        e.preventDefault();
        Session.logout();
        UI.toast('Sesión cerrada', 'success');
        setTimeout(() => window.location.href = `${this.prefix()}index.html`, 600);
      });
    }
  },

  /**
   * Actualiza el link activo del navbar existente sin re-renderizarlo.
   * Llamado cuando se vuelve a invocar renderNavbar() sobre un navbar ya montado.
   */
  updateNavbarState(activeKey = 'home') {
    const nav = document.querySelector('nav[data-app-navbar]');
    if (!nav) return;
    nav.querySelectorAll('[data-nav-link]').forEach(a => {
      const key = a.getAttribute('data-nav-link');
      if (key === activeKey) {
        a.className = 'px-3 py-2 text-sm font-medium rounded-md transition-colors text-white bg-green-600';
      } else {
        a.className = 'px-3 py-2 text-sm font-medium rounded-md transition-colors text-slate-700 hover:text-green-600 hover:bg-green-50';
      }
    });
    nav.querySelectorAll('[data-nav-mobile]').forEach(a => {
      const key = a.getAttribute('data-nav-mobile');
      if (key === activeKey) {
        a.className = 'block px-3 py-2 rounded-md text-base font-medium text-white bg-green-600';
      } else {
        a.className = 'block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-green-50';
      }
    });
  },

  /**
   * Actualiza el año del footer sin re-renderizarlo.
   */
  updateFooterYear() {
    const el = document.querySelector('footer[data-app-footer] [data-footer-year]');
    if (el) el.textContent = new Date().getFullYear();
  },

  /* =========================================================
     Footer
     ========================================================= */
  renderFooter() {
    // Idempotent: si ya existe footer, no duplicar
    if (document.querySelector('footer[data-app-footer]')) {
      this.updateFooterYear();
      return;
    }

    const p = this.prefix();
    const b = Catalog.business();
    const year = new Date().getFullYear();
    const footerHTML = `
      <footer data-app-footer class="bg-slate-900 text-slate-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div class="flex items-center gap-2 mb-4">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white">
                  ${this.icons.soccer}
                </div>
                <div>
                  <div class="font-black text-lg text-white">Golazo</div>
                  <div class="text-[10px] uppercase tracking-wider text-green-400 font-bold">Sports Club</div>
                </div>
              </div>
              <p class="text-sm text-slate-400">${b.eslogan}. El mejor complejo deportivo para fútbol 5, 7 y 11 en la ciudad.</p>
            </div>
            <div>
              <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Navegación</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="${p}index.html" class="hover:text-green-400">Inicio</a></li>
                <li><a href="${p}pages/servicios.html" class="hover:text-green-400">Servicios</a></li>
                <li><a href="${p}pages/clases.html" class="hover:text-green-400">Clases</a></li>
                <li><a href="${p}pages/precios.html" class="hover:text-green-400">Precios</a></li>
                <li><a href="${p}pages/galeria.html" class="hover:text-green-400">Galería</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contacto</h4>
              <ul class="space-y-2 text-sm text-slate-400">
                <li class="flex items-start gap-2">${this.icons.pin}<span>${b.direccion}</span></li>
                <li class="flex items-center gap-2">${this.icons.phone}<span>${b.telefono}</span></li>
                <li class="flex items-center gap-2">${this.icons.mail}<span>${b.email}</span></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="${p}pages/terminos.html" class="hover:text-green-400">Términos y condiciones</a></li>
                <li><a href="${p}pages/privacidad.html" class="hover:text-green-400">Políticas de privacidad</a></li>
                <li><a href="${p}pages/contacto.html" class="hover:text-green-400">Contacto</a></li>
              </ul>
              <div class="flex gap-3 mt-4">
                <a href="${b.redes.facebook}" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-green-600 flex items-center justify-center transition-colors" aria-label="Facebook">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="${b.redes.instagram}" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-green-600 flex items-center justify-center transition-colors" aria-label="Instagram">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="${b.redes.tiktok}" class="w-9 h-9 rounded-full bg-slate-800 hover:bg-green-600 flex items-center justify-center transition-colors" aria-label="TikTok">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div class="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
            © <span data-footer-year>${year}</span> ${b.nombre}. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    `;

    const placeholder = document.getElementById('footer');
    if (placeholder) placeholder.outerHTML = footerHTML;
    else document.body.insertAdjacentHTML('beforeend', footerHTML);
  },

  /* =========================================================
     Toasts
     ========================================================= */
  toast(message, type = 'info', duration = 3500) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed top-20 right-4 z-[100] flex flex-col gap-2';
      document.body.appendChild(container);
    }
    const colors = {
      success: 'bg-green-600 border-green-700',
      error: 'bg-red-600 border-red-700',
      info: 'bg-blue-600 border-blue-700',
      warning: 'bg-yellow-500 border-yellow-600 text-slate-900'
    };
    const icons = {
      success: this.icons.check,
      error: this.icons.x,
      info: this.icons.info,
      warning: this.icons.warning
    };
    const toast = document.createElement('div');
    toast.className = `${colors[type] || colors.info} text-white border-l-4 px-4 py-3 rounded-md shadow-2xl min-w-[260px] max-w-sm flex items-center gap-3 animate-slide-in`;
    toast.innerHTML = `
      <div class="flex-shrink-0">${icons[type] || icons.info}</div>
      <p class="text-sm font-medium flex-1">${message}</p>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  /* =========================================================
     Modal
     ========================================================= */
  modal({ title, body, confirmText = 'Confirmar', cancelText = 'Cancelar', onConfirm, danger = false }) {
    return new Promise(resolve => {
      const modalHTML = `
        <div id="modal-backdrop" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] flex items-center justify-center p-4">
          <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-slide-in">
            <div class="p-6">
              <h3 class="text-lg font-bold text-slate-900 mb-2">${title}</h3>
              <div class="text-sm text-slate-600">${body}</div>
            </div>
            <div class="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2 rounded-b-2xl">
              <button data-action="cancel" class="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50">
                ${cancelText}
              </button>
              <button data-action="confirm" class="px-4 py-2 text-sm font-semibold text-white rounded-md ${danger ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}">
                ${confirmText}
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHTML);
      const backdrop = document.getElementById('modal-backdrop');
      backdrop.addEventListener('click', e => {
        if (e.target === backdrop || e.target.dataset.action === 'cancel') {
          backdrop.remove();
          resolve(false);
        }
        if (e.target.dataset.action === 'confirm') {
          if (typeof onConfirm === 'function') {
            const result = onConfirm();
            if (result === false) return;
          }
          backdrop.remove();
          resolve(true);
        }
      });
    });
  },

  /* =========================================================
     Helpers de estado (badges)
     ========================================================= */
  statusBadge(status) {
    const map = {
      pendiente: { label: 'Pendiente de pago', cls: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
      confirmada: { label: 'Confirmada', cls: 'bg-green-100 text-green-800 border-green-300' },
      en_curso: { label: 'En curso', cls: 'bg-blue-100 text-blue-800 border-blue-300' },
      completada: { label: 'Completada', cls: 'bg-slate-100 text-slate-700 border-slate-300' },
      cancelada: { label: 'Cancelada', cls: 'bg-red-100 text-red-800 border-red-300' }
    };
    const item = map[status] || { label: status, cls: 'bg-slate-100 text-slate-700' };
    return `<span class="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full border ${item.cls}">${item.label}</span>`;
  },

  paymentStatusBadge(status) {
    const map = {
      aprobado: { label: 'Aprobado', cls: 'bg-green-100 text-green-800' },
      rechazado: { label: 'Rechazado', cls: 'bg-red-100 text-red-800' }
    };
    const item = map[status] || { label: status, cls: 'bg-slate-100 text-slate-700' };
    return `<span class="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full ${item.cls}">${item.label}</span>`;
  },

  /* =========================================================
     Carga de header común (navbar + footer)
     ========================================================= */
  mountLayout(activeKey) {
    this.renderNavbar(activeKey);
    this.renderFooter();
  },

  /* =========================================================
     SVG para canchas (mock ilustraciones)
     ========================================================= */
  courtImage(cancha, opts = {}) {
    const className = opts.className || 'w-full h-full object-cover';
    const w = opts.w || 800;
    const h = opts.h || 500;
    const isSintetica = cancha.superficie.toLowerCase().includes('sintét');
    const greenMain = isSintetica ? '#16a34a' : '#22c55e';
    const greenDark = isSintetica ? '#14532d' : '#15803d';
    const lines = isSintetica ? '#f8fafc' : '#f1f5f9';
    const svg = `
      <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" class="${className}">
        <defs>
          <linearGradient id="grad-${cancha.id}" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="${greenMain}"/>
            <stop offset="100%" stop-color="${greenDark}"/>
          </linearGradient>
          <pattern id="lines-${cancha.id}" x="0" y="0" width="${isSintetica ? 30 : 60}" height="${isSintetica ? 30 : 60}" patternUnits="userSpaceOnUse">
            <rect width="${isSintetica ? 30 : 60}" height="${isSintetica ? 30 : 60}" fill="url(#grad-${cancha.id})"/>
            <path d="M0 ${isSintetica ? 15 : 30}L${isSintetica ? 30 : 60} ${isSintetica ? 15 : 30}" stroke="${greenDark}" stroke-width="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#lines-${cancha.id})"/>
        <g stroke="${lines}" stroke-width="3" fill="none">
          <rect x="${w*0.08}" y="${h*0.1}" width="${w*0.84}" height="${h*0.8}"/>
          <line x1="${w*0.5}" y1="${h*0.1}" x2="${w*0.5}" y2="${h*0.9}"/>
          <circle cx="${w*0.5}" cy="${h*0.5}" r="${Math.min(w,h)*0.12}"/>
          <rect x="${w*0.08}" y="${h*0.35}" width="${w*0.13}" height="${h*0.3}"/>
          <rect x="${w*0.79}" y="${h*0.35}" width="${w*0.13}" height="${h*0.3}"/>
          <rect x="${w*0.08}" y="${h*0.4}" width="${w*0.05}" height="${h*0.2}"/>
          <rect x="${w*0.87}" y="${h*0.4}" width="${w*0.05}" height="${h*0.2}"/>
        </g>
        <circle cx="${w*0.5}" cy="${h*0.5}" r="${Math.min(w,h)*0.04}" fill="${lines}"/>
        <text x="${w/2}" y="${h*0.95}" text-anchor="middle" fill="white" font-size="14" opacity="0.6" font-family="monospace">
          ${cancha.nombre}
        </text>
      </svg>
    `;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  },

  galleryImage(item, opts = {}) {
    const w = opts.w || 600;
    const h = opts.h || 400;
    const palette = {
      torneos: ['#16a34a', '#facc15'],
      canchas: ['#0ea5e9', '#22c55e'],
      clases: ['#8b5cf6', '#ec4899'],
      eventos: ['#f97316', '#ef4444'],
      instalaciones: ['#475569', '#94a3b8']
    }[item.categoria] || ['#16a34a', '#0ea5e9'];
    const svg = `
      <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" class="${opts.className || 'w-full h-full'}">
        <defs>
          <linearGradient id="gal-${item.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${palette[0]}"/>
            <stop offset="100%" stop-color="${palette[1]}"/>
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#gal-${item.id})"/>
        <g opacity="0.3" stroke="white" stroke-width="2" fill="none">
          <rect x="${w*0.1}" y="${h*0.15}" width="${w*0.8}" height="${h*0.7}"/>
          <line x1="${w*0.5}" y1="${h*0.15}" x2="${w*0.5}" y2="${h*0.85}"/>
          <circle cx="${w*0.5}" cy="${h*0.5}" r="${Math.min(w,h)*0.12}"/>
        </g>
        <text x="${w/2}" y="${h*0.55}" text-anchor="middle" fill="white" font-size="20" font-weight="bold" opacity="0.9">
          ${item.titulo}
        </text>
      </svg>
    `;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }
};