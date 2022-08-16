import React, {useState,useEffect} from 'react'

import axios from 'axios'
import {Line} from 'react-chartjs-2';


function ConsumoRefrigeradora(){
    
    const [consumo,setConsumo]=useState([]);
    const state ={
      labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
      datasets: [
        {
          label: 'Consumo',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: consumo
        }
      ]
    }
    const opciones = {
      maintainAspectRadio: false,
      responsive: true
    }
    const peticionApi= async() =>{
        await axios.get('http://localhost:8080/api/refrigeradora')
        .then(responsive=>{
          console.log(responsive.data);
          var respuesta = responsive.data;
          var auxConsumo=[];
          respuesta.map(elemento=>{
            auxConsumo.push(elemento.consumo);
          });
          setConsumo(auxConsumo);
        }

        )
    }
    useEffect(() => {
      peticionApi();
    }, []);
    return (
      <div> 
        <Line 
          data ={state}
          options={opciones}
        />
      </div>
    );
  
}
export default ConsumoRefrigeradora;