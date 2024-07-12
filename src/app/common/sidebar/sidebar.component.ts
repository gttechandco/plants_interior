import { Component } from '@angular/core';
import path from 'path';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  navLinks = [
    { path: '/home', label: 'Accueil'},
    { path: '/plants', label: 'Plantes' },
    { path: '/notifications', label: 'Notifications' },
    { path: '/history', label: 'Historique' }
  ]
}
