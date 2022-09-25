
// import palavras from "palavras.js";
import "./css/reset.css";
import "./css/style.css";

import palavras from "./palavras";

import forca from "./assets/forca0.png";
import { useState } from "react";
// import cabeca from "./assets/forca1.png";
// import tronco from "./assets/forca2.png";
// import bracoDir from "./assets/forca3.png";
// import bracoEsq from  "./assets/forca4.png";
// import pernaDir from "./assets/forca5.png";
// import pernaEsq from "./assets/forca.png";

export default function App(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const axiliar = alfabeto.map(alfa => [alfa, false]);
    const [botoes, setBotoes] = useState(axiliar);
    const [gameOff, setGameOff] = useState(true);
    const [palavraEscolhida, setPalavraEscolhida] = useState("");
    const[certas, setCertas] = useState(0);
    const[erradas, setErradas] = useState(0);
    const [image, setImage] = useState(forca);
    const [palavraRevelada, setRevelada] = useState("");

    function baralhador() {
        return Math.random() - 0.5;
    }

    function escolher(){
        setCertas(0);
        setErradas(0);
        palavras.sort(baralhador);
        setPalavraEscolhida(palavras[0]);
        setGameOff(false);
    }

    function handleBotao(letra){
        const muleta = botoes.map((i) => i[0] === letra? i = [i[0], true]: i );
        console.log(muleta);
        setBotoes(muleta);

        if(palavraEscolhida.includes(letra)){
            setCertas(certas+1);
//quando palavra escolhida inclui a letra vocẽ acertou
// inclui a quantidades de letras acertadas em certas
// terminar o jogo quando o tamanho da palavra === certas
        }else{
            setErradas(erradas+1);
//incrementar o erro e mudar a imagem 
//Terminar o jogo quando erro === 6          
        }
    }

    return(
        <>
          <div className="lado">
                <div className="tamanho-img">
                    <img src={image} />
                </div>
                <div className="coluna">
                    <button onClick={escolher} className="botao">Escolher Palavra</button>
                    <p>{palavraEscolhida}</p>
                </div>
           </div>
           <div className="botao-alfa">
           {botoes.map((alfa) =>
                <button onClick={() => handleBotao(alfa[0])} disabled ={gameOff? gameOff:alfa[1]}>{alfa[0]}</button>
           )}
           </div>
            <div className="input">
                <div className="lado">
                    Já sei a palavra
                    <input/>
                    <button>Chutar</button>
                </div>
            </div>
        </>
    );
}