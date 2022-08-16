
import Header from "./header"
import ConsumoRefrigeradora from "./consumoRefrigeradora"
import React from 'react'

const RefrigeradoraLayout =() =>{

    return (
        <React.Fragment>
            <Header title="Mediciones Consumo de energia Refrigeradora"/>
            <ConsumoRefrigeradora/>
        </React.Fragment>
    )
}

export default RefrigeradoraLayout