import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IBurger, IMenu, IProduit } from '../models';
import { CatalogueService } from '../Service/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  menus!:IMenu[];
  burgers!:IBurger[];
  @Input() produit!: IProduit
  @Input() burger!:IBurger
  urlImage="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  constructor(private catalogueService:CatalogueService,private sanitizer:DomSanitizer,private router:Router) { }

  ngOnInit() {
    this.catalogueService.getCatalogueDb().subscribe(
      data=>{
        // console.log(data.produit.menu);
        // console.log(data.produit.burger);
        
        this.burgers=data.produit.burger;
        this.menus=data.produit.menu;
      }
    )
  }
  transform(params: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + params)
  }
  detailBurger() {
    // this.router.navigateByUrl(`burger/${this.burger.id}`);
    console.log(this.burger.id);
    
  }
  

}
