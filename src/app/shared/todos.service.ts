import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
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

  addTodos(todos:any) {
    return this.http.post(' ',todos);
  }

  deleteTodo(id:number) {
    return this.http.put('', id);
  }
}
