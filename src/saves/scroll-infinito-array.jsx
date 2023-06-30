import { useEffect, useState } from 'react'

export function AppScrollInfinit() {
    const [values, setValues] = useState([1, 2, 3]);

    function addValues() {
        const lastValue = values[values.length - 1]
        setValues((oldValues) => [...oldValues, ...generateNewValues(lastValue)])
    }

    function generateNewValues(value) {
        return [value + 1, value + 2, value + 3]
    }

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                addValues()
            }
        })

        intersectionObserver.observe(document.querySelector('#sentinela'))
        return () => intersectionObserver.disconnect()
    }, [values])

    return (
        <div className='app'>
            <h1>portifolio</h1>
            <div className='box-values'>
                {
                    values.map(value => (
                        <p>{value}</p>
                    ))
                }
                <p id='sentinela' />
            </div>
        </div>
    )
}

