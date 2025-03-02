import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  standalone: false,
  imports: [RouterModule]
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumsService: AlbumsService, private router: Router) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(albums => this.albums = albums);
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }

  navigateToDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}
