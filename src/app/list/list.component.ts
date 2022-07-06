import {Component, OnInit} from '@angular/core';
import {ChannelService} from "../services/channel.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: any;

  constructor(public chService: ChannelService){

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    return this.chService.products().subscribe((product => {
      this.products = product;
      console.log(this.products)
    }));
  }

}
