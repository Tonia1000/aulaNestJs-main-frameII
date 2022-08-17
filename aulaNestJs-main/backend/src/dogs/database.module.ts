import { Module } from "@nestjs/common";
// import { DatabaseModule } from src/database.module.ts;
import { DogsController } from "./dogs.controller";
import { DogsService } from "./dogs.service";

@Module({
    imports: [DatabaseModule],
    controllers: [DogsController],
    providers: [DogsService],
  })
  export class DatabaseModule {}