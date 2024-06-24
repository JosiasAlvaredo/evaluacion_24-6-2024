import React, { useState } from 'react';

export default function Ejercicio1() {

    const [selectedFruit, setSelectedFruit] = useState('');
  
    const handleSelect = (event) => {
      setSelectedFruit(event.target.value);
    };
  
    return (
      <div>
        <select value={selectedFruit} onChange={handleSelect}>
          <option value="">Seleccione una fruta</option>
          <option value="Manzana">Manzana</option>
          <option value="Pera">Pera</option>
          <option value="Naranja">Naranja</option>
          <option value="Mandarina">Mandarina</option>
        </select>
        <label>La fruta seleccionada actualmente es: {selectedFruit}</label>
      </div>
    );
  };
