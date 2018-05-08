import { Component, ViewChild,ElementRef} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular5-data-table';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'view-orders',
  templateUrl: './app3.component.html',
  styleUrls: ['./app3.component.css']
})
export class App3Component {

  ordersdata:any[] ;
  canEdit:boolean=false;
  orderStatus = [	{ID:0, Name:'Received'},{ID:1,Name: 'Cooking'},{ID:2, Name:'Ready'}];
  ordersResource;
    ordersCount = 0;

    @ViewChild(DataTable) ordersTable;

    constructor( private http: Http, elm: ElementRef){
      this.canEdit  = elm.nativeElement.getAttribute('edit');
         this.getOrders().subscribe((data) => {
            this.ordersdata = data.map(x=>{return {id:x.id,PickupTime:x.PickupTime.substring(0, 10),PaymentMethod:x.PaymentMethod,Branch:x.Branch_Name,TotalPrice:x.TotalPrice,Description:'Items: '+x.items.reduce((a,b)=>(a+(b.Product_Name+':'+b.Quantity)+'|'),'')+'Additional Notes:'+x.Description,OrderStatus:x.OrderStatus};});
            this.ordersResource = new DataTableResource(this.ordersdata);
              this.ordersResource.count().then(count => this.ordersCount = count);

      });

    }

    reloadFilms(params) {
        //this.filmResource.query(params).then(films => this.films = films);
    }

    cellColor(car) {
        return 'rgb(255, 255,255)';// + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
    };

    // special params:
    translations = <DataTableTranslations>{
        indexColumn: 'Index column',
        expandColumn: 'Expand column',
        selectColumn: 'Select column',
        paginationLimit: 'Max results',
        paginationRange: 'Result range'
    };
// Categories:any[];
// Products :{Category:string,Items:Product[]}[]=[];
// ProductsIdQty:string;
// TotalPrice:number=0;
public getOrders(): Observable<any> {
    return this.http.get( "./orders/getOrders")
        .map((res: any) => <any>res.json())
        .catch((err: Response, caught: Observable<any>) => { return Observable.throw(caught); });
}
public changeStatus(id:number,status:number): Observable<any> {
    return this.http.get( "./orders/changeStatus?id="+id+"&status="+status)
        .map((res: any) => <any>res.json())
        .catch((err: Response, caught: Observable<any>) => { return Observable.throw(caught); });
}
public updateStatus(id:number,status:number){
   this.changeStatus(id,status).subscribe((data) => {console.log("Status changed");});
}
// constructor( private http: Http){
  //    this.getProducts().subscribe((data) => {console.log(data);
  //          this.Categories=[...new Set(data.map(item => item.fields.Category))];
  //       this.Categories.forEach((cat)=>{
  //                     this.Products.push({Category:cat,Items:data.filter(x=>x.fields.Category==cat).map(item => new Product(item.pk,item.fields.Name,item.fields.Price,item.fields.Description,item.fields.Image))});
  //           }  );
  //
  //
  //
  // });
  //

// }
  // UpdateProductsList():any{
  //     this.TotalPrice=0;
  //     this.ProductsIdQty='';
  //   this.Products.forEach((set)=>{
  //   this.TotalPrice = this.TotalPrice + set.Items.reduce((a,b)=>(a+(b.Selected?(b.Count*b.Price):0)),0);
  //   this.ProductsIdQty = this.ProductsIdQty + set.Items.reduce((a,b)=>(a+(b.Selected?(b.ID+':'+b.Count+','):'')),'');
  //   });
  //
  // }

}
// export class Product {
//   constructor(public ID: number,public Name: string,public Price: number,public Description:string,public Image:string){}
//   Count:number =1;
//   Selected:boolean = false;
// }
