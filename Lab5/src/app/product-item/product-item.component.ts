import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: { name: string, price: number, likes: number };
  @Output() remove = new EventEmitter<void>();

  likeProduct() {
    this.product.likes++;
  }

  removeProduct() {
    this.remove.emit();
  }
}
