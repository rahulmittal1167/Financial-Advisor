import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChartsModule} from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { DebtComponent } from '../../debt/debt.component';
import { DailyExpenseComponent } from '../../daily-expense/daily-expense.component';
 import { GoalsComponent } from '../../goals/goals.component';
 import { GoaldetailsComponent } from '../../goals/goaldetails/goaldetails.component';
 import { DebtdetailComponent } from '../../debt/debtdetail/debtdetail.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { LoginComponent } from '../../login/login.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    UserProfileComponent,
    DebtComponent,
    DailyExpenseComponent,
     GoalsComponent,
     GoaldetailsComponent,
     DebtdetailComponent,
   // MapsComponent,
    NotificationsComponent,
    // UpgradeComponent,
  ]
})

export class AdminLayoutModule {}
