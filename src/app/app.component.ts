import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Statement } from './statement';
import { StatementService } from './statement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'online-debate-app';
  public pros: Statement[] = [];
  public oppositions: Statement[] = [];

  constructor(private statementService: StatementService) {}

  ngOnInit() {
    this.getPros();
    this.getOppositions();
  }

  public getPros(): void {
    this.statementService.getStatements().subscribe(
      (response: Statement[]) => {
        this.pros = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    // const pro1: Statement = {id: 1, comment: "pro statement1"};
    // const pro2: Statement = {id: 2, comment: "pro statement2"};
    // this.pros.push(pro1);
    // this.pros.push(pro2);
  }

  public getOppositions(): void {
    const opposition1: Statement = {id: 1, comment: "opposition statement1"};
    const opposition2: Statement = {id: 2, comment: "opposition statement2"};
    this.pros.push(opposition1);
    this.pros.push(opposition2);
  }
}
