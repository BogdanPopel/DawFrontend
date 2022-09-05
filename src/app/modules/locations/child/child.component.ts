import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() childMessage;
  @Output() messageEvent = new EventEmitter<any>();

  constructor() {
    console.log('from constructor',this.childMessage);
  }

  ngOnInit() {
    console.log('from ngOnInit',this.childMessage);
  }

  public emitData(): void{
    this.messageEvent.emit("Message from child");
  }
}
