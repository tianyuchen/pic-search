import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PicSearchComponent } from './components/pic-search/pic-search.component';

import { PicService }          from './services/pic.service';
import { PicDetailComponent } from './components/pic-detail/pic-detail.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PicSearchComponent,
    PicDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [PicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
