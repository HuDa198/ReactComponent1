import './App.css';
import React from 'react';
import CalculPTTC from './components/calcPPTC.jsx';

function App() {
  return <CalculPTTC/>
}

/* function Pht(){
  return <>
  Prix Hort Taxe: <input type='number' name='pht' id='pht' placeholder='Votre Pht'/> 
  </>
} */
/* function Tva(){
  return <>
  Taux TVA: <input type='number' name='tva' id='tva'  placeholder='Votre TVA'/> 
  </>
} */
/* function Bottons(){
  return <>
  <input type='submit' name='calc' id='calc' value='Caluler'/> 
  <input type='reset' name='init' id='init' value='initialiser'/> 
  </>
} */

/* function Resultat(){
  return <>
  Resaultat: <input type='number' name='res' id='res'  placeholder='Resultat' readOnly/> 
  </>
} */

/* function CalculePTTC(){
  return <>
  <fieldset>
    <legend>Calculer le PTTC</legend>
    <Pht/><br/>
    <Tva/><br/>
    <Bottons/><br/>
    <Resultat/><br/>
  <fieldset/>
  </>
} */

/* const CalculPTTC = () =>{
  return (
    <>
    <div style={{height:'100vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
    <fieldset style={{width:'fit-content'}}>
      <legend>Calcul de PTTC</legend>
      <Pht/><br/>
      <Tva/><br/>
      <Bottons/><br/>
      <Resultat/>
    </fieldset>
    </div>
    </>
  );
} */


export default App;
