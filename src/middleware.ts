import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  
  // Redirect re-app.space subdomain to the main .com domain
  if (host.includes('re-app.space')) {
    const url = request.nextUrl.clone();
    url.host = 'geneanthonray.com';
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  // Redirect www to non-www
  if (host.startsWith('www.')) {
    const url = request.nextUrl.clone();
    url.host = 'geneanthonray.com';
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
