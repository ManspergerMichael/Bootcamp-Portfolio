import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NinjaComponent} from './ninja/ninja.component';
import {ScoresComponent} from './scores/scores.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {path: '', pathMatch:'full', component: UserComponent},
  {path: 'ninja/:id', component: NinjaComponent},
  {path: 'score', component: ScoresComponent}
]

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
  
})
export class AppRoutingModule { }
