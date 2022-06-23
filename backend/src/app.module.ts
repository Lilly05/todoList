import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://LillyKate:m0ng01509?!@todolist.6ukevi6.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
