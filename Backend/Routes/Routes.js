import Controller from "../Controllers/Controller.js";

class Routes {
    constructor() {
        this.Controller = new Controller()
    }

    applyRouting(app) {
        app.post('/checkUnique', async (req, res) => {
            const result = await this.Controller.checkDuplicateItems(req.body)
            res.json({result: result})
        })
        
        app.post('/addTodo', (req, res) => {
            this.Controller.passToDB(req.body)
            res.json({msg: 'The item is added'})
        })

        app.post('/chageStatusToDone', (req, res) => {
            this.Controller.getItemsUserDone(req.body)
        })

        app.get('/getAllTodo', async (req, res) => {
            const result = await this.Controller.getAllItems()
            res.json({result: result})
        })

        app.get('/deleteItems', (req, res) => {
            this.Controller.deleteItems()
            res.json({msg: 'All the items are deleted'})
        })
    }
}

export default Routes;