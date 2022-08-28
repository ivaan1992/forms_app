import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: []
})
export class DynamicsComponent {
  gameForm: FormGroup = this.fb.group({
    user: ['', [ Validators.required, Validators.minLength(3) ] ],
    list: this.fb.array([
      ['Mortal Kombat', Validators.required],
      ['Mario', Validators.required],
      ['King Of Fighters', Validators.required],
    ], Validators.required  )

  })

  newGame: FormControl = new FormControl

  get listArr() {
    return this.gameForm.get('list') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }

  showErrorMessage( input: string ) {
    return this.gameForm.controls[input].errors
           &&
           this.gameForm.controls[input].touched
  }

  addGame() {
    if( this.newGame.invalid ) {
      return;
    }

    this.listArr.push( new FormControl( this.newGame.value, Validators.required ) );

    this.newGame.reset();
  }

  deleteGame( i: number ) {
    this.listArr.removeAt(i);
  }

  saveFormInfo() {
    if( this.gameForm.invalid ) {
      this.gameForm.markAllAsTouched();
      return;
    }

    console.log( this.gameForm.value )
  }


}
