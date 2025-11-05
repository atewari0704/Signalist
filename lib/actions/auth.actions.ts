'use server';

import { auth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/inngest/client";



export const signUpWithEmail = async ({fullName, email, password, country, investmentGoals, riskTolerance, preferredIndustry}: SignUpFormData) => {
    try {
        const response = await auth.api.signUpEmail({ 
            body: { email, password, name: fullName } 
        });

        if (response) {
            try {
                await inngest.send({
                    name: "app/user.created",
                    data: { email, name: fullName, country, investmentGoals, riskTolerance, preferredIndustry }
                });
            } catch (err) {
                console.error("Inngest event failed:", err);
            }
        }
        
        return { success: true, data: response };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'sign-up failed' };
    }
};


//// use the code below if you want to use an API route to sign up instead

// export const signUpWithEmail = async ({ fullName, email, password, country, investmentGoals, riskTolerance, preferredIndustry }: SignUpFormData) => {
//     try {
//         const res = await fetch("/api/auth/sign-up", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ fullName, email, password, country, investmentGoals, riskTolerance, preferredIndustry })
//         });

//         if (!res.ok) {
//             const text = await res.text().catch(() => "");
//             throw new Error(text || `Request failed with status ${res.status}`);
//         }

//         const json = await res.json();
//         return { success: true, data: json } as const;
//     } catch (error) {
//         console.error(error);
//         return { success: false, error: "sign-up failed" } as const;
//     }
// };





