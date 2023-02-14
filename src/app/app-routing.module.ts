import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './presenter/pages/blog/blog.component';
import { BookmarksComponent } from './presenter/pages/bookmarks/bookmarks.component';
import { EditorComponent } from './presenter/pages/editor/editor.component';
import { HomeComponent } from './presenter/pages/home/home.component';
import { PostComponent } from './presenter/pages/post/post.component';
import { ProjectsComponent } from './presenter/pages/projects/projects.component';
import { NotFoundComponent } from './presenter/components/not-found/not-found.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:postId', component: PostComponent },

    { path: 'projects', component: ProjectsComponent },
    { path: 'bookmarks', component: BookmarksComponent },
    {
        path: 'editor',
        loadChildren: () => import('./presenter/pages/editor/editor.module').then((c) => c.EditorModule),
        component: EditorComponent
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
