import { Module } from '@nestjs/common';
import { ReadingController } from './reading.controller';
import { ReadingService } from './reading.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReadingMaterial, ReadingMaterialSchema } from './schemas/readingMaterial.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ReadingMaterial.name, schema: ReadingMaterialSchema }])],
  controllers: [ReadingController],
  providers: [ReadingService]
})
export class ReadingModule {}
