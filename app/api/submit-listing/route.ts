import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const name = data.get("name") as string;
  const guild = data.get("guild") as string;
  const country = data.get("country") as string;
  const city = data.get("city") as string;
  const region = data.get("region") as string;
  const address = data.get("address") as string;
  const website = data.get("website") as string;
  const email = data.get("email") as string;
  const phone = data.get("phone") as string;
  const bio = data.get("bio") as string;
  const offersClasses = data.get("offersClasses") === "yes";
  const photoNames = data.get("photoNames") as string | null;

  const html = `
    <h2>New Directory Listing Submission</h2>
    <table cellpadding="6" cellspacing="0">
      <tr><td><strong>Name / Studio</strong></td><td>${name}</td></tr>
      ${guild ? `<tr><td><strong>Guild</strong></td><td>${guild}</td></tr>` : ""}
      <tr><td><strong>Country</strong></td><td>${country}</td></tr>
      <tr><td><strong>City</strong></td><td>${city}</td></tr>
      <tr><td><strong>Region / Province / State</strong></td><td>${region}</td></tr>
      ${address ? `<tr><td><strong>Street Address</strong></td><td>${address}</td></tr>` : ""}
      ${website ? `<tr><td><strong>Website</strong></td><td><a href="${website}">${website}</a></td></tr>` : ""}
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      ${phone ? `<tr><td><strong>Phone</strong></td><td>${phone}</td></tr>` : ""}
      <tr><td><strong>Offers Classes</strong></td><td>${offersClasses ? "Yes" : "No"}</td></tr>
      ${bio ? `<tr><td><strong>Bio</strong></td><td>${bio}</td></tr>` : ""}
      ${photoNames ? `<tr><td><strong>Photos</strong></td><td>${photoNames} (to be emailed separately)</td></tr>` : ""}
    </table>
  `;

  const { error } = await resend.emails.send({
    from: "Pottery Post <directory@potterypost.ca>",
    to: "directory@potterypost.ca",
    replyTo: email,
    subject: `New Listing Submission — ${name}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
