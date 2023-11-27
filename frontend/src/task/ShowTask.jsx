import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/task/';

const CompShowTask = () => {
  const [tasks, setTask] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

  useEffect(() => {
    getTask();
  }, []);

  const getTask = async () => {
    const res = await axios.get(URI);
    setTask(res.data);
  }

  const deleteTask = async (id) => {
    await axios.delete(`${URI}${id}`);
    getTask();
  }

  const toggleArchive = async (id, archived) => {
    await axios.put(`${URI}${id}`, { archived: !archived });
    getTask();
  }

  const toggleShowArchived = () => {
    setShowArchived((prev) => !prev);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link to='/create' className='btn btn-primary mt-2 mb-2'>
            Crear Tarea<i className="fa-solid fa-plus"></i>
          </Link>
          <button className='btn btn-secondary mt-2 mb-2' onClick={toggleShowArchived}>
            {showArchived ? 'Mostrar Activas' : 'Mostrar Archivadas'}
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Descripcion</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tasks
                .filter((task) => (showArchived ? task.archived : !task.archived))
                .map((task) => (
                  <tr key={task.id}>
                    <td> {task.title} </td>
                    <td> {task.description} </td>
                    <td>
                      <Link to={`/edit/${task.id}`} className='btn btn-info'>
                        Editar
                      </Link>
                      <button onClick={() => deleteTask(task.id)} className='btn btn-danger'>
                        Eliminar
                      </button>
                      {!showArchived && (
                        <button onClick={() => toggleArchive(task.id, task.archived)} className='btn btn-warning'>
                          Archivar
                        </button>
                      )}
                      {showArchived && (
                        <button onClick={() => toggleArchive(task.id, task.archived)} className='btn btn-success'>
                          Desarchivar
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CompShowTask;


