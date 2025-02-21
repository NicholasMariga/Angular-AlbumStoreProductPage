
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Product } from './product'
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: Http) { }


  //That getAlbum() method should return the result of a call 
  //to this._http.get(), and that get() method should take _albumUrl as a parameter.
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }

  getProducts(): Observable<Product[]>{
    return this._http.get(this._productsUrl).map((response) =><Product[]>response.json());
  }

}



