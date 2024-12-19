// import { NextResponse } from 'next/server';
// import fs from 'fs/promises';
// import path from 'path';

// export const POST = async (req: Request) => {
//   try {
//     const { fileName } = await req.json(); 

//     if (!fileName) {
//       return NextResponse.json({ message: 'File name is required' }, { status: 400 });
//     }

//     const filePath = path.join(process.cwd(), 'public/uploads', fileName);

  
//     try {
//       await fs.access(filePath);
//     } catch {
//       return NextResponse.json({ message: 'File not found' }, { status: 404 });
//     }

    
//     await fs.unlink(filePath);

//     return NextResponse.json({ message: 'File deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting file:', error);
//     return NextResponse.json(
//       { message: 'An error occurred while deleting the file' },
//       { status: 500 }
//     );
//   }
// };
