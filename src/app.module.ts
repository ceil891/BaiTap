import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Đúng: import từ @nestjs/config
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { UserModule } from './modules/users/user.module'; 
import { AuthModule } from './modules/auths/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './shared/database/mongo/schemas/user.schema';
import { Product } from './shared/database/mongo/schemas/product.schema'; 
import { TodoModule } from './modules/Todo/todo.module';
@Module({
  imports: [
    ConfigModule.forRoot({envFilePath : '.env', isGlobal: true}), // Cấu hình biến môi trường
    MongooseModule.forRoot(process.env.MONGODB_URI || ''), // Kết nối MongoDB sử dụng biến môi trường
    MongooseModule.forFeature([{name : 'users',schema : UserSchema}]), // Đăng ký các schema nếu cần
    UserModule,
    AuthModule,
    ProductModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}