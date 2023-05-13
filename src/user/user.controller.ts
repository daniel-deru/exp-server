import { Controller, Get, Post, Patch, Delete, Body, Req, Res } from '@nestjs/common';
import { AuthDto, UserDto } from './dto';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Post('signup')
    async signup(@Body() dto: UserDto){
        console.log("hit")
        return this.userService.signup(dto)
    }

    @Post('signin')
    async signin(@Body() dto: AuthDto){
        return this.userService.signin(dto)
    }
}
