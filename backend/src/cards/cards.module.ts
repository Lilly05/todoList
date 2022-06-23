import {Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {CardsController} from "./cards.controller";
import {CardsService} from "./cards.service";
import {CardsSchema} from "./cards.model";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'card', schema: CardsSchema}])
    ],
    controllers: [CardsController],
    providers: [CardsService],
})
export class CardsModule{}