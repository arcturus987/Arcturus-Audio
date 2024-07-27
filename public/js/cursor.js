document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  const form = document.querySelector('.modal .form');
  const cursorFollower = document.querySelector('.cursor-follower');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursorFollower.style.left = `${e.clientX}px`;
    cursorFollower.style.top = `${e.clientY}px`;
  });

  // Handle link hover interaction
  document.querySelectorAll('a, button, .hover-target').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorFollower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorFollower.classList.remove('hover');
    });
  });

  // Handle checkbox switch hover interaction
  document.querySelectorAll('.switch, .switch input[type="checkbox"], .switch .slider').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('checkbox-hover');
      cursorFollower.classList.add('checkbox-hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('checkbox-hover');
      cursorFollower.classList.remove('checkbox-hover');
    });
  });

  form.addEventListener('mouseenter', () => {
    cursorFollower.style.borderColor = '#000';
  });

  form.addEventListener('mouseleave', () => {
    cursorFollower.style.borderColor = ''; // Reset to default
  });
});
