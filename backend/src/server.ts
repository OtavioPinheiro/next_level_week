import express, { request, response } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Request Params: Parâmetros que vem na própria rota que identificam um recurso
// Query Params: Parâmetros opicionais que servem para filtrar ou fazer paginação e que também vem pela rota

app.use(errors());

app.listen(3333);