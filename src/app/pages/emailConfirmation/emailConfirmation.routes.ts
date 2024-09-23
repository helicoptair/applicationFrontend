import { Routes } from "@angular/router";
import { EmailConfirmationComponent } from "./emailConfirmation.component";
import { ConfirmationComponent } from "./confirmation/confirmation.component";

export const routes: Routes = [
    // { path: ':username/:token', component: EmailConfirmationComponent },
    { path: '', component: EmailConfirmationComponent, pathMatch: 'full' },
    { path: ':username/:token', component: ConfirmationComponent },
];