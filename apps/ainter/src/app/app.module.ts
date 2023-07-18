import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { TopicsComponent } from './component/topics/topics.component';
import { LevelComponent } from './component/level/level.component';
import { DescriptionComponent } from './component/description/description.component';
import { TEnriquecidoComponent } from './component/t-enriquecido/t-enriquecido.component';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    LevelComponent,

    DescriptionComponent,
    TEnriquecidoComponent,
    
  ],
  imports: [
    BrowserModule, LayoutModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
