import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidatorsService } from '../../../shared/validators/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup = this.fb.group ({
    name: ['', [ Validators.required, Validators.pattern( this.vs.completeNamePattern ) ] ],
    email: ['', [ Validators.required, Validators.pattern( this.vs.emailPattern ) ] ],
    username: ['', [ Validators.required, this.vs.userBanned  ] ],
    password: ['', [ Validators.required, Validators.minLength(6)  ] ],
    confirmPassword: ['', [ Validators.required ] ],
  },
   {
    validators: [ this.vs.samePasswords('password', 'confirmPassword') ]
   })

  constructor( private fb: FormBuilder,
               private vs: ValidatorsService ) { }

  ngOnInit(): void {

    this.registerForm.reset({
      name: 'Ivan Gaona',
      email: 'test@test.com',
      username: 'ivan.lg.1992'

    })
  }

  showErrorMessage( field: string ) {

    return this.registerForm.get(field)?.invalid
           &&
           this.registerForm.get(field)?.touched;

  }

  submitForm() {

    console.log( this.registerForm )

    this.registerForm.markAllAsTouched();
  }

}
