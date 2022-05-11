import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './MicroservecioUsuario/user.module';
import {TypeOrmModule} from '@nestjs/typeorm';


@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
     type:'postgres',
     database:'ColaBD',
     password:'admin',
     username:'postgres',
     port:5432,
     entities:[__dirname + '/**/*.entity{.ts,.js}'],
     synchronize:true
    
  }

  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
