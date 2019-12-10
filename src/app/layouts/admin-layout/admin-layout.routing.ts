import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { DebtComponent } from '../../debt/debt.component';
import { DailyExpenseComponent } from '../../daily-expense/daily-expense.component';
 import { GoalsComponent } from '../../goals/goals.component';
 import { GoaldetailsComponent } from '../../goals/goaldetails/goaldetails.component';
 import { DebtdetailComponent } from '../../debt/debtdetail/debtdetail.component';
 import { LoginComponent } from '../../login/login.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'login',      component: LoginComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'debt',     component: DebtComponent },
    { path: 'daily-expense',     component: DailyExpenseComponent },
    { path: 'notifications',  component: NotificationsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    { path: 'goals',          component: GoalsComponent },
    { path: 'goals/goaldetails',          component: GoaldetailsComponent },
    { path: 'debt/debtdetail',          component: DebtdetailComponent },

];
