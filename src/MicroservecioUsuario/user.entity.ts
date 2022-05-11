import{Column, Entity, PrimaryColumn, PrimaryGeneratedColumn}from 'typeorm'
@Entity()
export class User{
 @PrimaryGeneratedColumn()   
id_cliente:number;
@Column()
carnet_identidad:number;
@Column()
nombre:String;



}

