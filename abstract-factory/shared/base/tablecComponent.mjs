import NotImplentedException from '../notImplementedException.mjs'

export default class TableComponent{
    render(data){
        throw new NotImplentedException(this.render.name)
    }
}