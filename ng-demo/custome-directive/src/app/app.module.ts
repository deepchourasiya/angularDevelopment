import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHighlightDirective } from './app-highlight.directive';
import { ReversePipe } from './reverse.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHighlightDirective,
    ReversePipe,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
