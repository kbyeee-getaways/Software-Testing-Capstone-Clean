const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setError(fieldId, errorId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);
  field.classList.add('error');
  error.textContent = message;
  return false;
}

function clearError(fieldId, errorId) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);
  field.classList.remove('error');
  error.textContent = '';
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    let valid = true;

    // Clear previous errors
    ['name', 'email', 'subject', 'message'].forEach(id => clearError(id, id + '-error'));

    if (!name) {
      setError('name', 'name-error', 'Please enter your full name.');
      valid = false;
    }

    if (!email) {
      setError('email', 'email-error', 'Please enter your email address.');
      valid = false;
    } else if (!validateEmail(email)) {
      setError('email', 'email-error', 'Please enter a valid email address.');
      valid = false;
    }

    if (!subject) {
      setError('subject', 'subject-error', 'Please select a subject.');
      valid = false;
    }

    if (!message) {
      setError('message', 'message-error', 'Please write a message before submitting.');
      valid = false;
    }

    if (valid) {
      form.style.display = 'none';
      successMsg.style.display = 'block';
    }
  });
}
