import Router from "koa-router";

const router = new Router();

router.get("mult", "/mult", async(ctx) =>{

    console.log("estoy en mult.js")
    const expression = ctx.query.expression; //obtengo la expresion de la consulta del cliente
    console.log(expression); //chequeando que le llega la expresion
    try {
        const result = eval(expression); // Evaluar la expresión utilizando eval()
        console.log(result); //chequeando que obtiene el resultado
        
        ctx.body = {
          result: result // Enviar el resultado al cliente en formato JSON
        };
      } catch (error) {
        ctx.status = 500; // Establecer código de estado de error
    ctx.body = {
      error: 'Expresion invalida' // Enviar un mensaje de error si ocurre un problema
    };
      }
});

export default router;