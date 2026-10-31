export type GalleryPiece = { src: string; alt: string };

export const foundersCollection: GalleryPiece[] = [
  { src: "/gallery/founders/copper-brown-tree-of-life-planter-founders-collection_001.jpg", alt: "Copper-brown stoneware planter with a tree-of-life motif, holding a trailing pothos plant. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/rustic-floral-stoneware-mug-founders-collection_003.jpg", alt: "Rustic brown stoneware mug with a hand-carved white floral panel. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/green-brown-mottled-lidded-jar-founders-collection_004.jpg", alt: "Lidded stoneware jar with a mottled green and brown glaze. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/pink-lavender-drip-glaze-mug-founders-collection_005.jpg", alt: "Bulbous mug in soft pink and lavender with a brown and green drip glaze. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/speckled-white-carved-teapot-founders-collection_006.jpg", alt: "Small speckled white teapot with a hand-carved geometric band. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/grey-green-dotted-berry-bowl-founders-collection_007.jpg", alt: "Grey-green berry bowl with pierced dot detailing. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/red-brown-blue-layered-bowl-founders-collection_008.jpg", alt: "Shallow bowl with a layered red-brown and blue glaze. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/rustic-red-handled-lidded-casserole-founders-collection_009.jpg", alt: "Rustic lidded casserole with handles in a red and tan wood-ash glaze. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/red-oatmeal-stoneware-mug-founders-collection_010.jpg", alt: "Textured stoneware mug with a deep red body and an oatmeal rim. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/blue-grey-blossom-mug-founders-collection_011.jpg", alt: "Pale blue-grey mug with blue and red blossom detailing. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/teal-carved-flower-mug-founders-collection_012.jpg", alt: "Teal-green mug with a hand-carved flower motif. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/cream-matte-handled-jug-founders-collection_013.jpg", alt: "Small cream matte stoneware jug with a pulled handle. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/blue-red-carved-flame-bowl-founders-collection_014.jpg", alt: "Bowl with a carved flame pattern in blue and red-brown glaze. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/earthy-brown-handled-lidded-pot-founders-collection_015.jpg", alt: "Earthy brown lidded pot with handles and a brushed glaze. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/banded-carved-floral-tumbler-founders-collection_016.jpg", alt: "Banded earth-tone tumbler with a carved floral band. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/dark-bronze-carved-fern-lidded-bowl-founders-collection_017.jpg", alt: "Dark bronze lidded bowl with a carved fern pattern. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/cream-rust-drip-lidded-canister-founders-collection_018.jpg", alt: "Cream lidded canister with rust drips and a small lug handle. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/speckled-oatmeal-lidded-cruet-founders-collection_019.jpg", alt: "Small speckled oatmeal lidded cruet with a handle. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/blue-burgundy-pierced-luminary-founders-collection_020.jpg", alt: "Pierced candle luminary in blue and burgundy with cut-out openings. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/cream-blue-carved-scroll-mug-founders-collection_021.jpg", alt: "Cream mug with a carved blue-grey scroll band. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/tall-speckled-leaf-latte-mug-founders-collection_022.jpg", alt: "Tall speckled latte mug with a small leaf motif. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/olive-brown-carved-scroll-tall-mug-founders-collection_023.jpg", alt: "Tall olive-brown mug with a carved scroll design. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/blue-green-marbled-mug-founders-collection_024.jpg", alt: "Blue-green marbled mug with a white rim. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/rust-tan-ash-drip-mug-founders-collection_025.jpg", alt: "Rust and tan mug with an ash drip glaze. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/slate-blue-carved-botanical-bowl-founders-collection_026.jpg", alt: "Slate-blue bowl with a carved botanical branch pattern. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/green-brown-embossed-leaf-tumbler-founders-collection_028.jpg", alt: "Tumbler with a green rim and dark brown body with embossed leaves. Handmade pottery from the Founder's Collection at Pottery Post." },
  { src: "/gallery/founders/green-red-rim-lidded-jar-founders-collection_029.jpg", alt: "Lidded stoneware jar in green with a red-brown rim and drip detailing. Handmade pottery from the Founder's Collection at Pottery Post." },
];

// Look up a Founder's Collection piece by its number (the _NNN in the filename).
function piece(n: number): GalleryPiece | undefined {
  const tag = `_${String(n).padStart(3, "0")}.jpg`;
  return foundersCollection.find((p) => p.src.includes(tag));
}

// Pieces featured in the homepage gallery preview, chosen separately for
// desktop (8) and mobile (4), each shown in the order listed here.
// To change the selection, edit the number lists below (the _NNN piece number,
// shown in each filename and in pottery-post_assets/gallery-founders-mapping.txt).
export const featuredDesktop: GalleryPiece[] = [3, 14, 28, 18, 15, 21, 20, 6]
  .map(piece)
  .filter((p): p is GalleryPiece => Boolean(p));

export const featuredMobile: GalleryPiece[] = [3, 20, 26, 9]
  .map(piece)
  .filter((p): p is GalleryPiece => Boolean(p));
