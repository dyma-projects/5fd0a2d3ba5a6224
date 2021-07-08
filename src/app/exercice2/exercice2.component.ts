import { Component, OnInit, ViewChild } from '@angular/core';
import { Exercice2EnfantComponent } from './exercice2-enfant/exercice2-enfant.component';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @ViewChild(Exercice2EnfantComponent)
private component: Exercice2EnfantComponent;
  public valeur: string;
  

  constructor() { }

  ngOnInit() {
  }
changements(event : any){
this.component.changement(event);
}
}
