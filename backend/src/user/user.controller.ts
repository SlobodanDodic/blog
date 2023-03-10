import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/get-user.decorator';
import { JwtGuard } from 'src/auth/jwt.guard';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @UseGuards(JwtGuard)
  @Patch()
  editUser(@GetUser('id') userId: string, @Body() dto: UserDto) {
    return this.userService.editUser(userId, dto);
  }

  @Get()
  findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(':username')
  findUsers(@Param('username') username: string) {
    return this.userService.findUsers(username);
  }

}
