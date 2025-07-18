const Product = require('../models/Product');

exports.list = async (req, res) => {
  const products = await Product.getAll();
  res.render('products/list', { products });
};

exports.newForm = (req, res) => {
  res.render('products/new');
};

exports.create = async (req, res) => {
  await Product.create(req.body);
  res.redirect('/produtos');
};

exports.getById = async (req, res) => {
  const product = await Product.getById(req.params.id);
  if (!product) return res.status(404).send('Produto não encontrado');
  res.render('products/detail', { product });
};

exports.editForm = async (req, res) => {
  const product = await Product.getById(req.params.id);
  if (!product) return res.status(404).send('Produto não encontrado');
  res.render('products/edit', { product });
};

exports.update = async (req, res) => {
  await Product.update(req.params.id, req.body);
  res.redirect('/produtos');
};

exports.delete = async (req, res) => {
  await Product.delete(req.params.id);
  res.redirect('/produtos');
}; 