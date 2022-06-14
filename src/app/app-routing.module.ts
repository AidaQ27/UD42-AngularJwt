import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercadeComponent } from './acercade/acercade.component';
import { DatosComponent } from './datos/datos.component';
import { MihomeComponent } from './mihome/mihome.component';
import { PersonajesComponent } from './personajes/personajes.component';

import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { PersonajeDetailsComponent } from './components/personaje-details/personaje-details.component';
import { PersonajeListComponent } from './components/personaje-list/personaje-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  { path: 'mihome',component: MihomeComponent},
  { path: 'acercade',component: AcercadeComponent},
  { path: 'personajes',component: PersonajesComponent},
  { path: 'datos',component: DatosComponent},
  { path: 'personajes', component: PersonajeListComponent },
  { path: 'personajes/:id', component: PersonajeDetailsComponent },
  { path: 'add', component: AddPersonajeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrer', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'user', component: BoardUserComponent},
  { path: 'mod', component: BoardModeratorComponent},
  { path: 'admin', component: BoardAdminComponent},
  { path: '', redirectTo: 'mihome', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
