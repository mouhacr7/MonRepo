export interface IMedicament {
    authorization_holder: string;
    cis_code: string;
    composition:{
        components:string;
        quantity:string;
        type:string;
    };
    presentations :{price: number;
    }
    title: string;
    id: number;
    poster_path: string;
    generic_groups: string[];
    // original_title: string;
    // genre_ids: number[];
    // backdrop_path: string;
    // adult: boolean;
    // overview: string;
    // release_date: string;
  }

//   "composition": [
//     {
//       "components": {
//         "anastrozole": "1,00 mg"
//       }, 
//       "quantity": "un comprimé", 
//       "type": "Comprimé"
//     }
//   ], 
//   "generic_groups": [
//     "ANASTROZOLE 1 mg - ARIMIDEX 1 mg, comprimé pelliculé."
//   ], 
//   "iab": null, 
//   "iab_improvements": null, 
//   "id": 60002283, 
//   "presentations": [
//     {
//       "cip_codes": [
//         "494 972-9", 
//         "34009 494 972 9 4"
//       ], 
//       "marketing_start_date": "2011-03-16", 
//       "marketing_stop_date": null, 
//       "price": 6323, 
//       "refund_rate": 100, 
//       "title": "plaquette(s) thermoformée(s) PVC PVDC aluminium de 30 comprimé(s)"
//     }, 
//     {
//       "cip_codes": [
//         "494 977-0", 
//         "34009 494 977 0 6"
//       ], 
//       "marketing_start_date": "2011-09-19", 
//       "marketing_stop_date": null, 
//       "price": 16876, 
//       "refund_rate": 100, 
//       "title": "plaquette(s) thermoformée(s) PVC PVDC aluminium de 90 comprimé(s)"
//     }
//   ], 
//   "title": "ANASTROZOLE ACCORD 1 mg, comprimé pelliculé"