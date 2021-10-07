const { User } = require('../models');

const findAll = async () => {
  const users =  User.findAll();

  return users;
}

const findByPk = async (id) => {
  const user = await User.findByPk(id);

  return user;
}

const findByPkAndEmail = async (id, email) => {
  const user = await User.findOne({ where: { id, email } });

  return user;
}

const createUser = async (newUserData) => {
  const newUserCreated = await User.create(newUserData);

  return newUserCreated;
}

const updateUser = async (userNewData, id) => {
  const [userUpdated] = await User.update(
    userNewData,
    { where: { id } },
  );

  if(userUpdated === 1) return await User.findByPk(id);

  return userUpdated;
}

const deleteUser = async (id) => {
  const deletedUser = await User.destroy(
    { where: { id } },
  );

  console.log(deleteUser);

  return deletedUser;
}

module.exports = {
  findAll,
  findByPk,
  findByPkAndEmail,
  createUser,
  updateUser,
  deleteUser,
}