import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];
    
    create(cat: Cat){
        // 선언된 cats 배열 값에다 한개의 cat을 담아주는 function
        this.cats.push(cat);
    }
    findAll(): Cat[] {
        return this.cats;
    }

}
