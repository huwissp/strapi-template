import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

 
  constructor(
    public strapi: StrapiService
  ) { }

  data: any = {};

  ngOnInit(): void {
    this.strapi.grabContent("terms").then(data => {
      this.data = data
    });
  }

}
