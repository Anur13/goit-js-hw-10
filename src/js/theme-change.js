const toggleInputRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('Theme') === null) {
  localStorage.setItem('Theme', Theme.LIGHT);
}
if (localStorage.getItem('Theme') === Theme.DARK) {
  toggleInputRef.checked = true;
}
bodyRef.classList.add(localStorage.getItem('Theme'));

toggleInputRef.addEventListener('click', changeTheme);

function changeTheme(event) {
  if (localStorage.getItem('Theme') === Theme.LIGHT) {
    localStorage.removeItem('Theme');
    localStorage.setItem('Theme', Theme.DARK);

    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
  } else if (localStorage.getItem('Theme') === Theme.DARK) {
    localStorage.removeItem('Theme');
    localStorage.setItem('Theme', Theme.LIGHT);

    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
  }
}
