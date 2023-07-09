import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() username!: string;

  @Input() roles!: string[];

  @Output()
  showInfoEvent: EventEmitter<string> = new EventEmitter<string>();

  headerSections = [
    {
      name: 'ABOUT',
      id: 'about',
      link: '#about',
      icon: 'fa fa-id-card-alt',
    },
    {
      name: 'EDUCATION',
      id: 'education',
      link: '#education',
      icon: 'fa fa-graduation-cap',
    },
    {
      name: 'EXPERIENCE',
      id: 'experience',
      link: '#experience',
      icon: 'fa fa-briefcase',
    },
    {
      name: 'SKILLS',
      id: 'skills',
      link: '#skills',
      icon: 'fa fa-star',
    },
    {
      name: 'AWARDS',
      id: 'awards',
      link: '#awards',
      icon: 'fa fa-trophy',
    },
  ];

  onClickEmit(infoType: string) {
    this.showInfoEvent.emit(infoType);
  }
}
