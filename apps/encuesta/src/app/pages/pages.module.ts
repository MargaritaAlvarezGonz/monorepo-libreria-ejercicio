import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { DocumentsComponent } from './documents/documents.component';

@NgModule({
  declarations: [HomeComponent, EncuestaComponent, DocumentsComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
