const express = require('express');
const userUtils = require('../models/userUtils');

const appRouter = express.Router();

appRouter.get('/',async function(req,resp)
    {
        let users = await userUtils.getAllUsers();
        return resp.json(users);
    });

appRouter.get('/:id',async function(req,resp)
    {
        let id = req.params.id;
        let users = await userUtils.getUser(id);
        return resp.json(user);
    });

appRouter.post('/', async function(req,resp)
    {
        let obj = req.body;
        console.log(obj);

        let result = await userUtils.addUser(obj);
        return resp.json(result);
    });


appRouter.put('/:id',async function(req,resp)
    {
        let obj = req.body;
        let id = req.params.id;

        let result = await userUtils.updateUser(id,obj);
        return resp.json(result);
    });

appRouter.delete('/:id',async function(req,resp)
    {
        let id = req.params.id;

        let result = await userUtils.deleteUser(id);
        return resp.json(result);
    })
 
module.exports = appRouter;