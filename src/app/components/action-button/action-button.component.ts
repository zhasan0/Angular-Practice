import {Component, OnInit} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {ICellRendererParams} from 'ag-grid-community';
import {ChannelService} from 'src/app/services/channel.service';
import {DataService} from 'src/app/services/data.service';

@Component({
  selector: 'app-action-button',
  template: `
    <button class="btn btn-danger btn-sm" (click)="onClickDelete($event)">Delete</button>
  `,
  styles: []
})
export class ActionButtonComponent implements OnInit, ICellRendererAngularComp {

  value: any;
  params: any;
  grid: any;


  constructor(private dataService: DataService, private chService: ChannelService) {
  }

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
    this.params = params;
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
  }

  onClickDelete(event: any) {
    let id = this.params.data.id;
    let selectedNode = this.params.node;
    let selectedData = selectedNode.data;

    this.dataService.deleteData(id).subscribe(res => {
      let json = JSON.parse(JSON.stringify(res));
      if (json.code == 200) {
        this.params.api.updateRowData({remove: [selectedData]});
      }
    });
  }

}
