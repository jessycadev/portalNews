import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { CampanhaComponent } from "./componentes/campanha/campanha.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: AppComponent }, // Rota inicial
    { path: 'campanha', component: CampanhaComponent } // Página "Sobre"
  ];

  @NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }