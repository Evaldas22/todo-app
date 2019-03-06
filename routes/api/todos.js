const express = require('express');
const async = require('async');
const router = express.Router();


const Todo = require('../../models/TODO');

// @route   GET api/todos
// @desc    Get all todos
// @access  Public
router.get('/', (req, res) => {
    Todo.find()
        .sort({date: -1})
        .then(todos => res.json(todos));
});

// @route   POST api/todos
// @desc    Create new todo
// @access  Public
router.post('/', (req, res) => {
    const newTodo = new Todo({
        name: req.body.todo
    });
    Todo.create(newTodo)
        .then(savedTodos => res.json({savedTodos}))
        .catch(err => res.status(500).json(err));
});

// @route   PUT api/todos
// @desc    Create new todos
// @access  Public
router.put('/', async (req, res) => {
    const todos = req.body.todos;
    
    async.eachSeries(todos, function iterator(todo, done){
        Todo.updateOne({ _id: todo._id}, { $set : { name: todo.name }}, done);
    }, function done(err) {
        if(err) res.status(404).json(err)
        else res.json({success: true})
    });
});

// @route   DELETE api/todos/
// @desc    Delete some todos
// @access  Public
router.delete('/', (req, res) => {
    Todo.deleteMany({_id: { $in: req.body.todosIds}})
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json(err));
});

// @route   DELETE api/todos/all
// @desc    Delete all todos
// @access  Public
router.delete('/all', (req, res) => {
    Todo.deleteMany()
        .then(() => res.json({success: true}))
        .catch(err => res.status(500).json(err));
});

module.exports = router;