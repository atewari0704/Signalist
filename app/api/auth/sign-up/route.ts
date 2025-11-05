import { NextResponse } from "next/server";
import { auth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/inngest/client";

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        const { fullName, email, password, country, investmentGoals, riskTolerance, preferredIndustry } = (await req.json()) as SignUpFormData;

        const response = await auth.api.signUpEmail({ body: { email, password, name: fullName } });

        if (response) {
            try {
                await inngest.send({
                    name: "app/user.created",
                    data: { email, name: fullName, country, investmentGoals, riskTolerance, preferredIndustry }
                });
            } catch (err) {
                console.error("Failed to send Inngest event:", err); // Do not fail sign-up due to event dispatch issues
            }
        }

        return NextResponse.json({ success: true, data: response }, { status: 200 });
    } catch (error: unknown) {
        console.error("Sign-up API error:", error);
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}


