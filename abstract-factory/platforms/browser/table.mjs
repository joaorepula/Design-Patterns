import TableComponent from "../../shared/base/tablecComponent.mjs";

export default class TableBrowserComponent extends TableComponent {
    render(data){
        window.alert(data)
    }
}