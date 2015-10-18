/** Les classes et interfaces utilisées dans le SDP */
module sdp {
  export interface user {
    lastname?: string;
    firstname?: string;
    buque?: string;
    fams?: string;
  }
}

module api {
  export interface answer {
    message: string;
    success: boolean;
  }
}
