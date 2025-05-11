import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  email:string='info@checkdbs.co.uk'
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('dropdown') dropdown!: ElementRef;


  closeNavbar() {
    const navbarEl = this.navbar.nativeElement;
    if (navbarEl.classList.contains('show')) {
      navbarEl.classList.remove('show');
    }
  }
  


}
