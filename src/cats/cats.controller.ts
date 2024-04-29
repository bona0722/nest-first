import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from './CreateCatDto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
    //constructor를 이용하여 private 사용하면 선언과 초기화가 동시에 이루어짐.
    // catsservice 이용 가능
    constructor(private catsService: CatsService){};

    @Get()
    findAll(): Cat[]{
      return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id')id: string): string {
        return `This action returns a #${id} cat`; 
    }

    @Post()
    create(@Body() CreateCatDto: CreateCatDto){
        return this.catsService.create(CreateCatDto);
    }

    @Put(':id')
    update(@Param('id')id: string, @Body() createCatDto: CreateCatDto){
        return `This action updates a #${id} cat`;

    }

    @Delete(':id')
    remove(@Param('id')id: string){
        return `This action removes a #${id} cat`;
    }


}
