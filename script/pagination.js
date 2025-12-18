const pagination = document.querySelector('.pagination');
const pagesContainer = pagination.querySelector('.pages');
const prevBtn = pagination.querySelector('.prev');
const nextBtn = pagination.querySelector('.next');

const totalPages = +pagination.dataset.total;
let currentPage = 1;

function renderPagination() {
    pagesContainer.innerHTML = '';

    const isMobile = window.innerWidth < 690;
    const maxVisible = isMobile ? 2 : 4;

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (start > 1) {
        addPage(1);
        if (start > 2) addDots();
    }

    for (let i = start; i <= end; i++) {
        addPage(i);
    }

    if (end < totalPages) {
        if (end < totalPages - 1) addDots();
        addPage(totalPages);
    }

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

function addPage(page) {
    const btn = document.createElement('button');
    btn.textContent = page;
    btn.className = 'grey-btn';
    if (page === currentPage) btn.classList.add('active');

    btn.onclick = () => {
        currentPage = page;
        renderPagination();
    };

    pagesContainer.appendChild(btn);
}

function addDots() {
    const dots = document.createElement('button');
    dots.textContent = '...';
    dots.className = 'dots';
    pagesContainer.appendChild(dots);
}

prevBtn.onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        renderPagination();
    }
};

nextBtn.onclick = () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderPagination();
    }
};

window.addEventListener('resize', renderPagination);

renderPagination();
