"use client";

export default function SubmitPage() {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9E8572", letterSpacing: "0.35em", fontFamily: "system-ui, sans-serif" }}>
        The Potter&rsquo;s Directory
      </p>
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>Add Your Listing</h1>
      <p className="mb-10" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
        Submit your information to be listed in the directory. All submissions are reviewed before going live.
      </p>
      <form className="flex flex-col gap-6">
        {[
          { label: "Your Name or Studio Name", name: "name", type: "text" },
          { label: "Guild Name (optional)", name: "guild", type: "text" },
          { label: "Country", name: "country", type: "text" },
          { label: "City & Region / Province / State", name: "location", type: "text" },
          { label: "Website (optional)", name: "website", type: "url" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Phone Number (optional)", name: "phone", type: "tel" },
        ].map(({ label, name, type }) => (
          <div key={name} className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
              {label}
            </label>
            <input
              type={type}
              name={name}
              className="border-b py-2 bg-transparent outline-none text-base"
              style={{ borderColor: "#9E8572", color: "#3B2314", fontFamily: "system-ui, sans-serif" }}
            />
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            Short Bio (optional)
          </label>
          <textarea
            name="bio"
            rows={4}
            className="border-b py-2 bg-transparent outline-none text-base resize-none"
            style={{ borderColor: "#9E8572", color: "#3B2314", fontFamily: "system-ui, sans-serif" }}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-xs tracking-widest uppercase" style={{ color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            Photos of Your Work — optional, up to 3 images
          </label>
          <p className="text-xs" style={{ color: "#9E8572", fontFamily: "system-ui, sans-serif" }}>
            JPG or PNG. These will appear as thumbnails on your directory listing.
          </p>
          <label className="inline-block self-start px-6 py-2 text-xs tracking-widest uppercase font-bold rounded-sm cursor-pointer" style={{ background: "#E8D5B7", color: "#5C3D2E", fontFamily: "system-ui, sans-serif" }}>
            Choose Files
            <input
              type="file"
              name="photos"
              accept="image/jpeg,image/png"
              multiple
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 3) {
                  alert("Please select up to 3 images only.");
                  e.target.value = "";
                }
              }}
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 px-8 py-3 text-sm tracking-widest uppercase font-bold rounded-sm self-start"
          style={{ background: "#D4622A", color: "#F5F0E8", fontFamily: "system-ui, sans-serif" }}
        >
          Submit listing
        </button>
      </form>
    </section>
  );
}
