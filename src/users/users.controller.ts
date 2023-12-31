import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  index(): User[] {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() user: User): User {
    return this.usersService.create(user);
  }
}
