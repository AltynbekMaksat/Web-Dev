import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums/albums.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  standalone: false,
  imports: [RouterModule]
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  editedTitle: string = '';

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.getAlbum(id).subscribe(album => {
      this.album = album;
      this.editedTitle = album.title;
    });
  }

  saveTitle(): void {
    const updatedAlbum = { ...this.album, title: this.editedTitle };
    this.albumsService.updateAlbum(updatedAlbum).subscribe(() => {
      this.album.title = this.editedTitle;
      this.router.navigate(['/albums']);
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
