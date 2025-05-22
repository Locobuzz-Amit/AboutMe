import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
showDetails = false;
  details = [
    { label: 'Age', value: '28' },
    { label: 'Gender', value: 'Male' },
    { label: 'Company', value: 'Locobuzz' },
    { label: 'Hobby', value: 'Traveling, Coding' },
    { label: 'Profession', value: 'C# Developer' }
  ];

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
