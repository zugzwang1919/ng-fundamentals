import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsAppComponent } from '../events-app.component';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component ({
  template: `
  <div >
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of this.events" class="col-md-5">
        <event-thumbnail  (click)="handleThumbnailClick(event.name)" [event]="event"> </event-thumbnail>
      </div>
    </div>
  </div>
  `
})

export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService, private toastrService: ToastrService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data.events;

  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }

}
