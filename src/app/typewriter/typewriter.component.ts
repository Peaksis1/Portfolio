import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.scss'],
})
export class TypewriterComponent implements AfterViewInit, OnInit {
  @Input() roles!: string[];

  role!: string;

  i = 0;

  ngOnInit(): void {
    this.role = '';
  }

  private typingEffect(): void {
    const word = this.roles[this.i].split('');

    const loopTyping = () => {
      if (word.length > 0) {
        this.role += word.shift();
      } else {
        setTimeout(this.deletingEffect, 1500);
        return;
      }
      setTimeout(loopTyping, 150);
    };
    loopTyping();
  }

  private deletingEffect = () => {
    const word = this.roles[this.i].split('');
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.role = word.join('');
      } else {
        this.i = this.roles.length > this.i + 1 ? this.i + 1 : 0;

        this.typingEffect();
        return;
      }
      setTimeout(loopDeleting, 80);
    };
    loopDeleting();
  };

  ngAfterViewInit(): void {
    this.typingEffect();
  }
}
