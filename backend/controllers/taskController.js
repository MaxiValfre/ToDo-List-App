
const {Task} = require('../models');

const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getTask = async (req, res) => {
    try {
        const task = await Task.findAll({
            where: {id: req.params.id}
            })

        res.json(task[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const createTask = async (req, res) => {
    try {
        console.log("Fecha recibida:", req.body.dateField)
        await Task.create(req.body);
        res.json({ message: "registro Creado Correctamente" });
    } catch (error) {
        console.error("Error en createTask:", error)
        res.json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        await Task.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ message: "registro actualizado Correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        await Task.destroy({
            where: { id: req.params.id }
        });
        res.json({ message: "registro eliminado Correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

const getArchivedTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({
            where: { archived: true },
        });
        res.json(tasks);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const archiveTask = async (req, res) => {
    try {
        await Task.update({ archived: true }, {
            where: { id: req.params.id },
        });
        res.json({ message: "Tarea archivada correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

const unarchiveTask = async (req, res) => {
    try {
        await Task.update({ archived: false }, {
            where: { id: req.params.id },
        });
        res.json({ message: "Tarea desarchivada correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = {
    getAllTask,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    getArchivedTasks,
    archiveTask,
    unarchiveTask,
};