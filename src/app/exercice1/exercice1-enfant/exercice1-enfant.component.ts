import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
@Input() compteurenfant: number;
@Output() changecompteur = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  plus(){
    this.compteurenfant ++;
    this.changecompteur.emit({
      value: this.compteurenfant
    })
  }
  minus(){
    this.compteurenfant--;
    this.changecompteur.emit({
      value: this.compteurenfant
    })
  }

}
