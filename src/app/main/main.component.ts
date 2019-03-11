import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { DataService } from '../data.service';
import { HttpClientModule } from '@angular/common/http';
import {golfCourse} from '../golfCourse';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) {

  }
  username;
  addGolfCourse;
  listCourses;
  showCourse = false;
  newCourse:golfCourse;
  newCourseName;

  ngOnInit() {
  }
  test() {
    this.addGolfCourse = {
      "courseName": this.newCourseName
    }
    
    this.dataService.runService(this.addGolfCourse);
  }

  runMethod() {
    this.dataService.selectAll().subscribe(result => {
      this.listCourses=result.json();
      console.log(this.listCourses);
    }
    );
    this.showCourse = true;
}



}
