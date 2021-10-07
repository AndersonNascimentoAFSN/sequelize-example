const UserService = require('../services/UserService');

const findAll = async (_req, res) => {
  try {
    const users = await UserService.findAll();

    return res.status(200).json(users);
  } catch (err) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
};

const findByPk = async (req, res) => {
  try {
    const { id }= req.params;
    const user = await UserService.findByPk(id);

    if(!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);

  } catch (err) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const findByPkAndEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.query;

    const user = await UserService.findByPkAndEmail(id, email);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const createUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await UserService.createUser({ fullName, email });

    return res.status(201).json(newUser);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const updateUser = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const { id } = req.params;

    const updateUser = await UserService.updateUser({ fullName, email }, id);

    if(!updateUser) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(updateUser);

  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await UserService.deleteUser(id);

    return res.status(204).end();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  findAll,
  findByPk,
  findByPkAndEmail,
  createUser,
  updateUser,
  deleteUser,
};