import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  skillList = [
    {
      icon: 'fab fa-angular',
      name: 'Angular'
    },
    {
      icon: '',
      name: 'Ionic'
    },
    {
      icon: 'fab fa-react',
      name: 'React'
    },
    {
      icon: 'fab fa-node-js',
      name: 'Node.js'
    },
    {
      icon: '',
      name: 'Express'
    },
    {
      icon: 'fab fa-git',
      name: 'Git'
    },
    {
      icon: 'fab fa-gitlab',
      name: 'GitLab'
    },
    {
      icon: 'fab fa-github',
      name: 'GitHub'
    },
    {
      icon: '',
      name: 'SVN'
    },
    {
      icon: 'fab fa-aws',
      name: 'AWS'
    },
    {
      icon: '',
      name: 'Microsoft Azure'
    },
    {
      icon: '',
      name: 'Microsoft Excel'
    },
    {
      icon: '',
      name: 'Microsoft Powerpoint'
    },
    {
      icon: '',
      name: 'Microsoft Word'
    },
    {
      icon: '',
      name: 'TypeScript'
    },
    {
      icon: '',
      name: 'JavaScript'
    },
    {
      icon: '',
      name: 'HTML5'
    },
    {
      icon: '',
      name: 'CSS/SCSS'
    },
    {
      icon: '',
      name: 'Swift'
    },
    {
      icon: '',
      name: 'Java'
    },
    {
      icon: '',
      name: 'Dart'
    },
    {
      icon: '',
      name: 'Flutter'
    },
    {
      icon: '',
      name: 'Android'
    },
    {
      icon: '',
      name: 'iOS'
    },
    {
      icon: '',
      name: 'Ubuntu'
    },
    {
      icon: '',
      name: 'Elasticsearch'
    },
    {
      icon: '',
      name: 'Kibana'
    },
    {
      icon: '',
      name: 'Logstash'
    },
    {
      icon: '',
      name: 'p5.js'
    },
    {
      icon: '',
      name: 'vis.js'
    },
    {
      icon: '',
      name: 'D3.js'
    },
    {
      icon: '',
      name: '.NET Core'
    },
    {
      icon: '',
      name: '.NET Framework'
    },
    {
      icon: '',
      name: 'Docker'
    },
    {
      icon: '',
      name: 'docker-compose'
    },
    {
      icon: '',
      name: 'draw.io'
    },
    {
      icon: '',
      name: 'Redmine'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
