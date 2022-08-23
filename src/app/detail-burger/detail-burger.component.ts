import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IBurger, IProduit } from '../models';
import { CatalogueService } from '../Service/catalogue.service';

@Component({
  selector: 'app-detail-burger',
  templateUrl: './detail-burger.component.html',
  styleUrls: ['./detail-burger.component.scss'],
})
export class DetailBurgerComponent implements OnInit {
  burger!: IBurger
  burgers!: IBurger[]
  parametre!: number
  param!: string
  arrayProd!:IProduit[]
  constructor(private route:ActivatedRoute,private dbService:CatalogueService,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.parametre = this.route.snapshot.params[`id`];
    this.param = this.parametre.toString()
    this.dbService.getCatalogueDb().subscribe(
      data => {
        this.burgers = data.produit.burger;
        this.burger = this.dbService.getOnMenus(this.param, this.burgers);
        this.arrayProd = this.dbService.similarProducts(this.burger,this.burgers);
      }
      )
  }
  transform(params: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, ' + params)
  }

}
