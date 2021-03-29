import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { ItemComponent } from './collection/item/item.component';

const routes: Routes = [
  { path : ":collection", component : CollectionComponent},
  { path : ":collection/:item", component : ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
