import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/albums`);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/albums/${id}`);
  }

  updateAlbum(album: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/albums/${id}`);
  }

  getPhotos(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/albums/${albumId}/photos`);
  }
}
