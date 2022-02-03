const controlUser = require('../models/controlUser')
module.exports = app =>{

    app.get('/users',(req,res,next) => {
        controlUser.listUsers(res)
    })

    app.delete("/users/delete/:id",(req,res,next) => {
        const id = req.params.id;
        controlUser.delete(id,res)
    })

    app.post('/signup', (req,res,next) => {
        const data = req.body;
        controlUser.createUser(data,res)
    })

}