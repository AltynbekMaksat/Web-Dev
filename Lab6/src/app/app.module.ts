import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        AlbumsComponent,
        AlbumDetailComponent,
        AlbumPhotosComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule // AppRoutingModule уже включает RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
