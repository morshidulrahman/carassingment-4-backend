import cors from 'cors';
import express, { Application } from 'express';
import router from './app/routes';
import { globalErrorHandelar } from './app/middlewares/globalErrorHandelar';
import { NOtfound } from './app/middlewares/NotFound';

const app: Application = express();

//parsers
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://assignment-4-carshop.netlify.app',
    ],
    credentials: true,
  }),
);

// application routes
app.use('/api', router);

app.use(globalErrorHandelar);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Blog API',
  });
});

//Not Found
app.use(NOtfound);

export default app;
