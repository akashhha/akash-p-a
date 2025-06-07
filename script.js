window.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Akash's portfolio site!");
  // Example: Add animation class to all skill elements after page load
  document.querySelectorAll('.skill').forEach(skill => {
    skill.style.opacity = '1';
    skill.style.transform = 'translateY(0)';
  });
});
