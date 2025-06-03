import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('jai shree ram, mera naam Manoj Singh Rawat hai , mein uttarakhand se hun!');
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});