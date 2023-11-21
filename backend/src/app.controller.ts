import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllTasks() {
    return [];
  }

  @Get(':id') //dynamisches Endpoint mit Doppelpunkt erstellen
  getAllTasksById() {
    return {};
  }

  @Post()
  createTask() {
    return 'Created';
  }

  @Put(':id') //dynamisches Endpoint mit Doppelpunkt erstellen
  updateTask() {
    return 'Updated';
  }

  @Delete(':id')
  deleteTask() {
    return 'Deleted';
  }
}
