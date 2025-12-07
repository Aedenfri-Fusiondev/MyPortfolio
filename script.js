function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function openTab(tabId) {
  // hide all
  document.querySelectorAll('.icon-grid').forEach(div => div.classList.remove('show'));
  document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));

  // show selected
  document.getElementById(tabId).classList.add('show');
  event.target.classList.add('active');
}
