import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ItemService } from '../../core/item.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() useEnter: boolean;
  @Output() value: EventEmitter<string>;

  searchBox : FormControl;

  constructor(private itemService: ItemService) {
    this.value = new EventEmitter();
    this.searchBox = new FormControl();
  }

  ngOnInit() {
    this.searchBox.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged())
    .subscribe(givenValue => this.value.emit(givenValue));    
  }
}

// const enter$ = fromEvent(document, 'keyup').pipe(filter((event: KeyboardEvent) => event.keyCode === 13));
// const search$ = this.useEnter 
//   ? enter$.pipe(switchMap(_ => this.searchBox.valueChanges)) 
//   : this.searchBox.valueChanges;

// search$.pipe(
//   debounceTime(300),
//   distinctUntilChanged())
// .subscribe(givenValue => this.value.emit(givenValue));    



// observable from enter key

  // observable from search terms

 // if use enter
   // merge observables (only emit when pressing enter)
 // else
   // emit all values
