/** Les classes et interfaces utilisées dans le SDP */
module sdp {
  export interface user {
    buque: string;
    fams: string;
    firstname: string;
    lastname: string;
    adress: string;
    latitude: number;
    longitude: number;
    phone: string;
    grouperegionals: string;
    boquettes: string;
    email2: string;
    roles: Array<string>;
  }
}
