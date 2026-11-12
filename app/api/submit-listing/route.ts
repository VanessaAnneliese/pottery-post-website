import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

let resendClient: Resend | null = null;
function getResend(): Resend {
  if (!resendClient) resendClient = new Resend(process.env.RESEND_API_KEY);
  return resendClient;
}

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const name = data.get("name") as string;
  const category = data.get("category") as string;
  const studio = data.get("studio") as string;
  const guild = data.get("guild") as string;
  const country = data.get("country") as string;
  const city = data.get("city") as string;
  const region = data.get("region") as string;
  const website = data.get("website") as string;
  const email = data.get("email") as string;
  const phone = data.get("phone") as string;
  const bio = data.get("bio") as string;
  const teamSize = data.get("teamSize") as string;
  const offersClasses = data.get("offersClasses") === "yes";
  const offersKilnSharing = data.get("offersKilnSharing") === "yes";
  const independent = data.get("independent") === "yes";

  const CATEGORY_LABELS: Record<string, string> = {
    potter: "Potter / Ceramicist",
    guild: "Guild or Association",
    class: "Teaching Studio / Classes",
    kiln: "Community Kiln",
    supplier: "Supply Shop",
  };
  const COUNTRY_LABELS: Record<string, string> = {
    CA: "Canada", US: "United States", EU: "Europe", AU: "Australia",
  };

  const html = `
    <h2>New Directory Listing Submission</h2>
    <table cellpadding="6" cellspacing="0">
      <tr><td><strong>Name / Business</strong></td><td>${name}</td></tr>
      ${category ? `<tr><td><strong>Category</strong></td><td>${CATEGORY_LABELS[category] ?? category}</td></tr>` : ""}
      ${studio ? `<tr><td><strong>Studio</strong></td><td>${studio}</td></tr>` : ""}
      ${guild ? `<tr><td><strong>Guild</strong></td><td>${guild}</td></tr>` : ""}
      <tr><td><strong>Country</strong></td><td>${COUNTRY_LABELS[country] ?? country}</td></tr>
      <tr><td><strong>City</strong></td><td>${city}</td></tr>
      <tr><td><strong>Region / Province / State</strong></td><td>${region}</td></tr>
      ${website ? `<tr><td><strong>Website</strong></td><td><a href="${website}">${website}</a></td></tr>` : ""}
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      ${phone ? `<tr><td><strong>Phone</strong></td><td>${phone}</td></tr>` : ""}
      ${teamSize ? `<tr><td><strong>Team size</strong></td><td>${teamSize}</td></tr>` : ""}
      <tr><td><strong>Independent</strong></td><td>${independent ? "Yes" : "No"}</td></tr>
      <tr><td><strong>Offers Classes</strong></td><td>${offersClasses ? "Yes" : "No"}</td></tr>
      <tr><td><strong>Kiln Sharing</strong></td><td>${offersKilnSharing ? "Yes" : "No"}</td></tr>
      ${bio ? `<tr><td><strong>Bio</strong></td><td>${bio}</td></tr>` : ""}
    </table>
  `;

  const { error } = await getResend().emails.send({
    from: "Pottery Post <directory@potterypost.ca>",
    to: "anneliesedesigns@gmail.com",
    replyTo: email,
    subject: `Pottery Post Directory Submission: ${name}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
