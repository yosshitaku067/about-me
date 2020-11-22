import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  strengthsList = [
    {
      icon: 'fas fa-cogs',
      title: 'System Design',
      description: 'Designing the system including all from the Front-end to the Back-end according to the request and solve the problem.'
    },
    {
      icon: 'far fa-lightbulb',
      title: 'PoC & Prototyping',
      description: 'Investigate the feasibility with rapid prototyping before deploying or developing a new system.'
    },
    {
      icon: 'fas fa-users',
      title: 'Team Management',
      description: 'Led 3 teams with 25 members and provided various solutions.'
    },
    {
      icon: 'fas fa-magic',
      title: 'Generative Art Programming',
      description: 'Interested in Generative Art, and I can make p5 and do various Visual Coding.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
