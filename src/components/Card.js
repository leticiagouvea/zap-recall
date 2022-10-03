import { useState } from "react";
import styled from "styled-components";
import setaplay from "../assets/img/setaplay.png";
import CardAberto from "./CardAberto";

export default function Card({numero, id, pergunta, resposta, contador, setContador}) {
    const [card, setCard] = useState(true);
    const [concluido, setConcluido] = useState("p");
    const [icone, setIcone] = useState(setaplay);

    return (
        <>
        {card ? (
            <CardFechado>
                <p className={concluido}> Pergunta {numero + 1} </p>
                <img src={icone} alt="play" onClick={() => setCard(!card)} />
            </CardFechado>
        ) : 
        (
            <CardAberto id={id} pergunta={pergunta} resposta={resposta} setCard={setCard} setConcluido={setConcluido} setIcone={setIcone} contador={contador} setContador={setContador} />
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

    img {
        cursor: pointer;
    }

    .vermelho-riscado {
        color: #FF3030;
        text-decoration: line-through;
    }
    .laranja-riscado {
        color: #FF922E;
        text-decoration: line-through;
    }
    .verde-riscado {
        color: #2FBE34;
        text-decoration: line-through;
    }
`