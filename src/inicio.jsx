import React from "react";
const Inicio = () => (
    <div class="ed-container inicio-f">
         <div class="s-bg-white s-pxy-2 s-cross-center">
    <div class="ed-item l-100 form__item">
      <label>Usuario</label>
      <input type="text"/>
    </div>
    <div class="ed-item l-100 form__item">
      <label>Contraseña</label>
      <input type="password"/>
    </div>
   
    
 
    <div class="ed-item form__item">
    <a href="/registro" class="">Resgistrate</a>
      <input class="button full small " type="submit" value="Enviar"/>
    </div>
    </div>
  </div>
)
export default Inicio;