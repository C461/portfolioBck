import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Contact } from '../schemas/contact.schema';
import { Model } from 'mongoose';
import { CreateContactDTo } from '../dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
  ) {}
  getAll() {
    return this.contactModel.find();
  }

  async create(createContact: CreateContactDTo) {
    const newContact = new this.contactModel(createContact);
    return newContact.save();
  }

  async findOne(id: string) {
    return this.contactModel.findById(id);
  }

  async delete(id: string) {
    return this.contactModel.findByIdAndDelete(id);
  }
}
