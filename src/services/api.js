// npm install axios

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://3sis.com.br/SUIApi/api/ProgramacaoCientifica'
    // ?codEve=3 -- todas as palestras e atividades
    // /GetAtividades?codEve=3 -- todas as atividades
    // /GetById?codEve=3&atividadeId={atividadeId}
});

export default api;