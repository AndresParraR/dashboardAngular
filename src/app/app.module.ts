import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { ChartistModule } from 'ng-chartist';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StoreModule } from '@ngrx/store';
import { usersReducer } from './state/users.reducers';
import { rolesReducer } from './state/roles.reducers';

import { MainContainerComponent } from './main-container/main-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardCapacityComponent } from './card-capacity/card-capacity.component';
import { CardStatisticsComponent } from './card-statistics/card-statistics.component';
import { AdministratorComponent } from './administrator/administrator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    DashboardComponent,
    CardCapacityComponent,
    CardStatisticsComponent,
    AdministratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatBadgeModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    ChartistModule,
    StoreModule.forRoot({users: usersReducer, roles: rolesReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
