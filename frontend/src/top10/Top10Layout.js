import Header from "./header"
import ConsumoTop10 from "./consumoTop10"
import React from 'react'

const Top10Layout =() =>{

    return (
        <React.Fragment>
            <Header title="Top 10 electrodomesticos que consumen energia"/>
            <ConsumoTop10/>
        </React.Fragment>
    )
}

export default Top10Layout