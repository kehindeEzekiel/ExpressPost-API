const pool = require('../config/db');

const getAllUsers = () => pool.query('SELECT * FROM users');
const getUserById = (id) => pool.query('SELECT * FROM users WHERE id = $1', [id]);
const createUser = ({ name, email, age }) =>
  pool.query('INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *', [name, email, age]);
const updateUser = (id, { name, email, age }) =>
  pool.query('UPDATE users SET name=$1, email=$2, age=$3 WHERE id=$4 RETURNING *', [name, email, age, id]);
const deleteUser = (id) => pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
