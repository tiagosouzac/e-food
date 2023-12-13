import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers)
  headers.set("page_url", new URL(request.url).href)

  return NextResponse.next({ request: { headers } })
}
