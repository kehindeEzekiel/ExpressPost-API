const model = require('../models/userModel');

exports.getUsers = async (req, res, next) => {
  try {
    const { rows } = await model.getAllUsers();
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const { rows } = await model.getUserById(req.params.id);
    if (!rows.length) return res.status(404).json({ error: 'User not found' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });
    const { rows } = await model.createUser({ name, email, age });
    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;
    const { rows } = await model.updateUser(req.params.id, { name, email, age });
    if (!rows.length) return res.status(404).json({ error: 'User not found' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { rows } = await model.deleteUser(req.params.id);
    if (!rows.length) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    next(err);
  }
};
