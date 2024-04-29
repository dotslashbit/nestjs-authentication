import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

  constructor(
    private readonly userService: UsersService
  ) { }


  // GET all users
  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findall();

  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    const user = await this.userService.findOne(id);
    if (!user) {
      return await this.userService.findOne(id);
    } else {
      return user;
    }
  }

  // CREATE a user
  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }

  // UPDATE a user by :id
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.userService.update(id, user);
  }

  // DELETE a user by :id
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new Error('User not found!');
    }
    return this.userService.delete(id);

  }







}
