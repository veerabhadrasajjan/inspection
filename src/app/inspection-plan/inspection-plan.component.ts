import { Component, OnInit } from '@angular/core';
import { Service, Country } from '../services/inspection.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-inspection-plan',
  templateUrl: './inspection-plan.component.html',
  styleUrls: ['./inspection-plan.component.css']
})
export class InspectionPlanComponent implements OnInit {

  countries: Country[];
  partNames: string[];
  autoplastPartNos: string[];
  toolNumbers: any;
  partNumber: '';
  partName: '';
  autoplastPartNo: '';
  drawingnumber: '';
  drawingRevNumber: '';
  toolNumber: '';
  documentNumber: '';
  revisionNo: '';
  revisionDate: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  savedCroppedImage: any = '';
  diagramImage: any = '';

  constructor(service: Service) {
    this.countries = service.getCountries();
    this.partNames = ['Engine', 'Silencer', 'Break', 'Handle'];
    this.autoplastPartNos = ['231', '23451', '14325', '54321'];
    this.toolNumbers = [{ID:'1', name: 'AUT012'},{ID:'2', name:'AUT013'}];
  }

  ngOnInit() {
  }
  
  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }

  imageLoaded() {
      // show cropper
  }

  cropperReady() {
      // cropper ready
  }

  loadImageFailed() {
      // show message
  }

  saveImage(event){
    this.savedCroppedImage = this.croppedImage;
    this.imageChangedEvent=""
    event.srcElement.offsetParent.children[1].children[0].value=''
  }

  removeImage(){
    this.savedCroppedImage='';
  }

  saveDiagramImage(event){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: ProgressEvent) => {
      this.diagramImage = (<FileReader>event.target).result;
    }
    
  }

}
