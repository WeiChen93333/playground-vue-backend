import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Res, HttpStatus } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { QueryNoteListDto } from './dto/query-note-list.dto';
import { Response } from 'express';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post('create')
  @HttpCode(200)
  create(@Body() createNoteDto: CreateNoteDto, @Res() res: Response) {
    const notePromise = this.notesService.create(createNoteDto)
    notePromise
    .then(note=>{
      res.status(HttpStatus.OK).send({
        code: '200',
        data: note,
        message: '操作成功'
      });
    })
    .catch( err=>{
      res.status(HttpStatus.OK).json(err);//返回错误
    });
  }

  @Post('list')
  @HttpCode(200)
  findAll(@Body() queryNoteListDto: QueryNoteListDto): object {
    return this.notesService.findAll(queryNoteListDto);
   
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
