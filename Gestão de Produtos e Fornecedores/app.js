const express = require('express');
const path = require('path');
const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Rotas
const productRoutes = require('./src/routes/productRoutes');
const supplierRoutes = require('./src/routes/supplierRoutes');

app.use('/produtos', productRoutes);
app.use('/fornecedores', supplierRoutes);

// Página inicial
app.get('/', (req, res) => {
  res.render('index');
});

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app; 