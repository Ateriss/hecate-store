import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  data: any;

  constructor(private dataService: ApiService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
      // Haz lo que necesites con los datos
    });
  }
  

}
