import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductManagementService {

  private apiUrl = 'https://ebackendapi.hnam3ak.ma/api/v1/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getBestSellers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/best-sellers`);
  }
  getSaleProducts(): Observable<{ success: boolean; data: any[] }> {
    return this.http.get<{ success: boolean; data: any[] }>(
      `${this.apiUrl}/on-sale`
    );
  }

  /**
 * Create new product
 */
  createProduct(formData: FormData): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/add`,
      formData
    );
  }


  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
