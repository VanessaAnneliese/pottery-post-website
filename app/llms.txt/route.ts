export const dynamic = "force-static";

const body = `# Pottery Post

> Pottery Post (https://www.potterypost.directory) is a directory and celebration of handmade pottery, for makers and admirers. It helps people find potters, pottery guilds, pottery classes, community kilns, and pottery supply shops across Canada, the United States, Europe, and Australia, and it showcases handmade pieces in a curated gallery.

Pottery Post is independent and based in Whitby, Ontario, Canada. It is not affiliated with or endorsed by any guild, school, or manufacturer. Every listing is reviewed by a real person, and the directory is built and maintained by hand.

## Sections

- Pottery Directory (https://www.potterypost.directory/directory): a searchable, free directory of potters, pottery guilds, pottery classes and teaching studios, community kilns, and pottery supply shops. Browse by region (Canada, United States, Europe, Australia) and province or state, or search by name, town, or keyword across all regions. Visitors can save listings privately on their own device (no account, no sign-in).
- Pottery Gallery (https://www.potterypost.directory/gallery): a curated, rotating collection of handmade pottery, gathered with love and verified in person. The current collection is the Founder's Collection. Pieces are shown for appreciation and are not for sale by Pottery Post. Past collections are kept in the Archive (https://www.potterypost.directory/gallery/archive).
- Pottery Postmarks (https://www.potterypost.directory/postmarks): a pottery travel journal covering the places, roads, history, and makers worth travelling for, including travel guides, destinations, road trips, and pottery history.

## How the directory works

- Listings are free. There are no paid placements, and all listings are treated equally.
- Anyone can suggest a listing at https://www.potterypost.directory/directory/submit. Every submission is reviewed by hand before it goes live.
- Pottery Post also builds the directory by hand, adding potters, studios, and shops from their own public information at no cost.
- Listings can be updated or removed at any time at https://www.potterypost.directory/directory/update or by email.

## For businesses

If you are a potter, guild, class provider, community kiln, or pottery supply shop and you are listed here, your information belongs to you and is shown with permission. To update, re-credit, or remove a listing, contact hello@potterypost.ca or use the Update Your Listing form.

## Contact

- General: hello@potterypost.ca
- Directory: directory@potterypost.ca
- Gallery: gallery@potterypost.ca

## Key pages

- Home: https://www.potterypost.directory
- Directory: https://www.potterypost.directory/directory
- Gallery: https://www.potterypost.directory/gallery
- Postmarks: https://www.potterypost.directory/postmarks
- FAQ: https://www.potterypost.directory/faq
- Add a listing: https://www.potterypost.directory/directory/submit
`;

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
