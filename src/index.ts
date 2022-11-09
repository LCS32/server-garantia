import Server from "./models/server";
import dontenv from 'dotenv';

//Configuramos las variables de ambiente
dontenv.config();

const server = new Server();