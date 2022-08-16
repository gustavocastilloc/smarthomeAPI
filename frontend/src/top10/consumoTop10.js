import React, {useState,useEffect} from 'react'

import axios from 'axios'
import { Bar } from 'react-chartjs-2';


function ConsumoTop10(){
    
    //const [consumo,setConsumo]=useState([]);
    
    const [electrodomestico1,setElectrodomestico1]=useState([]);
    const [electrodomestico2,setElectrodomestico2]=useState([]);
    const [electrodomestico3,setElectrodomestico3]=useState([]);
    const [electrodomestico4,setElectrodomestico4]=useState([]);
    const [electrodomestico5,setElectrodomestico5]=useState([]);
    const [electrodomestico6,setElectrodomestico6]=useState([]);
    const [electrodomestico7,setElectrodomestico7]=useState([]);
    const [electrodomestico8,setElectrodomestico8]=useState([]);
    const [electrodomestico9,setElectrodomestico9]=useState([]);
    const [electrodomestico10,setElectrodomestico10]=useState([]);
    const state ={
      labels:['House Overall', 'Furnace 1', 'Furnace 2', 'Home Office', 'Frigde', 'Barn', 'Wine Cellar','Garage Door', 'Microwave', 'Solar'],
      datasets: [
        {
          label: 'House Overall',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [electrodomestico1,electrodomestico2,electrodomestico3,electrodomestico4,electrodomestico5,electrodomestico6,electrodomestico7,electrodomestico8,electrodomestico9,electrodomestico10, ],
          backgroundColor: [
            'rgba(0,0,128,0.9)',
            'rgba(54, 162, 0, 1)',
            'rgba(125, 206, 125, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(128,0,0,1)',
            'rgba(255,255,0,0.9)',
            'rgba(128,0,128, 0.9)',
            'rgba(0,255,255,0.9)', 
            'rgba(128,128,0,0.9)',
            'rgba(0,255,0,0.9)'],

            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        },
        /*{
            label: 'Furnace 1',
            backgroundColor: 'rgba(200,255,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: electrodomestico2,
          },{
            label: 'Furnace 2',
            backgroundColor: 'rgba(255,0,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: electrodomestico3,
          },
          {
            label: 'Home Office',
            backgroundColor: 'rgba(145,0,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: electrodomestico4,
          },
          {
            label: 'Fridge',
            backgroundColor: 'rgba(120,0,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: electrodomestico5,
          },
          {
            label: 'Barn',
            backgroundColor: 'rgba(222,0,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: electrodomestico6,
          },
          {
            label: 'Wine Cellar',
            backgroundColor: 'rgba(55,0,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: electrodomestico7,
          },
          {
            label: 'Garage Door',
            backgroundColor: 'rgba(238,0,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: electrodomestico8,
          },
          {
            label: 'Microwave',
            backgroundColor: 'rgba(180,0,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: electrodomestico9,
          },{
            label: 'Solar',
            backgroundColor: 'rgba(145,0,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: electrodomestico10,
          }*/
      ]
    }
    const opciones = {
      maintainAspectRadio: false,
      responsive: true
    }
    const peticionApi= async() =>{
        await axios.get('http://localhost:8080/api/electrodomesticos')
        .then(responsive=>{
          console.log(responsive.data);
          var respuesta = responsive.data;
          var auxelectrodomestico1=[];
          var auxelectrodomestico2=[];
          var auxelectrodomestico3=[];
          var auxelectrodomestico4=[];
          var auxelectrodomestico5=[];
          var auxelectrodomestico6=[];
          var auxelectrodomestico7=[];
          var auxelectrodomestico8=[];
          var auxelectrodomestico9=[];
          var auxelectrodomestico10=[];
          respuesta.map(elemento=>{
            //auxConsumo.push(elemento.consumo);
            auxelectrodomestico1.push(elemento.house_overal);
            auxelectrodomestico2.push(elemento.furnace);
            auxelectrodomestico3.push(elemento.furnace2);
            auxelectrodomestico4.push(elemento.home_office);
            auxelectrodomestico5.push(elemento.fridge);
            auxelectrodomestico6.push(elemento.barn);
            auxelectrodomestico7.push(elemento.wine_cellar);
            auxelectrodomestico8.push(elemento.garage_door);
            auxelectrodomestico9.push(elemento.microwave);
            auxelectrodomestico10.push(elemento.solar);
          });
          setElectrodomestico1(auxelectrodomestico1);
          setElectrodomestico2(auxelectrodomestico2);
          setElectrodomestico3(auxelectrodomestico3);
          setElectrodomestico4(auxelectrodomestico4);
          setElectrodomestico5(auxelectrodomestico5);
          setElectrodomestico6(auxelectrodomestico6);
          setElectrodomestico7(auxelectrodomestico7);
          setElectrodomestico8(auxelectrodomestico8);
          setElectrodomestico9(auxelectrodomestico9);
          setElectrodomestico10(auxelectrodomestico10);
          
          
        }

        )
    }
    useEffect(() => {
      peticionApi();
    }, []);
    return (
      <div> 
        <Bar
          data ={state}
          options={opciones}
        />
      </div>
    );
  
}
export default ConsumoTop10;