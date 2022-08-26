import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: []
})
export class DynamicsComponent {
  gameForm: FormGroup = this.fb.group({
    user: ['', [ Validators.required, Validators.minLength(3) ] ],
  })

  constructor( private fb: FormBuilder ) { }

  showErrorMessage( input: string ) {
    return this.gameForm.controls[input].errors
           &&
           this.gameForm.controls[input].touched
  }

  saveFormInfo() {
    if( this.gameForm.invalid ) {
      this.gameForm.markAllAsTouched();
      return;
    }

    console.log( this.gameForm.value )
  }


}
