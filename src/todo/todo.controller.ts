import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/createtodo.dto';
import { UpdateTodoDto } from './dto/updatetodo.dto';
import { TodoState } from './models/todostate.enum';
import {
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Todo } from './entities/todo.entity';
import { JwtAuthGuard } from '../auth/auth.guard';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Created Todo', type: Todo })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Error Occured at Server' })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'List of Todos', type: [Todo] })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Error Occured at Server' })
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Todo', type: Todo })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Error Occured at Server' })
  findOne(@Param('id') id: number) {
    return this.todoService.findOne(id);
  }

  @Get('/filter')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'List of Todos', type: [Todo] })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Error Occured at Server' })
  @ApiQuery({ name: 'state', enum: TodoState })
  filterByState(@Query('state') state: TodoState) {
    return this.todoService.findByState(state);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Updated Todo', type: Todo })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Error Occured at Server' })
  update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Deleted Todo', type: Todo })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiInternalServerErrorResponse({ description: 'Error Occured at Server' })
  remove(@Param('id') id: number) {
    return this.todoService.delete(id);
  }
}
