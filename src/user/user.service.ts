import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDTO } from './dtos/createuser.dto';
import argon2 from 'argon2';
import { UpdateUserDTO } from './dtos/updateuser.dto';

/**
 * User Service Class
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  /**
   * Finds all
   * @param username
   * @param skip
   * @param take
   * @returns array of user
   */
  findAll(username: string, skip: number, take: number) {
    if (username == '') {
      return this.userRepository.find({
        where: { isDeleted: false },
        skip: skip,
        take: take,
      });
    } else {
      return this.userRepository.find({
        where: {
          userName: username,
          isDeleted: false,
        },
        skip: skip,
        take: take,
      });
    }
  }
  /**
   * Update the user
   * @param updateUserDTO
   * @returns updated user
   */
  updateUser(updateUserDTO: UpdateUserDTO): Promise<User> {
    return this.userRepository.save({
      id: updateUserDTO.id,
      userName: updateUserDTO.userName,
      password: updateUserDTO.password,
      isModified: true,
    });
  }
  /**
   * Soft Delete the user
   * @param id
   * @returns soft deleted user
   */
  deleteUser(id: number): Promise<User> {
    return this.userRepository.save({ id: id, isDeleted: true });
  }

  /**
   * Find user by id
   * @param id
   * @returns User
   */
  findOneById(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  /**
   * Find user by id
   * @param username
   * @returns User
   */
  findOne(username: string): Promise<User> {
    return this.userRepository.findOne({ userName: username });
  }

  /**
   * Registers user service
   * @param createUserDTO
   * @returns Promise<User> (Created User)
   */
  async create(createUserDTO: CreateUserDTO): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const createdUser = await this.userRepository.create({
          userName: createUserDTO.userName,
          password: await argon2.hash(createUserDTO.password, {
            type: argon2.argon2d,
            memoryCost: 2 ** 16,
            hashLength: 50,
          }),
        });
        resolve(createdUser);
      } catch (error) {
        reject(error);
      }
    });
  }
}
