import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  private baseUrl = "http://13.59.44.96:8083";
  //  private baseUrl = 'http://localhost:8080/exmachina/api';

  constructor(private http: HttpClient) {}

  getCount(payload: any): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/api/companies/progressive-filter-counts`,
      payload
    );
  }
  getCompanyById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/companies/${id}`);
  }

  getCompanyCluster(
    payload: any,
    pageNo: number,
    pageSize: number
  ): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/filter/company/combined?pageNo=${pageNo}&pageSize=${pageSize}`,
      payload
    );
  }

  getBalanceSheetDataByPeriod(
    companyTicker: string,
    min: number,
    max: number
  ): Observable<any> {
    return this.http.get(
      `https://zwb4vdb40c.execute-api.us-east-2.amazonaws.com/dev/api/balance-sheet/${companyTicker}?start=${min}&end=${max}`
    );
  }
}
