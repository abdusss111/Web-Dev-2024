import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {Album} from "../models";
import {CommonModule} from "@angular/common";
import {AlbumsService} from "../albums.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  newAlbum: Album;
  loaded: boolean = false;

  constructor(private AlbumsService: AlbumsService) {
    this.newAlbum = {
      userId: 11,
      id: 101,
      title: '',
    }
  }

  ngOnInit() {
    this.getAlbums()
  }

  addAlbum() {
    this.AlbumsService.createAlbum(this.newAlbum).subscribe((album) => {
      this.albums.unshift(album);
      alert('Album created');
      this.newAlbum = {} as Album;
    });
  }

  getAlbums() {
    // this.posts = POSTS;
    this.loaded = false;
    this.AlbumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((p) => p.id !== id);
    this.AlbumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted');
    });
  }



}
