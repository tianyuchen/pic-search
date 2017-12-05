import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { PicSearchComponent } from './pic-search/pic-search.component';

import { PicService }          from './pic.service';


@NgModule({
  declarations: [
    AppComponent,
    PicSearchComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [PicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
