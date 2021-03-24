var personagem = " "

function alterar() {
    personagem = document.getElementById("personagens").value
    //Atribui à variável personagem o "valor" da opção escolhida

    //compara o valor 
    if (personagem == "eren") {
        document.getElementById("survey").src = "eren.gif"
        document.getElementById("bio").innerHTML = "Eren Yaeger | Titã de Ataque | Muralha Maria | Apelido carinhoso: Bastardo Suicida | Paixão: Tatakae"
        //substitui a imagem original por outra conforme o comando
    }
    else if (personagem == "mikasa") {
        document.getElementById("survey").src = "mikasa.gif"
        document.getElementById("bio").innerHTML = "Mikasa Ackerman | Soldado | Muralha Maria | Apelido carinhoso: Não encontrado | Paixão: Eren"
    }
    else if (personagem == "armin") {
        document.getElementById("survey").src = "armin.gif"
        document.getElementById("bio").innerHTML = "Armin Arlert | Titã Colossal | Muralha Maria | Apelido carinhoso: Historia | Paixão: Mar aberto"
    }
    else if (personagem == "levi") {
        document.getElementById("survey").src = "levi.gif"
        document.getElementById("bio").innerHTML = "Levi Ackerman | Capitão | Subterrâneo | Apelido carinhoso: Soldado mais forte da humanidade | Paixão: Matar titãs"
    }
    else if (personagem == "sasha") {
        document.getElementById("survey").src = "sasha.gif"
        document.getElementById("bio").innerHTML = "Sasha Braus | Soldado | Muralha Rose | Apelido carinhoso: Garota Batata | Paixão: Niccolo e Batata"
    }
    else if (personagem == "jean") {
        document.getElementById("survey").src = "jean.gif"
        document.getElementById("bio").innerHTML = "Jean Kirstein | Soldado | Muralha Rose | Apelido carinhoso: Cara de cavalo (é só olhar) | Paixão:Mikasa"
    }
}

