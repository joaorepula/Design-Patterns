export default class NotImplentedException extends Error {
    constructor(message){
        super(`The "${message} function was not implemented"`)
        this.name = `NotImplentedException`
    }
}