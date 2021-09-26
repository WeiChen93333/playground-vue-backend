import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Res, HttpStatus } from '@nestjs/common';
import { ReadingService } from './reading.service';
import { CreateDto } from './dto/reading-material.dto';
import { Response } from 'express';

@Controller('reading')
export class ReadingController {
  constructor(private readonly ReadingService: ReadingService) {}

  @Post('create')
  @HttpCode(200)
  create(@Body() createDto: CreateDto, @Res() res: Response) {
    this.ReadingService.create(createDto)
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

  // @Post('list')
  // @HttpCode(200)
  // findAll(@Body() queryNoteListDto: QueryNoteListDto): object {
  //   return this.notesService.findAll(queryNoteListDto);
   
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.notesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
  //   return this.notesService.update(+id, updateNoteDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.notesService.remove(+id);
  // }
}
