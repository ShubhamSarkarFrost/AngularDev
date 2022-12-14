import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs'
import {map, filter} from "rxjs/operators";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSuscription: Subscription

  constructor() { }

  ngOnInit() {
   // this.firstObsSuscription = interval(1000).subscribe(count =>{
   //    console.log(count)
   //  })
    const customIntervalObservables = Observable.create(observer =>{
      let count =0
      setInterval(() =>{
        observer.next(count)
        if(count === 2){
          observer.complete()
        }
        if(count > 3){
          observer.error(new Error('Count is Greater than 3'))
        }
        count++
      }, 1000)
    })

    customIntervalObservables.pipe(filter( data=>{
      return data > 0;
    }),map((data: number) => {
      return 'Round: ' + (data+1);
    }));

    this.firstObsSuscription = customIntervalObservables.subscribe(data =>{
      console.log(data)
    }, error =>{
      console.log(error)
      alert(error)
    }, () =>{
      console.log('Completed')
    })
  }

  ngOnDestroy(): void {
    this.firstObsSuscription.unsubscribe()
  }
}
