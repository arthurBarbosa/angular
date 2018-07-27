import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-detail-categoria',
  templateUrl: './detail-categoria.component.html',
  styleUrls: ['./detail-categoria.component.scss']
})
export class DetailCategoriaComponent implements OnInit {

  categorias$:Object;

  constructor(private route: ActivatedRoute, private categoriaService: CategoriasService) {
    this.route.params.subscribe(params => this.categorias$ = params.id);
   }
  ngOnInit() {
    this.categoriaService.getCategoria(this.categorias$).subscribe(categoriaService=>this.categorias$=categoriaService);
  }

}
