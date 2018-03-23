import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from './icons/icons.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PuvSectionComponent } from './puv-section/puv-section.component';
import { ExtraExpensesCalculatorComponent } from './extra-expenses-calculator/extra-expenses-calculator.component';
import { HowItWorkSectionComponent } from './how-it-work-section/how-it-work-section.component';
import { CompareSectionComponent } from './compare-section/compare-section.component';
import { ReviewSectionComponent } from './review-section/review-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { QuestionSectionComponent } from './question-section/question-section.component';
import { RentCalcutatorComponent } from './rent-calcutator/rent-calcutator.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PuvSectionComponent,
    ExtraExpensesCalculatorComponent,
    HowItWorkSectionComponent,
    CompareSectionComponent,
    ReviewSectionComponent,
    ContactSectionComponent,
    QuestionSectionComponent,
    RentCalcutatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
