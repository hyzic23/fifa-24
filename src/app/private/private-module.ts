import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth-guard.service";
import { NgModule } from "@angular/core";
import { PrivateComponent } from "./private-component.ts/private-component.ts.component";

const routes: Routes = [
    {
        path: 'private',
        component: PrivateComponent,
        canActivate: [AuthGuardService]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [PrivateComponent]
})
export class PrivateModule {}