const route = require('express').Router();

const { Address, Employee } = require('../models');

route.get('/employees', async (_request, response) => {
  try {
    const employees = await Employee.findAll({
      include: {
        model: Address,
        as: 'addresses',
      },
    });

    return response.status(200).json(employees);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ message: 'Ocorreu um erro' });
  };
});

route.get('/employees/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const employee = await Employee.findOne({
        where: { id },
        include: [{ model: Address, as: 'addresses' }],
      });

    if (!employee)
      return response.status(404).json({ message: 'Funcionário não encontrado' });

    return response.status(200).json(employee);
  } catch (error) {
    console.log(error.message);
    response.status(500).json({ message: 'Algo deu errado' });
  };
});

module.exports = route;
