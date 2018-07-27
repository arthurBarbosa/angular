import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],

  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter',
        [
          style({opacity: 0, transform:'translateY(-15px)'}),
          stagger('50ms',
          animate('550ms ease-out',
          style({opacity: 5, transform: 'translateY(0px)'})
      )
    )
    ],
    { optional: true }
  ),
      query(':leave', animate('50ms', style({opacity:0})),{
        optional:true
      })
      ])
    ])
  ]
})


export class CategoriasComponent implements OnInit {
  
  categorias$: Object;
  
  constructor(private categorias: CategoriasService) { }

  ngOnInit() {
    this.categorias.getCategorias().subscribe(categorias=>this.categorias$ = categorias);
  }

}
