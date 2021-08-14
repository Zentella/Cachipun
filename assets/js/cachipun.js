var i = 0
var veces = parseInt(prompt("cuantas veces jugará al cachipún? "))
do {
    i++
    var mano = prompt("escriba Piedra, Papel o Tijera")
    var pc = parseInt(Math.random() * (4 - 1) + 1)
    switch (pc) {
        case 1:
            pc_mano = "Piedra"
            break
        case 2:
            pc_mano = "Papel"
            break
        case 3:
            pc_mano = "Tijera"
            break
        default:
            alert(" falla ")
            break
    }
    alert("máquina elije " + pc_mano)
    if (mano == pc_mano){
        alert("juego nº " + i + " empate")
    }
    if (mano != pc_mano){
        var resp = gana(mano, pc_mano)
        alert("juego nº " + i + " gana" + resp)
    }
}
while (i < veces)

function gana(a, b){
    if (mano == "Piedra" && pc_mano == "Tijera" || mano == "Tijera" && pc_mano == "Papel" || mano == "Papel" && pc_mano == "Piedra") {
        ganador = " usuario  ¡Felicidades!"
        return ganador
    }
    if (mano == "Piedra" && pc_mano == "Papel" || mano == "Tijera" && pc_mano == "Piedra" || mano == "Papel" && pc_mano == "Tijera") {
        ganador = " máquina"
        return ganador
    }
}