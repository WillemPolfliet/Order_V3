import { Component, OnInit } from '@angular/core';
import { ItemDetail } from '../../../core/Classes/item_detail';
import { ItemService } from '../../../core/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  p: number = 1;
  items: ItemDetail[];
  constructor(private itemService: ItemService) {     
  }

  ngOnInit() {
    this.getAllItems();
  }
 
  getAllItems(): void {
    this.itemService.getAllItems()
    .subscribe(items => this.items = items);
  } 

}
