const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const aside = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', () => {
    aside.classList.toggle("show-sidebar");
})

closeBtn.addEventListener('click', () => {
    aside.classList.remove("show-sidebar");
}) 