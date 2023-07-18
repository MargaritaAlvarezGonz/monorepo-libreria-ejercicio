import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/app/home',
    },
    {
        path:'app',
        loadChildren:() => 
        import('./pages/pages.module').then((m)=> m.PagesModule), 
    },
    // {
    //     path:'**',
    //     component: null,
    // }
];
