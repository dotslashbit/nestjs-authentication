import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  // GET all users
  async findall(): Promise<User[]> {

    return await this.userRepository.find();
  }

  // GET user by :id
  async findOne(id: number): Promise<User> {

    return await this.userRepository.findOne({ where: { id } })

  }

  async create(user: User): Promise<User> {

    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);


  }


  async update(id: number, user: User): Promise<User> {

    await this.userRepository.update(id, user);
    return await this.userRepository.findOne({ where: { id } });


  }

  async delete(id: number): Promise<void> {

    await this.userRepository.delete(id);


  }



}
