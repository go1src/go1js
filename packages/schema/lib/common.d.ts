export declare class Location implements DescriptiveText {
    descriptor: Descriptor;
}
export declare class Industry implements DescriptiveText {
    descriptor: Descriptor;
}
export declare class Topic implements DescriptiveText {
    descriptor: Descriptor;
}
export declare class Language implements EntityAttribute {
    name: DescriptiveText;
}
export interface Descriptor {
    [locale: string]: string;
}
export interface Taxonomy {
}
export interface EntityAttribute {
}
export interface DescriptiveText extends EntityAttribute {
    descriptor: Descriptor;
}
