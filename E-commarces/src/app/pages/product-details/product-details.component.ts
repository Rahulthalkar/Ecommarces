import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { ActivatedRoute, Router } from '@angular/router';
import { DataServceService } from '../../service/data-servce.service';
import { DataStorageService } from '../../service/data-storage.service';

@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    imports: [HeaderComponent]
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private getData:DataServceService,
    private dataStorage:DataStorageService,
    private router:Router){}

  getParamValue:any;
  getProductDetails:any;
  storeCartData:any=[];
  inCart:boolean=false;
  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('id');

      var getVal = this.dataStorage.getCartData()

      this.storeCartData = getVal ? getVal : [];

      this.getData.productData.filter((ele:any)=>{
        if(ele.pdId == this.getParamValue)
        {
            this.getProductDetails = ele;
            console.log(this.getProductDetails);
            
        }
      });

      this.storeCartData.filter((ele:any)=>{
          if(ele.pdId == this.getParamValue)
          {
              this.inCart=true;
          }
      });
  }
  addCart(data:any)
  {
        data['plusMinusCounter']=1;
        this.storeCartData.push(data);
        this.dataStorage.storeCartData(this.storeCartData);
        this.router.navigate(['/cart']);
  }
}
