import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import * as schema from 'src/schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: schema.Product.name, schema: schema.ProductSchema },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
