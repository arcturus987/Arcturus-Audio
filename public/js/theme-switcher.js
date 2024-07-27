document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('.fixed-switch-container input[type="checkbox"]');
  var body = document.body;

  // local storage check
  var isBackgroundDark = localStorage.getItem('backgroundDark');

  // default to dark mode
  if (isBackgroundDark === null) {
    isBackgroundDark = 'true';
    localStorage.setItem('backgroundDark', 'true');
  }

  checkbox.checked = isBackgroundDark === 'true';

  // Set the initial background color based on the stored state
  if (isBackgroundDark === 'true') {
    body.style.backgroundColor = '#1e1e1e';
    document.documentElement.style.setProperty('--cursor-color', '#00bbff');
  } else {
    body.style.backgroundColor = '#00bbff';
    document.documentElement.style.setProperty('--cursor-color', '#1e1e1e');
  }

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      body.style.backgroundColor = '#1e1e1e';
      document.documentElement.style.setProperty('--cursor-color', '#00bbff');
      localStorage.setItem('backgroundDark', 'true');
    } else {
      body.style.backgroundColor = '#00bbff';
      document.documentElement.style.setProperty('--cursor-color', '#1e1e1e');
      localStorage.setItem('backgroundDark', 'false');
    }
  });
});