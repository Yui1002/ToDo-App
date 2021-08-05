class Routes {
    constructor() {

    }

    applyRouting(app) {
        app.post('/add', (req, res) => {
            console.log(req.body)
        })
    }
}

export default Routes;