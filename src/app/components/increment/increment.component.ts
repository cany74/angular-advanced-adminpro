import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {
  ngOnInit(): void {
   this.btnClass = `btn ${this.btnClass}`
  }
  @Input('value') progress: number = 26;
  @Input() btnClass: string = "btn-primary";

  @Output() outputValue: EventEmitter<number> = new EventEmitter();
  public increment(value:number = 5):void {
    if (this.progress + value > 100) {
      this.progress = 100;
      this.outputValue.emit(this.progress);
      return;
    }
    this.progress = this.progress + value;
  }

  @Output() public decrement(value:number = 5):void {
    if (this.progress - value < 0) {
      this.progress = 0;
      this.outputValue.emit(this.progress);
      return;
    }
    this.progress = this.progress - value;
    this.outputValue.emit(this.progress);
  }

  onChange(value: number) {
    if (value > 100) {
      this.progress = 10;
    }
    else if (value < 0) {
      this.progress = 0;
    }
    else {
      this.progress = value;
    }
    this.outputValue.emit(this.progress);
  }
}
