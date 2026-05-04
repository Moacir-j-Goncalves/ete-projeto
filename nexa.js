function togglePass() {
    const senhaInput = document.getElementById('senha');
    senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password';
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('usuario').value;
    alert('Tentativa de login para: ' + user);
});