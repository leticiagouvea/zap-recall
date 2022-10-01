import styled from "styled-components";
import logo from "../assets/img/logo.png";
import Cards from "./Cards";

export default function Conteudo() {
    return (
        <Tela>
            <LogoConteudo>
                <img src={logo} alt="" />
                <h1>ZapRecall</h1>
            </LogoConteudo>

            <Cards />
        </Tela>
    )
}

const Tela = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 60px;
`

const LogoConteudo = styled.div`
    display: flex;
    align-items: center;
    margin: 50px 0 20px 0;

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