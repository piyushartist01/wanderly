// ===== WANDERLY CUSTOM TRIP BUILDER LOGIC (trip-builder.html) =====

const formData = {};

function selectOption(el, category, value) {
  const siblings = el.parentElement.children;
  for (let i = 0; i < siblings.length; i++) {
    siblings[i].classList.remove('selected');
  }
  el.classList.add('selected');
  formData[category] = value;
}

function nextStep(current) {
  if (current === 1 && !formData.who) return showToast('Please select who is traveling', 'error');
  if (current === 2 && !formData.duration) return showToast('Please select a duration', 'error');
  if (current === 3 && !formData.budget) return showToast('Please select a budget style', 'error');

  const curStepEl = document.getElementById('step-' + current);
  const nextStepEl = document.getElementById('step-' + (current + 1));
  const nextDotEl = document.getElementById('dot-' + (current + 1));

  if (curStepEl) curStepEl.classList.remove('active');
  if (nextStepEl) nextStepEl.classList.add('active');
  if (nextDotEl) nextDotEl.classList.add('active');
}

function prevStep(current) {
  const curStepEl = document.getElementById('step-' + current);
  const prevStepEl = document.getElementById('step-' + (current - 1));
  const curDotEl = document.getElementById('dot-' + current);

  if (curStepEl) curStepEl.classList.remove('active');
  if (prevStepEl) prevStepEl.classList.add('active');
  if (curDotEl) curDotEl.classList.remove('active');
}

function submitForm() {
  const step4 = document.getElementById('step-4');
  const stepSuccess = document.getElementById('step-success');
  const progressBar = document.querySelector('.progress-bar');

  if (step4) step4.classList.remove('active');
  if (stepSuccess) stepSuccess.classList.add('active');
  if (progressBar) progressBar.style.display = 'none';
  window.scrollTo(0, 0);
}

// Make accessible to inline onclick and onsubmit handlers
window.selectOption = selectOption;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.submitForm = submitForm;

document.addEventListener('DOMContentLoaded', () => {
  initPage('trip-builder');
});
