const menu = document.querySelectorAll('.dropdown__title');
const arrowUp = document.querySelector('.arrow-up');
const arrowDown = document.querySelector('.arrow-down');

let currentDropdown;

menu.forEach((item) => {
  currentDropdown = item;
  currentDropdown.addEventListener('click', () => {
    item.classList.toggle('active');
    // return;
  });
});

document.addEventListener('click', (e) => {
  if (!menu) {
  }
});

// menu.forEach((dropdown) => {
//   if (dropdown === currentDropdown) return;
//   dropdown.classList.remove('active');
// });
