import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../core/item.service';
import { ItemDetail } from 'src/app/core/classes/item_detail';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, observable } from 'rxjs';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {
  givenItem$: Observable<ItemDetail>;


  constructor(private itemService: ItemService, private route: ActivatedRoute) {   
  }

  ngOnInit() {
    this.getItem();
  }

  getItem(){

    const id = this.route.snapshot.paramMap.get('id');
    if(id ==null){
      this.givenItem$ = of(new ItemDetail());
    }
    else{
      this.givenItem$ = this.itemService.getSingleItem(id);
    }

  }

  clear(){
   this.givenItem$ = new Observable<ItemDetail>();
  }


  add(name: string, description: string, price:string, amount:string) :void {
    name = name.trim(); 
    description = description.trim();
    price =price.trim();
    amount = amount.trim();
 
    if (parseFloat(price) == NaN||parseFloat(amount) == NaN|| !name || !description){  
      return;
      //fix error ofzo?
    }   
    if( parseFloat(price) <= 0 || parseFloat(amount) <=0){ 
      return;
    }
   
    const newItem: ItemDetail = {name: name, description:description,price : parseFloat(price),amountOfStock: parseFloat(amount), id: null, stockUrgency:null};
    this.itemService.addItem(newItem).subscribe();        
  }

  update(name: string, description: string, price:string, amount:string, givenid:string) :void{
    name = name.trim(); 
    description = description.trim();
    price =price.trim();
    amount = amount.trim();
 
    if (parseFloat(price) == NaN||parseFloat(amount) == NaN|| !name || !description){  
      return;
      //fix error ofzo?
    }   
    if( parseFloat(price) <= 0 || parseFloat(amount) <=0){ 
      return;
    }
    const newItem: ItemDetail = {name: name, description:description,price : parseFloat(price),amountOfStock: parseFloat(amount), id: givenid, stockUrgency:null};
    this.itemService.updateItem(newItem).subscribe();      
  }

  
}
