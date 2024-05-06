function loginWithGithub() {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=604d5ee6150493f33476&scope=user';
    
}

const urlParams =  new URLSearchParams(Window.location.search) ;
const error = urlParams.get('error');
if (error == 'acess_denied') {
    alert('Acesso negado');
    window.location.href = 'index.html';
}