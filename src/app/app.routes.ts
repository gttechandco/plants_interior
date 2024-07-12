import { RouterModule ,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { HomeComponent } from './components/home/home.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HistoryComponent } from './components/history/history.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'plants', component: PlantListComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'settings', component: SettingsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
