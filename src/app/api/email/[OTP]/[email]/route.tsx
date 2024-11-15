import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  req: Request,
  {
    params,
  }: {
    params: { OTP: string; email: string };
  }
) {
  try {
    const { OTP, email } = await params;

    const { data, error } = await resend.emails.send({
      from: "Bonfire <bonfire@ashs.world>",
      to: [email],
      subject: "Your temporary Bonfire code is " + OTP,
      react: EmailTemplate({ OTP: OTP }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
