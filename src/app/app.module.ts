import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from './icons/icons.module';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PuvSectionComponent } from './puv-section/puv-section.component';
import { ExtraExpensesCalculatorComponent } from './extra-expenses-calculator/extra-expenses-calculator.component';
import { HowItWorkSectionComponent } from './how-it-work-section/how-it-work-section.component';
import { CompareSectionComponent } from './compare-section/compare-section.component';
import { ReviewSectionComponent } from './review-section/review-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PuvSectionComponent,
    ExtraExpensesCalculatorComponent,
    HowItWorkSectionComponent,
    CompareSectionComponent,
    ReviewSectionComponent
  ],
  imports: [
    BrowserModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
