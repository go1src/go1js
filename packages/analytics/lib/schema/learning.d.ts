import { DDD, People, CommonSchema } from "@go1js/schema";
export interface Item extends DDD.Entity {
    title: CommonSchema.DescriptiveText;
    author: DDD.Entity;
}
export interface Content extends Item {
    language: string;
    description: CommonSchema.DescriptiveText;
    image: string;
    readonly type: string;
    provider: People.Organization;
}
export interface Guide extends Item {
}
export interface GuideStructure extends Guide {
    [step: number]: Guide;
}
export interface ConditionalGuide extends Guide {
    on(condition: Specification): Guide;
}
export interface Specification {
}
export interface LearningObject extends GuideStructure {
}
export interface CourseStructure extends LearningObject {
}
export interface Engagement extends DDD.Entity {
    guide: Guide;
    person: People.Person;
    on: Date;
}
