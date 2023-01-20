import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterdetailComponent } from './Components/registerdetail/registerdetail.component';
import { RegComponent } from './reg/reg.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TooltipDirective } from './tooltip.directive';
import { EllipseDirective } from './ellipse.directive';
import { InputfieldDirective } from './inputfield.directive';
import { RouteGuard } from './route.guard';
import { NgConfirmModule } from 'ng-confirm-box';
import { DynamicRegisterComponent } from './dynamic-register/dynamic-register.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkGraphsComponent } from './Components/registerdetail/mark-graphs/mark-graphs.component';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import { LineGraphComponent } from './Components/line-graph/line-graph.component';
import { SortingDirective } from './sorting.directive';
import { PaginationComponent } from "./pagination/PaginationComponent";
import { CommonModule } from '@angular/common';
import {NgToastModule} from 'ng-angular-popup';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { UpdateStudentComponent } from './update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterdetailComponent,
    RegComponent,
    NotFoundComponent,
    TooltipDirective,
    EllipseDirective,
    InputfieldDirective,
    DynamicRegisterComponent,
    MarkGraphsComponent,
    PieChartComponent,
    LineGraphComponent,
    SortingDirective,
    PaginationComponent,
    UpdateStudentComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgConfirmModule, HttpClientModule,
    CommonModule,
    NgToastModule,
    FilterPipeModule,
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    TooltipDirective, 
    EllipseDirective, 
    InputfieldDirective
  ],
  providers: [RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
