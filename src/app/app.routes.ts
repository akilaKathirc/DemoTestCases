import { VotingComponent } from './voting/voting.component';
 import { HomeComponent } from './home/home.component';
 import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component'; 
 import { UserDetailComponent } from './user-detail/user-detail.component';

export const routes = [
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent },
];