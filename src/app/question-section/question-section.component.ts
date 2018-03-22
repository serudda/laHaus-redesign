import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-section',
  templateUrl: './question-section.component.html',
  styleUrls: ['./question-section.component.scss']
})
export class QuestionSectionComponent implements OnInit {

  private selected: string;

  constructor() { }

  ngOnInit() {
  }

  select(id: string) {
    this.selected = (this.selected === id ? null : id);
  }

  isActive(id: string) {
    return this.selected === id;
  }

}
