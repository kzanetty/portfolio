
export function RelatoTituloComponent({ experiencias, onClick }) {
    return (
        <>
            <h1>Experiencias</h1>
            <ul>
                {
                    experiencias.map((exp, index) => (
                        <li key={index}><button className={`button-title button-${exp.nome}`} onClick={() => onClick(exp.nome)}>{exp.nome}</button></li>
                    ))
                }
            </ul>
        </>
    )
}