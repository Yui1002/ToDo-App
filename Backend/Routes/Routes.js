import Controller from "../Controllers/Controller.js";

class Routes {
    constructor() {
        this.Controller = new Controller()
    }

    applyRouting(app) {
        app.post('/addTodo', (req, res) => {
            this.Controller.passToDB(req.body)
        })
    }
}

export default Routes;