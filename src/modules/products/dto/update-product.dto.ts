import { Category } from '../../../shared/database/mongo/schemas/product.schema';

export class UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  discount?: number;
  category?: Category;
}