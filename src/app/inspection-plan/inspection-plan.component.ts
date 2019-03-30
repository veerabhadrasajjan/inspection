import { Component, OnInit } from '@angular/core';
import { Service, Country } from '../services/inspection.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-inspection-plan',
  templateUrl: './inspection-plan.component.html',
  styleUrls: ['./inspection-plan.component.css']
})
export class InspectionPlanComponent implements OnInit {

  itemAutoComplete: any = [];
  toolNumbers: any;
  partNumber: '';
  partName: '';


  drawingRevNumber: '';
  toolNumber: '';
  documentNumber: '';
  revisionNo: '';
  revisionDate: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  savedCroppedImage: any = '';
  diagramImage: any = '';
  partItemsList: any;
  charctersticsList: any;
  checkingMethods: any;
  selectedItem: any = {};
  PartName: any;
  inspection: any = {
    autoplastPartNo: '',
    drawingnumber: ''
  };
  inspectionDetails: any = [];

  listOfcharacteristics: any = [];
  listOfSCCC: any = [];
  listOfcheckingMethods: any = [];
  listOfRespPerson: any = [];
  constructor(private service: Service) {

    this.toolNumbers = [{ ID: '1', name: 'AUT012' }, { ID: '2', name: 'AUT013' }];

    this.listOfSCCC = [{ value: 'SC', name: 'SC' }, { value: 'CC', name: 'CC' }, { value: 'KPC', name: 'KPC' }, { value: '*', name: '*' }];
    this.listOfRespPerson = [{ Id: 'SC', name: 'SC' }, { Id: 'CC', name: 'CC' }, { Id: 'KPC', name: 'KPC' }, { Id: '*', name: '*' }];
  }

  ngOnInit() {
    this.getPartAutocomplet();
    this.getCharcterstics();
    this.getCheckingMethod();
  }

  getPartAutocomplet() {
    this.service.getPartAutocomplet().pipe().subscribe(res => {
      this.itemAutoComplete = res;

    }, (error: any) => {
      console.error('error', error);
    });
  }

  getCharcterstics() {
    this.service.getCharcterstics().pipe().subscribe(res => {
      this.listOfcharacteristics = res;
      console.log(res, 'inspections')
    }, (error: any) => {
      console.error('error', error);
    });
  }

  getCheckingMethod() {
    this.service.getCheckingMethod().pipe().subscribe(res => {
      this.listOfcheckingMethods = res;
      console.log(res, 'inspections')
    }, (error: any) => {
      console.error('error', error);
    });
  }

  updateInspectionInfo(event, source) {
    var result = "";
    result += (result && event.value) ? (", " + event.value) : event.value;
      this.itemAutoComplete.forEach(element => {
       if(element[source] == event.value){
        this.selectedItem = element;
       } 
      })
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

  saveImage(event) {
    this.savedCroppedImage = this.croppedImage;
    this.imageChangedEvent = ""
    event.srcElement.offsetParent.children[1].children[0].value = ''
  }

  removeImage() {
    this.savedCroppedImage = '';
  }

  saveDiagramImage(event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: ProgressEvent) => {
      this.diagramImage = (<FileReader>event.target).result;
    }

  }

}
