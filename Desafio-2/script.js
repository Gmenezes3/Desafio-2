const nomeDoHeroi = "Menezes";
let xpDoHeroi = 20.000;
let patenteHeroi;

switch (true) {
    case xpDoHeroi <= 1.000:
        patenteHeroi = "Ferro";
        break;
    case xpDoHeroi >= 1.001 && xpDoHeroi <= 2.000:
        patenteHeroi = "Bronze";
        break;
    case xpDoHeroi >= 2.001 && xpDoHeroi <= 5.000:
        patenteHeroi = "Prata";
        break;
    case xpDoHeroi >= 6.001 && xpDoHeroi <= 7.000:
        patenteHeroi = "Ouro";
        break;
    case xpDoHeroi >= 7.001 && xpDoHeroi <= 8.000:
        patenteHeroi = "Platina";
        break;
    case xpDoHeroi >= 8.001 && xpDoHeroi <= 9.000:
        patenteHeroi = "Ascendente";
        break;
    case xpDoHeroi >= 9.001 && xpDoHeroi <= 10.000:
        patenteHeroi = "Imortal";
        break;
    case xpDoHeroi >= 10.001:
        patenteHeroi = "Radiante";
        break;
    default:
        patenteHeroi = "Impossivel definir pattente!";
}

console.log(`O Herói ${nomeDoHeroi} está no nível ${patenteHeroi}!`);