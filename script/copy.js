function showCopyToast() {
    const toast = document.getElementById('copy-toast');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

document.querySelectorAll('.article-copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const text = e.currentTarget.innerText.trim();
        navigator.clipboard.writeText(text).then(() => {
            showCopyToast();
        });
    });
})