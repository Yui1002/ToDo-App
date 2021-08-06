import Models from '../Models/Models.js'

class Controller {
    constructor() {
        this.Models = new Models()
    }

    checkDuplicateItems() {

    }

    passToDB(req) {
        return this.Models.insertItems(req)
    }
    
}

export default Controller