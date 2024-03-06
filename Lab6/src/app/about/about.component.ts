import { Component } from '@angular/core';
import {RouterOutlet, RouterModule} from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
