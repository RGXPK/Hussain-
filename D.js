// تحديث النص بناءً على الوقت
function updateGreeting() {
  const greetingElement = document.getElementById('greeting');
  const hour = new Date().getHours();

  if (hour < 12) {
    greetingElement.textContent = 'Good Morning! Welcome to my Social Media Links!';
  } else if (hour < 18) {
    greetingElement.textContent = 'Good Afternoon! Welcome to my Social Media Links!';
  } else {
    greetingElement.textContent = 'Good Evening! Welcome to my Social Media Links!';
  }
}

// تبديل الوضع (فاتح/داكن)
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// تنفيذ الوظائف عند تحميل الصفحة
window.onload = function() {
  updateGreeting();

  const themeButton = document.getElementById('theme-toggle');
  themeButton.addEventListener('click', toggleTheme);
};