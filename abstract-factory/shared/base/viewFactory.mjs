import NotImplentedException from '../notImplementedException.mjs'

export default class ViewFactory{
    createTable(){
        throw new NotImplentedException(this.createTable.name)
    }
}