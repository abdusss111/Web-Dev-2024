import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component"
import {AboutComponent} from "./about/about.component"
import {AlbumDetailsComponent} from "./album-details/album-details.component"
import {AlbumsComponent} from "./albums/albums.component"
import {NotFoundComponent} from "./not-found/not-found.component"
import {AlbumPhotosComponent} from "./album-photos/album-photos.component"

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'about', component: AboutComponent, title: 'About'},
  {path: 'albums', component: AlbumsComponent, title: 'Albums'},
  {path: 'albums/:id', component: AlbumDetailsComponent, title: 'Post Detail'},
  {path: 'albums/:id/photos', component: AlbumPhotosComponent, title: 'Album Photos'},
  {path: '**', component: NotFoundComponent, title: '404 Not Found'}
];
