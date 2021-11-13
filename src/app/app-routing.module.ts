import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceXComponent } from './space-x/space-x.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todo/todolist/todolist.component';

const routes: Routes = [
  {path:'',component:TodoComponent},
  {path:'todolist',component:TodolistComponent},
  {path:'tododetails',component:TodoDetailsComponent},
  {path:'spacex',component:SpaceXComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
