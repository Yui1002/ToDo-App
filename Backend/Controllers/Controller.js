import Models from '../Models/Models.js'

class Controller {
    constructor() {
        this.Models = new Models()
    }

    async checkDuplicateItems(req) {
        const res = await this.Models.checkUnique(req)
        return res
    }

    passToDB(req) {
        return this.Models.insertItems(req)
    }

    getItemsUserDone(req) {
        return this.Models.getItemsUserDone(req)
    }

    async getAllItems() {
        const res = await this.Models.getAllItems()
        return res
    }

    deleteItems() {
        return this.Models.deleteItems()
    }
    
}

export default Controller