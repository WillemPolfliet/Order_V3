import { Component, OnInit,Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ItemDetail } from '../../core/Classes/item_detail';
import { ItemService } from '../../core/item.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items_FullList: Observable<ItemDetail[]>;
  items$: Observable<ItemDetail[]>;

  @Input() useEnter: boolean;

  private searchTerms = new Subject<string>();  


  constructor(private itemService: ItemService) {}

// eventemitter
  // search(term: string): void {
  //   this.searchTerms.next(term);
  // }


   ngOnInit() {
     // observable from enter key

     // observable from search terms

    // if use enter
      // merge observables (only emit when pressing enter)
    // else
      // emit all values


  //   this.items_FullList = this.itemService.getAllItems();

  //   this.items$ = this.searchTerms.pipe(
  //     debounceTime(300),
  //     distinctUntilChanged(),
  //     switchMap((term: string) => this.itemService.searchItem(term,this.items_FullList))
    //);
  }
}
