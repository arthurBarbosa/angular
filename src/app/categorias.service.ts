import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get('http://localhost:8080/categorias');
  }

  getCategoria(categoriaId){
    return this.http.get('http://localhost:8080/categorias/'+categoriaId);
  }

}
