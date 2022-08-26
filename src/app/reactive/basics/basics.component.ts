import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: []
})
export class BasicsComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(3) ] ],
    price: [ 0, [ Validators.required, Validators.min(1) ] ],
    stocks: [ 0, [ Validators.required, Validators.min(1) ] ],
  })

  ngOnInit() {
    this.myForm.reset({
      name: 'Product Name',
      price: 1200
    })
  }

  constructor( private fb: FormBuilder ) { }

  showErrorMessage( input: string ) {
    return this.myForm.controls[input].errors
           &&
           this.myForm.controls[input].touched
  }

  saveFormInfo() {

    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log( this.myForm.value );

    this.myForm.reset();

  }

}
