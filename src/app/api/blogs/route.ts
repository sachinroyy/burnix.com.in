import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Blog } from '@/models/Blog';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('burnix');
    const blogs = await db.collection('blogs').find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db('burnix');
    
    const blog: Blog = {
      title: body.title,
      content: body.content,
      imageUrl: body.imageUrl,
      author: body.author,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection('blogs').insertOne(blog);
    return NextResponse.json({ ...blog, _id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Failed to create blog:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
