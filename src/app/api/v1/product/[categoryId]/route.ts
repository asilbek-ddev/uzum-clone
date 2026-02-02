import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://uzum-clone-uz.vercel.app",
];

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ categoryId: string }> },
) {
  const resolvedParams = await context.params;
  const categoryIdStr = resolvedParams.categoryId;
  const origin = req.headers.get("origin");
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  const { allowed } = rateLimit(ip);

  const categoryId = Number(categoryIdStr);

  if (!allowed) {
    return NextResponse.json(
      { success: false, message: "Too many requests" },
      { status: 429 },
    );
  }

  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json(
      { success: false, message: "Forbidden" },
      { status: 403 },
    );
  }

  if (isNaN(categoryId)) {
    return NextResponse.json(
      { success: false, message: "Invalid category" },
      { status: 400 },
    );
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/data/product.json`,
    {
      next: { revalidate: 86400 },
    },
  );

  if (!res.ok) {
    return NextResponse.json(
      { success: false, message: "Ma'lumot yuklanmadi" },
      { status: 500 },
    );
  }

  const products = await res.json();

  const filteredProducts = products.filter(
    (p: any) => p.categoryId === categoryId,
  );

  return NextResponse.json({
    success: true,
    data: filteredProducts,
  });
}
