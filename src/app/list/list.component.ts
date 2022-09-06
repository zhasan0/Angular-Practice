import { Component, OnInit, ViewChild } from '@angular/core';
import { ChannelService } from "../services/channel.service";
import { Observable } from "rxjs";
import { AgGridAngular } from "ag-grid-angular";
import {
  CheckboxSelectionCallbackParams,
  ColDef,
  HeaderCheckboxSelectionCallbackParams,
  ICellRendererParams
} from "ag-grid-community";
import { DataService } from "../services/data.service";
import { ActionButtonComponent } from '../components/action-button/action-button.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: any;
  rowData$!: Observable<any[]>;
  frameworkComponents: any;
  grid: any;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private chService: ChannelService, private dataService: DataService) {
    this.frameworkComponents = {
      buttonRenderer: ActionButtonComponent
    }
  }

  ngOnInit(): void {
    this.getProducts();
    this.rowData$ = this.chService.products();
  }

  columnDefs: ColDef[] = [
    {
      field: 'name', checkboxSelection: true,
      headerCheckboxSelection: true, headerName: "Name"
    },
    { field: 'description', width: 280, headerName: "Description" },
    { field: 'price', headerName: "Price" },
    {
      headerName: 'Action', editable: false, checkboxSelection: false, width: 100, colId: "action",
      cellRenderer: ActionButtonComponent,
    },
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    editable: true
  }

  onGridReady(grid:any) {
    this.grid = grid;
  }

  clearSelection() {
    this.agGrid.api.deselectAll()
  }

  getProducts() {
    return this.chService.products().subscribe((product => {
      this.products = product;
    }));
  }
}

var checkboxSelection = function (params: CheckboxSelectionCallbackParams) {
  // we put checkbox on the name if we are not doing grouping
  return params.columnApi.getRowGroupColumns().length === 0;
};

var headerCheckboxSelection = function (params: HeaderCheckboxSelectionCallbackParams) {
  // we put checkbox on the name if we are not doing grouping
  return params.columnApi.getRowGroupColumns().length === 0;
};


