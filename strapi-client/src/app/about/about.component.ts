import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public strapi: StrapiService
  ) { }

  data: any = {};

  ngOnInit(): void {
    this.strapi.grabContent("about").then(data => {
      this.data = data
    });
  }


}
