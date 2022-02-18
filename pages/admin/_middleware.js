export default async function middleware(req, res) {
  console.log(req.cookies.jwt)
}
