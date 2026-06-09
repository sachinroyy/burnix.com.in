import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Testimonial } from '@/models/Blog';

export async function GET() {
  try {
    console.log('GET /api/testimonials - fetching');
    const client = await clientPromise;
    const db = client.db('burnix');
    const testimonials = await db.collection('testimonials').find({}).sort({ createdAt: -1 }).toArray();
    console.log('GET /api/testimonials - fetched', testimonials.length, 'testimonials');
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('GET /api/testimonials error:', error);
    return NextResponse.json({ error: 'Failed to fetch testimonials', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('POST /api/testimonials - body:', body);
    
    const client = await clientPromise;
    const db = client.db('burnix');
    
    const testimonial: Testimonial = {
      name: body.name,
      content: body.content,
      imageUrl: body.imageUrl,
      designation: body.designation,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    console.log('Inserting testimonial:', testimonial);
    const result = await db.collection('testimonials').insertOne(testimonial);
    console.log('Insert result:', result);
    
    return NextResponse.json({ ...testimonial, _id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('POST /api/testimonials error:', error);
    return NextResponse.json({ error: 'Failed to create testimonial', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
