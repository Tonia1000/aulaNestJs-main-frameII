import { Module } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { DogsController } from "./dogs.controller";
import { AppService } from "src/app.service";
import { DogsService } from "./dogs.service";
import { DatabaseModule } from "src/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [AppController, DogsController],
    providers: [AppService, DogsService],
  })
  export class AppModule {}