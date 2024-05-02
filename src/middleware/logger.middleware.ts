import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    //사용자의 리퀘스트가 들어왔을 때 중간에 처리하기 위한 것임
    use(req: Request, res: Response, next: NextFunction){
        console.log('Request...');
        //미들웨어 받아서 처리 후에는 next 꼭 !!
        next();
    }
}