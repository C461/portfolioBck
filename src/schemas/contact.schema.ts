import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Contact {
  @Prop({
    required: true,
    trim: true,
    validate: {
      validator: (value: string) => value.length >= 5,
      message: 'Your name must have at least a first name and last name',
    },
  })
  name: string;

  @Prop({
    required: true,
    trim: true,
    validate: {
      validator: (value) => /\S+@\S+\.\S+/.test(value),
      message: 'Please, enter a valid email',
    },
  })
  email: string;

  @Prop({
    required: true,
    trim: true,
    maxlength: 255,
  })
  message: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
