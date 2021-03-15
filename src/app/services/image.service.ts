import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  url = 'https://jsonplaceholder.typicode.com/photos';

  getData() {
    return this.http.get(this.url);
  }
}
