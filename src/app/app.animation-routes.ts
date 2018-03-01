import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BasicComponent } from './components/basic/basic.component';
import { ContainedComponent } from './components/contained/contained.component';
import { AdvancedComponent } from './components/advanced/advanced.component';

const animationRoutes:Routes=[
    {
        path:'animation-home',
        component: HomeComponent
    },
    {
        path: 'animation-basic',
        component: BasicComponent
    },
    {
        path:'animation-contained',
        component: ContainedComponent
    },
    {
        path:'animation-advanced',
        component: AdvancedComponent
    },
    {
        path:'',
        redirectTo: '/animation-home',
        pathMatch: 'full'
    },
  ];

  export const animationRouter: ModuleWithProviders = RouterModule.forRoot(animationRoutes);