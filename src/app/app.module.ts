import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DxDataGridModule, DxTemplateModule, 
  DxButtonModule,DxValidatorModule, DxTextBoxModule,
  DxValidationSummaryModule, DxValidationGroupModule,
  DxAutocompleteModule, DxDropDownBoxModule, DxCalendarModule,
  DxDateBoxModule 
} from 'devextreme-angular';
import { ImageCropperModule } from 'ngx-image-cropper';
import { InspectionPlanComponent } from './inspection-plan/inspection-plan.component';
import { InspectionPlanViewComponent } from './inspection-plan-view/inspection-plan-view.component';
import { UiModule } from './ui/ui.module';
import { Service, Country } from './services/inspection.service';

@NgModule({
  declarations: [
    AppComponent,
    InspectionPlanComponent,
    InspectionPlanViewComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxAutocompleteModule,
    DxDropDownBoxModule,
    DxTemplateModule,
    DxButtonModule,
    DxValidatorModule,
    DxTextBoxModule,
    DxValidationSummaryModule,
    DxValidationGroupModule,
    UiModule,
    ImageCropperModule,
    DxCalendarModule,
    DxDateBoxModule ,
  ],
  providers: [Service, Country],
  bootstrap: [AppComponent]
})
export class AppModule { }
