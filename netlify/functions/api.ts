const serverless = require('serverless-http')
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const storyRouter = require('../../routes/storyRoutes');
const userRouter = require('../../routes/userRoutes');
const AppError = require('../../utils/appError');
const dbConnect = require('../../config/dbconnect');
const globalErrorHandler = require('../../utils/ErrorHandler').errorHandler;

const app = express();
const router = express.Router();

app.use(helmet());
app.use(
    cors({
        origin: [
            'https://techdaily2022.netlify.app',
            'http://localhost:3001',
            'http://localhost:3000',
            'https://techdaily2023.netlify.app',
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
    })
);
app.use(compression());

app.use(express.json());
app.use(cookieParser());
dbConnect();

router.get('/', (req, res) => {
    res.send('Server is running');
})

app.use('api/', router);
app.use('/api/v1/stories', storyRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export const handler = serverless(app);