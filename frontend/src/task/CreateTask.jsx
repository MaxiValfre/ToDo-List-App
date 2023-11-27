import  axios  from "axios";
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const URI = 'http://localhost:8000/task/'

const CompCreateTask = () =>{

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const navigate = useNavigate()

    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI, {title: title, description:description})
        navigate('/')
    }

    return (
        <div>
            <h3>Crear Tarea</h3>

            <form onSubmit={store}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                            <input 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            className="form-control"
                            />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripcion</label>
                            <textarea 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            className="form-control"
                            />
                    </div>
                    <button type="sumbit" className="btn btn-primary">Guardar</button>
            </form>

        </div>
    )
}

export default CompCreateTask