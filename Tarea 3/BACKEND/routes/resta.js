import Router from "koa-router";

const router = new Router();




router.post("resta", "/resta", async (ctx) => {
    console.log("estoy en resta");
    const { num1, num2 } = ctx.request.body; // Obtener los números de la solicitud POST
  
    // Validar los números recibidos
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      ctx.status = 400; // Establecer código de estado de error de solicitud incorrecta
      ctx.body = {
        error: 'Los parametros deben ser numeros validos'
      };
      return;
    }
  
    const result = num1 - num2; // Realizar la resta
  
    // Enviar la respuesta con el resultado
    ctx.body = {
      result: result
    };
  });

  export default router;