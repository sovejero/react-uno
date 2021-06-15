//import React from 'react';
import { BlogPost } from './tarea/Tarea1.js';
import { MatchNombre, PasswordInput, ValidationInput } from './tarea/Tarea2.js';
import { UncontrolledCheckbox, CheckboxList } from './tarea/Tarea3.js';
import { CheckboxListWithState } from './tarea/Tarea4.js';

ReactDOM.render(
  <React.Fragment>
    <BlogPost titulo="Blog Title"
      parrafos={`Hoy vi una ardilla.
      La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
      Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
      autor={{
        nombre: "Santiago",
        titulo: "Tu título",
        imagen: "https://avatars.githubusercontent.com/u/33473788?s=400&v=4"
      }}/>
      <br></br>
      <br></br>
      <MatchNombre nombre="Santi"></MatchNombre>
      <br></br>
      <PasswordInput minLength={4}></PasswordInput>
      <br></br>
      <ValidationInput isPassword="pas" validation={(value) => value.length >= 4}/>
      <br></br>
      <UncontrolledCheckbox initialValue={false}></UncontrolledCheckbox>
      <br></br>
      <CheckboxList items={{uno: false, dos: true, tres: false}}/>
      <br></br>
      <CheckboxListWithState items={{uno: false, dos: true, tres: false}}/>
  </React.Fragment>,
  document.getElementById('react-app')
);