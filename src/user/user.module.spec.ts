import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Test } from '@nestjs/testing';
import { User } from './entities/user.entity';
import { UserQueryDTO } from './dtos/userquery.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { UpdateUserDTO } from './dtos/updateuser.dto';
import { getConnection } from 'typeorm';
import { Todo } from '../todo/entities/todo.entity';
describe('User Module', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
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
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = moduleRef.get<UserController>(UserController);
    userService = moduleRef.get<UserService>(UserService);
  });

  describe('get all users by query', () => {
    it('should return array of users', async () => {
      const result = [new User()];
      jest.spyOn(userService, 'findAll').mockImplementation(async () => result);
      expect(await userController.getAll(new UserQueryDTO())).toBe(result);
    });
  });

  describe('update user', () => {
    it('should return updated user', async () => {
      const result = new User();
      jest
        .spyOn(userService, 'updateUser')
        .mockImplementation(async () => result);
      expect(await userController.updateUser(new UpdateUserDTO())).toBe(result);
    });
  });

  describe('delete user', () => {
    it('should return deleted user', async () => {
      const result = new User();
      jest
        .spyOn(userService, 'deleteUser')
        .mockImplementation(async () => result);
      expect(await userController.deleteUser(1)).toBe(result);
    });
  });

  afterAll(async () => {
    const connection = await getConnection();
    await connection.close();
  });
});
