import { Component } from '@angular/core';
import { About } from 'src/interfaces/About';
import { EducationalBackground } from 'src/interfaces/EducationalBackground';
import { Experience } from 'src/interfaces/Experience';
import { Skills } from 'src/interfaces/Skills';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeInfo = 'about';

  title = 'prakhars-portfolio';
  userName = 'Prakhar Srivastava';
  userRoles = ['Software Engineer', 'Full-stack Developer', 'Programmer'];

  about: About = {
    bio: ' a full stack developer with 2 years of experience in Java and Angular. I specialize in building and occasionally designing innovative digital experiences while complying with coding standards and technical requirements. Problem solver and strong communicator motivated to continue refining my J2EE and Frontend skills through targeted mentorship and challenging projects.',
    address: 'Pune, Maharashtra',
    country: 'India',
    email: 'peaks786@gmail.com',
    age: this.getAgeFromDate(),
    contact: '+91 6392940422',
    facts: [
      {
        details: 'Developed and deployed 6+ apps',
        icon: 'fa fa-code',
      },
      {
        details: 'Over 15 awards',
        icon: 'fa fa-code',
      },
    ],
  };

  education: EducationalBackground[] = [
    {
      degree: 'Bachelor of technology in Computer Science',
      university: 'Dr. APJ Abdul Kalam Technical University',
      score: '8.41 CGPA',
      startDate: '2017',
      endDate: '2021',
      instituteImage: '../../assets/images/university-image.jpeg',
      location: 'Lucknow',
    },
    {
      degree: 'Senior School Certificate (XII)',
      university: 'J.T Golden Jubilee School',
      score: '83.2%',
      startDate: '2016',
      endDate: '2017',
      instituteImage: '../../assets/images/school-pic.jpeg',
      location: 'Prayagraj',
    },
    {
      degree: 'Secondary School Certificate (X)',
      university: 'J.T Golden Jubilee School',
      score: '9.0 CGPA',
      startDate: '2014',
      endDate: '2015',
      instituteImage: '../../assets/images/school-pic.jpeg',
      location: 'Prayagraj',
    },
  ];

  skills: Skills[] = [
    {
      name: 'Angular',
      image: 'devicon-angularjs-plain',
      type: 'Front-end',
    },

    {
      name: 'HTML',
      image: 'devicon-html5-plain',
      type: 'Front-end',
    },
    {
      name: 'CSS3',
      image: 'devicon-css3-plain',
      type: 'Front-end',
    },
    {
      name: 'Typescript',
      image: 'devicon-typescript-plain',
      type: 'Front-end',
    },
    {
      name: 'Webpack',
      image: 'devicon-webpack-plain',
      type: 'Front-end',
    },
    {
      name: 'Chrome devtools',
      image: 'devicon-chrome-plain',
      type: 'Front-end',
    },
    {
      name: 'Bootstrap',
      image: 'devicon-bootstrap-plain',
      type: 'Front-end',
    },
    {
      name: 'J2EE',
      image: 'devicon-java-plain',
      type: 'Back-end',
    },
    {
      name: 'Spring boot',
      image: 'devicon-spring-plain',
      type: 'Back-end',
    },
    {
      name: 'PostgreSQL',
      image: 'devicon-postgresql-plain',
      type: 'Data',
    },
    {
      name: 'MySQL',
      image: 'devicon-mysql-plain',
      type: 'Data',
    },
    {
      name: 'Azure',
      image: 'devicon-azure-plain',
      type: 'Data',
    },
    {
      name: 'JUnit',
      image: 'devicon-java-plain',
      type: 'Back-end',
    },
    {
      name: 'Python',
      image: 'devicon-python-plain',
      type: 'Back-end',
    },
    {
      name: 'Mockito',
      image: 'devicon-java-plain',
      type: 'Back-end',
    },
    {
      name: 'Azure DevOps',
      image: 'devicon-azure-plain',
      type: 'DevOps',
    },
    {
      name: 'Git',
      image: 'devicon-git-plain',
      type: 'DevOps',
    },
    {
      name: 'Gerrit',
      image: 'devicon-git-plain',
      type: 'DevOps',
    },
    {
      name: 'Github',
      image: 'devicon-github-plain',
      type: 'DevOps',
    },
    {
      name: 'VsCode',
      image: 'devicon-vscode-plain',
      type: 'DevOps',
    },
    {
      name: 'Jupyter notebook',
      image: 'devicon-jupyter-plain',
      type: 'DevOps',
    },
  ];

  experiences: Experience[] = [
    {
      organization: 'Tata Consultancy Services',
      startDate: 'Aug 2021',
      role: 'Product Engineer',
      endDate: 'Present',
      contribution: [
        'Worked towards the development of a new-to-the-market product going to be launched by TCS',
        'Developed, tested, debugged, documented, and deployed 6 progressive web applications working in an agile scrum team',
        'Designed and developed UX of the applications using Angular framework along with HTML, CSS3, Bootstrap and TypeScript',
        'Developed backend of the applications using Spring Boot framework and performed unit and integration testing of the same using Junit and Mockito. Also, used Javadoc Tools to document the backend services',
        'Worked with low code framework (developed by unit, also, contributed towards its development) to develop custom apps rapidly. Also, developed a VSCode extension using Typescript to automate the process of generating boilerplate code',
      ],
    },
    {
      organization: 'Kyrion technologies',
      startDate: 'Jun 2021',
      endDate: 'July 2021',
      role: 'Full Stack Intern',
      contribution: ['', ''],
    },
  ];

  private getAgeFromDate(dob: string = '1999-11-23'): number {
    let currentTime = new Date().getTime();
    let birthDateTime = new Date(dob).getTime();
    let difference = currentTime - birthDateTime;
    return difference / (1000 * 60 * 60 * 24 * 365);
  }

  changeActiveInfo(event: string) {
    switch (event) {
      case 'about':
        this.activeInfo = 'about';
        break;
      case 'education':
        this.activeInfo = 'education';
        break;
      case 'experience':
        this.activeInfo = 'experience';
        break;
      case 'skills':
        this.activeInfo = 'skills';
        break;
      case 'awards':
        this.activeInfo = 'awards';
        break;
      default:
        this.activeInfo = 'about';
    }
  }
}
