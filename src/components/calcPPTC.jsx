import React from 'react';
import Pht from './Pht.jsx';
import Tva from './tva.jsx';
import Bottons from './buttons.jsx';
import Resultat from './resultat.jsx';



const CalculPTTC = () =>{
    return (
      <>
  
      <fieldset style={{width:'fit-content'}}>
        <legend>Calcul de PTTC</legend>
        <Pht/> <br/>
        <Tva/>  <br/>
        <Bottons/><br/>
        <Resultat/>
      </fieldset>
      </>
    );
  }

  export default CalculPTTC;