import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const name = data.get("name") as string;
  const studio = data.get("studio") as string;
  const email = data.get("email") as string;
  const website = data.get("website") as string;
  const city = data.get("city") as string;
  const region = data.get("region") as string;
  const title = data.get("title") as string;
  const formType = data.get("formType") as string;
  const intent = data.get("intent") as string;
  const techniques = data.get("techniques") as string;
  const description = data.get("description") as string;

  const photoFile = data.get("photo") as File | null;
  const attachment = photoFile && photoFile.size > 0
    ? [{ filename: photoFile.name, content: Buffer.from(await photoFile.arrayBuffer()) }]
    : undefined;

  const html = `
    <h2>Gallery Submission</h2>
    <table cellpadding="6" cellspacing="0">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      ${studio ? `<tr><td><strong>Studio</strong></td><td>${studio}</td></tr>` : ""}
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      ${website ? `<tr><td><strong>Website / Instagram</strong></td><td>${website}</td></tr>` : ""}
      ${city ? `<tr><td><strong>City</strong></td><td>${city}</td></tr>` : ""}
      ${region ? `<tr><td><strong>Region / Province / State</strong></td><td>${region}</td></tr>` : ""}
      ${title ? `<tr><td><strong>Piece Title</strong></td><td>${title}</td></tr>` : ""}
      ${formType ? `<tr><td><strong>Form</strong></td><td>${formType}</td></tr>` : ""}
      ${intent ? `<tr><td><strong>Intent</strong></td><td>${intent}</td></tr>` : ""}
      ${techniques ? `<tr><td><strong>Techniques</strong></td><td>${techniques}</td></tr>` : ""}
      ${description ? `<tr><td><strong>About This Piece</strong></td><td>${description}</td></tr>` : ""}
    </table>
  `;

  const { error } = await resend.emails.send({
    from: "Pottery Post Gallery <gallery@potterypost.ca>",
    to: "anneliesedesigns@gmail.com",
    replyTo: email,
    subject: `Gallery Submission — ${name}${title ? ` — ${title}` : ""}`,
    html,
    attachments: attachment,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
