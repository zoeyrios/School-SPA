import { DataService } from './../data.service';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  course$: Course;
  CursosForm: FormGroup;
  id;

  constructor(private dataService: DataService ) { }

  ngOnInit() {
      this.getCurso();
      this.CursosForm = new FormGroup ({
        'name': new FormControl(''),
        'id' : new FormControl('')

      });
  }
  getCurso() {
    this.dataService.getCourse().subscribe(
      res => {
        this.course$ = res;
      } );

  }
  AgregarCurso(): void {
    const Usuario = {
      'id': '',
      'name': this.CursosForm.controls['name'].value,
    };

    this.dataService.createCourse(Usuario).subscribe(
      _ => {
      },
      _error => {
        alert('Error');
      },
      () => {
        this.getCurso();
        this.CursosForm.reset();
      }
    );
  }
    BorrarCurso(id): void {
      this.dataService.DeleteCourse(id).subscribe(
        _ => {
        },
        _error => {
          alert('Error');
        },
        () => {
          this.getCurso();
          this.CursosForm.reset();
        }
      );

    }

}

