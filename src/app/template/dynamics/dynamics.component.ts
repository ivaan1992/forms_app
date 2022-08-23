import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: []
})
export class DynamicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log('Form posted!!')
  }

}
