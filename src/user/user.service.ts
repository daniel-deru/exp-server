import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto, UserDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from "argon2"
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService){}

    async signup(userData: UserDto){

        const hash = await argon.hash(userData.password)

        try {
            const newUser = await this.prisma.user.create({
                data: {
                    ...userData,
                    password: hash
                }
            })

            delete newUser.password
            
            return await this.signToken(newUser.id, newUser.email)

        } catch (error) {
            
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === "P2002"){
                    throw new ForbiddenException("Credentials Already Exists")
                }
                
                throw error
            }
            if(error instanceof PrismaClientValidationError){
                throw new BadRequestException("Validation Failed")
            }
            throw error
        }


    }

    async signin(userData: AuthDto){
        const user = await this.prisma.user.findUnique({
            where: {
                email: userData.email
            }
        })

        if(!user) throw new ForbiddenException("Credentials Incorrect")

        const passwordMatch = await argon.verify(user.password, userData.password)

        if(!passwordMatch) throw new ForbiddenException("Credentials Incorrect")

        return this.signToken(user.id, user.email)
    }

    async signToken(userId: string, email: string){
        const payload = {
            sub: userId,
            email
        }

        const token = await this.jwt.signAsync(payload, {secret: this.config.get("JWT_SECRET"), expiresIn: "15m"})

        return { access_token: token }
    }
}
