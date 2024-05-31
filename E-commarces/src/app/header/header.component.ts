import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private dataStorage:DataStorageService){}
  
  @Input() cartCount:number=0;
  ngOnInit(): void {
    var getVal = this.dataStorage.getCartData();
   this.cartCount = getVal ? getVal.length : 0;
  }
}
