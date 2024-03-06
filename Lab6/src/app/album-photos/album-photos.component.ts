import { Component } from '@angular/core';
import {RouterOutlet, RouterModule} from '@angular/router';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {

}
