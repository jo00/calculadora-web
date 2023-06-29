import koa from "koa";
import KoaLogger from "koa-logger";
import {koaBody} from "koa-body";
import bodyParser from "koa-bodyparser";
import router from "./routes.js";
import cors from "@koa/cors";
const app = new koa(); //creo una instancia de koa dentro de la app para ocupar las herramientas de koa

// Configurar CORS
app.use(cors());

app.use(KoaLogger());
app.use(koaBody());
app.use(bodyParser());
//middlewere cuando se hace una conexion al servidor

//koarouter
app.use(router.routes());




app.use(async (ctx) => {
    if (ctx.method === 'GET') {
        const number = parseInt(ctx.query.number, 10); // Obtener el número de la consulta
        const result = number * 2; // Multiplicar el número por 2
        ctx.body = {
            result: result // Enviar el resultado al cliente en formato JSON
          };
    } else {
      ctx.body = 'RESPUESTA POR DEFECTO'; // Enviar una respuesta por defecto si no es una solicitud POST
    }
  });


  app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, ()=>{
    console.log("Iniciando app, escuchando en el puerto 3000")
});