import { Injectable } from '@nestjs/common'
import { CreateDecisionDto } from './dto/create-decision.dto'
import { UpdateDecisionDto } from './dto/update-decision.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class DecisionService {

  constructor(private prisma: PrismaService) {}

  create(createDecisionDto: CreateDecisionDto) {
    return 'This action adds a new decision'
  }

  findAll() {
    return `This action returns all decision`
  }

  findOne(id: string) {
    return `This action returns a #${id} decision`
  }

  update(id: string, updateDecisionDto: UpdateDecisionDto) {
    return `This action updates a #${id} decision`
  }

  remove(id: string) {
    return `This action removes a #${id} decision`
  }
}
