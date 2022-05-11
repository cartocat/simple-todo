import { Controller, Post } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginUserDTO } from './dtos/loginuser.dto';
import { AuthResponseDTO } from './dtos/register-response.dto';
import { CreateUserDTO } from '../user/dtos/createuser.dto';

/**
 * Auth Controller Class
 */
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @ApiOkResponse({ description: 'Login Route', type: AuthResponseDTO })
  @ApiInternalServerErrorResponse({ description: 'Error Occured at Server' })
  async login(loginUserDTO: LoginUserDTO) {
    return this.authService.login(loginUserDTO);
  }

  @Post('/register')
  @ApiOkResponse({ description: 'Login Route', type: AuthResponseDTO })
  @ApiInternalServerErrorResponse({ description: 'Error Occured at Server' })
  async register(createdUserDTO: CreateUserDTO) {
    return this.authService.register(createdUserDTO);
  }
}
