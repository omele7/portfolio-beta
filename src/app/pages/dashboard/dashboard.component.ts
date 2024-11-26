import { Component } from '@angular/core';
import { FloatingShapesComponent } from '../../shared/components/floating-shapes/floating-shapes.component';

@Component({
  selector: 'app-dashboard',
  imports: [FloatingShapesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
