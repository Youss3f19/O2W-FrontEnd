import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgClass , RouterOutlet , RouterLink , RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  toggleSidebar() {
    const sidebar = document.querySelector("#sidebar");
    sidebar?.classList.toggle("collapsed");
  }


}
