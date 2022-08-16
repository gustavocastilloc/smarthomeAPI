import Header from "./header"
import CocinaEficiente from "./cocinaEficiente"
import React from 'react'

const CocinaLayout =() =>{

    return (
        <React.Fragment>
            <Header title="Cocina mas Eficiente"/>
            <CocinaEficiente/>
        </React.Fragment>
    )
}

export default CocinaLayout