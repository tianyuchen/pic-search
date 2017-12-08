import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PicDetailComponent }   from './components/pic-detail/pic-detail.component';
import { PicSearchComponent }   from './components/pic-search/pic-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: PicSearchComponent },
  { path: 'detail/:id', component: PicDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
