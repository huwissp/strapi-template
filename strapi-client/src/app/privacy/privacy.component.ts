import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

 
  constructor(
    public strapi: StrapiService
  ) { }

  data: any = {};

  ngOnInit(): void {
    this.strapi.grabContent("privacy").then(data => {
      this.data = data
    });
  }

}
