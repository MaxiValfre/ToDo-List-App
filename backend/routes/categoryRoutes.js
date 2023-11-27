
const express = require('express');
const router = express.Router();
const {
  createTask,
  deleteTask,
  getAllTask,
  getTask,
  updateTask,
  archiveTask,
  unarchiveTask,
} = require('../controllers/taskController.js');

router.get('/', getAllTask);
router.get('/:id', getTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.put('/:id/archive', archiveTask); 
router.put('/:id/unarchive', unarchiveTask); 

module.exports = router;