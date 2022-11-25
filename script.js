function jogar(){
    let image = ''    
    let optescolhida = document.getElementById('option').value 
    let optenemy = Math.floor(Math.random() * (3 - 1 + 1)) + 1
    let enemyimage = ''

    if (optescolhida != null){
        if(optescolhida == 1){
            image = 'pedra.png'

        }else if(optescolhida == 2){
            image = 'papel.png'

        } else{
            image = 'tesoura.png'
        }
        if(optenemy == 1){
            enemyimage = 'pedra.png'

        }else if(optenemy == 2){
            enemyimage = 'papel.png'

        } else{
            enemyimage = 'tesoura.png'
        }

        if(optescolhida == optenemy) {
            document.getElementById('result').innerHTML = 'Empate'
            document.getElementById('result').style.color = 'yellow'
        
        } else if(optescolhida == 1 && optenemy != 2){
            document.getElementById('result').innerHTML = 'Você Ganhou!!'
            document.getElementById('result').style.color = 'green'
        
        }else if(optescolhida == 2 && optenemy != 3){
            document.getElementById('result').innerHTML = 'Você Ganhou!!'
            document.getElementById('result').style.color = 'green'

        } else if(optescolhida == 3 && optenemy != 1){
            document.getElementById('result').innerHTML = 'Você Ganhou!!'
            document.getElementById('result').style.color = 'green'
        
        }else {
            document.getElementById('result').innerHTML = 'Você Perdeu!!'
            document.getElementById('result').style.color = 'red'
        
        }
        
        document.getElementById('myChoice').src = `imgs/${image}`
        document.getElementById('enemyChoice').src = `imgs/${enemyimage}`
        
        document.getElementById('divGame').classList.remove('oculto')
        document.getElementById('btnJogarNovamente').classList.remove('oculto')

    } else{
        alert('Selecione uma opção...')
    }

}

function jogarNovamente(){
    document.getElementById('divGame').classList.add('oculto')
    document.getElementById('result').innerHTML = ''
}

