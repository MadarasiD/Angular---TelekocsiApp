import { Sender } from "./sender";

export class Order {
    public id: string = '';
    public lastName: string = '';
    public firstName: string = '';
    public email: string = '';
    public cityFrom: string = '';
    public cityTo: string = '';
    public date: string = '';
    public km: string = '';
    public owner: Sender = new Sender();
}
