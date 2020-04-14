import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventThumbnailComponent,
  EventsListComponent,
  EventRouteActivator,
  EventListResolver,
  EventService
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { ToastrService } from './common/toastr.service';

import { appRoutes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    CreateEventComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    EventsAppComponent,
    EventsListComponent,
    NavBarComponent,
    Error404Component
  ],
  providers: [
              EventService,
              ToastrService,
              EventRouteActivator,
              EventListResolver,
              {
                provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState
              }
            ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {

  if (component.isDirty)
    return window.confirm('you have not saved this event, do you really want to cancel?');
  return true;

}

