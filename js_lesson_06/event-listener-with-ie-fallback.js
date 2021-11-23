var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function chechUsername(minlength){
    if (elUsername.value.length){
        elMsg.innerHTML = 'Username must be' + minlength + ' characters or more';
    } else{
        elMsg.innerHTML='';
    }
}

elUsername.addEventListener('blur', function (){
    checkUsername(5);
}, false);
} else {
    elUsername.attachEvent('onblur', function (){
        checkUsername(5);
    });
}