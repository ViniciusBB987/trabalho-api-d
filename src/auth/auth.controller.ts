import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { loginUserDto } from 'src/users/dto/loginUser.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    @ApiOkResponse()
    @ApiBadRequestResponse()
    createToken(@Body() loginDto: loginUserDto) {
        return this.authService.create(loginDto.email, loginDto.password);
    }
}
