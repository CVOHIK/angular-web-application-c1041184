export interface FieldAliases {
    id: string;
    thema: string;
    type: string;
    subtype: string;
    naam: string;
    straat: string;
    huisnummer: string;
    postcode: string;
    district: string;
    lgst_niv: string;
    hgst_niv: string;
    grondopp: string;
    gebo: string;
    pero: string;
    begindatum: string;
    OBJECTID: string;
}

export interface SpatialReference {
    wkid: number;
    latestWkid: number;
}

export interface Field {
    name: string;
    type: string;
    alias: string;
    length: number;
}

export interface Attributes {
    id: string;
    thema: string;
    type: string;
    subtype: string;
    naam: string;
    straat: string;
    huisnummer: string;
    postcode: string;
    district: string;
    lgst_niv: string;
    hgst_niv: string;
    grondopp: number;
    gebo: string;
    pero: string;
    begindatum: any;
    OBJECTID: number;
}

export interface Geometry {
    x: number;
    y: number;
}

export interface Feature {
    attributes: Attributes;
    geometry: Geometry;
}

export interface RootObject {
    displayFieldName: string;
    fieldAliases: FieldAliases;
    geometryType: string;
    spatialReference: SpatialReference;
    fields: Field[];
    features: Feature[];
}

export class PostalOffice implements Feature{
    attributes: Attributes;    
    geometry: Geometry;
}

export class PostOfficeAttributes implements Attributes{
    id: string;
    thema: string;
    type: string;
    subtype: string;
    naam: string;
    straat: string;
    huisnummer: string;
    postcode: string;
    district: string;
    lgst_niv: string;
    hgst_niv: string;
    grondopp: number;
    gebo: string;
    pero: string;
    begindatum: any;
    OBJECTID: number;
};

export class Coordinates implements Geometry{
    x: number;    y: number;
}


