import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  statistics: any;
  recentActivities: any;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.loadStatistics();
    this.loadRecentActivities();
  }

  loadStatistics(): void {
    this.homeService.getStatistics().subscribe(
      data => this.statistics = data,
      error => console.error('Error fetching statistics', error)
    );
  }

  loadRecentActivities(): void {
    this.homeService.getRecentActivities().subscribe(
      data => this.recentActivities = data,
      error => console.error('Error fetching recent activities', error)
    );
  }
}
