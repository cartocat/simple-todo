import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import argon2 from 'argon2';
import { AuthResponseDTO } from './dtos/register-response.dto';
import { CreateUserDTO } from '../user/dtos/createuser.dto';
import { LoginUserDTO } from './dtos/loginuser.dto';
/**
 * Authenication Service Class
 */
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  /**
   * Logins auth service
   * @param loginDTO
   * @returns  jwt token
   */
  async login(loginDTO: LoginUserDTO) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.usersService.findOne(loginDTO.userName);
        if (user == null) {
          throw new HttpException('User Not Existed', HttpStatus.BAD_REQUEST);
        } else {
          if (await argon2.verify(user.password, loginDTO.password)) {
            const payload = { username: user.userName, sub: user.id };
            const token = this.jwtService.sign(payload);
            resolve(new AuthResponseDTO(token));
          }
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * Registers auth service
   * @param createUserDTO
   * @returns  jwt token
   */
  async register(createUserDTO: CreateUserDTO) {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.usersService.create(createUserDTO);
        const payload = { username: user.userName, sub: user.id };
        const token = this.jwtService.sign(payload);
        resolve(new AuthResponseDTO(token));
      } catch (error) {
        reject(error);
      }
    });
  }
}
