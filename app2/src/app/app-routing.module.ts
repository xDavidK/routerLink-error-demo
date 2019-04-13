import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: "", component : AppComponent, children: [
      {
        path: "",redirectTo:"/home", pathMatch: "full"
      },
      {
        path: "home",component: HomeComponent, children: [
            {
              path: "child",component: ChildComponent
            }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
