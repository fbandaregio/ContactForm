import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  sub: any;
  misdatos: any;

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.misdatos = params;
      console.log(this.misdatos)
    });
  }

}
