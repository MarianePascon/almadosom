function PlayPause(){
    let imagem = document.querySelector("#controle-musica")
    let musica = document.querySelector("#musica")

    if(musica.paused){
        musica.play()
        imagem.src="images/play.png"
        document.querySelector("#rotulo").innerText = "Clique para pausar."
    }else{
        musica.pause()
        imagem.src="images/play.png"
        document.querySelector("#rotulo").innerText = "Clique aqui para ouvir."
    }
}