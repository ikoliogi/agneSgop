import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loop-products',
  templateUrl: './loop-products.component.html',
  styleUrls: ['./loop-products.component.scss']
})
export class LoopProductsComponent implements OnInit {

  public products = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get('https://simple-api.develobird.gr/products')
      .subscribe((r: any) => {
        this.products = r.products;
        console.log(this.products);
      });

  }

}
