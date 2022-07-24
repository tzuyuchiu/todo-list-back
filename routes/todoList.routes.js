const router = require('express').Router();

const Todolist = require('../models/TodoList.model');

//Get all Todo list (homepage)
router.get('/', async (req, res, next) => {
  try {
    const allTodos = await Todolist.find();
    res.status(200).json(allTodos);
  } catch (err) {
    next(err);
  }
});

// create a to do item
router.post('/', async (req, res, next) => {
  try {
    // data validation that request.body is in the correct format

    if (!req.body.item || typeof req.body.item !== 'string') {
      res.status(400).json({
        message: 'Task is not provided',
      });
      return;
    }

    const createOneItem = await Todolist.create(req.body);

    res.status(201).json({
      message: `Your task has been CREATED 👏`,
    });
  } catch (e) {
    next(e);
  }
});

// update a to do item

router.patch('/:id', async (req, res, next) => {
  try {
    const updateItem = await Todolist.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updateItem);
  } catch (err) {
    next(err);
  }
});

// delete a comment

router.delete('/:id', async (req, res, next) => {
  try {
    const deleteItem = await Todolist.findByIdAndDelete(req.params.id);

    res.json({ message: `You deleted your task! 🤓` });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
