// src/modules/users/user.service.ts
import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserRole } from '../../shared/database/mongo/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(data: any) {
    return this.userModel.create(data);
  }

  async findAll() {
    return this.userModel.find();
  }

  async findById(id: string) {
    return this.userModel.findById(id);
  }

  async findByUsername(username: string) {
    return this.userModel.findOne({ username });
  }

  async update(id: string, data: any) {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  async remove(requestUser: any, id: string) {
    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException('User not found');

    if (requestUser.role !== UserRole.ADMIN && requestUser.userId !== id) {
      throw new ForbiddenException('You cannot delete this account');
    }

    return this.userModel.findByIdAndDelete(id);
  }
}
