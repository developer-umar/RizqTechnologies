export default function sitemap() {
  const baseUrl = "https://rizqtechnologies.com";

  // Static routes
  const routes = ["", "/services", "/portfolio", "/pricing", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
