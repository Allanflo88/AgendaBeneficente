import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';

import { AppComponent } from "./app.component";
import { SolicitarCriarEntidadeComponent } from "./administrativo/solicitar-criar-entidade/solicitar-criar-entidade.component";
import { SolicitarDeletarEntidadeComponent } from "./administrativo/solicitar-deletar-entidade/solicitar-deletar-entidade.component";
import { ListarEntidadesComponent } from "./administrativo/listar-entidades/listar-entidades.component";
import { CriarEventoComponent } from "./administrativo/criar-evento/criar-evento.component";
import { LoginComponent } from "./administrativo/login/login.component";
import { FeedComponent } from "./eventos/feed/feed.component";
import { DetalhesEventoComponent } from "./eventos/detalhes-evento/detalhes-evento.component";
import { DetalhesEntidadeComponent } from "./eventos/detalhes-entidade/detalhes-entidade.component";
import { ListarSolicitacoesComponent } from "./administrativo/listar-solicitacoes/listar-solicitacoes.component";
import { CardEventoComponent } from "./eventos/feed/card-evento/card-evento.component";
import { EntidadesService } from "./services/entidades.service";
import { DataStorageService } from "./services/data-storage.service";
import { HeaderComponent } from "./header/header.component";
import { FiltroComponent } from './eventos/feed/filtro/filtro.component';

const routes: Routes = [
  { path: "", redirectTo: "/feed", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "feed", component: FeedComponent },
  { path: "detalhes-evento/:id", component: DetalhesEventoComponent },
  { path: "detalhes-entidade/:id", component: DetalhesEntidadeComponent },
  { path: "criar-evento", component: CriarEventoComponent },
  { path: "criar-evento/:id", component: CriarEventoComponent },
  { path: "entidades", component: ListarEntidadesComponent },
  { path: "solicitacoes", component: ListarSolicitacoesComponent },
  { path: "solicitar-criar", component: SolicitarCriarEntidadeComponent },
  { path: "solicitar-deletar", component: SolicitarDeletarEntidadeComponent },
  { path: "solicitar-deletar/:id", component: SolicitarDeletarEntidadeComponent },
  { path: "solicitar-criar/:id", component: SolicitarCriarEntidadeComponent },
  {
    path: "solicitar-deletar/:id",
    component: SolicitarDeletarEntidadeComponent
  }
];

const firebase = {
  apiKey: "AIzaSyA49dvY3cbq69jonmzKU9HllLjanhKI1nI",
  authDomain: "agendabeneficente-81dfe.firebaseapp.com",
  databaseURL: "https://agendabeneficente-81dfe.firebaseio.com",
  projectId: "agendabeneficente-81dfe",
  storageBucket: "agendabeneficente-81dfe.appspot.com",
  messagingSenderId: "443216959121"
};

@NgModule({
  declarations: [
    AppComponent,
    SolicitarCriarEntidadeComponent,
    SolicitarDeletarEntidadeComponent,
    ListarEntidadesComponent,
    CriarEventoComponent,
    LoginComponent,
    FeedComponent,
    DetalhesEventoComponent,
    DetalhesEntidadeComponent,
    ListarSolicitacoesComponent,
    CardEventoComponent,
    HeaderComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgxMaskModule.forRoot(),
    AngularFireModule.initializeApp(firebase),
    AngularFireStorageModule
  ],
  providers: [EntidadesService, DataStorageService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {}
