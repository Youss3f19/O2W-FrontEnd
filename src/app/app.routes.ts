import { Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MainComponent } from './component/main/main.component';
import { HomeDashboardComponent } from './component/dashboard/home-dashboard/home-dashboard.component';
import { ListBoxComponent } from './component/main/list-box/list-box.component';
import { AddBoxComponent } from './component/dashboard/add-box/add-box.component';
import { BoxTableComponent } from './component/dashboard/box-table/box-table.component';
import { ProductTableComponent } from './component/dashboard/product-table/product-table.component';
import { AddProductComponent } from './component/dashboard/add-product/add-product.component';
import { SignupComponent } from './component/main/auth/signup/signup.component';
import { AuthComponent } from './component/main/auth/auth.component';
import { LoginComponent } from './component/main/auth/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main/list-box', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: 'home-dashboard', component: HomeDashboardComponent },
            { path: 'box-table', component: BoxTableComponent },
            { path: 'product-table', component: ProductTableComponent },
            { path: 'add-box', component: AddBoxComponent },
            { path: 'update-box/:id' , component: AddBoxComponent },
            { path: 'add-product' , component: AddProductComponent },
            { path: 'update-product/:id' , component: AddProductComponent },




        ]
    },
    {path: 'main',component: MainComponent,
        children: [
            { path: 'list-box', component: ListBoxComponent },
            { path: 'auth', component: AuthComponent ,
              children:[
                { path: 'signup', component: SignupComponent },
                { path: 'login', component: LoginComponent }

            ] },


        ]
    }
    
];
