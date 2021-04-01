import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  adns;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     // Simple GET request with response type <any>
    this.http.get<any>('http://localhost:5000/list').subscribe(data => {
      this.adns = data;
  })
  }

}
