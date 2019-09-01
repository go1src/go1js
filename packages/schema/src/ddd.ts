import { EntityAttribute } from "./common";

export interface Entity extends Traits, Actions {
  id: Identity | number | string;
}

export interface Traits {
  [attribute: string]: EntityAttribute | EntityAttribute[] | any;
}

export interface Identity {

}

export interface Repository<T> {
  find(item: T): Promise<T[]>;
  find(id: string | number): Promise<T>;
  create(item: T): Promise<boolean>;
  delete(id: string | number): Promise<boolean>;
  update(id: string | number, item: T): Promise<boolean>;
  load(id: string | number): Promise<T>;
  save(item: T): Promise<T>;
  archive(id: string | number): Promise<boolean>;
}

export interface Event extends Entity {

}

export interface ActionHandler extends EventHandler {
  (action: Action, ...params: any[]);
  id: string;
}

export interface Actions {
  [action: string]: ActionHandler;
}

export interface EventHandler {
  (event: Event, ...params: any[]): any;
}

export interface DomainEvent extends Event {

}

export interface Action extends Event {

}

export interface CommandHandler extends EventHandler {

}

export interface Command extends Event {

}