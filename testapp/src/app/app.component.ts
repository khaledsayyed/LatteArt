import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DragulaModule, DragulaService } from "ng2-dragula/ng2-dragula";
//import { HttpService } from './sendOrder.service';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'new-order',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Categories:any[];
OrderItems:Product[]=[];
Products :{Category:string,Items:Product[]}[]=[];
TotalPrice:number=0;
public getProducts(): Observable<any> {
    return this.http.get( "./getAllProducts")
        .map((res: any) => <any>res.json())
        .catch((err: Response, caught: Observable<any>) => { return Observable.throw(caught); });
}

constructor(private dragulaService: DragulaService, private http: Http) {
      this.getProducts().subscribe((data) => {
           this.Categories=[...new Set(data.map(item => item.fields.Category))];
        this.Categories.forEach((cat)=>{
                      this.Products.push({Category:cat,Items:data.filter(x=>x.fields.Category==cat).map(item => new Product(item.pk,item.fields.Name,item.fields.Price,item.fields.Description))});
            }  );

              //data.filter(p => p.fields.Category==cat).map(x=>new Product(x.pk,x.fields.Name,x.fields.Price,x.fields.Description)))});

  });
          dragulaService.setOptions('fourth-bag', {
            revertOnSpill: true
        });
		dragulaService.dropModel.subscribe((value) => {

			 		this.updatePrice();
        });
}
add(item: Product,CategoryIndex: number,ItemIndex:number): void {
            this.Products[CategoryIndex].Items.splice(ItemIndex,1);
            item.Count=1;
            this.OrderItems.push(item);
            this.TotalPrice=this.TotalPrice+item.Price;
}
updatePrice():void{
  			 this.TotalPrice=this.OrderItems.reduce((a,b)=>(a+(b.Count*b.Price)),0);
}
}
export class Product {
  constructor(public ID: number,public Name: string,public Price: number,public Description:string){}
  Count:number =1;
  /*  ID: number;
    Name: string;
    Price: number;
    Description:string;
*/
}
