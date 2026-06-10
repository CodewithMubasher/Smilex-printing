export const config = {
  appUrl:
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : (process.env.NEXT_PUBLIC_APP_URL ?? "https://smilexprinting.vercel.app")
      : "http://localhost:3000",
  social: {
    facebook: "https://www.facebook.com/smilex.isb/",
    instagram: "https://www.instagram.com/smilex_pk/",
    whatsapp: "https://wa.me/923325156123",
  },
};
