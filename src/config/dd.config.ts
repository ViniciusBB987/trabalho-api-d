import { HttpModuleOptions, HttpModuleOptionsFactory } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class DDConfig implements HttpModuleOptionsFactory {
    constructor(private configService: ConfigService) {}

    createHttpOptions(): HttpModuleOptions {
        return {
            baseURL: this.configService.get('base_Url', { infer: true})
        };
    }
}