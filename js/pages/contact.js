// ===== WANDERLY CONTACT PAGE LOGIC (contact.html) =====

function handleContactSubmit(e) {
  e.preventDefault();
  showToast('Message sent! We will get back to you soon.', 'success');
  e.target.reset();
}

window.handleContactSubmit = handleContactSubmit;

document.addEventListener('DOMContentLoaded', () => {
  initPage('contact');
});
