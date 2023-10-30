import { NextResponse } from "next/server";
import { Resend } from "resend";
import WelcomeEmail from "@/emails/SendEmail";
require("dotenv").config();

const resend = new Resend("re_Wve4y92E_9mv4mG4X2R77ZErKHKVipeno");

export async function POST(request: Request) {
  const { email, companyName, idea } = await request.json();

  try {
    await resend.sendEmail({
      from: "noreply@mendax.ai",
      to: "joaquin@mendax.ai",
      subject: "Are you a Game Studio?",
      react: WelcomeEmail({ email, companyName, idea }),
    });
    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      }
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}
