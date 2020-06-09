import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }
  getCurrencyDetails(currency, currencyTo, amount): Observable<any> {
    return this.http.get(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=${currencyTo}`).pipe(map((res: Response) => res), catchError((error) => throwError(
      {
        status: error.status
      }
    )))
  }
}
