import styled from "styled-components";

export default function Rodape({contador, resultado}) {
    return (
        <Concluidos>
            <h1>{contador}/8 concluídos</h1>
            <Icones>
                {resultado.map((value, index) => (
                    <img src={value.icone} key={index} alt={value.icone} />
                ))}
            </Icones>
        </Concluidos>
    )
}

const Concluidos = styled.div`
    width: 100%;
    min-height: 80px;
    background: linear-gradient(90deg, #FB6B6B 0%, #FFFFFF 80%);
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

    h1 {
        text-transform: uppercase;
    }
`

const Icones = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 20px;
        margin: 10px 5px 0px 5px;
    }
`