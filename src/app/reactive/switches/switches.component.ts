import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: []
})
export class SwitchesComponent implements OnInit {

  switchForm: FormGroup = this.fb.group({
    genre: ['M', Validators.required],
    notif: [ true, Validators.required ],
    conditions: [ false, Validators.required ]
  })

  person = {
    genre: 'F',
    notif: true
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {

    this.switchForm.reset({
      ...this.person,
      conditions: false
    })



  }



}
