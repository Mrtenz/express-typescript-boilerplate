import * as express from 'express';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import routes from './routes';

const app: express.Application = express();

/**
 * Middleware
 */
app.use(helmet());
app.use(bodyParser.json());

/**
 * Routes
 */
app.use(routes);

export default app;
