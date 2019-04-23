import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Response } from 'selenium-webdriver/http';
@Injectable({
  providedIn: "root"
})
export class TodosService {
  todos: any = [];
  constructor(private http: HttpClient) {}

  getTodods() {
    return this.http.get("").pipe(
      map(() => {
        r => r.json();
      })
    );
  }

  add(todos:any) {
    return this.http.post(' ',todos);
  }

  delete(id:number) {
    return this.http.put('', id);
  }

  addTodos(todos:any) {
    return this.http.post(' ',todos);
  }

  deleteTodo(id:number) {
    return this.http.put('', id);
  }
  
  getTodosPromise() {
    return this.http.get('...')
    .pipe(map((r:Response) => { r => r.json()
      })
    ).toPromise();
  }
}
