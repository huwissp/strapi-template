import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StrapiService } from 'src/app/services/strapi.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  
  constructor(
    public strapi : StrapiService, 
    public route : ActivatedRoute) {
    this.route.params.subscribe(params => {
      if(params.hasOwnProperty('item')){
        this.item = params.item;
        this.loadItem(params.collection + "?slug=" + params.item)
      }
    })
  }

  item = {};
  loadItem(item){
    this.strapi.grabContent(item).then((item : any) =>{
      this.item = item[0];
    })
  }

  ngOnInit(): void {
  }

}
