import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }
  get CurrencyOptions() {
    return [{
      value: 'USD',
      label: 'USD'
    },
    {
      value: 'CAD',
      label: 'CAD'
    },
    {
      value: 'GBP',
      label: 'GBP'
    }, {
      value: 'EUR',
      label: 'EUR'
    }]
  };
}
