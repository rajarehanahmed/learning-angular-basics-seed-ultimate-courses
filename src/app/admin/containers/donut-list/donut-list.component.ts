import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
  <app-donut-card [donut]="donuts[0]"></app-donut-card>
  <app-donut-card [donut]="donuts[1]"></app-donut-card>
  <app-donut-card [donut]="donuts[2]"></app-donut-card>
  `,
  styles: [
  ]
})
export class DonutListComponent implements OnInit {
  donut!: Donut;
  donuts!: Donut[];

  constructor() { }

  ngOnInit(): void {
    this.donuts = [
      {
        'id': 1,
        'name': 'Glazed',
        'icon': 'glazed-fudge',
        'price': 119,
        'description': 'A delicious donut!',
      },
      {
        'id': 2,
        'name': 'Chocolate',
        'icon': 'just-chocolate',
        'price': 129,
        'promo': true,
        'description': 'A delicious chocolate donut!',
      },
      {
        'id': 3,
        'name': 'Caramel Swirl',
        'icon': 'caramel-swirl',
        'price': 149,
        'description': 'A delicious jelly donut!',
      }
    ],
    this.donut = this.donuts[2];
  }

}