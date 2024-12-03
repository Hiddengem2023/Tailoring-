function hide(button) {
  button.nextElementSibling.classList.toggle('show');
}
//menu style
let menu = document.getElementById('nav-toggler');
let main = document.getElementById('navigation');
let exit = document.getElementById('exit');
let logo = document.getElementById('logo-image');
menu.addEventListener('click',function () {
  main.style.display = 'block';
  menu.style.display='none';
  logo.style.display='none';
});
exit.addEventListener('click',function () {
  main.style.display= 'none';
  menu.style.display ='flex';
  logo.style.display='block';
})