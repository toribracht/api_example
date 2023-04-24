const users = require('../models/userModel');

const getUsers = async ctx => {
    // TODO make sure user is authorized to fetch Users
    try {
        ctx.body = await users.findAll();
        ctx.status = 200;
    } catch (err) {
        ctx.body = err;
        ctx.status = 500;
    }
    ctx.status = 200;
};

const createUser = async ctx => {
    // TODO make sure user is authorized to ceate a User
    try {
        // create automatically validates the data
        const { firstName, lastName, email } = ctx.request.body;
        const newUser = await users.create({ firstName, lastName, email });
        ctx.body = newUser;
        ctx.status = 200;
    } catch {
        ctx.body // validation errors
        ctx.status = 400
    }
};

module.exports = {
    getUsers,
    createUser
};