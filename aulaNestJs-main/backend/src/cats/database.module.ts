import { Module } from "@nestjs/common";
// import { DatabaseModule } from src/database.module.ts;
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

@Module({
    imports: [DatabaseModule],
    controllers: [CatsController],
    providers: [CatsService],
  })
  export class DatabaseModule {}