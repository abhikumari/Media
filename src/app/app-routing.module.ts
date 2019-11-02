import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MediaComponent } from './media/media.component';



const appRoutes: Routes = [
    { path: '', component: MediaComponent, pathMatch: 'full'},
{ path: 'login', component: AuthenticationComponent},
{ path: 'register', component: AuthenticationComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
