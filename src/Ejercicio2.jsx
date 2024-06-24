import {useState} from 'react';

export default function Ejercicio2() {
  const[fomData, setFormData] = useState({
    nombre: '',
    edad: '',
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...fomData,
      [name]: value
    });
  };

  function isOld(){
    if(fomData.edad >= 18){
      return "La persona ingresada es mayor de edad";
    } else {
      return "La persona ingresada es menor de edad";
    }
  }
  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form onSubmit={
        (event) => {
          event.preventDefault();
          console.log(fomData);
          }
      }>
        <label>Nombre: </label>
        <input 
        type="text"
        onChange={handleChange}
        />
        <label>Edad</label>
        <input
        type="num"
        onChange={handleChange}
        />
        <input 
        type="button"
        value="Enviar"
        onClick={() => alert(isOld())}
        />
      </form>
    </div>
  );
}
