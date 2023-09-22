const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
    sidebar.classList.add('sideactive')
overlay.style.width = '100%';
overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('sideactive')
overlay.style.width = '0';
overlay.style.display = 'none';
});


