import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-strengths-card',
  templateUrl: './strengths-card.component.html',
  styleUrls: ['./strengths-card.component.scss']
})
export class StrengthsCardComponent implements OnInit {

  @Input() strengths = {
    title: '',
    icon: '',
    description: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
