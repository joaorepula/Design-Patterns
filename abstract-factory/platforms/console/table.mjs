import TableComponent from "../../shared/base/tablecComponent.mjs";

export default class TableConsoleComponent extends TableComponent {
    render(data){
        console.log(JSON.parse(data))
    }
}