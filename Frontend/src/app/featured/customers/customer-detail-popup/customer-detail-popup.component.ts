import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CustomerDetail } from 'src/app/core/classes/customer_detail';


@Component({
  selector: 'app-customer-detail-popup',
  templateUrl: './customer-detail-popup.component.html',
  styleUrls: ['./customer-detail-popup.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class CustomerDetailPopupComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean; 
  @Input() value: CustomerDetail;   
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { 

  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
