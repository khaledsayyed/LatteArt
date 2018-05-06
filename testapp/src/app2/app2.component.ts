import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'view-menu',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component {
	name:string = "mickel";

Categories:any[];
Products :{Category:string,Items:Product[]}[]=[];
ProductsIdQty:string;
TotalPrice:number=0;
public getProducts(): Observable<any> {
    return this.http.get( "./orders/getAllProducts")
        .map((res: any) => <any>res.json())
        .catch((err: Response, caught: Observable<any>) => { return Observable.throw(caught); });
}

constructor( private http: Http){
     this.getProducts().subscribe((data) => {console.log(data);
           this.Categories=[...new Set(data.map(item => item.fields.Category))];
        this.Categories.forEach((cat)=>{
                      this.Products.push({Category:cat,Items:data.filter(x=>x.fields.Category==cat).map(item => new Product(item.pk,item.fields.Name,item.fields.Price,item.fields.Description,item.fields.Image))});
            }  );



  });


}
  UpdateProductsList():any{
      this.TotalPrice=0;
      this.ProductsIdQty='';
    this.Products.forEach((set)=>{
    this.TotalPrice = this.TotalPrice + set.Items.reduce((a,b)=>(a+(b.Selected?(b.Count*b.Price):0)),0);
    this.ProductsIdQty = this.ProductsIdQty + set.Items.reduce((a,b)=>(a+(b.Selected?(b.ID+':'+b.Count+','):'')),'');
    });

  }

}
export class Product {
  constructor(public ID: number,public Name: string,public Price: number,public Description:string,public Image:string){}
  Count:number =1;
  Selected:boolean = false;
}
