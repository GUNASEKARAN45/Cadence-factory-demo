export async function handleOrderViewAction(query?: string) {
  return { status: "success", query: query || "default", timestamp: Date.now() };
}