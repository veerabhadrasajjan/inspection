import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DxDataGridModule, DxTemplateModule, 
  DxButtonModule,DxValidatorModule, DxTextBoxModule,
  DxValidationSummaryModule, DxValidationGroupModule
} from 'devextreme-angular';
import { InspectionPlanComponent } from './inspection-plan/inspection-plan.component';
import { UiModule } from './ui/ui.module';
import { Service, Country } from './services/inspection.service';

@NgModule({
  declarations: [
    AppComponent,
    InspectionPlanComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTemplateModule,
    DxButtonModule,
    DxValidatorModule,
    DxTextBoxModule,
    DxValidationSummaryModule,
    DxValidationGroupModule,
    UiModule
  ],
  providers: [Service, Country],
  bootstrap: [AppComponent]
})
export class AppModule { }
