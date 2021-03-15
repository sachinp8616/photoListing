import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  q = 1;
  images: any = [];

  data: any = [];

  constructor(private image: ImageService) {
    this.image.getData().subscribe((resp) => (this.images = resp));
  }

  ngOnInit(): void {}

  compare(image: any) {
    image.albumId = !image.albumId;
    this.data.push(image);
  }

  remove(id: any, image: any) {
    image.albumId = !image.albumId;

    let userIndex = this.data.findIndex((item: any) => item.id == id);
    this.data.splice(userIndex, 1);
  }
}
