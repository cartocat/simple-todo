import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { User } from '../user/entities/user.entity';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/createtodo.dto';
import { TodoState } from './models/todostate.enum';
import { UpdateTodoDto } from './dto/updatetodo.dto';

describe('Todo Module', () => {
  let todoService: TodoService;
  let todoController: TodoController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule.forRoot({ envFilePath: ['.env.test'] })],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
            type: 'mysql',
            keepConnectionAlive: true,
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT'),
            username: configService.get<string>('DB_USERNAME'),
            password: configService.get<string>('DB_PASSWORD'),
            autoLoadEntities: true,
            database: configService.get<string>('DB_NAME'),
            synchronize: true,
          }),
        }),
        TypeOrmModule.forFeature([User, Todo]),
      ],
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    todoService = moduleRef.get<TodoService>(TodoService);
    todoController = moduleRef.get<TodoController>(TodoController);
  });

  describe('create todo', () => {
    it('should return created todo', async () => {
      const result = new Todo();
      jest.spyOn(todoService, 'create').mockImplementation(async () => result);
      expect(await todoController.create(new CreateTodoDto())).toBe(result);
    });
  });
  describe('get all todos', () => {
    it('should return array of tods', async () => {
      const result = [new Todo()];
      jest.spyOn(todoService, 'findAll').mockImplementation(async () => result);
      expect(await todoController.findAll()).toBe(result);
    });
  });

  describe('get one todo by id', () => {
    it('should return one todo', async () => {
      const result = new Todo();
      jest.spyOn(todoService, 'findOne').mockImplementation(async () => result);
      expect(await todoController.findOne(1)).toBe(result);
    });
  });

  describe('get todo by filter', () => {
    it('should return array of tods', async () => {
      const result = [new Todo()];
      jest
        .spyOn(todoService, 'findByState')
        .mockImplementation(async () => result);
      expect(await todoController.filterByState(TodoState.Done)).toBe(result);
    });
  });
  describe('update todo by filter', () => {
    it('should updated todos', async () => {
      const result = new Todo();
      jest.spyOn(todoService, 'update').mockImplementation(async () => result);
      expect(await todoController.update(1, new UpdateTodoDto())).toBe(result);
    });
  });

  describe('delete todo', () => {
    it('should deleted todos', async () => {
      const result = new Todo();
      jest.spyOn(todoService, 'delete').mockImplementation(async () => result);
      expect(await todoController.remove(1)).toBe(result);
    });
  });
});
