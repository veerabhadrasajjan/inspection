import { Injectable } from '@angular/core';

export class Country {
  PostionNo: number;
  Characteristics: string;
  LSL: number;
  USL: number;
  SC_CC:string;
  CheckingMethod: string;
  FPA: number;
  FPAResp: string;
  LPA: number;
  LPAResp: string;
  Shots: number;
  FreqHrs: number;
  StatusResp: string;
  PostionIndication: string;
}

let countries: Country[] = [{
  "PostionNo": 5,
  "Characteristics": "Width",
  "LSL": 7.40,
  "USL": 7.80,
  "SC_CC": null,
  "CheckingMethod": "Vernier Caliper",
  "FPA": 1,
  "FPAResp": "",
  "LPA": 1,
  "LPAResp": "",
  "Shots": 1,
  "FreqHrs": 2,
  "StatusResp": "",
  "PostionIndication": ""
}, {
  "PostionNo": 5,
  "Characteristics": "Width",
  "LSL": 7.40,
  "USL": 7.80,
  "SC_CC": null,
  "CheckingMethod": "Vernier Caliper",
  "FPA": 1,
  "FPAResp": "",
  "LPA": 1,
  "LPAResp": "",
  "Shots": 1,
  "FreqHrs": 2,
  "StatusResp": "",
  "PostionIndication": ""
}, {
  "PostionNo": 5,
  "Characteristics": "Width",
  "LSL": 7.40,
  "USL": 7.80,
  "SC_CC": null,
  "CheckingMethod": "Vernier Caliper",
  "FPA": 1,
  "FPAResp": "",
  "LPA": 1,
  "LPAResp": "",
  "Shots": 1,
  "FreqHrs": 2,
  "StatusResp": "",
  "PostionIndication": ""
}, {
  "PostionNo": 5,
  "Characteristics": "Width",
  "LSL": 7.40,
  "USL": 7.80,
  "SC_CC": null,
  "CheckingMethod": "Vernier Caliper",
  "FPA": 1,
  "FPAResp": "",
  "LPA": 1,
  "LPAResp": "",
  "Shots": 1,
  "FreqHrs": 2,
  "StatusResp": "",
  "PostionIndication": ""
}, {
  "PostionNo": 5,
  "Characteristics": "Width",
  "LSL": 7.40,
  "USL": 7.80,
  "SC_CC": null,
  "CheckingMethod": "Vernier Caliper",
  "FPA": 1,
  "FPAResp": "",
  "LPA": 1,
  "LPAResp": "",
  "Shots": 1,
  "FreqHrs": 2,
  "StatusResp": "",
  "PostionIndication": ""
}, {
  "PostionNo": 5,
  "Characteristics": "Width",
  "LSL": 7.40,
  "USL": 7.80,
  "SC_CC": null,
  "CheckingMethod": "Vernier Caliper",
  "FPA": 1,
  "FPAResp": "",
  "LPA": 1,
  "LPAResp": "",
  "Shots": 1,
  "FreqHrs": 2,
  "StatusResp": "",
  "PostionIndication": ""
}, {
  "PostionNo": 5,
  "Characteristics": "Width",
  "LSL": 7.40,
  "USL": 7.80,
  "SC_CC": null,
  "CheckingMethod": "Vernier Caliper",
  "FPA": 1,
  "FPAResp": "",
  "LPA": 1,
  "LPAResp": "",
  "Shots": 1,
  "FreqHrs": 2,
  "StatusResp": "",
  "PostionIndication": ""
}, {
  "PostionNo": 5,
  "Characteristics": "Width",
  "LSL": 7.40,
  "USL": 7.80,
  "SC_CC": null,
  "CheckingMethod": "Vernier Caliper",
  "FPA": 1,
  "FPAResp": "",
  "LPA": 1,
  "LPAResp": "",
  "Shots": 1,
  "FreqHrs": 2,
  "StatusResp": "",
  "PostionIndication": ""
}, {
  "PostionNo": 5,
  "Characteristics": "Width",
  "LSL": 7.40,
  "USL": 7.80,
  "SC_CC": null,
  "CheckingMethod": "Vernier Caliper",
  "FPA": 1,
  "FPAResp": "",
  "LPA": 1,
  "LPAResp": "",
  "Shots": 1,
  "FreqHrs": 2,
  "StatusResp": "",
  "PostionIndication": ""
}, {
  "PostionNo": 5,
  "Characteristics": "Width",
  "LSL": 7.40,
  "USL": 7.80,
  "SC_CC": null,
  "CheckingMethod": "Vernier Caliper",
  "FPA": 1,
  "FPAResp": "",
  "LPA": 1,
  "LPAResp": "",
  "Shots": 1,
  "FreqHrs": 2,
  "StatusResp": "",
  "PostionIndication": ""
}];

@Injectable()
export class Service {
  getCountries(): Country[] {
    return countries;
  }
}