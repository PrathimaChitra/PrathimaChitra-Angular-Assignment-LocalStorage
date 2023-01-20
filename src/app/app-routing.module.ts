import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterdetailComponent } from './Components/registerdetail/registerdetail.component';
import { RegComponent } from './reg/reg.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DynamicRegisterComponent } from './dynamic-register/dynamic-register.component';
import { MarkGraphsComponent } from './Components/registerdetail/mark-graphs/mark-graphs.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path: 'register', component: RegComponent },
  { path: 'dynamic', component: DynamicRegisterComponent },
  { path: 'graphs', component: MarkGraphsComponent },
  { path: 'details', component: RegisterdetailComponent },
  { path: 'updateStudent/:id', component: UpdateStudentComponent },
  
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegComponent, RegisterdetailComponent, DynamicRegisterComponent, MarkGraphsComponent,UpdateStudentComponent ]

