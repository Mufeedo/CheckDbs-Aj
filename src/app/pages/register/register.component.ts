import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  selectedIndex: number = 0;

  constructor(private router: Router) {}

  setTab(index: number) {
    // Set the active tab when the user clicks a tab manually
    this.selectedIndex = index;

  }
  onSubmit(event: Event) {
    event.preventDefault(); // Optional: Just in case
    this.nextTab(); 
    
    // Your actual submit logic
  }

  nextTab() {
    // Move to the next tab, ensuring it does not exceed the number of tabs
    if (this.selectedIndex < 2) {
      this.selectedIndex++;
    }
  }

  submitForm() {
    // this.router.navigate(['/']);
  }

}
