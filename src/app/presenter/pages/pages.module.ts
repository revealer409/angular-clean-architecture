import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { EditorModule } from './editor/editor.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
    declarations: [
        BlogComponent,
        BookmarksComponent,
        HomeComponent,
        PostComponent,
        ProjectsComponent,
    ],
    imports: [
        EditorModule
    ],
    exports: []
})
export class PagesModule { }
