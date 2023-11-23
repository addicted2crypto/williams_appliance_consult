
// import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
// import { NextRequest } from 'next/server'

// export async function GET(
//   request: NextRequest,
//   { params }: any
// ) {
//   const endpoint = params.kindeAuth
//   return handleAuth(request, endpoint)
// }

import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export default async function handler(
  request: NextRequest,
  { params }: any
): Promise<void | NextResponse> {
  const endpoint = params.kindeAuth
  return handleAuth(request, endpoint)
}
