import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

// Importaciones Materia
import{MatIconModule}from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material/paginator';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

//Componentes
import { HomeComponent } from './componente/home/home.component';
import { FooterComponent } from './componente/footer/footer.component';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './componente/home/header/header.component';
import { HomeContenidoComponent } from './componente/home/contenido/contenido.component';
import { RegistroComponent } from './componente/registro/registro.component';
import { RegistroContenidoComponent } from './componente/registro/contenido/contenido.component';
import { PrincipalComponent } from './componente/principal/principal.component';
import { PerfilComponent } from './componente/perfil/perfil.component';
import { PrincipalContenidoComponent } from './componente/principal/contenido/contenido.component';
import { PrincipalHeaderComponent } from './componente/principal/header/header.component';
import { PerfilHeaderComponent } from './componente/perfil/perfil-header/perfil-header.component';
import { PerfilFotoComponent } from './componente/perfil/perfil-foto/perfil-foto.component';
import { PerfilAcercaComponent } from './componente/perfil/perfil-acerca/perfil-acerca.component';
import { PerfilExpComponent } from './componente/perfil/perfil-exp/perfil-exp.component';
import { PerfilEduComponent } from './componente/perfil/perfil-edu/perfil-edu.component';
import { PerfilSkillComponent } from './componente/perfil/perfil-skill/perfil-skill.component';
import { PerfilProyectoComponent } from './componente/perfil/perfil-proyecto/perfil-proyecto.component';
import { PrincipalAdminComponent } from './componente/principal/principal-admin/principal-admin.component';
import { PrincipalListarComponent } from './componente/principal/principal-listar/principal-listar.component';
import { DialogSkillCrearComponent } from './dialog/perfil/skill/dialog-skill-crear/dialog-skill-crear.component';
import { DialogExpCrearComponent } from './dialog/perfil/exp/dialog-exp-crear/dialog-exp-crear.component';
import { DialogEduCrearComponent } from './dialog/perfil/edu/dialog-edu-crear/dialog-edu-crear.component';
import { DialogProyCrearComponent } from './dialog/perfil/proy/dialog-proy-crear/dialog-proy-crear.component';
import { DialogSkillEditarComponent } from './dialog/perfil/skill/dialog-skill-editar/dialog-skill-editar.component';
import { DialogProyEditarComponent } from './dialog/perfil/proy/dialog-proy-editar/dialog-proy-editar.component';
import { DialogExpEditarComponent } from './dialog/perfil/exp/dialog-exp-editar/dialog-exp-editar.component';
import { DialogEduEditarComponent } from './dialog/perfil/edu/dialog-edu-editar/dialog-edu-editar.component';
import { DialogAcerEditarComponent } from './dialog/perfil/acer/dialog-acer-editar/dialog-acer-editar.component';
import { DialogInfoPEditarComponent } from './dialog/perfil/infoP/dialog-info-peditar/dialog-info-peditar.component';
import { MatSortModule } from '@angular/material/sort';
import { DialogVerPerfilComponent } from './dialog/descarga-perfil/descarga-perfil.component';

import { JwtInterceptor } from './service/security/interceptor/jwt.interceptor';
import { ErrorService } from './service/security/interceptor/error.service';

const MaterialComponente=[MatListModule,MatProgressSpinnerModule,MatSlideToggleModule,
                          MatMenuModule,MatTabsModule,MatIconModule,MatGridListModule,
                          MatToolbarModule,MatButtonModule,MatFormFieldModule,
                          MatInputModule,MatDialogModule,MatSelectModule,MatTableModule,
                          MatPaginatorModule, MatSortModule];

 const Componentes=[AppComponent,HomeComponent,FooterComponent,HomeHeaderComponent,
                    HomeContenidoComponent,RegistroComponent,RegistroContenidoComponent,
                    PrincipalComponent,PrincipalHeaderComponent,PrincipalContenidoComponent,
                    PerfilComponent,PerfilHeaderComponent,PerfilFotoComponent,PerfilAcercaComponent,
                    PerfilExpComponent,PerfilEduComponent,PerfilSkillComponent,PerfilProyectoComponent,
                    PrincipalAdminComponent,PrincipalListarComponent];
  const ComponentesDialog=[DialogSkillCrearComponent,DialogExpCrearComponent,DialogEduCrearComponent,
                          DialogProyCrearComponent,DialogSkillEditarComponent,DialogProyEditarComponent,
                          DialogExpEditarComponent,DialogEduEditarComponent,DialogAcerEditarComponent,
                          DialogInfoPEditarComponent,DialogVerPerfilComponent];

@NgModule({
  declarations: [
    Componentes,
    ComponentesDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSortModule,
    BrowserAnimationsModule,
    
    MaterialComponente,  
  ],
  providers: [{useClass:JwtInterceptor,provide:HTTP_INTERCEPTORS,multi:true},{useClass:ErrorService,provide:HTTP_INTERCEPTORS,multi:true}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
