import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as schema from 'src/schemas';
import { Model } from 'mongoose';
import { generateUniqueKeyFile } from 'src/lib/generate-unique-key-file';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(schema.Product.name)
    private productModel: Model<schema.Product>,
  ) {}
  async create(createProductDto: CreateProductDto, image: Express.Multer.File) {
    // const uniqueKeyFileName = await generateUniqueKeyFile(
    //   image.originalname,
    //   req.user.username,
    // );
  }

  async findAll() {
    return this.productModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
