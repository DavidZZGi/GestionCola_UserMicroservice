import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import{UpdateResult,DeleteResult}from 'typeorm'

@Injectable()
export class UserService {
 constructor(@InjectRepository(User) private userRepository: Repository<User>){}


 async getAllUser(): Promise<User[]> {
    return await this.userRepository.find();
  }

async createUser(user:User):Promise<User>{
return await this.userRepository.save(user);
}

async updateUser(user:User):Promise<UpdateResult>{
    return await this.userRepository.update(user.id_cliente,user);
}

async deleteUser(id:number):Promise<DeleteResult>{
    return await this.userRepository.delete(id);
}

   
}