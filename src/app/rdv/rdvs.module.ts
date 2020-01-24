import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RdvsDisplayComponent} from './rdvs-display/rdvs-display.component';
import {RdvDisplayComponent} from './rdv-display/rdv-display.component';
import {RdvsRoutingModule} from './rdvs-routing.module';
import {RdvDisplayModule} from './rdv-display/rdv-display.module';
import {RdvsDisplayModule} from './rdvs-display/rdvs-display.module';
import {MatCardModule, MatDatepickerModule, MatGridListModule, MatNativeDateModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';


@NgModule({
  declarations: [RdvsDisplayComponent, RdvDisplayComponent, CalendarComponent],
  imports: [
    CommonModule,
    RdvsRoutingModule,
    RdvDisplayModule,
    RdvsDisplayModule,
    MatGridListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    FullCalendarModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
  ],
  providers: [FormsModule],
  bootstrap: [RdvsDisplayComponent]
})
export class RdvsModule {
}
