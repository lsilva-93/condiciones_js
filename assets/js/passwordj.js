function vpasword () {

    resultPassword = document.getElementById('passwordResult');
    let selectOne = document.getElementById('one').value;
    let selectTwo = document.getElementById('two').value;
    let selectThree = document.getElementById('three').value;

    resultadopass = selectOne + selectTwo + selectThree;
    resultPassword.innerHTML = `tu clave es ${resultadopass} `;

    switch (resultadopass) {
        case '911':
            resultPassword.innerHTML = "password 1 correcto";
            break;
        case '714':
            resultPassword.innerHTML = "password 2 correcto";
            break;
        default:
            resultPassword.innerHTML = "password incorrecto";
            break;
    }
}