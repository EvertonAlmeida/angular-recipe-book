import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./home.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
