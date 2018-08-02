import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { FormularioComponent } from './formulario/formulario.component'
import { NovoRegistroSucessoComponent } from './novo-registro-sucesso/novo-registro-sucesso.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'formulario', component: FormularioComponent },
    { path: 'novo-registro-sucesso', component: NovoRegistroSucessoComponent }
]