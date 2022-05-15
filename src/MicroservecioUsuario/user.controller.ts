import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from "./user.entity";
import { UserService } from "./user.service";
@Controller('users')
export class UserController{
    constructor(private userservice:UserService){}
    @Get()
    ObtainAllUsers():Promise<User[]>{
        return this.userservice.getAllUser();
    }
    @Post('create')
   async CreateUser(@Body() userData:User ):Promise<any>{
         return await this.userservice.createUser(userData);
    } 
    @Put(':id/update')
    async update(@Param('id') id, @Body() userData: User): Promise<any> {
        userData.id_cliente = Number(id);
        console.log('Update #' + userData.id_cliente)
        return this.userservice.updateUser(userData);
    }
    @Delete(':id/delete')
    async delete(@Param('id') id):Promise<any>{
        return this.userservice.deleteUser(id);
    }



}