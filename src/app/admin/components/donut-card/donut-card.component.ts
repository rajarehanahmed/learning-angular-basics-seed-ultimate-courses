import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-card',
  encapsulation: ViewEncapsulation.Emulated,
  template: `
      <div
        class="donut-card"
        [ngClass]="{
          'donut-card-promo': donut.promo
        }"
      >

        <img
          src="/assets/img/{{ donut.icon }}.svg"
          [alt]="donut.name"
          class="donut-card-icon"
        />
        <div class="donut-card-details">
          <div class="donut-card-name">
            <p>
              {{ donut.name }}
            </p>
          </div>
          <div class="donut-card-price">
            <p>
              {{ donut.price / 100 | currency: 'GBP':'symbol' }}
            </p>
          </div>
        </div>
      </div>
  `,
  styles: [
    `
      .donut-card {
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 5px 15px;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translateY(-4px);
        }
        &-promo {
          border: 2px solid #eee;
        }
        &-details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }
        &-name {
          font-size: 16px;
        }
        &-price {
          font-size: 14px;
          color: #c14583;
        }
        &-icon {
          width: 50px;
          margin-right: 10px;
        }
      }
    `,
  ]
})
export class DonutCardComponent {
  @Input() donut!: Donut;

  constructor() { }
}
