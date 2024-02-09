import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  NotFoundException,
  ConflictException,
  HttpCode,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDTo } from '../dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  getAll() {
    return this.contactService.getAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const contact = await this.contactService.findOne(id);
    if (!contact) throw new NotFoundException('Contact not found');
    return contact;
  }

  @Post()
  async createContact(@Body() body: CreateContactDTo) {
    try {
      return this.contactService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Contact already exists');
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteTask(@Param('id') id: string) {
    const contact = await this.contactService.delete(id);
    if (!contact) throw new NotFoundException('Contact not found');
    return contact;
  }
}
