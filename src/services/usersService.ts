export async function handleUserCenterAction(query?: string) {
  return { status: "success", query: query || "default", timestamp: Date.now() };
}