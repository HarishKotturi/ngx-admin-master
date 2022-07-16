import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbInputModule, NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedGridComponent } from './shared-grid/shared-grid.component';
import {TableModule} from 'primeng/table';
import { IndustryInfoComponent } from './industry-info/industry-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { SectorInfoComponent } from './sector-info/sector-info.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbInputModule,
    DashboardModule,
    NbButtonModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ConfirmDialogModule,
    ButtonModule,
    DialogModule,
    ToastModule,
    HttpClientModule,
    DropdownModule,
  ],
  declarations: [
    PagesComponent,
    AdminComponent,
    SharedGridComponent,
    IndustryInfoComponent,
    SectorInfoComponent,
  ],
  providers:[
    ConfirmationService,
    MessageService
  ]
})
export class PagesModule {
}
