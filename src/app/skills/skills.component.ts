import { Component, Input, OnInit } from '@angular/core';
import { Skills } from 'src/interfaces/Skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Input() skills!: Skills[];

  groupedSkills!: Map<string, Skills[]>;

  ngOnInit(): void {
    let groupedSkillsMap: Map<string, Skills[]> = new Map();
    for (let skill of this.skills) {
      if (!groupedSkillsMap.has(skill.type)) {
        let skillsList = [skill];
        groupedSkillsMap.set(skill.type, skillsList);
      } else {
        groupedSkillsMap.get(skill.type)?.push(skill);
      }
    }
    this.groupedSkills = groupedSkillsMap;
  }
}
