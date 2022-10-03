import styled from "styled-components";
import iconeCerto from "../assets/img/iconecerto.png";
import iconeErro from "../assets/img/iconeerro.png";
import iconeQuase from "../assets/img/iconequase.png";

export default function Rodape({contador}) {
    return (
        <Concluidos>
            <h1>{contador}/8 concluídos</h1>
            <Icones>
                <img src={iconeErro} alt="não lembrei" />
                <img src={iconeQuase} alt="quase não lembrei" />
                <img src={iconeCerto} alt="zap" />
            </Icones>
        </Concluidos>
    )
}

const Concluidos = styled.div`
    width: 100%;
    min-height: 60px;
    background: linear-gradient(90deg, #FB6B6B 0%, #FFFFFF 70%);
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.15);
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #333333;
    padding: 14px;

    h1 {
        text-transform: uppercase;
    }
`

const Icones = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px 0px 2px 0px;

    img {
        margin-right: 10px;
    }
`