import {Injectable} from "@nestjs/common";
import {Cards} from "./cards.model";
import {InjectModel } from "@nestjs/mongoose";
import {Model} from "mongoose";

@Injectable()
export class CardsService{
    private cards: Cards[] = [];

    constructor(
        @InjectModel('card') private readonly cardModel: Model<Cards>
    ) {}

    async createCard(title: string, description: string, isDone: boolean){
        const newCard = new this.cardModel({
            title: title,
            description: description,
            isDone: isDone
        });
        const result = await newCard.save();
        console.log(result);
        return 'prodId';
    }

    getCards(){
        return [...this.cards];
    }
}