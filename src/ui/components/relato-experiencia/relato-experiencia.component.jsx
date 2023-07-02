export function RelatoExperienciaComponent({ experiencias }) {
    return (
        <>
            {
                experiencias.map((exp, index) => (
                    <div className={`hiden-experience ${exp.nome}`} key={index}>
                        <h2>{exp.titulo}</h2>
                        <h3>{exp.periodo}</h3>
                        <p>{exp.texto}</p>
                        <div>
                            <ul>
                                {
                                    exp.tecnologias.map((tecnologia, index) => (
                                        <li key={index}>{tecnologia}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </>
    )
}