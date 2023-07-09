import { Component, Input } from '@angular/core';
import { EducationalBackground } from 'src/interfaces/EducationalBackground';

@Component({
  selector: 'app-educational-background',
  templateUrl: './educational-background.component.html',
  styleUrls: ['./educational-background.component.scss'],
})
export class EducationalBackgroundComponent {
  @Input() education!: EducationalBackground[];
}
