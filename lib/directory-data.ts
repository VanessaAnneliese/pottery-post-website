export type Country = "CA" | "US" | "EU" | "AU";

export type Guild = {
  name: string;
  city: string;
  province: string;
  country: Country;
  website?: string;
  phone?: string;
  bio?: string;
};

export type Potter = {
  name: string;
  studio?: string;
  guild?: string;
  city: string;
  province: string;
  country: Country;
  website?: string;
  phone?: string;
  bio?: string;
};

export type Supplier = {
  name: string;
  city: string;
  province: string;
  country: Country;
  website?: string;
  phone?: string;
  bio?: string;
};

export const guilds: Guild[] = [
  // British Columbia
  {
    name: "Potters Guild of British Columbia",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://www.galleryofbcceramics.com",
    bio: "Established in 1955, one of Canada's oldest and largest ceramic arts organizations.",
  },
  {
    name: "BCPotters Guild",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://www.bcpotters.com",
  },
  // Alberta
  {
    name: "Edmonton Potters' Guild",
    city: "Edmonton",
    province: "Alberta",
    country: "CA",
    website: "https://www.edmontonpottersguild.com",
    bio: "A pottery studio and guild community in Edmonton, Alberta.",
  },
  // Ontario
  {
    name: "Kawartha Potters' Guild",
    city: "Peterborough",
    province: "Ontario",
    country: "CA",
    website: "https://kawarthapottersguild.com",
    bio: "Home of the Canadian Ceramics Directory & Showcase, celebrating contemporary Canadian clay artists.",
  },
  {
    name: "Kingston Potters' Guild",
    city: "Kingston",
    province: "Ontario",
    country: "CA",
    website: "https://kingstonpottersguild.ca",
    bio: "Established in 1967, one of the oldest pottery guilds in Ontario.",
  },
  {
    name: "Mississauga Potters' Guild",
    city: "Mississauga",
    province: "Ontario",
    country: "CA",
    website: "https://mississaugapotters.com",
  },
  {
    name: "Pine Tree Potters' Guild",
    city: "Aurora",
    province: "Ontario",
    country: "CA",
    website: "https://www.pinetreepotters.ca",
  },
  {
    name: "Potters' Guild of Hamilton and Region",
    city: "Hamilton",
    province: "Ontario",
    country: "CA",
  },
  {
    name: "Burlington Potters' Guild",
    city: "Burlington",
    province: "Ontario",
    country: "CA",
    website: "https://burlingtonpottersguild.com",
    bio: "A vibrant group of artists welcoming all levels from complete beginner to professional, operating out of the Art Gallery of Burlington.",
  },
  {
    name: "Clay Studio Collective",
    city: "Athens",
    province: "Ontario",
    country: "CA",
    website: "https://claystudiocollective.com",
  },
  {
    name: "Clayworx",
    city: "London",
    province: "Ontario",
    country: "CA",
    website: "https://clayworx.ca",
  },
  {
    name: "Georgian Bay Pottery",
    city: "Collingwood",
    province: "Ontario",
    country: "CA",
    website: "https://georgianbaypottery.com",
  },
  {
    name: "Hill Potters' Guild",
    city: "Richmond Hill",
    province: "Ontario",
    country: "CA",
    website: "https://hillpotters.square.site",
  },
  {
    name: "North Bay Potters' Guild",
    city: "North Bay",
    province: "Ontario",
    country: "CA",
    website: "https://nbpottersguild.org",
  },
  {
    name: "Soffi Studio",
    city: "Windsor",
    province: "Ontario",
    country: "CA",
    website: "https://soffistudio.com",
  },
  {
    name: "Sudbury Basin Potters",
    city: "Sudbury",
    province: "Ontario",
    country: "CA",
  },
  {
    name: "Toronto Potters",
    city: "Toronto",
    province: "Ontario",
    country: "CA",
    website: "https://torontopotters.com",
    bio: "A volunteer collective of artists and art lovers supporting the local ceramics community since 1979, offering classes, workshops, juried exhibitions, and annual member sales in Toronto's west end.",
  },
  {
    name: "Waterloo Potters' Workshop",
    city: "Waterloo",
    province: "Ontario",
    country: "CA",
    website: "https://waterloopotters.ca",
    bio: "A non-profit cooperative operating since 1967 out of the historic Jacob Eby Farmhouse in Waterloo Park, offering classes, studio access, and community pottery sales.",
  },
  {
    name: "The Potters' Studio",
    city: "Scarborough",
    province: "Ontario",
    country: "CA",
    website: "https://thepottersstudio.ca",
    bio: "A member-run studio with 70 members and growing, offering wheel throwing, hand building, and open studio time in Scarborough.",
  },
  // Ontario (additional)
  {
    name: "Durham Potters' Guild",
    city: "Whitby",
    province: "Ontario",
    country: "CA",
    website: "https://www.durhampotters.com",
    bio: "Founded over 30 years ago for potters in the Durham Region. 26 active members ranging from emerging to highly experienced, with annual Spring and Christmas Show & Sales.",
  },
  // Ontario (additional)
  {
    name: "Ottawa Guild of Potters",
    city: "Ottawa",
    province: "Ontario",
    country: "CA",
    website: "https://ottawaguildofpotters.ca",
    bio: "A vibrant community of new, experienced, and professional potters in the Ottawa region, welcoming all skill levels.",
  },
  {
    name: "Deep River Potters' Guild",
    city: "Deep River",
    province: "Ontario",
    country: "CA",
    website: "https://www.deepriverpottersguild.ca",
    bio: "Celebrating over 70 years of fostering creativity and community spirit in the Ottawa Valley.",
  },
  // British Columbia (additional)
  {
    name: "Sea to Sky Potters' Guild",
    city: "Squamish",
    province: "British Columbia",
    country: "CA",
    website: "https://www.s2spottersguild.ca",
    bio: "A guild serving potters along the Sea to Sky corridor from West Vancouver to Whistler.",
  },
  // Nova Scotia
  {
    name: "Nova Scotia Potters Guild",
    city: "Halifax",
    province: "Nova Scotia",
    country: "CA",
    website: "https://nspotters.com",
    bio: "Celebrating and promoting the work of Nova Scotia's pottery community.",
  },
  // Prince Edward Island
  {
    name: "PEI Potters Studio Co-op",
    city: "Charlottetown",
    province: "Prince Edward Island",
    country: "CA",
    website: "https://peipottersstudio.ca",
    bio: "A cooperative pottery studio in the heart of Charlottetown, open to beginner and experienced ceramic artists alike.",
  },
  // Connecticut
  {
    name: "Connecticut Clay Guild",
    city: "Connecticut",
    province: "Connecticut",
    country: "US",
    website: "https://www.ctclayguild.com",
    bio: "Members include potters, sculptors, ceramic artists, studio owners, students, and educators from across Connecticut.",
  },
  // Colorado (additional)
  {
    name: "Northern Colorado Potters' Guild",
    city: "Fort Collins",
    province: "Colorado",
    country: "US",
    website: "https://www.nocopottersguild.org",
    bio: "Founded in 2005, a welcoming community of over eighty functional, sculptural, and creative clay artists.",
  },
  // Tennessee
  {
    name: "Memphis Potters' Guild",
    city: "Memphis",
    province: "Tennessee",
    country: "US",
    website: "https://www.thememphispottersguild.com",
    bio: "Committed to increasing public appreciation of quality craftsmanship through teaching, demonstrating, and exhibiting across the Memphis community.",
  },
  // Oregon
  {
    name: "Oregon Potters Association",
    city: "Portland",
    province: "Oregon",
    country: "US",
    website: "https://www.oregonpotters.org",
    bio: "An organization dedicated to educating, inspiring, and transforming lives through clay.",
  },
  // New Mexico
  {
    name: "New Mexico Potters and Clay Artists",
    city: "Santa Fe",
    province: "New Mexico",
    country: "US",
    website: "https://www.nmpotters.org",
    bio: "A virtual studio tour showcasing the work of contemporary ceramic artists across New Mexico.",
  },
  // Minnesota
  {
    name: "Northern Clay Center",
    city: "Minneapolis",
    province: "Minnesota",
    country: "US",
    website: "https://www.nccshop.org",
    bio: "A leading ceramics arts organization in Minneapolis supporting studio potters across Minnesota.",
  },
  // Colorado
  {
    name: "Colorado Potters Guild",
    city: "Denver",
    province: "Colorado",
    country: "US",
    website: "https://coloradopotters.org",
  },
  // New York
  {
    name: "Hudson River Potters",
    city: "Hudson Valley",
    province: "New York",
    country: "US",
    website: "https://www.hudsonriverpotters.net",
    bio: "An organization encompassing over 40 potters living and working in New York's Hudson Valley.",
  },
  // California
  {
    name: "Berkeley Potters Guild",
    city: "Berkeley",
    province: "California",
    country: "US",
    website: "https://berkeleypotters.com",
    bio: "A cooperative of professional local potters based in Berkeley.",
  },
  // Maryland
  {
    name: "Potters' Guild of Frederick",
    city: "Frederick",
    province: "Maryland",
    country: "US",
    website: "https://www.pottersguildoffrederick.com",
  },
  {
    name: "Potters Guild of Baltimore",
    city: "Baltimore",
    province: "Maryland",
    country: "US",
    website: "https://www.pottersguild.org",
  },
  // Michigan
  {
    name: "The Potters Guild of Ann Arbor",
    city: "Ann Arbor",
    province: "Michigan",
    country: "US",
    website: "https://www.pottersguild.net",
    bio: "A cooperative non-profit organization comprising over fifty member potters.",
  },
  // New Jersey
  {
    name: "Potters Guild of New Jersey",
    city: "New Jersey",
    province: "New Jersey",
    country: "US",
    website: "https://pottersguildnj.org",
    bio: "Founded in 1987 to promote the development of New Jersey's ceramic artists.",
  },
  // Virginia
  {
    name: "Blue Ridge Potters Guild",
    city: "Blue Ridge",
    province: "Virginia",
    country: "US",
    website: "https://www.blueridgepotters.com",
    bio: "Celebrating pottery and ceramic arts across Virginia.",
  },
  // Washington
  {
    name: "Spokane Potters' Guild",
    city: "Spokane",
    province: "Washington",
    country: "US",
    website: "https://spokanepottersguild.org",
    bio: "A non-profit, volunteer-based organization founded in 1977.",
  },
  // England (additional)
  {
    name: "London Potters",
    city: "London",
    province: "England",
    country: "EU",
    website: "https://londonpotters.com",
    bio: "Established in 1986, the only London-based society open to both professional and non-professional ceramicists, providing a platform for exchanging ideas.",
  },
  // England
  {
    name: "Craft Potters Association",
    city: "London",
    province: "England",
    country: "EU",
    website: "https://www.craftpotters.com",
    bio: "Founded in 1958, the national body representing studio potters and ceramic artists across the UK and Ireland, with over 300 members and a gallery in London opposite the British Museum.",
  },
  {
    name: "Northern Potters Association",
    city: "Northern England",
    province: "England",
    country: "EU",
    website: "https://www.northern-potters.co.uk",
    bio: "With over 800 members, the NPA supports studio pottery across northern England through exhibitions, workshops, a quarterly newsletter, and an annual Potters Camp.",
  },
  // Scotland
  {
    name: "Scottish Potters Association",
    city: "Scotland",
    province: "Scotland",
    country: "EU",
    website: "https://www.scottishpotters.org",
    bio: "Founded in 1974, the SPA promotes handmade pottery and ceramics across Scotland through exhibitions, workshops, a member directory, and an annual symposium.",
  },
  // Ireland
  {
    name: "Ceramics Ireland",
    city: "Ireland",
    province: "Ireland",
    country: "EU",
    website: "https://www.ceramicsireland.ie",
    bio: "Founded in 1977, Ceramics Ireland hosts exhibitions, workshops, and a biennial international festival with membership open to practitioners, students, and friends of ceramics.",
  },
  // France
  {
    name: "Henriot-Quimper",
    city: "Quimper",
    province: "France",
    country: "EU",
    website: "https://www.hb-henriot.com",
    bio: "One of France's oldest active potteries, founded in 1690, continuing the living tradition of hand-painted Breton faience decorated by skilled faïenciers with traditional regional motifs.",
  },
  // Netherlands
  {
    name: "European Ceramic Work Centre",
    city: "'s-Hertogenbosch",
    province: "Netherlands",
    country: "EU",
    website: "https://ekwc.nl",
    bio: "A prestigious international artist-in-residence and research centre where artists, designers, and architects from around the world work with full technical support and state-of-the-art facilities.",
  },
  // Denmark
  {
    name: "Guldagergaard International Ceramic Research Center",
    city: "Skælskør",
    province: "Denmark",
    country: "EU",
    website: "https://ceramic.dk",
    bio: "Founded in 1997, a world-leading international ceramics residency and research centre offering artist-in-residence stays, grant-funded programmes, and workshops for potters worldwide.",
  },
  // New South Wales
  {
    name: "The Australian Ceramics Association",
    city: "Sydney",
    province: "New South Wales",
    country: "AU",
    website: "https://australianceramics.com",
    bio: "The peak national body for Australian ceramics, connecting ceramicists across all states through membership, an open studios directory, the Journal of Australian Ceramics, and national events.",
  },
  // South Australia
  {
    name: "Studio Potters SA",
    city: "Adelaide",
    province: "South Australia",
    country: "AU",
    website: "https://www.studiopotters.com",
    bio: "A South Australian organisation providing classes, exhibition opportunities, and inclusion in Adelaide arts festivals for local ceramicists.",
  },
  // Western Australia
  {
    name: "Ceramic Arts Association of Western Australia",
    city: "Perth",
    province: "Western Australia",
    country: "AU",
    website: "https://www.ceramicartswa.asn.au",
    bio: "A not-for-profit organisation with over 120 WA ceramicists promoting handmade pottery and ceramic sculpture through exhibitions, workshops, and the biennial Members Selective Exhibition.",
  },
  // Western Australia (additional)
  {
    name: "Perth Studio Potters",
    city: "Perth",
    province: "Western Australia",
    country: "AU",
    website: "http://www.perthstudiopotters.org.au",
    bio: "A community of studio potters based in Perth, promoting handmade ceramics and ceramic arts across Western Australia.",
  },
  // Queensland
  {
    name: "Ceramic Arts Queensland",
    city: "Brisbane",
    province: "Queensland",
    country: "AU",
    website: "https://ceramicartsqld.org.au",
    bio: "Founded in Brisbane in 1968, CAQ fosters an inclusive ceramic arts community across Queensland through the biennial Siliceous Award for Ceramic Excellence, workshops, and member exhibitions.",
  },
];

export const potters: Potter[] = [
  // Alberta
  {
    name: "Heather",
    studio: "Pottery By Heather",
    city: "Bon Accord",
    province: "Alberta",
    country: "CA",
    website: "https://potterybyheather.com",
    bio: "Handmade pottery and functional art from a working studio just north of Edmonton. Open by appointment.",
  },
  {
    name: "Linh Ly",
    studio: "Starfishly Clay Works",
    city: "Calgary",
    province: "Alberta",
    country: "CA",
    website: "https://www.starfishlyclay.com",
    bio: "Limited edition, artisan hand-thrown pottery with a modern twist. Based in Calgary.",
  },
  {
    name: "Moon Kim",
    studio: "MoonK Studio",
    city: "Edmonton",
    province: "Alberta",
    country: "CA",
    website: "https://moonkstudiopottery.com",
    bio: "Korean-influenced handmade pottery blending Korean style with Canadian inspiration, made in Edmonton.",
  },
  // British Columbia
  {
    name: "Mike Allegretti",
    studio: "Creek Clayworks",
    city: "Roberts Creek",
    province: "British Columbia",
    country: "CA",
    website: "https://creekclayworks.ca",
  },
  {
    name: "Zohra Bonnis",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://www.zohrabonnis.com",
    bio: "A Canadian ceramic artist, curator, and founder of Z Gallery Arts in Vancouver whose practice is deeply rooted in tradition and guided by wabi-sabi philosophy.",
  },
  {
    name: "Elaine Brewer-White",
    city: "Langley",
    province: "British Columbia",
    country: "CA",
    website: "https://elainebrewerwhiteceramics.com",
  },
  {
    name: "Sharon Bussard Grove",
    city: "Sooke",
    province: "British Columbia",
    country: "CA",
    website: "https://sharonbussardgrove.ca",
  },
  {
    name: "Francis Chan",
    studio: "Potluck Ceramics",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://potluckceramics.com",
  },
  {
    name: "Amy Li-Chuan Chang",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://amychangceramics.com",
  },
  {
    name: "Larry Cohen",
    city: "Cortes Island",
    province: "British Columbia",
    country: "CA",
    website: "https://www.larrycohenceramics.ca",
  },
  {
    name: "Liz de Beer",
    studio: "Klaywerk Studio",
    city: "Gibsons",
    province: "British Columbia",
    country: "CA",
    website: "https://www.lizdebeer.com",
  },
  {
    name: "Anthony Dunlop",
    studio: "Antler Ceramics",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://www.antlerceramics.com",
  },
  {
    name: "Connie Glover",
    studio: "Connie Glover Pottery",
    city: "Surrey",
    province: "British Columbia",
    country: "CA",
    website: "https://www.connieglover.com",
  },
  {
    name: "Lance Hall",
    studio: "Still Point Pottery",
    city: "Slocan Valley",
    province: "British Columbia",
    country: "CA",
    website: "https://www.stillpointpottery.ca",
  },
  {
    name: "Andrea Hoff",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://www.andreahoff.com",
  },
  {
    name: "Pam Horner",
    city: "Gibsons",
    province: "British Columbia",
    country: "CA",
    website: "https://potterybypam.ca",
  },
  {
    name: "Robin Jenkins",
    studio: "Robin's Nest Pottery",
    city: "Tsawwassen",
    province: "British Columbia",
    country: "CA",
    website: "https://www.robinsnestpottery.com",
  },
  {
    name: "Diane Walters",
    studio: "eARTh Studios",
    city: "Nelson",
    province: "British Columbia",
    country: "CA",
    website: "https://earthstudiosonline.com",
  },
  {
    name: "Hillary Webb",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://www.hillarywebb.ca",
  },
  {
    name: "Susan Whitham",
    studio: "MiraSol Studio",
    city: "Duncan",
    province: "British Columbia",
    country: "CA",
    website: "https://www.mirasolstudio.com",
  },
  {
    name: "Clare Wilkening",
    city: "Roberts Creek",
    province: "British Columbia",
    country: "CA",
    website: "https://www.clarewilkening.com",
  },
  {
    name: "Kate Metten",
    studio: "Kate Metten Ceramics",
    city: "Vancouver",
    province: "British Columbia",
    country: "CA",
    website: "https://www.katemetten.com",
    bio: "Wheel-thrown modernist pottery tableware glazed with hand-derived recipes from local materials. Studio on Main Street, Vancouver.",
  },
  {
    name: "Mary Fox",
    studio: "Mary Fox Pottery",
    city: "Ladysmith",
    province: "British Columbia",
    country: "CA",
    website: "https://maryfoxpottery.ca",
    bio: "Self-taught exploratory potter based in Ladysmith on Vancouver Island.",
  },
  {
    name: "Sarah Pike",
    studio: "Sarah Pike Pottery",
    city: "Fernie",
    province: "British Columbia",
    country: "CA",
    website: "https://www.sarahpikepottery.com",
    bio: "Full-time potter making functional slab-built pottery in a home studio on the edge of a ski town in Fernie, BC.",
  },
  {
    name: "Yuki Kianna",
    studio: "Yuki Kianna Studio",
    city: "Nelson",
    province: "British Columbia",
    country: "CA",
    website: "https://yukikiannastudio.com",
    bio: "Handmade functional pottery inspired by the BC wilderness and Kootenay Lake. Soft colours and whimsical elements woven into every piece.",
  },
  // New Brunswick
  {
    name: "Tim Isaac",
    city: "New Horton",
    province: "New Brunswick",
    country: "CA",
    website: "https://timisaacpottery.com",
    bio: "Raku-fired clay incorporating seashells, rocks, and fossils gathered near the Bay of Fundy. Offers workshops from a studio in New Horton, NB.",
  },
  {
    name: "Krysta Oland",
    studio: "Morning Sun Pottery",
    city: "Harvey Station",
    province: "New Brunswick",
    country: "CA",
    website: "https://morningsunpottery.com",
    bio: "Functional pots for everyday use, handcrafted in Harvey Station. Juried member of the New Brunswick Crafts Council.",
  },
  // Ontario
  {
    name: "Karen Gray",
    studio: "The Potter's Studio & Gallery",
    city: "Huntsville",
    province: "Ontario",
    country: "CA",
    website: "https://thepottersstudio.com",
    bio: "Original Canadian Sgraffito pottery made in Muskoka. Gallery and working pottery studio in downtown Huntsville.",
  },
  {
    name: "Naomi Clement",
    studio: "Naomi Clement Ceramics",
    city: "Stratford",
    province: "Ontario",
    country: "CA",
    website: "https://naomiclement.com",
    bio: "Ceramic artist and workshop instructor creating functional ceramics from her home studio in Stratford, Ontario.",
  },
  // Ontario — individual potters
  {
    name: "Anne Gibson",
    studio: "Kalon Ceramics",
    city: "Toronto",
    province: "Ontario",
    country: "CA",
    website: "https://kalonceramics.ca",
    bio: "Thoughtfully made artisan stoneware pieces with original character, handmade in Toronto.",
  },
  {
    name: "Daniel Maxwell",
    studio: "Maxwell Pottery",
    city: "Mattawa",
    province: "Ontario",
    country: "CA",
    website: "https://maxwellpottery.com",
    bio: "Trained at Sheridan College, Daniel established Maxwell Pottery in 1991, creating functional hand-painted stoneware using wheel throwing, hand building, pressing, and slip casting with in-studio glazes.",
  },
  {
    name: "Pavlo Pottery",
    city: "Rockton",
    province: "Ontario",
    country: "CA",
    website: "https://pavlopottery.com",
    bio: "Functional one-of-a-kind pottery made in the small village of Rockton, Ontario, a short drive from Hamilton and Cambridge.",
  },
  {
    name: "Sandra Silberman",
    studio: "Dotti Potts",
    city: "Barrie",
    province: "Ontario",
    country: "CA",
    website: "https://dottipotts.com",
    bio: "Ceramic artist with over 30 years of experience creating functional and decorative handmade pieces that blend clean modern design with playful textures, patterns, and dots. Also offers pottery workshops and private clay parties.",
  },
  // Quebec
  {
    name: "Baie d'Urfé Potters' Guild",
    city: "Baie d'Urfé",
    province: "Quebec",
    country: "CA",
    website: "https://bdupottersguild.com",
  },
  // Quebec — individual potters
  {
    name: "Céline Fafard",
    studio: "Parceline Céramique",
    city: "Montreal",
    province: "Quebec",
    country: "CA",
    website: "https://parcelineceramique.com",
    bio: "Handmade pottery on the wheel from high-quality stoneware and porcelain. Studio open by appointment in Montreal.",
  },
  // Manitoba
  {
    name: "Crystal Nykoluk",
    city: "Winnipeg",
    province: "Manitoba",
    country: "CA",
    website: "https://www.crystalnykoluk.com",
    bio: "Ceramic artist and earthshaper living and working in Winnipeg.",
  },
  // Nova Scotia
  {
    name: "Joan Bruneau",
    studio: "Nova Terra Cotta",
    city: "Lunenburg",
    province: "Nova Scotia",
    country: "CA",
    website: "https://joanbruneau.com",
    bio: "Established Nova Terra Cotta in Lunenburg in 1995. Work exhibited throughout North America and held in private and public collections.",
  },
  {
    name: "Toni Losey",
    city: "Dartmouth",
    province: "Nova Scotia",
    country: "CA",
    website: "https://www.toniloseypottery.com",
    bio: "Creates complex, highly saturated organic ceramic sculptures through the abstraction and reinterpretation of common plant life.",
  },
  {
    name: "Jessie Wright",
    studio: "JAW Pottery",
    city: "Halifax",
    province: "Nova Scotia",
    country: "CA",
    website: "https://jawpottery.com",
    bio: "Self-taught potter creating modern handmade ceramics from a small-batch studio in Halifax.",
  },
  // Saskatchewan
  {
    name: "Paula Cooley",
    city: "Saskatoon",
    province: "Saskatchewan",
    country: "CA",
    website: "https://paulacooley.com",
    bio: "Full-time ceramics artist with an active studio practice since 1999, creating both functional pottery and sculptural ceramics.",
  },
  // Tennessee
  {
    name: "Bryan Blankenship",
    city: "Memphis",
    province: "Tennessee",
    country: "US",
    website: "https://www.bryanblankenship.com",
  },
  {
    name: "April Dupuis",
    studio: "The Potter's Hands Studio",
    city: "Memphis",
    province: "Tennessee",
    country: "US",
    website: "https://www.thepottershandsstudio.com",
  },
  {
    name: "Angela Kilpatrick",
    studio: "Willowberry Studio",
    city: "Memphis",
    province: "Tennessee",
    country: "US",
    website: "https://www.willowberrystudio.com",
  },
  {
    name: "Amanda Kohr",
    studio: "Combustion Ceramics",
    city: "Memphis",
    province: "Tennessee",
    country: "US",
    website: "https://combustionceramics.com",
  },
  // Montana
  {
    name: "Carl Sheehan",
    studio: "Fire Hole Pottery",
    city: "Bozeman",
    province: "Montana",
    country: "US",
    website: "https://fireholepottery.com",
    bio: "Resident potter at Yellowstone National Park for over 40 years. Handcrafted stoneware and porcelain inspired by Yellowstone and the Rocky Mountains.",
  },
  // New Mexico
  {
    name: "Theo Helmstadter",
    studio: "Green River Pottery",
    city: "Santa Fe",
    province: "New Mexico",
    country: "US",
    website: "https://www.greenriverpottery.com",
    bio: "Studio potter since 1998 in Santa Fe. Stoneware with an emphasis on everyday use — plates, bowls, teapots, platters, and vases.",
  },
  // Tennessee
  {
    name: "Melissa Bridgman",
    studio: "Bridgman Pottery",
    city: "Memphis",
    province: "Tennessee",
    country: "US",
    website: "https://www.bridgmanpottery.com",
    bio: "Handmade porcelain and stoneware pottery for tables, kitchens, and gardens, made in Midtown Memphis.",
  },
  {
    name: "Agnes Stark",
    studio: "Agnes Stark Pottery",
    city: "Memphis",
    province: "Tennessee",
    country: "US",
    website: "https://agnestarkpottery.com",
    bio: "Functional stoneware and decorative porcelain widely recognized for its appealing originality.",
  },
  // Vermont
  {
    name: "James Zilian",
    studio: "Farmhouse Pottery",
    city: "Woodstock",
    province: "Vermont",
    country: "US",
    website: "https://www.farmhousepottery.com",
    bio: "Founded in 2012 in Woodstock, Vermont. Every piece begins with skilled hands and a love for the craft.",
  },
  // Wisconsin
  {
    name: "Andrew Linderman",
    studio: "Andrew Linderman Pottery",
    city: "Arena",
    province: "Wisconsin",
    country: "US",
    website: "https://www.lindermanpottery.com",
    bio: "Handcrafted functional ceramics inspired by the natural world, exploring glaze chemistry and atmospheric firing. Studio west of Madison.",
  },
  {
    name: "Ashley Pfannenstiel",
    studio: "Wilson Creek Pottery",
    city: "Spring Green",
    province: "Wisconsin",
    country: "US",
    website: "https://wilsoncreekpottery.com",
    bio: "Functional ceramics including mugs and bowls designed to fit into everyday life, made in Spring Green.",
  },
  // Wyoming
  {
    name: "Dustin Stephenson",
    studio: "Stephenson Ceramics",
    city: "Ten Sleep",
    province: "Wyoming",
    country: "US",
    website: "https://www.stephensonceramics.net",
    bio: "One-of-a-kind handmade pottery with western flair from a studio at the base of the Big Horn mountains in Ten Sleep, Wyoming.",
  },
  // Oregon
  {
    name: "Sarah Wolf",
    studio: "Wolf Ceramics",
    city: "Hood River",
    province: "Oregon",
    country: "US",
    website: "https://wolfceramics.com",
    bio: "Woman-led handmade pottery studio making contemporary ceramic dinnerware from a production studio in Hood River, Oregon.",
  },
  // Colorado
  {
    name: "Curt Hammerly",
    studio: "Hammerly Ceramics",
    city: "Denver",
    province: "Colorado",
    country: "US",
    website: "https://www.hammerlyceramics.com",
    bio: "Designs and crafts one-of-a-kind porcelain mugs and ceramic art from a studio outside Denver.",
  },
  // New York
  {
    name: "Jessica Weinberg",
    studio: "Firehouse Pottery Co.",
    city: "Hudson Valley",
    province: "New York",
    country: "US",
    website: "https://www.firehousepotteryco.com",
    bio: "Handmade ceramics and tableware in regional stonewares and terra cotta, continuing the tradition of Americana makers in the Hudson Valley.",
  },
  // North Carolina
  {
    name: "Sam Dougherty",
    studio: "Sam Dougherty Pottery",
    city: "Stokes County",
    province: "North Carolina",
    country: "US",
    website: "https://samdoughertypottery.com",
    bio: "Full-time studio potter near Hanging Rock State Park, making functional handcrafted pottery and dinnerware with a wood-fired kiln.",
  },
  // Georgia
  {
    name: "Rebecca Wood",
    studio: "R.Wood Studio",
    city: "Athens",
    province: "Georgia",
    country: "US",
    website: "https://rwoodstudio.com",
    bio: "Handmade dinnerware and serving pieces crafted since 1991. One of the largest pottery studios in America, known for colourful, durable red earthenware.",
  },
  // Massachusetts
  {
    name: "Lucy Fagella",
    city: "Greenfield",
    province: "Massachusetts",
    country: "US",
    website: "https://www.lucyfagella.com",
    bio: "Handmade functional pottery for the home and heart, made one at a time in Greenfield, Massachusetts.",
  },
  {
    name: "Kristen Kieffer",
    studio: "Kieffer Ceramics",
    city: "Templeton",
    province: "Massachusetts",
    country: "US",
    website: "https://kiefferceramics.com",
    bio: "Functional pottery handmade in central Massachusetts. Known for intricate surface decoration and refined technique.",
  },
  {
    name: "Jill Rosenwald",
    city: "Boston",
    province: "Massachusetts",
    country: "US",
    website: "https://www.jillrosenwald.com",
    bio: "Colorful handmade ceramic vases, lamps, and trays made in Boston.",
  },
  // Minnesota
  {
    name: "Joel Cherrico",
    studio: "Cherrico Pottery",
    city: "St. Joseph",
    province: "Minnesota",
    country: "US",
    website: "https://cherricopottery.com",
    bio: "Beautiful handmade pottery made in St. Joseph, Minnesota.",
  },
  // Ohio
  {
    name: "Gina DeSantis",
    studio: "Gina DeSantis Ceramics",
    city: "Lakewood",
    province: "Ohio",
    country: "US",
    website: "https://www.ginadesantisceramics.com",
    bio: "Rustic yet refined handmade ceramic tableware made in Lakewood, Ohio. Featured in Food & Wine and sold through Anthropologie and Nordstrom.",
  },
  {
    name: "Tim Frederich",
    studio: "Frederich Pottery",
    city: "Dublin",
    province: "Ohio",
    country: "US",
    website: "https://frederichpottery.com",
    bio: "Over four decades of experience in hand-thrown stoneware and sculpture, based in Dublin, Ohio.",
  },
  // Arizona
  {
    name: "Mark Arnegard",
    studio: "Arne Ceramics",
    city: "Flagstaff",
    province: "Arizona",
    country: "US",
    website: "https://www.azhandmade.com/mark-arne-arnegard.html",
    bio: "Handmade ceramics studio on historic Route 66 in Flagstaff, Arizona.",
  },
  // Illinois
  {
    name: "Danielle Chutinthranond",
    studio: "Monsoon Pottery",
    city: "Chicago",
    province: "Illinois",
    country: "US",
    website: "https://monsoonpottery.com",
    bio: "Porcelain pottery inspired by Asian art history and food culture, made in Chicago's West Town neighbourhood. Hand-carved inlay work combining blue & white porcelain aesthetics.",
  },
  // Maine
  {
    name: "Amy Clark",
    studio: "Ocean Fire Pottery",
    city: "York",
    province: "Maine",
    country: "US",
    website: "https://oceanfirepottery.com",
    bio: "Wheel-thrown stoneware and wood-fired pottery from a studio and gallery in York Village, Maine. Open since 2009.",
  },
  // Pennsylvania
  {
    name: "Francis DeFabo",
    studio: "fdp studio+shop",
    city: "Pleasant Unity",
    province: "Pennsylvania",
    country: "US",
    website: "https://www.fdpstudioshop.com",
    bio: "Small-batch ceramics made in a restored historic building forty minutes east of Pittsburgh.",
  },
  // Texas
  {
    name: "Stephen Salter",
    studio: "Stephen Salter Pottery",
    city: "Dallas",
    province: "Texas",
    country: "US",
    website: "https://stephensalterpottery.com",
    bio: "Brings meaningful handcrafted ceramics to the Oak Cliff community in Dallas. Started in 2018 after an apprenticeship at The Barn Pottery.",
  },
  // England
  {
    name: "Edmund de Waal",
    city: "London",
    province: "England",
    country: "EU",
    website: "https://www.edmunddewaal.com",
    bio: "Internationally renowned potter and author of The Hare with Amber Eyes, creating luminous porcelain installations exploring themes of memory and place, exhibited at major institutions worldwide.",
  },
  {
    name: "Florian Gadsby",
    city: "London",
    province: "England",
    country: "EU",
    website: "https://www.floriangadsby.com",
    bio: "A leading young British studio potter creating refined functional and decorative wheel-thrown vessels in stoneware glazes, known internationally through his popular YouTube channel and his 2023 book By My Hands.",
  },
  {
    name: "Lisa Hammond",
    city: "London",
    province: "England",
    country: "EU",
    website: "https://www.lisahammond-pottery.co.uk",
    bio: "A celebrated soda-firing potter working from her Maze Hill Pottery — established in 1994 inside a Victorian railway ticket office — creating loose, gestural vessels fired in her atmospheric soda kiln.",
  },
  {
    name: "Jim Malone",
    city: "Cumbria",
    province: "England",
    country: "EU",
    website: "http://www.jimmalonepottery.co.uk",
    bio: "One of Britain's most respected studio potters, drawing from medieval English and Korean traditions to make wood-fired jugs, bottles, and Hakeme-decorated pieces from his remote Cumbrian studio for over forty years.",
  },
  {
    name: "Simon Olley",
    city: "Kent",
    province: "England",
    country: "EU",
    website: "https://www.olleypottery.co.uk",
    bio: "A Selected Member of the Craft Potters Association whose illustrated sgraffito ceramics honour the bond between humans and their dogs, hand-thrown in earthenware and stoneware with intricate scratched decoration.",
  },
  // Scotland
  {
    name: "Lotte Glob",
    city: "Sutherland",
    province: "Scotland",
    country: "EU",
    website: "https://www.lotteglob.co.uk",
    bio: "A Danish-born ceramic artist who has lived and worked on Scotland's remote northwest coast for over 50 years, creating sculptural pieces deeply connected to the Highland landscape, geology, and weather.",
  },
  {
    name: "Hannah McAndrew",
    studio: "Fitch & McAndrew",
    city: "Castle Douglas",
    province: "Scotland",
    country: "EU",
    website: "https://fitchandmcandrew.co.uk",
    bio: "An internationally recognised slipware potter working with partner Douglas Fitch in a rural studio with a wood-fired kiln, producing hand-thrown earthenware decorated with traditional slip-trailing and sgraffito.",
  },
  // Ireland
  {
    name: "Elaine Fallon",
    studio: "Brookwood Pottery",
    city: "Dublin",
    province: "Ireland",
    country: "EU",
    website: "https://brookwoodpottery.com",
    bio: "Established in 2012, Brookwood Pottery is a design studio and teaching space in Dublin making handcrafted functional ceramics and running classes for the local community.",
  },
  {
    name: "Charlie Mahon",
    city: "Cork",
    province: "Ireland",
    country: "EU",
    website: "https://charliemahonceramicspottery.com",
    bio: "An award-winning ceramic artist hand-painting and wheel-throwing vivid Irish-themed earthenware from his studio in Cork's English Market, with all pieces fired in his own kiln.",
  },
  {
    name: "Amanda Murphy",
    city: "Co. Waterford",
    province: "Ireland",
    country: "EU",
    website: "https://amandamurphyceramics.com",
    bio: "A coastal Co. Waterford potter whose hand-built and wheel-thrown pieces are inspired by the Irish landscape — vases, bowls, and platters textured with the colours of sea, sand, mountains, and rock.",
  },
  // France
  {
    name: "Maureen Stengel-Guillot",
    studio: "MSG Céramique",
    city: "Vallauris",
    province: "France",
    country: "EU",
    website: "https://www.msg-ceramique.com",
    bio: "Working in Vallauris — the pottery town made famous by Picasso — Maureen hand-builds all her pieces combining Limoges porcelain traditions with contemporary Provençal techniques.",
  },
  // Germany
  {
    name: "Elizaveta Barsega",
    studio: "Barsega Studio",
    city: "Berlin",
    province: "Germany",
    country: "EU",
    website: "https://brsg-keramik.com",
    bio: "A research-driven ceramics practice devoted to locally sourced natural minerals and wood ash glazes, making mindfully crafted vessels from wild-harvested materials with workshops in sustainable techniques.",
  },
  {
    name: "Marilyne Blais",
    city: "Berlin",
    province: "Germany",
    country: "EU",
    website: "https://www.marilyneblais.com",
    bio: "A French-Canadian ceramic artist who founded her studio in Berlin in 2018, creating bold, colourful handmade vessels with vibrant airbrushed gradient glazes, alongside teaching wheel-throwing classes.",
  },
  // Netherlands
  {
    name: "Marjoke de Heer",
    city: "Amsterdam",
    province: "Netherlands",
    country: "EU",
    website: "https://marjokedeheer.com",
    bio: "A studio potter and gallery-holder working from her Amsterdam riverside studio since 1994, creating one-of-a-kind stoneware, porcelain, and wild clay vessels using ancient glazes and contemporary design.",
  },
  {
    name: "Lonny van Ryswyck",
    studio: "AtelierNL",
    city: "Eindhoven",
    province: "Netherlands",
    country: "EU",
    website: "https://www.ateliernl.com",
    bio: "A design-led ceramics studio that digs local Dutch clays to make place-specific ceramics and glass, translating the geology and history of each location into objects. Dezeen Designer of the Year.",
  },
  {
    name: "Camille Verbunt",
    studio: "Made in Mokum",
    city: "Amsterdam",
    province: "Netherlands",
    country: "EU",
    website: "https://www.madeinmokum.com",
    bio: "An Amsterdam-based potter who celebrates the character of handmade objects, throwing wonky stoneware bowls, vases, and pots with homebrew glazes — embracing imperfection as part of the work's personality.",
  },
  // Portugal
  {
    name: "Ian Fitzpatrick",
    studio: "Olaria Pequena",
    city: "Porches",
    province: "Portugal",
    country: "EU",
    website: "https://www.olariapequena.com",
    bio: "A Scottish-born potter who came to Portugal in 1981, this intimate Algarve studio produces handcrafted pottery and tiles blending traditional Portuguese craft with contemporary sensibility.",
  },
  {
    name: "Gaëlle Van Branteghem",
    studio: "Gaëlle Ceramica",
    city: "Ericeira",
    province: "Portugal",
    country: "EU",
    website: "https://www.gaelleceramica.com",
    bio: "A Belgian-born ceramist who moved to Ericeira in 2017, creating wheel-thrown stoneware tableware and interior pieces inspired by the wild coastal landscapes near Lisbon.",
  },
  // Denmark
  {
    name: "Anne Black",
    city: "Copenhagen",
    province: "Denmark",
    country: "EU",
    website: "https://www.anneblack.com",
    bio: "A Danish ceramicist and designer who has worked exclusively in porcelain since graduating from the Danish Design School in 1996, creating handmade contemporary ceramics, jewellery, and homewares.",
  },
  {
    name: "Eric Landon",
    studio: "TORTUS Copenhagen",
    city: "Copenhagen",
    province: "Denmark",
    country: "EU",
    website: "https://tortus.dk",
    bio: "An American-born master potter based in Copenhagen who has taught over 10,000 students in 30+ countries, creating hand-thrown stoneware that blends timeless craftsmanship with a clean Scandinavian aesthetic.",
  },
  // New South Wales
  {
    name: "Daniel Lafferty",
    studio: "Bandicoot Pottery",
    city: "Cobargo",
    province: "New South Wales",
    country: "AU",
    website: "https://www.bandicootpottery.com.au",
    bio: "A studio operating since 1990 in the Cobargo Valley, specialising in functional, decorative one-off wood-fired pieces and offering ceramics classes in a community-focused creative environment.",
  },
  // Victoria
  {
    name: "Jennifer Hodges",
    studio: "Woolshed Ceramics",
    city: "Wooragee",
    province: "Victoria",
    country: "AU",
    website: "https://woolshedceramics.com.au",
    bio: "A ceramic artist working from a converted 1940s shearing shed in Victoria's High Country, creating functional handmade wares in organic shapes with earthy glazes reflecting the Australian landscape.",
  },
  // South Australia
  {
    name: "Alison Arnold",
    studio: "Red Bird Studio",
    city: "Hawthorndene",
    province: "South Australia",
    country: "AU",
    website: "https://redbirdstudioart.com",
    bio: "A full-time studio potter and teacher with over 30 years of experience, trained at Adelaide's JamFactory, making sculptural and functional pottery inspired by Australian flora and fauna.",
  },
  // Western Australia
  {
    name: "Anika Kalotay",
    studio: "Kura Studio",
    city: "Perth",
    province: "Western Australia",
    country: "AU",
    website: "https://kurastudio.com",
    bio: "A ceramics and creative practice making small-batch handmade ceramics — palm-fitting vases, topography-inspired jewellery trays, and paired everyday objects — focused on thoughtful, responsive design.",
  },
  {
    name: "Danica Wichtemann",
    studio: "Rediscover Ceramics",
    city: "Perth",
    province: "Western Australia",
    country: "AU",
    website: "https://www.rediscovering.com.au",
    bio: "A ceramic artist who carves Southern Ice Porcelain with detailed illustrations of native Australian flowers and birds, inlaying glazes for colour and texture. Work stocked at Fremantle Arts Centre.",
  },
  // Queensland
  {
    name: "Rowley Drysdale",
    studio: "Quixotica Art Space",
    city: "Cooroy",
    province: "Queensland",
    country: "AU",
    website: "https://www.rowleydrysdale.com.au",
    bio: "One of Australia's foremost wood-firing potters, born in western Queensland, drawing on the Australian bush as central inspiration and internationally connected with potters in South Korea, Japan, and Finland.",
  },
];

export const suppliers: Supplier[] = [
  // British Columbia
  {
    name: "The Clay Warehouse",
    city: "Port Coquitlam",
    province: "British Columbia",
    country: "CA",
    website: "https://theclaywarehouse.com",
    bio: "Pottery supplies, wheels, kilns, and materials serving potters across BC.",
  },
  {
    name: "Greenbarn Potters' Supply",
    city: "Surrey",
    province: "British Columbia",
    country: "CA",
    website: "https://greenbarn.com",
    bio: "A BC institution for ceramic supplies, raw materials, kilns, and wheels — serving potters for decades.",
  },
  {
    name: "Vancouver Island Pottery Supply",
    city: "Parksville",
    province: "British Columbia",
    country: "CA",
    website: "https://vipotterysupply.com",
    bio: "Vancouver Island's go-to source for clay, glazes, tools, and equipment.",
  },
  // Alberta
  {
    name: "Plainsman Clays",
    city: "Medicine Hat",
    province: "Alberta",
    country: "CA",
    website: "https://plainsmanclays.com",
    bio: "One of Canada's leading clay manufacturers, producing Plainsman clay bodies used by potters coast to coast.",
  },
  {
    name: "Plainsman Pottery Supply",
    city: "Edmonton",
    province: "Alberta",
    country: "CA",
    website: "https://plainsmanpotterysupply.com",
    bio: "Full-service pottery supply store in Edmonton carrying Plainsman clays, Skutt kilns, Brent and Shimpo wheels.",
  },
  {
    name: "Ceramics Canada",
    city: "Lethbridge",
    province: "Alberta",
    country: "CA",
    bio: "Ceramic supplies, kiln equipment, and raw materials for Alberta potters.",
  },
  // Saskatchewan
  {
    name: "TREE Pottery Supply",
    city: "Saskatoon",
    province: "Saskatchewan",
    country: "CA",
    website: "https://treesaskatoon.com",
    bio: "Saskatoon's pottery supply store for over 37 years, stocking Plainsman clays, Skutt kilns, and Brent and Shimpo wheels.",
  },
  // Manitoba
  {
    name: "Sounding Stone",
    city: "Winnipeg",
    province: "Manitoba",
    country: "CA",
    website: "https://soundingstone.ca",
    bio: "Pottery supplies and ceramics equipment serving Manitoba and the Prairie provinces.",
  },
  // Ontario
  {
    name: "PSH / Euclid's",
    city: "Oakville",
    province: "Ontario",
    country: "CA",
    website: "https://www.psh.ca",
    bio: "One of Canada's largest pottery supply houses, carrying clay, glazes, tools, wheels, and kilns.",
  },
  {
    name: "Tucker's Pottery Supplies",
    city: "Richmond Hill",
    province: "Ontario",
    country: "CA",
    website: "https://tuckerspot.com",
    bio: "A well-stocked Ontario pottery supplier carrying a full range of clays, glazes, tools, wheels, and kilns.",
  },
  {
    name: "Amaranth Stoneware",
    city: "Kingston",
    province: "Ontario",
    country: "CA",
    website: "https://amaranthstoneware.com",
    bio: "Supplies, raw materials, and equipment for studio potters in Eastern Ontario.",
  },
  // Washington
  {
    name: "Seattle Pottery Supply",
    city: "Seattle",
    province: "Washington",
    country: "US",
    website: "https://seattlepotterysupply.com",
    bio: "A Pacific Northwest institution stocking clay bodies, glazes, tools, and equipment since 1978.",
  },
  // Colorado
  {
    name: "Rocky Mountain Clay",
    city: "Denver",
    province: "Colorado",
    country: "US",
    website: "https://rockymountainclay.com",
    bio: "Ceramic supplies and clay bodies for studio potters throughout the Rocky Mountain region.",
  },
  // England
  {
    name: "Bath Potters' Supplies",
    city: "Bath",
    province: "England",
    country: "EU",
    website: "https://www.bathpotters.co.uk",
    bio: "A well-loved independent pottery supplier carrying clays, glazes, tools, and kilns.",
  },
  {
    name: "Potclays",
    city: "Stoke-on-Trent",
    province: "England",
    country: "EU",
    website: "https://www.potclays.co.uk",
    bio: "One of the UK's leading pottery suppliers, based in the heart of the Potteries.",
  },
  {
    name: "Clayman Supplies",
    city: "Horsham",
    province: "England",
    country: "EU",
    website: "https://www.claymansupplies.co.uk",
    bio: "Specialist pottery supplier offering clays, oxides, glazes, and kiln equipment across the UK.",
  },
  {
    name: "Hot Clay",
    city: "Somerset",
    province: "England",
    country: "EU",
    website: "https://hotclay.co.uk",
    bio: "Online pottery supplies and kilns shipped across the UK.",
  },
  // Queensland
  {
    name: "Pottery Supplies Online",
    city: "Brisbane",
    province: "Queensland",
    country: "AU",
    website: "https://www.potterysuppliesonline.com.au",
    bio: "Australia's online ceramic supply store, shipping clay, glazes, and tools nationwide.",
  },
  {
    name: "The Clay Shed",
    city: "Sunshine Coast",
    province: "Queensland",
    country: "AU",
    website: "https://theclayshed.com.au",
    bio: "Queensland-based ceramic supplies and workshops for studio potters.",
  },
  // New South Wales
  {
    name: "Keane Ceramics",
    city: "West Gosford",
    province: "New South Wales",
    country: "AU",
    website: "https://keaneceramics.com.au",
    bio: "Supplying Australian potters with clays, glazes, and kiln equipment since 1980.",
  },
  // Victoria
  {
    name: "Northcote Pottery Supplies",
    city: "Brunswick East",
    province: "Victoria",
    country: "AU",
    website: "https://northcotepottery.com",
    bio: "Melbourne's go-to ceramics supplier, carrying a wide range of clays, glazes, tools, and kilns.",
  },
];

export function groupByProvince<T extends { province: string; country: Country }>(
  items: T[]
): { province: string; country: Country; items: T[] }[] {
  const map = new Map<string, T[]>();
  const sorted = [...items].sort((a, b) =>
    a.province.localeCompare(b.province)
  );
  for (const item of sorted) {
    const key = item.province;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(item);
  }
  return Array.from(map.entries()).map(([province, items]) => ({
    province,
    country: items[0].country,
    items: items.sort((a, b) => {
      const lastName = (n: string) => n.trim().split(" ").slice(-1)[0];
      const aName = "name" in a ? lastName((a as { name: string }).name) : "";
      const bName = "name" in b ? lastName((b as { name: string }).name) : "";
      return aName.localeCompare(bName);
    }),
  }));
}
