import {Component, OnInit} from '@angular/core';
import {Routes} from "@angular/router";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: any;
  product = new Product();

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.getFileUrl();
  }

  getProducts() {
    this.dataService.getData().subscribe(res => {
      this.products = res;
    });
  }

  getFileUrl() {
    return this.dataService.fileUrl;
  }

  insertData() {
    this.dataService.insertData(this.product).subscribe(res => {
      this.getProducts();
    });
  }

  deleteData(id: any) {
    this.dataService.deleteData(id).subscribe(res => {
      this.getProducts();
    });
  }
}
