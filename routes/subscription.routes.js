import { Router } from "express";
import authorize from "../middleware/auth.middleware";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({title: 'GET all subscription'}));

subscriptionRouter.get('/:id', (req, res) => res.send({title: 'GET subscription details'}));

subscriptionRouter.post('/', authorize, (req, res) => res.send({title: 'CREATE subscription'}));

subscriptionRouter.put('/:id', (req, res) => res.send({title: 'UPADTE subscription'}));

subscriptionRouter.delete('/:id', (req, res) => res.send({title: 'DELETE subscription'}));

subscriptionRouter.get('/user/:id', authorize, (req, res) => res.send({title: 'GET all users subscription'}));

subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: 'CANCEL subscription'}));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title: 'ET upcoming renewals'}));

export default subscriptionRouter;