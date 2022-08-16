import React, {useState,useEffect} from 'react'

import axios from 'axios'
import { Line } from 'react-chartjs-2';


function CocinaEficiente(){
    
    //const [consumo,setConsumo]=useState([]);
    const [tiempo, setTiempo]=useState([]);
    const [kitchen12,setkitchen12]=useState([]);
    const [kitchen14,setkitchen14]=useState([]);
    const [kitchen38,setkitchen38]=useState([]); //'kitchen 12','kitchen 14','kitchen 38'
    const state ={
      labels: tiempo,//['kitchen 12','kitchen 14','kitchen 38'],
      datasets: [
        {
          label: 'kitchen 12',
          backgroundColor: 'rgba(0,128,0,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: kitchen12,
        },
        {
            label: 'kitchen 14',
            backgroundColor: 'rgba(225,255,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: kitchen14,
          },{
            label: 'kitchen 38',
            backgroundColor: 'rgba(255,0,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: kitchen38,
          }
      ]
    }
    const opciones = {
      maintainAspectRadio: false,
      responsive: true
    }
    const peticionApi= async() =>{
        await axios.get('http://localhost:8080/api/cocina')
        .then(responsive=>{
          console.log(responsive.data);
          var respuesta = responsive.data;
          var auxkitchen12=[];
          var auxkitchen14=[];
          var auxkitchen38=[];
          var auxtiempo=[];
          respuesta.map(elemento=>{
            //auxConsumo.push(elemento.consumo);
            auxkitchen12.push(elemento.kitchen_12);
            auxkitchen14.push(elemento.kitchen_14);
            auxkitchen38.push(elemento.kitchen_38);
            auxtiempo.push(elemento.tiempo);
          });
          setkitchen12(auxkitchen12);
          setkitchen14(auxkitchen14);
          setkitchen38(auxkitchen38);
          setTiempo(auxtiempo);
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
export default CocinaEficiente;