document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var userPredefinido = 'nico';
    var passPredefinida = 'c123';

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var messageDiv = document.getElementById('message');
    
    if (username == userPredefinido && password == passPredefinida) {        
        messageDiv.innerHTML = '<h3>Bienvenido, ' + username + '!</h3>';

        document.getElementById('loginForm').style.display = 'none';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.innerHTML = '<p>Usuario o contraseña incorrectos</p>';
        messageDiv.style.color = 'red';
    }
});

function themeB(){
    var textT = document.getElementById('theme');
    var bodyBGC = document.querySelector('body');
    var tarjC = document.querySelector('.login-container')
    var textC = document.querySelector('body');
    if (textT.innerHTML == "Dark"){
        textT.textContent = "White";
        
        bodyBGC.style.backgroundColor = "black";
        tarjC.style.boxShadow = '0px 0px 10px rgb(255, 255, 255, 1)';
        tarjC.style.backgroundColor = "black";
        textC.style.color = "white";
    }
    else{
        textT.innerHTML = "Dark";
        bodyBGC.style.backgroundColor = "white";
        tarjC.style.boxShadow = '0px 0px 10px rgb(0, 0, 0, 1)';
        tarjC.style.backgroundColor = "white";
        textC.style.color = "black";
    }
};