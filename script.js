    function toggleNav() {
        document.getElementById('nav').classList.toggle('open');
    }
    document.querySelectorAll('nav a').forEach(a => {
        a.addEventListener('click', () => {
            document.getElementById('nav').classList.remove('open');
        });
    });

    const form = document.getElementById('contact-form');
    const btn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        btnText.textContent = 'Envoi en cours...';
        btnIcon.style.display = 'none';
        btn.disabled = true;
        btn.style.opacity = '0.7';
        successMsg.style.display = 'none';
        errorMsg.style.display = 'none';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                successMsg.style.display = 'block';
                form.reset();
                btnText.textContent = 'Message envoyé !';
                btnIcon.style.display = 'inline';
            } else {
                throw new Error();
            }
        } catch {
            errorMsg.style.display = 'block';
            btnText.textContent = 'Envoyer le message';
            btnIcon.style.display = 'inline';
            btn.disabled = false;
            btn.style.opacity = '1';
        }
    });

    // theme de mon portfolio
const themeBtn = document.querySelector('#theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    themeBtn.textContent = isLight ? '☀️' : '🌙';
});