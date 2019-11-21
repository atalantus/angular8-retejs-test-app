import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NodeEditorComponent} from './components/node-editor/node-editor.component';
import {MatTabsModule, MatToolbarModule} from '@angular/material';
import {ReteComponent} from './rete/rete.component';
import {NumberComponent} from './rete/controls/number-control';
import {MyNodeComponent} from './rete/components/node/node.component';
import {ReteModule} from 'rete-angular-render-plugin';

@NgModule({
  declarations: [
    AppComponent,
    ReteComponent,
    NumberComponent,
    MyNodeComponent,
    NodeEditorComponent
  ],
  imports: [
    BrowserModule,
    ReteModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NumberComponent, MyNodeComponent]
})
export class AppModule {
}
