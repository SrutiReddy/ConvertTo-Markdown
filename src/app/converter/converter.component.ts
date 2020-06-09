import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../shared/services/constants.service';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  currencyOptions: Array<any> = [];
  currencyOptionsTo;
  currencyOptionsFrom;
  currency = 'USD';
  currencyto = 'CAD';
  exchangeValue;
  convert;
  converted;
  constructor(private constantservice: ConstantsService, private api: ApiService) { }

  ngOnInit(): void {
    this.currencyOptions = this.constantservice.CurrencyOptions;
    this.handleCurrencyOptions();
    this.getCurrencyconverterValue();
  }
  getCurrencyconverterValue() {
    console.log(this.currency, this.currencyto);
    this.api.getCurrencyDetails(this.currency, this.currencyto, this.convert).subscribe(res => {
      console.log(res);
      this.converted = res.rates[this.currencyto];
    })
  }
  handleCurrencyChange() {
    this.handleCurrencyOptions();
    this.getCurrencyconverterValue();
    this.handleChangeValue();
  }
  handleChangeValue() {
    this.getCurrencyconverterValue();
  }
  handleCurrencyOptions() {
    console.log(this.currencyOptions);
    this.currencyOptionsTo = this.currencyOptions.filter(x => x.value !== this.currency);
    this.currencyOptionsFrom = this.currencyOptions.filter(x => x.value !== this.currencyto);
  }
}
