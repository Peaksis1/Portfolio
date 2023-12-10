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
      instituteImage: 'assets/images/university-image.jpeg',
      location: 'Lucknow',
    },
    {
      degree: 'Senior School Certificate (XII)',
      university: 'J.T Golden Jubilee School',
      score: '83.2%',
      startDate: '2016',
      endDate: '2017',
      instituteImage: 'assets/images/school-pic.jpeg',
      location: 'Prayagraj',
    },
    {
      degree: 'Secondary School Certificate (X)',
      university: 'J.T Golden Jubilee School',
      score: '9.0 CGPA',
      startDate: '2014',
      endDate: '2015',
      instituteImage: 'assets/images/school-pic.jpeg',
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
      organizationLogo: 'assets/images/briefcase-illustration.jpeg',
      jobTitles: [
        {
          startDate: 'Aug 2021',
          role: 'Product Engineer',
          location: 'Pune, India',
          endDate: 'Present',
          contribution: [
            'Worked towards the development of a new-to-the-market product going to be launched by TCS, achieving 100% on-time delivery, zero code smell, and 100% uptime across 6 progressive web applications in an Agile Scrum team',
            'Designed and implemented Java-based backends using the Spring Boot framework. Ensured code reliability through comprehensive unit and integration testing using Junit and Mockito. Documented the applications using Javadoc Tools',
            'Designed and developed user interfaces of the applications using Angular framework along with HTML, CSS3, Bootstrap and TypeScript',
            'Contributed to the development of a low code framework, reducing development time for custom apps by 80%. Also, developed a VSCode extension using Typescript to automate the process of generating boilerplate code for the framework',
            'Configured Azure pipelines for seamless CI/CD processes',
            'Assisted in designing the database schema and modelling the DB of web applications using OWL. Created java utilities to generate entities using only OWL file, reducing effort to create a relational database by 90%',
            'Mentored 5 junior engineers on established coding methodologies and standards. Also conducted interviews to onboard new junior Java Full stack developers',
          ],
        },
      ],
    },
    {
      organization: 'Kyrion technologies',
      organizationLogo: 'assets/images/briefcase-illustration.jpeg',
      jobTitles: [
        {
          startDate: 'Jun 2020',
          endDate: 'July 2020',
          role: 'Full Stack Intern',
          location: 'Prayagraj, India',
          contribution: [
            'Developed a centralized web application aggregating categorical news from 24 trusted online sources',
            'Designed and implemented an intuitive user interface using HTML, CSS, JavaScript, and Bootstrap',
            'Engineered backend services with Django for scalability and rapid development',
            'Automated news retrieval using Beautiful Soup Python library for efficient data gathering',
          ],
        }
      ],
    },
    {
      organization: 'Microsoft Technology Associate',
      organizationLogo: 'assets/images/briefcase-illustration.jpeg',
      jobTitles: [
        {
          startDate: 'Jun 2019',
          endDate: 'July 2019',
          role: 'Machine Learning intern',
          location: 'Prayagraj, India',
          contribution: [
            'Responsible for developing a web app which recognizes 38 different types of crops diseases using leaves images.',
            'Designed and developed an intuitive UX with HTML, CSS3, and JavaScript',
            'Implemented a high-accuracy (99.1%) Convolutional Neural Network model using Keras and TensorFlow',
          ],
        },
      ],
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
