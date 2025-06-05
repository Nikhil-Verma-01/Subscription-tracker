import { Router } from "express";
import { signUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', (req, res) => {
    res.send({title: 'Sign In'});
});
authRouter.post('/sign-out', (req, res) => {
    res.send({title: 'Sign out'});
});

export default authRouter;
