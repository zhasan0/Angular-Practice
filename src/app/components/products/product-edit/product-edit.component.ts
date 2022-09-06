import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: any;
  data: any;
  product = new Product();

  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id'])
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    return this.dataService.getDataById(this.id).subscribe(res => {
      this.data = res;
      this.product = this.data;
    })
  }

  updateData(){
    return this.dataService.updateData(this.id, this.data).subscribe(res => {
      let json = JSON.parse(JSON.stringify(res));
      alert(json.msg);
    });
  }

}
