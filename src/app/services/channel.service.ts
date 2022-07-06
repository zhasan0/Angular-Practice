import {Injectable} from '@angular/core';
import {DependServiceService} from "./depend-service.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  url: string = "http://localhost/react-app-backend/public";

  constructor(private dService: DependServiceService, private http: HttpClient) {
    console.log(dService.testFunc())
  }

  products(): Observable<any> {
    const products = this.http.get<any>(`${this.url}/api/productList`);
    return products;
  }

  display() {
    return "Welcome to Angular World!";
  }

  getValue(v: string) {
    console.log(v);
  }
}
