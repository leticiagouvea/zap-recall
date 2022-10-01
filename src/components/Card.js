import { useState } from "react";
import styled from "styled-components";
import setaplay from "../assets/img/setaplay.png";
import CardAberto from "./CardAberto";

export default function Card({numero, id, pergunta, resposta}) {
    const [card, setCard] = useState(true);

    return (
        <>
        {card ? (
            <CardFechado>
                <p>Pergunta {numero + 1}</p>
                <img src={setaplay} alt="play" onClick={() => setCard(!card)} />
            </CardFechado>
        ) : 
        (
            <CardAberto id={id} pergunta={pergunta} resposta={resposta} />
        )}
        </>
    )
}

const CardFechado = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    }
`