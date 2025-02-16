import { Component } from '@angular/core';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { faTelegram } from '@fortawesome/free-brands-svg-icons';




interface Product {
  name: string;
  description: string;
  rating: number;
  image: string;
  images: string[];
  link: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // faWhatsapp = faWhatsapp
  // faTelegram = faTelegram
  products: Product[] = [
    {
      name: 'Apple iPhone 13',
      description: 'Apple iPhone 13 128Gb черный',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      name: 'Apple iPhone 16 Pro Max',
      description: 'Apple iPhone 16 Pro Max 256Gb черный',
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-8-gb-256-gb-chernyi-109914212/'
    },
    {
      name: 'Xiaomi Redmi 13C',
      description: 'Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=preview-large',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-8-gb-256-gb-chernyi-109914212/'
    },
    {
      name: 'Realme Note 50',
      description: 'Realme Note 50 3 ГБ/64 ГБ черный',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=preview-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      name: 'Samsung Galaxy A55 5G',
      description: 'Samsung Galaxy A55 5G 8 ГБ/256 ГБ темно-синий',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=preview-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      name: 'Apple iPhone 16',
      description: 'Apple iPhone 16 128Gb черный',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=preview-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      name: 'Samsung Galaxy S24 Ultra 5G',
      description: 'Samsung Galaxy S24 Ultra 5G 12 ГБ/512 ГБ серый',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h0f/84963708370974.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h10/h0f/84963708370974.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h10/h0f/84963708370974.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h10/h0f/84963708370974.png?format=preview-large',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-seryi-116044411/?c=750000000'
    },
    {
      name: 'Xiaomi 14 Ultra',
      description: 'Xiaomi 14 Ultra 16 ГБ/512 ГБ черный',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h86/h08/85506637168670.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h08/85506637168670.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h08/85506637168670.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h08/85506637168670.jpg?format=preview-large',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-seryi-116044411/?c=750000000'
    },
    {
      name: 'Xiaomi Mix Fold 2',
      description: 'Xiaomi Mix Fold 2 China version 12 ГБ/512 ГБ черный',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/h64/84160703594526.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he7/h64/84160703594526.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he7/h64/84160703594526.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he7/h64/84160703594526.jpg?format=preview-large',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-seryi-116044411/?c=750000000'
    },
    {
      name: 'Vivo X100',
      description: 'Vivo X100 16 ГБ/512 ГБ голубой',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he6/h92/85601657749534.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/he6/h92/85601657749534.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he6/h92/85601657749534.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/he6/h92/85601657749534.png?format=preview-large',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-seryi-116044411/?c=750000000'
    },
  ];

  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
  }

  shareOnTelegram(link: string) {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
