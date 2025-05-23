import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss',
})
export class ProgressComponent {
  progressStats = [
    { label: 'Testele finalizate', value: 75 },
    { label: 'Timpul petrecut', value: 60 },
    { label: 'Scor mediu', value: 80 },
  ];
}
