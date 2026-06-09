import { ObjectId } from 'mongodb';

export interface Blog {
  _id?: ObjectId;
  title: string;
  content: string;
  imageUrl: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Testimonial {
  _id?: ObjectId;
  name: string;
  content: string;
  imageUrl: string;
  designation: string;
  createdAt: Date;
  updatedAt: Date;
}
