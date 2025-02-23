import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  categories = ['Смартфоны', 'Ноутбуки', 'Телевизоры', 'Аксессуары'];
  selectedCategory: string | null = null;
  isMenuOpen = false;

  products: { 
    [key: string]: { name: string; price: number; image:string; rating:number, likes: number, link: string }[] } = {
    'Смартфоны': [
      { name: 'iPhone 13', 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        price: 19990,
        rating: 4.8, 
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
      },
      { name: 'Samsung Galaxy S23',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 
        price: 24990, 
        rating: 4.8,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
      }
    ],
    'Ноутбуки': [
      { name: 'MacBook Air M2', 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        price: 99990, 
        rating: 4.8,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
        },
      { name: 'Asus ROG', 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 
        price: 129990, 
        rating: 4.8,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
      }
    ],
    'Телевизоры': [
      { name: 'Samsung QLED', 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 
        price: 59990, 
        rating: 4.8,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
      },
      { name: 'LG OLED', 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 
        price: 69990, 
        rating: 4.8,
        likes: 0 ,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
      }
    ],
    'Аксессуары': [
      { name: 'AirPods Pro', 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 
        price: 19990, 
        rating: 4.8,
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
      },
      { name: 'Apple Watch', 
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 
        price: 29990,
        rating: 4.8, 
        likes: 0,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
      }
    ]
  };

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.isMenuOpen = false; 
  }
}
