
export function TecnologiasComponent({ tecnologias }) {
    return (
        <>
            <h1>Tecnologias</h1>
            <ul>
                {
                    tecnologias.map((tec, index) => (
                        <li key={index}>{tec.nome}</li>
                    ))
                }
            </ul>
        </>
    )
}