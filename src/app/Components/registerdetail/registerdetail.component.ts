import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Data, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './registerdetail.component.html',
  styleUrls: ['./registerdetail.component.scss']
})
export class RegisterdetailComponent implements OnInit {
  orderHeader: string = '';
  searchText = { firstname: '', }
  checkForm: any;
  studentMark: any;
  isBarGraphDisplay = false;
  isPieChartDisplay = false;
  isLineGraphDisplay = false;
  details = true;
  id: any;
  dataArray: any;
  displayformupdate = false;
  submitted: boolean | any;
  studentData: any;

  activePage = 0;
  dataPerPage:number=2;
  public selectedPage=1;
  products:any[]=[];

 
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.dataArray = [];
  }
  ngOnInit(): void {

    this.checkForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      birthdate: [''],
      gender: [''],
      email: [''],
      mobile: [''],
      chemistry: [''],
      maths: [''],
      operatingsystem: [''],
      microprocessor: [''],
    })
    const records = localStorage.getItem('existingStudent');
    if (records !== null) {
      this.dataArray = JSON.parse(records);
    }
    let pageIndex=(this.selectedPage-1)*this.dataPerPage;
    this.products=this.dataArray.slice(pageIndex,this.dataPerPage);
  }
  changePageSize(event:Event)
  {
  const newSize=(event.target as HTMLInputElement).value
  this.dataPerPage=Number(newSize);
  this.changePage(1);
  }
  get pageNumber():number[]{
    return Array(Math.ceil(this.dataArray.length/this.dataPerPage))
    .fill(0).map((x,i) => i+1);
  }
  changePage(page:any){
    this.selectedPage=page;
    this.slicedStudent();

  }
 slicedStudent(){
  let pageIndex=(this.selectedPage-1)*this.dataPerPage;
    let endIndex=(this.selectedPage-1)*this.dataPerPage+this.dataPerPage;
    this.products=[];
    this.products=this.dataArray.slice(pageIndex,endIndex);
 }
 
 firstPage()
 {
  this.selectedPage=1;
  this.slicedStudent();
 }
 previousPage(page:any){
  this.selectedPage=page-1;
  this.slicedStudent();
 }
 nextPage(page:any){
  this.selectedPage=page+1;
  this.slicedStudent();
 }
 lastPage(){
  this.selectedPage=this.pageNumber.length;
  this.slicedStudent();
 }
  displayActivePage(activePageNumber: number): void {
    this.activePage = activePageNumber;
  }
  onDelete(id: any) {
    console.log(id);
    let result: any = this.dataArray.splice(id, 1);
    localStorage.setItem('existingStudent', JSON.stringify(result));
  }
  sort(headerName: string) {
    this.orderHeader = headerName;                                                   //firstname,lastname,email
  }
  search(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.dataArray.search(searchTerm);
  }
  selectStudent(student: any)                                                       //selecting student object for display graph
  {
    this.studentMark = student
  }
  displayGraph() {
    this.isBarGraphDisplay = true;
    this.isPieChartDisplay = true;
    this.isLineGraphDisplay = true;
  }

}




