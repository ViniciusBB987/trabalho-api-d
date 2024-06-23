import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AxiosResponse } from "axios";

@Injectable()
export class DDService {
    constructor(
        private readonly httpService: HttpService,
        private configService: ConfigService,
    ) {}

    async fetchAndSaveMonster(): Promise<any> {
        const baseUrl = this.configService.get<string>('BASE_URL');
        const response: AxiosResponse<any> = await this.httpService
        .get(`${baseUrl}/monsters`)
            .toPromise();

        const monsterData = response.data;

        return monsterData;
    }
}