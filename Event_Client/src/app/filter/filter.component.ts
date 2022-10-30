import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  @Input()  All:number=0
  @Input()   Offitial:number=0
  @Input()  Personal:number=0
  @Output() filterEvent =new EventEmitter()
   selectradio:any='All'

  ngOnInit(): void {
  }

  checkradio(){
    this.filterEvent.emit(this.selectradio)
    
  }

}
