import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: []
})
export class BasicsComponent {
  myForm: FormGroup = new FormGroup({
    'name': new FormControl('Iphone 13 Pro Max')
  })


  constructor() { }

}
