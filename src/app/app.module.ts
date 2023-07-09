import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './header/header.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { LoaderComponent } from './loader/loader.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { AboutComponent } from './about/about.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { EducationalBackgroundComponent } from './educational-background/educational-background.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicInfoComponent,
    LoaderComponent,
    TypewriterComponent,
    AboutComponent,
    ComingSoonComponent,
    EducationalBackgroundComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
