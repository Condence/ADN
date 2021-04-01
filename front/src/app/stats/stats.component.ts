import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})

export class StatsComponent implements OnInit {
  totalAngularPackages; 
  constructor(private http: HttpClient) { 
   }

  ngOnInit(): void {
    // Simple GET request with response type <any>
    this.http.get<any>('http://localhost:5000/stats').subscribe(data => {
      this.totalAngularPackages = data;
  })
  }

}
