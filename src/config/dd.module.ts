import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { DDConfig } from "./dd.config";
import { ConfigModule } from "@nestjs/config";
import { DDService } from "./dd.service";

@Module({
    imports: [
        ConfigModule.forRoot(),
        HttpModule.registerAsync({
            imports: [ConfigModule],
            useClass: DDConfig,
        }),
    ],
    providers: [DDService],
    exports: [DDService],
})
export class DDModule {}