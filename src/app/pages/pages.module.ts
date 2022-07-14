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
    FormsModule
  ],
  declarations: [
    PagesComponent,
    AdminComponent,
    SharedGridComponent,
    IndustryInfoComponent,
  ],
})
export class PagesModule {
}
