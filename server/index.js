import express from 'express';
import Connection from './DB/db.js';
import Routes from './server/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
const PORT = '8080';

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}));
 
app.use(cors());
app.use('/',Routes)

Connection();

 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));