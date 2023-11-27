import  axios  from "axios";
import {useEffect,useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'


const URI = 'http://localhost:8000/task/'



const CompEditTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');  // Corrección aquí
    const navigate = useNavigate();
    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(URI + id, {
            title: title,
            description: description
        });
        navigate('/');
    };

    useEffect(() => {
        getTaskById();
    }, []);

    const getTaskById = async () => {
        const res = await axios.get(URI + id);
        setTitle(res.data.title);
        setDescription(res.data.description);
    };

    return (
        <div>
            <h3>Edit Task</h3>

            <form onSubmit={update}>
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
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );
};

export default CompEditTask;