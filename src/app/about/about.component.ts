import { Component, Input } from '@angular/core';
import { About } from 'src/interfaces/About';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() username!: string;
  @Input() about!: About;

  @Input() isActive!: boolean;

  getAge(age: number) {
    return Math.floor(age);
  }
}
