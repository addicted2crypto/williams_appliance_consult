
// import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server'
// import { NextRequest } from 'next/server'

// export async function GET(
//   request: NextRequest,
//   { params }: any
// ) {
//   const endpoint = params.kindeAuth
//   return handleAuth(request, endpoint)
// }


import { handleAuth, AuthResult } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

const handler = async (request: NextRequest, { params }: any): Promise<void | NextResponse> => {
  const endpoint = params.kindeAuth;
  const authResult: AuthResult = await handleAuth(request, endpoint);
  return authResult.response;
};

export default handler;

