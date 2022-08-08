import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './pages/crud/crud.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ActualizarEmpresaComponent } from './pages/crud/actualizar-empresa/actualizar-empresa.component';
import { RegistrarEmpresaComponent } from './pages/crud/registrar-empresa/registrar-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    ActualizarEmpresaComponent,
    RegistrarEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
