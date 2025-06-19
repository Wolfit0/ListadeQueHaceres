import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'

function App() {
  const [tareas, setTareas] = useState([]);
  const [nueva, setNueva] = useState('');

  const agregar = () => {
    if (nueva.trim() === '') return;
    setTareas([...tareas, { texto: nueva, completado: false }]);
    setNueva('');
  };

  const toggle = (index) => {
    const nuevas = [...tareas];
    nuevas[index].completado = !nuevas[index].completado;
    setTareas(nuevas);
  };

  const eliminar = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📝 Lista de Tareas</h2>
      <input
        value={nueva}
        onChange={(e) => setNueva(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button onClick={agregar}>Agregar</button>
      <ul>
        {tareas.map((t, i) => (
          <li key={i} style={{ marginTop: 10 }}>
            <span
              onClick={() => toggle(i)}
              style={{
                textDecoration: t.completado ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {t.texto}
            </span>
            <button onClick={() => eliminar(i)} style={{ marginLeft: 10 }}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
