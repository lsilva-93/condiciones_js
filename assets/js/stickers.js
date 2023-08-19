
function sumSticker() 
{
        resultStickert = document.getElementById('stickertResult');
        let InputSt1 = document.getElementById('inputStickert1').value;
        let InputSt2 = document.getElementById('inputStickert2').value;
        let InputSt3 = document.getElementById('inputStickert3').value;

        resultado = Number(InputSt1) + Number(InputSt2) + Number(InputSt3);

        if (resultado <= 10 ) {
            resultStickert.innerHTML = `Llevas ${resultado} stickers`;
        }
        else {
            resultStickert.innerHTML = "Llevas demasiados stickers";
        }
        
}