import { Component, Input } from '@angular/core';
import { Experience } from 'src/interfaces/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() experiences!: Experience[];
}