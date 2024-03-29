import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorariosComponent } from '../../components/horarios/horarios.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HorariosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
