import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/home/about/about.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RegisterComponent } from './pages/register/register.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CallbackrequestComponent } from './pages/callbackrequest/callbackrequest.component';
import { EnhancedDBSComponent } from './pages/enhanced-dbs/enhanced-dbs.component';
import { RightToDoWorkComponent } from './pages/right-to-do-work/right-to-do-work.component';
import { HowtoapplyComponent } from './pages/howtoapply/howtoapply.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { Register1Component } from './pages/auth/register1/register1.component';
import { Register2Component } from './pages/auth/register2/register2.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth/auth.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { Aftersign1Component } from './pages/auth/aftersign1/aftersign1.component';
import { Aftersign2Component } from './pages/auth/aftersign2/aftersign2.component';
import { TrackAppComponent } from './pages/track-app/track-app.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'about-us', component: AboutUsComponent },
            { path: 'contact-us', component: ContactUsComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'faq', component: FaqComponent },
            { path: 'callback-request', component: CallbackrequestComponent },
            { path: 'enhancedDBS', component: EnhancedDBSComponent },
            { path: 'right-to-do', component: RightToDoWorkComponent },
            { path: 'how-to-apply', component: HowtoapplyComponent },
            { path: 'privacy-policy', component: PrivacyPolicyComponent },
            { path: 'track-app', component: TrackAppComponent},

          // other public routes with header/footer
        ]
      },
      {
        path: '',
        component: AuthComponent,
        children: [
        //   { path: 'login', component: LoginComponent },
        //   { path: 'register', component: RegisterComponent },
          // other auth routes
          { path: 'sign-in', component: SignInComponent },
          { path: 'register1', component: Register1Component },
          { path: "register2", component: Register2Component },
          { path: "forgotpassword", component: ForgotpasswordComponent },
          { path: "aftersign1", component: Aftersign1Component },
          { path: "aftersign2", component: Aftersign2Component }
        ]
      },

];
