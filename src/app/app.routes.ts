import { RouterModule ,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { PlantDetailComponent } from './components/plant-detail/plant-detail.component';
import { PlantFormComponent } from './components/plant-form/plant-form.component';

export const routes: Routes = [
    { path: '', component: PlantListComponent },
    { path: 'plants/:id', component: PlantDetailComponent },
    { path: 'create', component: PlantFormComponent },
    { path: 'edit/:id', component: PlantFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
