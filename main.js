document.getElementById('password').addEventListener('input', function() {
  const password = this.value;
  const strengthValue = document.getElementById('strength-value');
  const strengthBar = document.getElementById('strength-bar');
  const strengthBarFill = document.createElement('div');
  strengthBar.innerHTML = '';
  strengthBar.appendChild(strengthBarFill);

  let strength = getPasswordStrength(password);
  strengthValue.textContent = strength.text;
  strengthBar.className = strength.class;
  strengthBarFill.style.width = strength.width;
});

function getPasswordStrength(password) {
  let strength = { text: 'Weak', class: 'weak', width: '25%' };

  if (password.length > 8) {
      strength = { text: 'Medium', class: 'medium', width: '50%' };
  }
  if (password.length > 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      strength = { text: 'Strong', class: 'strong', width: '75%' };
  }
  if (password.length > 12 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
      strength = { text: 'Very Strong', class: 'very-strong', width: '100%' };
  }

  return strength;
}
