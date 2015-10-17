/** Les classes et interfaces utilisées dans le SDP */
module sdp {
  /** L'objet utilisateur */
  export interface user {
    buque?: string;
    fams?: string;
    firstname?: string;
    lastname?: string;
    adress?: string;
    latitude?: number;
    longitude?: number;
    phone?: string;
    grouperegionals?: string;
    boquettes?: string;
    email1?: string;
    email2?: string;
    roles?: Array<string>;
  }
}

/** Module qui traduit ce qui sort de l'API */
module api {
  /** Les réponses de l'API */
  export interface answer {
    message: string;
    success: boolean;
  }
}
