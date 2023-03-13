import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { HomeInventoryDataComponent } from './components/home-inventory-data/home-inventory-data.component';
import { CreateHomeComponent } from './components/create-home/create-home.component';
import { UpdateHomeComponent } from './components/update-home/update-home.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'file', component:  UploadFileComponent},
  { path: 'home', component:  HomeInventoryDataComponent},
  { path: 'create', component: CreateHomeComponent},
  { path: 'update', component: UpdateHomeComponent}
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }