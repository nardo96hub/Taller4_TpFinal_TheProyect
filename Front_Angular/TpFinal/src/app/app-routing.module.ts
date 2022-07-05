import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente/home/home.component';
import { PerfilComponent } from './componente/perfil/perfil.component';
import { PrincipalAdminComponent } from './componente/principal/principal-admin/principal-admin.component';
import { PrincipalListarComponent } from './componente/principal/principal-listar/principal-listar.component';
import { PrincipalComponent } from './componente/principal/principal.component';
import { RegistroComponent } from './componente/registro/registro.component';

import {  Roles} from './modal/perfil/roles/roles';
import { UserGuard } from './service/security/guard/user.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'registro',component:RegistroComponent},
  {path:'principal',component:PrincipalComponent,canActivate:[UserGuard],data:{roles:["ADMIN","USER"]}},
  {path:'perfil',component:PerfilComponent ,canActivate:[UserGuard],data:{roles:["ADMIN","USER"]}},
  {path:'admin',component:PrincipalAdminComponent,canActivate:[UserGuard],data:{roles:["ADMIN"]}},
  {path:'lista',component:PrincipalListarComponent,canActivate:[UserGuard],data:{roles:["ADMIN","USER"]}},
  /*{path:'descargaP/:userP/:ret/:rec',component:VerPerfilComponent,canActivate:[UserGuard],data:{roles:["ADMIN","USER"]}},*/
  {path:'**',redirectTo:''}

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
