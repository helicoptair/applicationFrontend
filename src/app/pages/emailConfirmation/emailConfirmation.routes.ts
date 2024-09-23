import { Routes } from "@angular/router";
import { EmailConfirmationComponent } from "./emailConfirmation.component";

export const routes: Routes = [
    { path: 'email-confirmation/:username/:token', component: EmailConfirmationComponent },
];