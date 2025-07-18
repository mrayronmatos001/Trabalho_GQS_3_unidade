const Supplier = require('../models/Supplier');

exports.list = async (req, res) => {
  const suppliers = await Supplier.getAll();
  res.render('suppliers/list', { suppliers });
};

exports.newForm = (req, res) => {
  res.render('suppliers/new');
};

exports.create = async (req, res) => {
  await Supplier.create(req.body);
  res.redirect('/fornecedores');
};

exports.getById = async (req, res) => {
  const supplier = await Supplier.getById(req.params.id);
  if (!supplier) return res.status(404).send('Fornecedor não encontrado');
  res.render('suppliers/detail', { supplier });
};

exports.editForm = async (req, res) => {
  const supplier = await Supplier.getById(req.params.id);
  if (!supplier) return res.status(404).send('Fornecedor não encontrado');
  res.render('suppliers/edit', { supplier });
};

exports.update = async (req, res) => {
  await Supplier.update(req.params.id, req.body);
  res.redirect('/fornecedores');
};

exports.delete = async (req, res) => {
  await Supplier.delete(req.params.id);
  res.redirect('/fornecedores');
}; 