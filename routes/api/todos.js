const express = require('express');
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
// @desc    Create new todos
// @access  Public
router.post('/', (req, res) => {
    const newTodos = req.body.todos.map(todo => (new Todo({ name: todo })));

    Todo.create(newTodos)
        .then(savedTodos => res.json({savedTodos}))
        .catch(err => res.json(500, err));
});

// @route   PUT api/todos
// @desc    Create new todos
// @access  Public
router.put('/', (req, res) => {
    const updatedTodos = [];

    req.body.todos.map(todo => {
        const newData = {
            name: todo.name
        }
        Todo.updateOne({ _id: todo._id}, newData)
            .then(updatedTodo => updatedTodos.push(updatedTodo))
            .catch(err => res.json(404, err));
    });

    res.json({success: true})
});

// @route   DELETE api/todos/
// @desc    Delete some todos
// @access  Public
router.delete('/', (req, res) => {
    Todo.deleteMany({_id: { $in: req.body.todosIds}})
        .then(deletedTodos => res.json({deletedTodos}))
        .catch(err => res.json(404, err));
});

// @route   DELETE api/todos/all
// @desc    Delete all todos
// @access  Public
router.delete('/all', (req, res) => {
    Todo.deleteMany()
        .then(todos => res.json({todos: todos}))
        .catch(err => res.json(500, err));
});

module.exports = router;