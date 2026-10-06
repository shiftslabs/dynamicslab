import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized: Missing or invalid API key' }, { status: 401 });
  }

  return NextResponse.json({
    data: [
      { id: 'cnt_1', name: 'Sarah Jenkins', email: 'sarah@acme.com', company: 'Acme Corp' },
      { id: 'cnt_2', name: 'David Miller', email: 'david@globex.io', company: 'Globex Inc' }
    ]
  });
}

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized: Missing or invalid API key' }, { status: 401 });
  }

  const body = await request.json();
  return NextResponse.json({
    message: 'Contact created successfully',
    data: { id: `cnt_${Date.now()}`, ...body, createdAt: new Date().toISOString() }
  }, { status: 201 });
}
