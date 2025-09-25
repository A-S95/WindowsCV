// server.js

const express = require('express');
const path = require('path');
const cors = require('cors');
const fetch = require('node-fetch'); // <-- Esta é a linha corrigida

const app = express();
const port = process.env.PORT || 3000;

// Serve os ficheiros estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

const LASTFM_USERNAME = process.env.LASTFM_USERNAME;
const LASTFM_API_KEY = process.env.LASTFM_API_KEY;

// API route
app.get('/api/spotify-data', async (req, res) => {
  try {
    if (!LASTFM_USERNAME || !LASTFM_API_KEY) {
      return res.status(500).json({ error: 'As variáveis de ambiente não foram definidas.' });
    }

    const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Erro ao buscar dados do Last.fm');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro na requisição da API...', error);
    res.status(500).json({ error: 'Erro ao conectar com a API do Last.fm' });
  }
});

app.listen(port, () => {
  console.log(`Servidor a executar em http://localhost:${port}`);
});
