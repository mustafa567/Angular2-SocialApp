import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { UserHeaderComponent } from './home/userheader/userheader.component';
import { LeftPanelComponent } from './home/leftpanel/leftpanel.component';
import { MiddlePanelComponent } from './home/middlepanel/middlepanel.component';
import { UserDirComponent } from './home/leftpanel/userDirectory/userdir.component';
import { GroupDirComponent } from './home/leftpanel/groupDirectory/groupdir.component';
import { PostBoxComponent } from './home/middlepanel/postbox/postbox.component';
import { CommentsComponent } from './home/middlepanel/comments/comments.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        UserHeaderComponent,
        LeftPanelComponent,
        MiddlePanelComponent,
        UserDirComponent,
        GroupDirComponent,
        PostBoxComponent,
        CommentsComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
      //  fakeBackendProvider,
   //    MockBackend,
   //     BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }