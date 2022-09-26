
// import palavras from "palavras.js";
import "./css/reset.css";
import "./css/style.css";

import palavras from "./palavras";

import forca from "./assets/forca0.png";
import { useState } from "react";
import cabeca from "./assets/forca1.png";
import tronco from "./assets/forca2.png";
import bracoDir from "./assets/forca3.png";
import bracoEsq from "./assets/forca4.png";
import pernaDir from "./assets/forca5.png";
import pernaEsq from "./assets/forca6.png";

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const axiliar = alfabeto.map(alfa => [alfa, false]);
    const [botoes, setBotoes] = useState(axiliar);
    const [gameOff, setGameOff] = useState(true);
    const [palavraEscolhida, setPalavraEscolhida] = useState([]);
    const [corPalavraEscolhida, setCorPalavraEscolhida] = useState("");
    const [certas, setCertas] = useState(0);
    const [erradas, setErradas] = useState(0);
    const [image, setImage] = useState(forca);
    const [palavraRevelada, setRevelada] = useState([]);
    const [chutar, setChutar] = useState("");
    const [gameOffInput, setGameOffInput] = useState(true);

    function baralhador() {
        return Math.random() - 0.5;
    }

    function escolher() {
        setBotoes(axiliar);
        setCertas(0);
        setErradas(0);
        setImage(forca);
        palavras.sort(baralhador);
        const handlescolhido = palavras[0].split("");
        setPalavraEscolhida(handlescolhido);

        setGameOff(false);
        setGameOffInput(false);

        setRevelada(handlescolhido.map((a) => "_"));
    }


    function removeAcento (text){
        text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        text = text.replace(new RegExp('[Ç]','gi'), 'c');
        return text;
    }



    function handleBotao(letra) {
        console.log(palavraRevelada);
        const muleta = botoes.map((i) => i[0] === letra ? i = [i[0], true] : i);
        console.log(muleta);
        setBotoes(muleta);

        let count = 0;
        // const auxs1 = removeAcento(palavraEscolhida)
        console.log(palavraEscolhida);
        if (palavraEscolhida.includes(letra)) {
            const aux = palavraRevelada;
            //Dentro parentesews usar regex pesquisar normalize
            palavraEscolhida.forEach((e, index) => { if (e === letra) { count++; 
            aux[index] = e;
            } });
            setRevelada(aux);
            let soma = certas + count;
            setCertas(soma);
            if (palavraEscolhida.length === soma) {

                setGameOff(true);
                setGameOffInput(true);

                console.log(palavraEscolhida.length);
                setCorPalavraEscolhida("green");
            }
            //quando palavra escolhida inclui a letra vocẽ acertou
            // inclui a quantidades de letras acertadas em certas
            // terminar o jogo quando o tamanho da palavra === certas
        } else {
            setErradas(erradas + 1);
            if (erradas === 0) {
                setImage(cabeca);
            }
            if (erradas === 1) {
                setImage(tronco);
            }
            if (erradas === 2) {
                setImage(bracoDir);
            }
            if (erradas === 3) {
                setImage(bracoEsq);
            }
            if (erradas === 4) {
                setImage(pernaDir);
            }
            if (erradas === 5) {
                setGameOff(true);
                setGameOffInput(true);

                setImage(pernaEsq);
                setRevelada(palavraEscolhida);
                setCorPalavraEscolhida("red");
            }
            //incrementar o erro e mudar a imagem 
            //Terminar o jogo quando erro === 6          
        }
    }

    return (
        <>
            <div className="lado">
                <div className="tamanho-img">
                    <img src={image} />
                </div>
                <div className="coluna">
                    <button onClick={escolher} className="botao">Escolher Palavra</button>
                    <div className="fonte">
                       <p className={corPalavraEscolhida}>{palavraRevelada}</p>
                    </div>
                    {/* <p>{erradas} {certas}</p> */}
                </div>
            </div>
            <div className="botao-alfa">
                {botoes.map((alfa) =>
                    <button onClick={() => handleBotao(alfa[0])} disabled={gameOff ? gameOff : alfa[1]}>{alfa[0]}</button>
                )}
            </div>
            <div className="input">
                <div className="lado">
                    Já sei a palavra
                    <input value={chutar} onChange={e => setChutar(e.target.value)} disabled={gameOffInput} />
                    <button >Chutar</button>
                </div>
            </div>
        </>
    );
}