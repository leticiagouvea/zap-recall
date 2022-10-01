import { useState } from "react";
import styled from "styled-components";
import setavirar from "../assets/img/setavirar.png";

export default function CardAberto({ id, pergunta, resposta }) {
    const [virar, setVirar] = useState(true);

    return (
        <>
            {virar ? (
                <CardVirado>
                    <p>{pergunta}</p>
                    <img src={setavirar} alt="virar" onClick={() => setVirar(!virar)} />
                </CardVirado>
            ) :
            (
                <CardVirado>
                    <p>{resposta}</p>
                    <Botoes>
                        <div className="nao-lembrei">
                            <p>Não lembrei</p>
                        </div>

                        <div className="quase-lembrei">
                            <p>Quase lembrei</p>
                        </div>

                        <div className="zap">
                            <p>Zap!</p>
                        </div>
                    </Botoes>
                </CardVirado>
            )}
        </>
    )
}

const CardVirado = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background-color: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    img {
    position: absolute;
    bottom: 10px;
    right: 10px;
}
`

const Botoes = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    column-gap: 5px;

    div {
    width: 90px;
    height: 38px;
    font-size: 12px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    line-height: 14px;
    }

    .nao-lembrei {
        background-color: #FF3030;
    }
    .quase-lembrei {
        background-color: #FF922E;
    }
    .zap {
        background-color: #2FBE34;
    }
`