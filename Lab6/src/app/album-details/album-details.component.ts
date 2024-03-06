import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Observable} from "rxjs";
import {Album} from "../models";
import {AlbumsService} from "../albums.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailsComponent implements OnInit {
  album!: Album;
  loaded!: boolean;

  constructor(private route: ActivatedRoute,
              private AlbumsService: AlbumsService) {
  }

  ngOnInit() {
    this.getAlbum();
  }

  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('albumId'));
      this.loaded = false;
      this.AlbumsService.getAlbum(albumId).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }


}
