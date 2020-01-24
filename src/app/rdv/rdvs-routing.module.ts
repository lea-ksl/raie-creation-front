import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RdvsDisplayComponent} from './rdvs-display/rdvs-display.component';
import {RdvDisplayComponent} from './rdv-display/rdv-display.component';
import {CalendarComponent} from './calendar/calendar/calendar.component';

const routes: Routes = [
  {path: '', redirectTo: 'rdvs'},
  {
    path: '', children: [
      {path: 'rdvs', component: RdvsDisplayComponent},
      {path: 'rdv/:id', component: RdvDisplayComponent},
      {path: 'calendar', component: CalendarComponent}
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class RdvsRoutingModule {
}
