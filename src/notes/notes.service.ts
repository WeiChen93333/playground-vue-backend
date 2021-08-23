import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { QueryNoteListDto } from './dto/query-note-list.dto';

@Injectable()
export class NotesService {
  create(createNoteDto: CreateNoteDto) {
    return {
      code: '200',
      data: createNoteDto,
      message: '操作成功'
    }
  }

  findAll(queryNoteListDto: QueryNoteListDto) {
    return {
      code: '200',
      data: queryNoteListDto,
      message: '操作成功'
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
