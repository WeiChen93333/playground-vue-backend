import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReadingMaterial, ReadingMaterialDocument } from './schemas/readingMaterial.schema';
import { CreateDto } from './dto/reading-material.dto';

@Injectable()
export class ReadingService {
  constructor(@InjectModel('ReadingMaterial') private readingMaterialModel: Model<ReadingMaterialDocument>) {}
  create(createDto: CreateDto): Promise<ReadingMaterial> {
    const created = new this.readingMaterialModel(createDto);
    return created.save();
  }

  // findAll(queryNoteListDto: QueryNoteListDto) {
  //   return {
  //     code: '200',
  //     data: queryNoteListDto,
  //     message: '操作成功'
  //   }
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} note`;
  // }

  // update(id: number, updateNoteDto: UpdateNoteDto) {
  //   return `This action updates a #${id} note`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} note`;
  // }
}

