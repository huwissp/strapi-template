import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-gdpr',
  templateUrl: './gdpr.component.html',
  styleUrls: ['./gdpr.component.scss']
})
export class GdprComponent implements OnInit {

  
  constructor(
    public strapi: StrapiService
  ) { }

  data: any = {};

  ngOnInit(): void {
    this.strapi.grabContent("gdpr").then(data => {
      this.data = data
    });
  }

}
