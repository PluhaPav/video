import { MyEventTarget } from "./MyEventTarget";

export class MySearchEvent extends Event {
    target: MyEventTarget;
}