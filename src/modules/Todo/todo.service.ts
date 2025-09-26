import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from '../../shared/database/mongo/schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async create(userId: string, title: string) {
    return this.todoModel.create({ userId, title });
  }

  async findAll(userId: string) {
    return this.todoModel.find({ userId });
  }

  async update(userId: string, id: string, data: any) {
    return this.todoModel.findOneAndUpdate({ _id: id, userId }, data, { new: true });
  }

  async delete(userId: string, id: string) {
    return this.todoModel.findOneAndDelete({ _id: id, userId });
  }
}
