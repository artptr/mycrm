import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  years: string;

  constructor() {
    const startYear = 2018;
    const currentYear = new Date().getFullYear();
    this.years = startYear === currentYear
      ? startYear.toString()
      : `${startYear}-${currentYear}`;
  }

}
