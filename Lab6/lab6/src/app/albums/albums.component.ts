import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {NgFor} from "@angular/common";
import {ALBUMS} from "../fake-db";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    NgFor,
    ALBUMS
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  constructor() {

  }
  ngOnInit() {

  }

  protected readonly NgFor = NgFor;
}
