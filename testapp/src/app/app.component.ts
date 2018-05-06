import { Component,ElementRef } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DragulaModule, DragulaService } from "ng2-dragula/ng2-dragula";
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'new-order',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  selected:string;
  id:number=-1;
  Description:string="";
  date:Date=null;
  datepickerOpts = {
    startDate: new Date(2016, 5, 10),
    autoclose: true,
    todayBtn: 'linked',
    todayHighlight: true,
    assumeNearbyYear: true,
    format: 'D, d MM yyyy'
}
PaymentMethod:string='Wallet';
SelectedBranch:number;
Categories:any[];
OrderItems:Product[]=[];
Products :{Category:string,Items:Product[]}[]=[];
Branches:{ID:number,Name:string}[]=[];
TotalPrice:number=0;
public getProducts(): Observable<any> {
    return this.http.get( "./getAllProducts")
        .map((res: any) => <any>res.json())
        .catch((err: Response, caught: Observable<any>) => { return Observable.throw(caught); });
}
public getOrder(): Observable<any> {
    return this.http.get( "./getOrder?id="+this.id)
        .map((res: any) => <any>res.json())
        .catch((err: Response, caught: Observable<any>) => { return Observable.throw(caught); });
}
public getBranches(): Observable<any> {
    return this.http.get( "./getBranches")
        .map((res: any) => <any>res.json())
        .catch((err: Response, caught: Observable<any>) => { return Observable.throw(caught); });
}
constructor(private dragulaService: DragulaService, private http: Http, elm: ElementRef){//}, private _httpservice: HttpService,) {
  if(elm.nativeElement.getAttribute('id')){
  this.id = elm.nativeElement.getAttribute('id');
      this.getOrder().subscribe((data) => {
        this.date=new Date(data[0].PickupTime);
        this.PaymentMethod=data[0].PaymentMethod;
        this.SelectedBranch=data[0].Branch;
        this.TotalPrice=data[0].TotalPrice;
        this.Description=data[0].Description;
       this.selected  = data[0].items.reduce((a,b)=>(a+(b.Product+':'+b.Quantity+',')),'');
      });
  }else{
      this.selected = elm.nativeElement.getAttribute('selected');
  }

      this.getProducts().subscribe((data) => {
           this.Categories=[...new Set(data.map(item => item.fields.Category))];
        this.Categories.forEach((cat)=>{
                      this.Products.push({Category:cat,Items:data.filter(x=>x.fields.Category==cat).map(item => new Product(item.pk,item.fields.Name,item.fields.Price,item.fields.Description,cat,item.fields.Stock,item.fields.unlimited))});
            }  );

              if (this.selected) {
          let selectedItems = this.selected.split(',');

          selectedItems.forEach(s=>{
            if(s.split(':').length==2){
              let ID = parseInt(s.split(':')[0]);
              let count = parseInt(s.split(':')[1]);

              var i=0;
              this.Products.forEach(product=>{
                  if(this.Products[i].Items.filter(x=>x.ID==ID).length>0){
                    let itemIndex =  this.Products[i].Items.indexOf(this.Products[i].Items.filter(x=>x.ID==ID)[0]);
                    this.add(this.Products[i].Items.filter(x=>x.ID==ID)[0],i,itemIndex,count)
                  }
                  i++;
                });

            }
          });
              }

              //data.filter(p => p.fields.Category==cat).map(x=>new Product(x.pk,x.fields.Name,x.fields.Price,x.fields.Description)))});

  });


      this.getBranches().subscribe((data) => {
        this.SelectedBranch = data[0].pk;
   this.Branches = data.map(branch => {return {ID:branch.pk,Name:branch.fields.Name}});

      }
    );
          dragulaService.setOptions('fourth-bag', {
            revertOnSpill: true
        });
		dragulaService.dropModel.subscribe((value) => {
	       this.updatePrice();
        });
}

add(item: Product,CategoryIndex: number,ItemIndex:number,count:number=1): void {
            this.Products[CategoryIndex].Items.splice(ItemIndex,1);
            item.Count=count<item.Quantity?count:item.Quantity;
            this.OrderItems.push(item);
            this.updatePrice()
}
removeItem(item:Product):void{
  let ItemIndex = this.OrderItems.indexOf(item);
  this.Products.filter(p => p.Category==item.Category)[0].Items.push(item);
  // this.Products[CategoryIndex].Items.push(item);
  this.OrderItems.splice(ItemIndex,1);
  this.updatePrice();
}
updatePrice():void{
  			 this.TotalPrice=this.OrderItems.reduce((a,b)=>(a+(b.Count*b.Price)),0);
}
sendOrder():void{
  this.sendOrderMethod().subscribe((data)=>window.location.replace("../orders"));
}
sendOrderMethod(): Observable<any>{
  let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     let order = {Branch:this.SelectedBranch,PaymentMethod:this.PaymentMethod,PickupTime:this.date, OrderItems:this.OrderItems,Description:this.Description,Price:this.TotalPrice}
     console.log(order);
     let body = JSON.stringify(order);
     return this.http.post('./sendOrder?id='+this.id, body, options ).map((res: Response) => res.json());

}
}
export class Product {
  constructor(public ID: number,public Name: string,public Price: number,public Description:string,public Category:string,public Quantity:number,public Unlimited:boolean){}
  Count:number =1;
  /*  ID: number;
    Name: string;
    Price: number;
    Description:string;
*/
}
