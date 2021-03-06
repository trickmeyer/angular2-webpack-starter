/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateComponentRef } from './platform/environment';

/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app';
import { SimpleFormModule } from './form';

/*
 * Forms Module
 */
import { disableDeprecatedForms, provideForms } from "@angular/forms"

import { WidgetRegistry } from "angular2-schema-form";
/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(initialHmrState?: any): Promise<any> {

  // platformBrowserDynamic()
  //   .bootstrapModule(SimpleFormModule)
  //   .then(decorateComponentRef)
  //   .catch(err => console.error(err));

  console.log('Bootstrapped SimpleFormModule successfully');

  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(decorateComponentRef)
    .catch(err => console.error(err));

}





/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */


/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
