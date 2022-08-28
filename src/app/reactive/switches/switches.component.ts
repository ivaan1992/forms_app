import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: []
})
export class SwitchesComponent {

  switchForm: FormGroup = this.fb.group({

  })

  person = {
    genre: 'M',
    notif: true,
  }


  constructor( private fb: FormBuilder ) { }

}
