import { Module } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { CatsController } from "./cats.controller";
import { AppService } from "src/app.service";
import { CatsService } from "./cats.service";
import { DatabaseModule } from "src/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [AppController, CatsController],
    providers: [AppService, CatsService],
  })
  export class AppModule {}