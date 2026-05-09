export const prerender = false;

export async function GET() {
  let number = Math.random();
  return new Response(
    JSON.stringify({
      number,
      message: `Testing API response. Here's a random number: ${number}`,
    }),
  );
}