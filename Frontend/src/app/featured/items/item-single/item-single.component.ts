import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/item.service';
import { ItemDetail } from 'src/app/core/classes/item_detail';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-single',
  templateUrl: './item-single.component.html',
  styleUrls: ['./item-single.component.css']
})
export class ItemSingleComponent implements OnInit {
  givenItem$: Observable<ItemDetail>;

  itemForm= new FormGroup({  
    id : new FormControl(''),
    name :new FormControl(''),  
    description: new FormControl(''),  
    price:new FormControl(''),  
    amountOfStock:new FormControl(''),  
    stockUrgency: new FormControl(''),  
  })

  constructor(private itemService: ItemService, private route: ActivatedRoute) {   
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(){

    const id = this.route.snapshot.paramMap.get('id');
    if(id ==null){
   this. clear();
    }
    else{
      this.givenItem$ = this.itemService.getSingleItem(id);      
      this.itemService.getSingleItem(id).subscribe(Item => this.itemForm.patchValue(Item));   

    }
  }

  clear(){
    this.givenItem$ = of(new ItemDetail());
    this.itemForm.reset();
  }


  add(value:ItemDetail){
    this.itemService.addItem(value).subscribe(); 
  }   
  

  update(value:ItemDetail){
    this.itemService.updateItem(value).subscribe(); 
  }   

  
}
