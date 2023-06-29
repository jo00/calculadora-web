import Router from "koa-router";
import suma from "./routes/suma.js";
import mult from "./routes/mult.js";
import resta from "./routes/resta.js";
import div from "./routes/div.js";

const router = new Router(); //creo el router

router.use(suma.routes());
router.use(mult.routes());
router.use(resta.routes());
router.use(div.routes());
export default router;