import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from './dto/createtodo.dto';
import { UpdateTodoDto } from './dto/updatetodo.dto';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
    @InjectRepository(User) private userRepositiry: Repository<User>,
  ) {}

  /**
   * Creates todo service
   * @param createTodoDto
   * @returns createdTodo
   */
  create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.userRepositiry.findOne(createTodoDto.userId);
        if (user == null) {
          throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
        } else {
          const createdTodo = await this.todoRepository.create({
            name: createTodoDto.name,
            state: createTodoDto.state,
            user: user,
          });
          resolve(createdTodo);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * Finds all
   * @returns All Todos
   */
  findAll(): Promise<Todo[]> {
    return this.todoRepository
      .createQueryBuilder('todo')
      .where('todo.isDeleted = :value', { value: false })
      .leftJoinAndSelect('todo.user', 'user')
      .getMany();
  }

  /**
   * Finds one
   * @param id
   * @returns Todo
   */
  findOne(id: number): Promise<Todo> {
    return this.todoRepository
      .createQueryBuilder('todo')
      .where('todo.id = :value', { value: id })
      .where('todo.isDeleted = :value', { value: false })
      .leftJoinAndSelect('todo.user', 'user')
      .getOne();
  }

  /**
   * Finds by state
   * @param state
   * @returns Todos
   */
  findByState(state: string): Promise<Todo[]> {
    return this.todoRepository
      .createQueryBuilder('todo')
      .where('todo.state = :value', { value: state })
      .where('todo.isDeleted = :value', { value: false })
      .leftJoinAndSelect('todo.user', 'user')
      .getMany();
  }

  /**
   * Update the Todo
   * @param id
   * @param updateTodoDto
   * @returns updateDTodo
   */
  update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoRepository.save({
      id: id,
      name: updateTodoDto.name,
      state: updateTodoDto.state,
      isModified: true,
    });
  }

  /**
   * Soft Delete the todo
   * @param id
   * @returns Deleted Todo
   */
  delete(id: number): Promise<Todo> {
    return this.todoRepository.save({
      id: id,
      isDeleted: true,
    });
  }
}
