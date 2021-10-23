
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }


  //That getAlbum() method should return the result of a call 
  //to this._http.get(), and that get() method should take _albumUrl as a parameter.
  getAlbum(id: number) {

    return this._http.get(this._albumUrl);

  }

}



