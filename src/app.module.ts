import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.sloal1k.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
    ),
    ContactModule,
  ],
})
export class AppModule {}
