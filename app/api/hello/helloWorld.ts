export const dynamic = 'force-dynamic'; // static by default, unless reading the request
 
export default function GET(request: Request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}