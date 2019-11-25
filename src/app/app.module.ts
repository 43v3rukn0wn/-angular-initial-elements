import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  
  constructor (private injector: Injector) {}

  ngDoBootstrap() {
    customElements.define('ng-test', createCustomElement(
      AppComponent,
      {
        injector: this.injector
      }
    ))
  }

}
