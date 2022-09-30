const { request, response } = require('express');

const prestamosController = {
	getAll: (req = request, res = response) => {
		res.status(200).json({
			msg: 'Get all',
		});
	},
	getOne: (req = request, res = response) => {
		res.status(200).json({
			msg: 'Get one',
		});
	},
	create: (req = request, res = response) => {
		res.status(201).json({
			msg: 'Create',
		});
	},
	update: (req = request, res = response) => {
		res.status(200).json({
			msg: 'Update',
		});
	},
	delete: (req = request, res = response) => {
		res.status(200).json({
			msg: 'Delete',
		});
	},
};

module.exports = prestamosController;
