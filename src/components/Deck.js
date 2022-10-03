import perguntas from "./perguntas";
import Card from "./Card";

export default function Deck({contador, setContador, resultado, setResultado}) {
    return (
        <>
            {perguntas.map((value, index) => (
                <Card key={index} numero={index} id={value.id} pergunta={value.pergunta} resposta={value.resposta} contador={contador} setContador={setContador} resultado={resultado} setResultado={setResultado} />
            ))}
        </>
    )
}