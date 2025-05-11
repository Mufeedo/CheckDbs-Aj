import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FastSupportSectionComponent } from "./fast-support-section/fast-support-section.component";
import { OnlineProcessComponent } from "./online-process/online-process.component";
import { CustomerCareComponent } from "./customer-care/customer-care.component";
import { FaqComponent } from "./faq/faq.component";
import { PosterComponent } from "./poster/poster.component";
import { AboutComponent } from './about/about.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, FastSupportSectionComponent, OnlineProcessComponent, AboutComponent, CustomerCareComponent, FaqComponent, PosterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
