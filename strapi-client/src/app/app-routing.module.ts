import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { ItemComponent } from './collection/item/item.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path : "contact", component : ContactComponent},
  { path : "about", component : AboutComponent},
  { path : ":collection", component : CollectionComponent},
  { path : ":collection/:item", component : ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
