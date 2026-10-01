let currentTab = 'login';

function setAuthTab(tab) {
  currentTab = tab;
  const tabLogin = document.getElementById('tab-login');
  const tabSignup = document.getElementById('tab-signup');
  const groupName = document.getElementById('group-name');
  const submitText = document.getElementById('submit-text');

  if (tabLogin) tabLogin.classList.toggle('active', tab === 'login');
  if (tabSignup) tabSignup.classList.toggle('active', tab === 'signup');
  if (groupName) groupName.style.display = tab === 'signup' ? 'block' : 'none';
  if (submitText) submitText.textContent = tab === 'login' ? 'Sign In & Enter Wanderly' : 'Create Account & Enter Wanderly';
}

const switchTab = setAuthTab;
window.setAuthTab = setAuthTab;
window.switchTab = setAuthTab;

function checkExistingSession() {
  const user = typeof getAuthUser === 'function' ? getAuthUser() : null;
  const sessionBox = document.getElementById('active-session-box');
  const formWrapper = document.getElementById('auth-form-wrapper');
  const sessionName = document.getElementById('session-name');
  const sessionEmail = document.getElementById('session-email');
  const sessionAvatar = document.getElementById('session-avatar');

  if (user) {
    if (sessionBox) sessionBox.style.display = 'block';
    if (formWrapper) formWrapper.style.display = 'none';
    if (sessionName) sessionName.textContent = `Logged in as ${user.name}`;
    if (sessionEmail) sessionEmail.textContent = user.email;
    if (sessionAvatar) sessionAvatar.textContent = user.avatar || user.name.charAt(0);
  } else {
    if (sessionBox) sessionBox.style.display = 'none';
    if (formWrapper) formWrapper.style.display = 'block';
  }
}

function handleLogout() {
  localStorage.removeItem('wanderly_user');
  if (typeof showToast === 'function') {
    showToast('Session cleared. Sign in to your account.', 'info');
  }
  checkExistingSession();
}

function quickDemoLogin() {
  const demoUser = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    avatar: 'JD',
    role: 'Explorer',
    since: 'January 2026'
  };
  if (typeof setAuthUser === 'function') {
    setAuthUser(demoUser);
  }
  if (typeof showToast === 'function') {
    showToast('Signed in successfully! Entering Wanderly...', 'success');
  }
  setTimeout(() => {
    window.location.href = 'index.html?login_success=1';
  }, 500);
}

function socialDemoLogin(provider) {
  const demoUser = {
    name: 'Alex Rivera',
    email: `alex.${provider.toLowerCase()}@wanderly.com`,
    avatar: 'AR',
    role: 'Traveller',
    since: 'March 2026'
  };
  if (typeof setAuthUser === 'function') {
    setAuthUser(demoUser);
  }
  if (typeof showToast === 'function') {
    showToast(`Connected with ${provider}! Welcome, Alex.`, 'success');
  }
  setTimeout(() => {
    window.location.href = 'index.html?login_success=1';
  }, 500);
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('user-email');
  const nameInput = document.getElementById('user-name');
  if (!emailInput) return;

  const email = emailInput.value.trim();
  const name = (currentTab === 'signup' && nameInput && nameInput.value.trim()) ? nameInput.value.trim() : (email.split('@')[0] || 'Adventurer');
  const initials = name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() || 'AD';

  const user = {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    email: email,
    avatar: initials,
    role: 'Adventurer',
    since: 'October 2026'
  };

  if (typeof setAuthUser === 'function') {
    setAuthUser(user);
  }
  
  const submitBtn = document.getElementById('btn-submit');
  if (submitBtn) {
    submitBtn.innerHTML = `<span>Preparing your journal...</span>`;
    submitBtn.disabled = true;
  }

  if (typeof showToast === 'function') {
    showToast(`Welcome, ${user.name}! Redirecting to main site...`, 'success');
  }

  setTimeout(() => {
    window.location.href = 'index.html?login_success=1';
  }, 500);
}

// Make accessible to inline onclick and onsubmit handlers
window.switchTab = switchTab;
window.checkExistingSession = checkExistingSession;
window.handleLogout = handleLogout;
window.quickDemoLogin = quickDemoLogin;
window.socialDemoLogin = socialDemoLogin;
window.handleAuthSubmit = handleAuthSubmit;

document.addEventListener('DOMContentLoaded', () => {
  if (typeof initTheme === 'function') {
    initTheme();
    updateThemeIcon();
  }
  checkExistingSession();
});
