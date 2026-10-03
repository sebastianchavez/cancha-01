/**
 * auth.js
 * Lógica de autenticación: login, registro, recuperación.
 */

const Auth = {
  /* =========================================================
     Validaciones
     ========================================================= */
  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },
  validatePhone(phone) {
    return /^[9]\d{8}$/.test(String(phone).replace(/\s/g, ''));
  },
  validateDNI(dni) {
    return /^\d{8}$/.test(String(dni).trim());
  },
  validatePassword(pwd) {
    return String(pwd).length >= 6;
  },
  validateName(name) {
    return String(name).trim().length >= 3;
  },

  /* =========================================================
     Registro
     ========================================================= */
  register({ name, email, phone, dni, password, confirm }) {
    if (!this.validateName(name)) throw new Error('El nombre debe tener al menos 3 caracteres.');
    if (!this.validateEmail(email)) throw new Error('Correo electrónico inválido.');
    if (!this.validatePhone(phone)) throw new Error('Teléfono inválido (debe empezar con 9 y tener 9 dígitos).');
    if (dni && !this.validateDNI(dni)) throw new Error('DNI inválido (debe tener 8 dígitos).');
    if (!this.validatePassword(password)) throw new Error('La contraseña debe tener al menos 6 caracteres.');
    if (password !== confirm) throw new Error('Las contraseñas no coinciden.');

    const newUser = Users.create({ name, email, phone, dni, password });
    Session.login(email, password);
    return newUser;
  },

  /* =========================================================
     Login
     ========================================================= */
  login(email, password) {
    if (!this.validateEmail(email)) throw new Error('Correo inválido.');
    if (!password) throw new Error('Ingrese su contraseña.');
    return Session.login(email, password);
  },

  /* =========================================================
     Recuperación (simulada)
     ========================================================= */
  recover(email) {
    if (!this.validateEmail(email)) throw new Error('Correo inválido.');
    const user = Users.findByEmail(email);
    if (!user) {
      // Por seguridad no se filtra si el correo existe
      return { sent: true };
    }
    // Genera token simulado
    const token = uid('token');
    const requests = Store.get('canchas_recover', []);
    requests.push({ email, token, expiresAt: Date.now() + 3600000 });
    Store.set('canchas_recover', requests);
    return { sent: true, token };
  },

  /* =========================================================
     Reset password (simulado)
     ========================================================= */
  resetPassword(email, newPassword) {
    if (!this.validatePassword(newPassword)) throw new Error('La contraseña debe tener al menos 6 caracteres.');
    const user = Users.findByEmail(email);
    if (!user) throw new Error('Usuario no encontrado.');
    Users.update(user.id, { password: newPassword });
    Store.set('canchas_recover', []);
    return true;
  },

  /* =========================================================
     Cambiar contraseña (usuario logueado)
     ========================================================= */
  changePassword(currentPwd, newPwd, confirmPwd) {
    const user = Session.current();
    if (!user) throw new Error('No hay sesión activa.');
    if (user.password !== currentPwd) throw new Error('La contraseña actual es incorrecta.');
    if (!this.validatePassword(newPwd)) throw new Error('La nueva contraseña debe tener al menos 6 caracteres.');
    if (newPwd !== confirmPwd) throw new Error('Las contraseñas no coinciden.');
    Users.update(user.id, { password: newPwd });
    return true;
  },

  /* =========================================================
     Actualizar perfil
     ========================================================= */
  updateProfile({ name, phone, dni }) {
    const user = Session.current();
    if (!user) throw new Error('No hay sesión activa.');
    if (!this.validateName(name)) throw new Error('El nombre debe tener al menos 3 caracteres.');
    if (!this.validatePhone(phone)) throw new Error('Teléfono inválido.');
    if (dni && !this.validateDNI(dni)) throw new Error('DNI inválido.');
    return Users.update(user.id, { name, phone, dni });
  }
};