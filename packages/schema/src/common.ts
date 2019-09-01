export class Location implements DescriptiveText {
  descriptor: Descriptor;
}

export class Industry implements DescriptiveText {
  descriptor: Descriptor;
}

export class Topic implements DescriptiveText {
  descriptor: Descriptor;
}

export class Language implements EntityAttribute {
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