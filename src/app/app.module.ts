import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';

registerAllModules();

@NgModule({
  imports: [BrowserModule, HotTableModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => {
    console.error(err);
  });
