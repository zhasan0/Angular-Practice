import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "http://localhost/react-app-backend/public/api";
  fileUrl: string = "http://localhost/react-app-backend/public";

  constructor(private httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get(`${this.url}/productList`);
  }

  insertData(data: any) {
    return this.httpClient.post(this.url + "/addProduct", data);
  }

  deleteData(id: any) {
    return this.httpClient.delete(this.url + "/productDelete/" + id);
  }

  getDataById(id: any) {
    return this.httpClient.get(this.url + "/editProduct/" + id);
  }

  updateData(id: any, data: any) {
    return this.httpClient.put(this.url + "/updateProduct/" + id, data);
  }
}
