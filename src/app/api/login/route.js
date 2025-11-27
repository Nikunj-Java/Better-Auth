import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { USERS } from "@/lib/users";

export async function POST(req) {
  const { email, password } = await req.json();

  const user = USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  // Correct session creation for this version
  const session = await auth.api.createSession({
    userId: user.id,
  });

  return NextResponse.json({ session });
}
