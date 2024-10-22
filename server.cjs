const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Carregar todos os dados JSON
const modsData = require('./src/data/mods.json');
const amuletsData = require('./src/data/amulets.json');
const armorsData = require('./src/data/armors.json');
const classesData = require('./src/data/classes.json');
const mutatorsData = require('./src/data/mutators.json');
const relicsData = require('./src/data/relics.json');
const ringsData = require('./src/data/rings.json');
const statsData = require('./src/data/stats.json');
const traitsData = require('./src/data/traits.json');
const weaponsData = require('./src/data/weapons.json');

app.use(cors());

// Definir as rotas para cada conjunto de dados
app.get('/api/mods', (req, res) => {
  res.json(modsData);
});

app.get('/api/amulets', (req, res) => {
  res.json(amuletsData);
});

app.get('/api/armors', (req, res) => {
  res.json(armorsData);
});

app.get('/api/classes', (req, res) => {
  res.json(classesData);
});

app.get('/api/mutators', (req, res) => {
  res.json(mutatorsData);
});

app.get('/api/relics', (req, res) => {
  res.json(relicsData);
});

app.get('/api/rings', (req, res) => {
  res.json(ringsData);
});

app.get('/api/stats', (req, res) => {
  res.json(statsData);
});

app.get('/api/traits', (req, res) => {
  res.json(traitsData);
});

app.get('/api/weapons', (req, res) => {
  res.json(weaponsData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
