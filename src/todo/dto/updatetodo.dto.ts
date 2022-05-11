import { PartialType } from '@nestjs/swagger';
import { CreateTodoDto } from './createtodo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
