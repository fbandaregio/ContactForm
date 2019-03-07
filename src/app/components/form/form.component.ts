import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';
import { Router, ActivatedRoute } from '@angular/router';

//Models
import { Ciudad } from '../../models/ciudad.model';
import { Datos } from '../../models/datos.model';

// Services
import { FormService } from '../../services/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  sub: any;

  datos: Datos = new Datos('','','','','');
  ciudades: Ciudad[] = [];

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
  };

  // public model: any = { date: { year: 2018, month: 10, day: 9 } };

  public myForm: FormGroup;
  submitted = false;

  constructor(
    public _formService: FormService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.sub = this.route
    .data
    .subscribe(value => console.log(value));

      let citi = 'apodaca'
      this.buscarCiudad(citi);

      this.myForm = this.formBuilder.group({
        // Empty string or null means no initial value. Can be also specific date for
        // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
        // value.
        nombre: ['', Validators.required],
        correo: new FormControl('', [Validators.required, Validators.email]),
        telefono: ['', Validators.required],
        myDate: [null, Validators.required],
        ciudad: ['', Validators.required]
        // other controls are here...
    });
  }

  setDate(): void {
    // Set today date using the patchValue function
    let date = new Date();
    this.myForm.patchValue({myDate: {
    date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()}
    }});
  }

  clearDate(): void {
    // Clear the date using the patchValue function
    this.myForm.patchValue({myDate: null});
  }

  get f() { return this.myForm.controls; }

  enviarForm(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
        return;
    }else{
      this.router.navigate(['/mensaje', this.myForm.value])
      console.log(this.myForm.value);
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.value))
  }

  buscarCiudad( termino ){
    this._formService.getGeoName(termino)
      .subscribe( (resp:any) => {
        console.log(resp)
      });
  }

}
