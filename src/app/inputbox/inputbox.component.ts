import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-inputbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inputbox.component.html',
  styleUrl: './inputbox.component.css'
})
export class InputboxComponent {
  inputValue: string = '';
}
