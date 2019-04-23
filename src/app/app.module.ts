import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { VotingComponent } from './voting/voting.component';
import { VoterComponent } from './voter/voter.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router'; 
import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { MeanPipe } from './shared/Mean/mean.pipe';
import { ReversePipe } from './shared/reverse.pipe';
import { InitCapsPipe } from './shared/caps/init-caps.pipe';
import { HighLightDirective } from './high-light.directive';


@NgModule({
  declarations: [
    AppComponent,
    VotingComponent,
    VoterComponent,
    UserDetailComponent,
    UsersComponent,
    TodosComponent,
    HomeComponent,
    MeanPipe,
    ReversePipe,
    InitCapsPipe,
    HighLightDirective
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
