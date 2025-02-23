import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: { name: string, price: number, likes: number }[] = [];

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}
