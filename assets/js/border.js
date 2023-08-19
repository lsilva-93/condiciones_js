
function borderImg()
{
    let imagen = document.getElementById('imgborder');

    if (imagen.style.border == false) {
        imagen.style.border = "2px solid red";
    }
    else {
        imagen.style.border = "";
    }
    
}