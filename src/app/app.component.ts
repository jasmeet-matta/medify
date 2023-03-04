import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medify-assignment';

  medicines: any = [];
  page: number = 0;
  hasMore: boolean = true;
  @Output() emitter = new EventEmitter<void>();

  cartCount: number = 0;

  private serviceURL = 'https://jsonplaceholder.typicode.com/users';

  //api service call
  getAllTask(page: number): Observable<[]> {
    return this.http.get<[]>(this.serviceURL);
  }

  //get api to fetch records
  loadMedicines() {
    if(this.page <=4){
      this.getAllTask(this.page).subscribe((medicines) => {
        if (medicines.length > 0) {
          this.medicines = this.medicines.concat(medicines);
          this.page++;
          console.log(this.page);
        } 
      });
    }else{
      console.log("page limit reached");
    }
  }

  onScroll() {
    this.loadMedicines();
  }

  updateCart(name:any){
    // alert(name+" was added to cart");
    this.emitter.emit(name)
  }

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.loadMedicines();
    this.emitter.subscribe((data)=>{
      // console.log(data+"was added to cart");
      this.cartCount++;
      alert(data+" was added to cart")
    })
  }

}
