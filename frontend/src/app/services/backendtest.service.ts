import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendtestService {

  baseUrl = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  getHelloWorl() {
    return this.http.get(this.baseUrl, { "responseType": "text", observe: "response"})
  }
}
