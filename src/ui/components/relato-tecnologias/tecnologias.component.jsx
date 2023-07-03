export function TecnologiasComponent({ tecnologias }) {
    return (
        <>
            <h1>Tecnologias</h1>
            <ul className="ul-technologies">
                {tecnologias.map((tec, index) => (
                    <li key={index}>
                        <img src={tec.image} alt="technology image" />
                        {tec.name}
                    </li>
                ))}
            </ul>
        </>
    );
}
