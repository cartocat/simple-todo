import { ApiProperty } from '@nestjs/swagger';
import { TodoState } from '../models/todostate.enum';

/**
 * Create todo dto class
 */
export class CreateTodoDto {
  @ApiProperty({ description: 'Id of the User' })
  userId: number;

  @ApiProperty({ description: 'Name of Todo Task' })
  name: string;

  @ApiProperty({ description: 'State of Todo Task', enum: TodoState })
  state: string;
}
