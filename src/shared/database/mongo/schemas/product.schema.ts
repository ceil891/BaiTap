import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  LAPTOP = 'Laptop',
  SMART_PHONE = 'Smartphone',
}

@Schema({
  timestamps: true,
})
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  discount: number;

  @Prop()
  category: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);