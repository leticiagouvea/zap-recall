import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import Deck from "./Deck";
import Rodape from "./Rodape";

export default function Conteudo() {
    const [contador, setContador] = useState(0);

    return (
        <Tela>
            <LogoConteudo>
                <img src={logo} alt="" />
                <h1>ZapRecall</h1>
            </LogoConteudo>

            <Deck contador={contador} setContador={setContador} />
            <Rodape contador={contador} setContador={setContador} />
        </Tela>
    )
}

const Tela = styled.div`
    background-color: #FB6B6B;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 120px;
`

const LogoConteudo = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;

    img {
        width: 52px;
    }

    h1 {
    font-family: 'Righteous';
    font-size: 36px;
    color: #FFFFFF;
    margin-left: 20px;
    }
`