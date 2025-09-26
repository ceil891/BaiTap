import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(@Req() req) {
    return this.todoService.findAll(req.user.userId);
  }

  @Post()
  async create(@Req() req, @Body('title') title: string) {
    return this.todoService.create(req.user.userId, title);
  }

  @Put(':id')
  async update(@Req() req, @Param('id') id: string, @Body() body: any) {
    return this.todoService.update(req.user.userId, id, body);
  }

  @Delete(':id')
  async delete(@Req() req, @Param('id') id: string) {
    return this.todoService.delete(req.user.userId, id);
  }
}