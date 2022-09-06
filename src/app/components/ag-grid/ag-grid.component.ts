import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular, AgGridModule} from "ag-grid-angular";
import {CellClickedEvent, ColDef, ICellRendererParams} from "ag-grid-community";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CustomCellComponent} from "./custom-cell/custom-cell.component";

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  rowData$!: Observable<any[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json')
  }

  columnDefs: ColDef[] = [
    {
      field: 'make', cellRenderer: CustomCellComponent, width: 230,
      cellRendererParams: {
        buttonText: "Name"
      },
      checkboxSelection: true,
      headerCheckboxSelection: true
    },
    {
      field: 'model', cellRenderer: CustomCellComponent, cellRendererParams: {
        buttonText: "Model"
      }
    },
    {
      field: 'price', cellRenderer: (params: ICellRendererParams) => {
        if (params.value > 32000) {
          return `<span style="color: green;">Over</span> ${params.value}`
        } else {
          return `<span style="color: red;">Under</span> ${params.value}`
        }
      }
    }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  }

  onCellClicked(event: CellClickedEvent) {
    console.log(event);
  }

  clearSelection() {
    this.agGrid.api.deselectAll();
  }

}
