import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums/albums.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
  standalone: false,
  imports: [RouterModule]
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    const albumId = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.getPhotos(albumId).subscribe(photos => this.photos = photos);
  }

  goBack(): void {
    this.router.navigate(['/albums', this.route.snapshot.paramMap.get('id')]);
  }
}
