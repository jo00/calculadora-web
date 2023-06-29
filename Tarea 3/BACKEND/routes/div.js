import Router from "koa-router";

const router = new Router();




router.post("div", "/div", async (ctx) => {
    console.log("estoy en resta");
    const { num1, num2 } = ctx.request.body; // Obtener los números de la solicitud POST
  
    // Validar los números recibidos
    if (num2 === 0) {
        ctx.status = 400; // Establecer código de estado de error
        ctx.body = {
          error: 'No se puede dividir por cero'
        };
      } else {
        const result = num1 / num2;
    
        ctx.body = {
          result
        };
      }
    });

  export default router;