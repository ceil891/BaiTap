import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../shared/database/mongo/schemas/product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async create(product: CreateProductDto): Promise<Product> {
    return await this.productModel.create(product);
  }

  async update(id: string, product: UpdateProductDto): Promise<Product> {
    const updated = await this.productModel.findByIdAndUpdate(id, product, {
      new: true,
    });
    if (!updated) {
      throw new NotFoundException('Product not found');
    }
    return updated;
  }

  async delete(id: string): Promise<Product | null> {
    return await this.productModel.findByIdAndDelete(id);
  }
}