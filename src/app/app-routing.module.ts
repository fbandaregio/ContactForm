import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';

const routes: Routes = [
  {
    path: 'form', component: FormComponent, 
  },
  { path: 'mensaje', component: MensajeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
