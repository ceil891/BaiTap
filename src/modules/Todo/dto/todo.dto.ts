import { IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { TodoStatus } from '../../../shared/database/mongo/schemas/todo.schema';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsOptional()
  @IsString()
  content?: string;
}

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsEnum(TodoStatus)
  status?: TodoStatus;
}

export class QueryTodoDto {
  @IsOptional()
  @IsString()
  search?: string; // tìm trong title, content

  @IsOptional()
  @IsEnum(TodoStatus)
  status?: TodoStatus;

  @IsOptional()
  limit?: number;

  @IsOptional()
  offset?: number;
}
