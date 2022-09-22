import React from "react-dom"

// import palavras from "palavras.js";
import "./css/reset.css";
import "./css/style.css";

import forca from "./assets/forca0.png";
// import cabeca from "./assets/forca1.png";
// import tronco from "./assets/forca2.png";
// import bracoDir from "./assets/forca3.png";
// import bracoEsq from  "./assets/forca4.png";
// import pernaDir from "./assets/forca5.png";
// import pernaEsq from "./assets/forca.png";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function App(){
    return(
        <>
          <div className="lado">
                <div className="tamanho-img">
                    <img src={forca} />
                </div>
                <button className="botao">Escolher Palavra</button>
           </div>
           <div className="botao-alfa">
                <button>A</button>
                <button>B</button>
                <button>C</button>
                <button>D</button>
                <button>E</button>
                <button>F</button>
                <button>G</button>
                <button>H</button>
                <button>I</button>
                <button>J</button>
                <button>K</button>
                <button>L</button>
                <button>M</button>
           </div>
           <div className="botao-alfa">
                <button>N</button>
                <button>O</button>
                <button>P</button>
                <button>Q</button>
                <button>R</button>
                <button>S</button>
                <button>T</button>
                <button>U</button>
                <button>V</button>
                <button>W</button>
                <button>X</button>
                <button>Y</button>
                <button>Z</button>
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
React.render(<App/>, document.querySelector('.root'));