import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
     { path:"home",component:HomeComponent},
     { path:"about",component:AboutComponent},
     { path:"portfolio",component:PortfolioComponent},
     { path:"skills",component:SkillsComponent},
     { path:"contact",component:ContactComponent},
     { path:"resume",component:ResumeComponent},
     { path:'',redirectTo:'/home',pathMatch:'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
