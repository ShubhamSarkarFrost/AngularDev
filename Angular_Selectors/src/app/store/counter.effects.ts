import {createEffect, Actions, ofType} from "@ngrx/effects";
import {tap} from "rxjs/operators";
import {decrement, increment} from "./counter.actions";


export class CounterEffects {
  saveCount = createEffect(() =>this.actions$.pipe(
    ofType(increment,decrement),
    tap((action) =>{
      console.log(action);
      localStorage.setItem('count',action.value.toString());
    })
  ),{dispatch: false});
  constructor(private actions$: Actions) {}
}
