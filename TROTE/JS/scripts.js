function Calcular(){
    let soma = 0, acaoSocial, homenagem, leite, kit, equipe, suplemento, sangue = 0

    // recupera o valor da ação social digitalizada
     acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)

    homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)
    // Recupera a quantidade de homenagem

    leite = document.getElementById("leite").value
    soma = soma + (2 * Number(leite))
    // recuperaa quantidade de leite

    kit = Number(document.getElementById("kit").value)
    //recupera a quantidade de kit
    equipe = document.getElementById("equipe").value

    suplemento = document.getElementById("suplemento").value

    sangue = document.getElementById("sangue").value

    let pontoskitSupl = 0
    if (equipe == "Laranja"){
        if ((kit)>= 97 && suplemento >= 49) {
            pontoskitSupl = 5000 + ((kit - 97)*30) + ((suplemento - 49)* 15)
        }
        else if(kit >= 78 && suplemento >= 39){
            pontoskitSupl = 4000 + ((kit - 78)* 30) + ((suplemento - 39)* 15)
            }
        else if(kit >= 49 && suplemento >= 25) {
                pontoskitSupl = 2500 + ((kit - 49)* 30) + ((suplemento - 25)* 15)
            }
        else if(kit>= 19 && suplemento >= 10) {
                pontoskitSupl = 1000 + ((kit - 19)* 30) + ((suplemento- 19)* 15)
            }
    }
    
    if (equipe == "Preta"){
        if ((kit)>= 103 && suplemento >= 52){
            pontoskitSupl = 5000 + ((kit - 103)* 30) + ((suplemento - 52)* 15)
        }
        else if(kit >= 82 && suplemento >= 42){
            pontoskitSupl = 4000 + ((kit - 82)*30) + ((suplemento - 42)* 15)
        }
        else if(kit >= 52 && suplemento >= 26){
            pontoskitSupl = 2500 + ((kit - 52)* 30) + ((suplemento - 26)* 15)
        }
        else if(kit >= 21 && suplemento >= 10){
            pontoskitSupl = 1000 + ((kit - 21)* 30) + ((suplemento - 10)* 15)
        }
    }

    if (equipe == "Roxa"){
        if((kit)>= 102 && suplemento >= 51){
            pontoskitSupl = 5000 + ((kit - 102)*30) + ((suplemento - 51)* 15)
        }
        else if(kit >= 82 && suplemento >= 42){
            pontoskitSupl = 4000 + ((kit - 82)* 30) + ((suplemento - 42)* 15)
        }
        else if(kit >= 51 && suplemento >= 26){
            pontoskitSupl = 2500 + ((kit - 51)*30) + ((suplemento - 21)* 15)        
        }
        else if(kit >= 20 && suplemento >= 10){
            pontoskitSupl + 1000 + ((kit - 20)* 30) + ((suplemento - 10)*15)
        }
    }

    if (equipe == "Verde"){
        if((kit)>= 88 && suplemento >= 44){
            pontoskitSupl = 5000 + ((kit - 88)*30) + ((suplemento - 44)* 15)
        }
        else if(kit >= 70 && suplemento >= 35){
            pontoskitSupl = 4000 + ((kit - 70)* 30) + ((suplemento - 35)* 15)
        }
        else if(kit >= 44 && suplemento >= 22){
            pontoskitSupl = 2500 + ((kit - 44)*30) + ((suplemento - 22)* 15)        
        }
        else if(kit >= 18 && suplemento >= 9){
            pontoskitSupl + 1000 + ((kit - 18)* 30) + ((suplemento - 9)*15)
        }
    }

    if (equipe == "Vermelha"){
        if((kit)>= 93 && suplemento >= 47){
            pontoskitSupl = 5000 + ((kit - 93)*30) + ((suplemento - 47)* 15)
        }
        else if(kit >= 74 && suplemento >= 38){
            pontoskitSupl = 4000 + ((kit - 74)* 30) + ((suplemento - 38)* 15)
        }
        else if(kit >= 47 && suplemento >= 24){
            pontoskitSupl = 2500 + ((kit - 47)*30) + ((suplemento - 24)* 15)        
        }
        else if(kit >= 19 && suplemento >= 9){
            pontoskitSupl + 1000 + ((kit - 19)* 30) + ((suplemento - 9)*15)
        }
    }

    let pontoSangue = 0

    if(equipe == "Laranja"){
        if(sangue>= 49){
            pontoSangue = 2500 + (sangue - 49)* 20
        }
    }
    else if(equipe == "Preta"){
        if(sangue >= 52){
            pontoSangue = 2500 + (sangue - 52)* 20
        }
    }
    else if(equipe == "Roxa"){
        if(sangue >= 51){
            pontoSangue = 2500 + (sangue - 51)* 20
        }
    }
    else if(equipe == "Verde"){
        if(sangue >= 44){
            pontoSangue = 2500 + (sangue - 44)* 20
        }
    }
    else if(equipe == "Veremelha"){
        if(sangue >= 47){
            pontoSangue = 2500 + (sangue - 47)* 20
        }
    }


    alert(pontoskitSupl)
    soma = soma + pontoskitSupl

    document.getElementById("soma").innerHTML = soma.toFixed(2)
}