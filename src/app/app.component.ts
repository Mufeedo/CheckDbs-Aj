import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { FastSupportSectionComponent } from "./pages/home/fast-support-section/fast-support-section.component";
import { AboutComponent } from "./pages/home/about/about.component";
import { OnlineProcessComponent } from "./pages/home/online-process/online-process.component";
import { CustomerCareComponent } from "./pages/home/customer-care/customer-care.component";
import { FaqComponent } from "./pages/home/faq/faq.component";
import { PosterComponent } from "./pages/home/poster/poster.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BannerComponent, FastSupportSectionComponent, AboutComponent, OnlineProcessComponent, CustomerCareComponent, FaqComponent, PosterComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Uk-job';
}
