import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { InputboxComponent } from '../inputbox/inputbox.component';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [DetailsComponent, InputboxComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
