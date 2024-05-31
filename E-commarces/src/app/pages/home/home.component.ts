import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { DataServceService } from '../../service/data-servce.service';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent,RouterLink]
})
export class HomeComponent implements OnInit {

  bannerImgs = [
    {
      id: 1,
      img: '../../assets/images/banner/ef637eb93bf1a887.webp',
    },
    {
      id: 2,
      img: '../../assets/images/banner/9021283f0be266c1.webp',
    },
    {
      id: 3,
      img: '../../assets/images/banner/7dcc28ed89760319.webp',
    },
  ];

  getCategorisData:any;
  getApplianceProductData:any=[];
  getFashionProductData:any=[];

    constructor(private getData:DataServceService){

    }
  
    ngOnInit(): void {
        this.getCategorisData = this.getData.categoriesData;
        
        this.getData.productData.filter((ele:any)=>{

            if(ele.pdCategory == 'appliances')
            {
                this.getApplianceProductData.push(ele);
            }
            if(ele.pdCategory=='fashion')
            {
                this.getFashionProductData.push(ele);
            }
            
          });
    

      }
}
