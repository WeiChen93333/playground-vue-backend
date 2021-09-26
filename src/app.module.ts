import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';

import { MongooseModule } from '@nestjs/mongoose';
import { ReadingModule } from './reading/reading.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/playground-vue'),
    NotesModule,
    ReadingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
