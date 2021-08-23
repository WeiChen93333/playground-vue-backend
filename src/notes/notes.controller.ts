import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { QueryNoteListDto } from './dto/query-note-list.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post('create')
  @HttpCode(200)
  create(@Body() createNoteDto: CreateNoteDto) {
    console.log('create')
    return this.notesService.create(createNoteDto);
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
