import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

import * as marked from 'marked';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  @ViewChild('portfolio') portfolio: ElementRef<HTMLElement>;

  constructor(private http: HttpClient, private renderer: Renderer2) {}

  ngOnInit() {
    this.http.get('/assets/README.md', { responseType: 'text' }).toPromise().then(md => {
      const html = marked(md);
      this.renderer.setProperty(this.portfolio.nativeElement,'innerHTML', html);

      this.portfolio.nativeElement.querySelectorAll('table').forEach((table) => {
        table.style.setProperty('margin', 'auto');
      });

      this.portfolio.nativeElement.querySelectorAll('ul').forEach((ul) => {
        ul.classList.add('card');
        ul.classList.add('shadow-inset');
        ul.classList.add('rounded');
        ul.style.setProperty('padding-top', '15px');
        ul.style.setProperty('padding-bottom', '15px');
        ul.style.setProperty('padding-left', '3.5rem');
        ul.style.setProperty('padding-right', '3.5rem');
        ul.style.setProperty('margin-left', '10%');
        ul.style.setProperty('margin-right', '10%');
        ul.style.setProperty('text-align', 'left')
      });

      this.portfolio.nativeElement.querySelectorAll('h1').forEach((h1) => {
        h1.style.setProperty('margin-top', '60px');
        h1.style.setProperty('margin-bottom', '30px');
      });

      this.portfolio.nativeElement.querySelectorAll('h2').forEach((h2) => {
        h2.style.setProperty('margin-top', '60px');
        h2.style.setProperty('margin-bottom', '30px');
      });

    });
  }

}
