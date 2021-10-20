import React from "react";
const Registro = () => (
    <div class="ed-container inicio-f">
         <div class="s-bg-white ed-grid  s-grid-2">
    
    <div class="ed-item  form__item">
      <label >Usuario</label>
      <input placeholder="usuario@dominio.com" type="email"/>
    </div>
    <div class="ed-item ed-grid s-grid-2 ">
    <div class="card">
      <label >Confirma usuario</label>
      <input placeholder="usuario@dominio.com" type="email"/>

    </div>
    <div class="card">

      <label>Edad</label>
      <input placeholder="" type="text"/>
    </div>
    </div>
    
    
    <div class="ed-item  form__item">
      <label>Contraseña</label>
      <input placeholder="" type="password"/>
    </div>
    <div class="ed-item  form__item">
      <label>Confirma contraseña</label>
      <input placeholder="" type="password"/>
    </div>
   
    
   
    <div class="ed-item form__item ">
      <label>Selecciona tu país</label>
      <select>
        <option>Argelia</option>
        <option>Bolivia</option>
        <option>Argentina</option>
        <option>Perú</option>
        <option>México</option>
      </select>
    </div>
    <div class="ed-item form__item s-rows-2 perfi1">
        <label htmlFor="">Esto servira para que amigos y familiares puedan buscarte, tambien compartir tus avances, siempre estara bajo tu control lo que desees compartir.</label>
        <input type="file" class="perfi"/>
        </div>
    <div class="ed-item form__item ">
      <label>Selecciona Ciudad</label>
      <select>
        <option value=""></option>
      </select>
    </div>
    
    

    <div class="ed-item form__item ">
      <label>Selecciona la unidad de GLOFOX Fit</label>
      <select>
        <option value=""></option>
      </select>
    </div>
    <div></div>
 
    {/* <div class="ed-grid s-grid-3  "> */}

    {/* <div class="card"></div> */}
    <div class="s-cols-1 boton2">
      <input class="button full small boton2" type="submit" value="Enviar"/>
    </div>
    
    </div>
    {/* </div> */}
  </div>
)
export default Registro;