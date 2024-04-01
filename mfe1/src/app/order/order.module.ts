import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { RouterModule, Routes } from '@angular/router';

const routeOrder: Routes = [
  {
    path: '',
    component: OrderComponent,
  },
];

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, RouterModule.forChild(routeOrder)],
})
export class OrderModule {
  constructor() {
    console.log('order');
  }
}
