import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// POST handle for file uploads
export const POST = async (req: Request) => {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ message: 'No file provided' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const uploadsDir = path.join(process.cwd(), 'public/uploads');

    await fs.mkdir(uploadsDir, { recursive: true });

    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadsDir, fileName);

    await fs.writeFile(filePath, buffer);

    const fileUrl = `/uploads/${fileName}`;
    return NextResponse.json({ fileUrl });
  } catch (error) {
    console.error('Error processing file upload:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
};