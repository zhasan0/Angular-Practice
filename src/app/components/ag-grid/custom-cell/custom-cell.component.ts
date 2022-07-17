import {Component, OnInit} from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";


export interface customCallParams {
  buttonText?: string;
}


@Component({
  selector: 'app-custom-cell',
  template: `
    <button (click)="onClick($event)" class="me-2">
      <small>{{buttonText}}</small>
    </button> {{value}}
  `,
  styles: []
})

export class CustomCellComponent implements OnInit, ICellRendererAngularComp {

  value: any;
  buttonText: string = "Default";

  constructor() {
  }

  ngOnInit(): void {
  }

  agInit(params: ICellRendererParams & customCallParams): void {
    this.value = params.value;
    this.buttonText = params.buttonText ?? "Default";
  }

  refresh(params: ICellRendererParams<any>): boolean {
    return false;
  }

  onClick(event: any) {
    alert("Call value is: " + this.value);
  }

}
