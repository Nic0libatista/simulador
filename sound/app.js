/*
* simulador dos operadores lógicos
* @autor Nicoli Santos
*/

 let recive  //armazena o parâmetro/valor recebido no html
 // as variaveis abaixo é usada para identificar se o interropitor está ligado (true) ou desligado (false)
 let sw1 = false
 let sw2 = false

let broken = false 
function sw(recive) {
    console.log(recive)

    // 
    if (recive === 1 && sw1 === false){
         document.getElementById('sw1').src = "img/swon.png"
         sw1 = true
    } else if (recive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw1 = false 
    } else if (recive === 2 && sw2 === false){
            document.getElementById('sw2').src = "img/swon.png"
            sw2 = true
    } else if (recive === 2 && sw2 === true) {
           document.getElementById('sw2').src = "img/swoff.png"
           sw2 = false }





// Logica para quebrar a lampâda
    if (recive === 3){
        let som = new Audio()
        som.src = "glassbreaking.wav"
        som.play()
        //trocar a imagem 
        document.getElementById('lamp').src = "img/broken.jpg"
        broken = true
    }

// Lógica para o operador and
    if (broken === false ) {
        if (sw1 == true && sw2 == true) {
         document.getElementById('lamp').src = "img/on.jpg"
        } else {
        document.getElementById('lamp').src = "img/off.jpg"
    }
}

if (path === "/or.html" && broken !== true) {
    if (sw1 == true || sw2 == true) {
     document.getElementById('lamp').src = "img/on.jpg"
    } 
    else {
    document.getElementById('lamp').src = "img/off.jpg"
    } 
}


    //lógica para o operador NOT
    if (path === "/not.html" && broken !== true) {
        if (!sw1) {
            document.getElementById('lamp').src = "img/on.jpg"
        } else {
            document.getElementById('lamp').src = "img/off.jpg"
        }
    } 
}