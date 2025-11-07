import { Component } from '@angular/core';
// import { AruComponent } from './aru/aru.component';
import { EmployeeComponent } from "./employee/employee.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet,
    // AruComponent, 
    EmployeeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipegyak';
}
