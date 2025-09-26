import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../../shared/database/mongo/schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Post()
  async create(
    @Body()
    product: CreateProductDto,
  ): Promise<Product> {
    return await this.productService.create(product);
  }

 @Put(':id')
async update(
  @Param() { id }: { id: string },
  @Body() product: UpdateProductDto,
): Promise<Product> {
  return await this.productService.update(id, product);
}

@Delete(':id')
async delete(
  @Param() { id }: { id: string },
): Promise<Product | null> {
  return await this.productService.delete(id);
}
}