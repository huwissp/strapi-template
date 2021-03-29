import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StrapiService } from '../services/strapi.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  
  constructor(public strapi : StrapiService, public route : ActivatedRoute) {
    this.route.params.subscribe(params => {
      if(params.hasOwnProperty('collection')){
        this.collection = params.collection;
        this.loadCollection(params.collection)
      }
    })
  }
  collection = "";
  items = [];
  loadCollection(collection){
    this.strapi.grabContent(collection).then((items : any) =>{
      this.items = items;
    })
  }

  ngOnInit(): void {
  }

}
