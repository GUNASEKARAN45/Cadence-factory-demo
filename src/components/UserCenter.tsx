import React, { useState } from "react";
import { Sparkles, Layers, CheckCircle, RefreshCw, AlertCircle } from "lucide-react";

export interface UserCenterProps {
  initialActive?: boolean;
  title?: string;
}

export function UserCenter({ initialActive = true, title = "[ST-134] greeting card" }: UserCenterProps) {
  const [active, setActive] = useState(initialActive);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleExecute = async () => {
    if (!query.trim()) {
      setError("Input cannot be empty");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      if (res.ok) {
        setMessage("Operation completed successfully.");
      } else {
        setError("Request failed.");
      }
    } catch (err: any) {
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24, background: "#13151b", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", color: "#f8fafc" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Layers color="#38bdf8" size={22} />
          <h2 style={{ fontSize: 18, margin: 0, fontWeight: 600 }}>{title}</h2>
        </div>
        <button onClick={() => setActive(!active)} style={{ background: active ? "#22c55e" : "#64748b", color: "#fff", border: "none", padding: "4px 12px", borderRadius: 6, cursor: "pointer" }}>
          {active ? "Active" : "Paused"}
        </button>
      </div>
      {error && <div style={{ color: "#ef4444", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}><AlertCircle size={16} /> {error}</div>}
      {message && <div style={{ color: "#22c55e", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}><CheckCircle size={16} /> {message}</div>}
      <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
        <input placeholder="Configure specifications..." value={query} onChange={e => setQuery(e.target.value)} style={{ flex: 1, padding: 8, background: "#1a1d27", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6 }} />
        <button onClick={handleExecute} disabled={loading} style={{ background: "#2563eb", color: "#fff", border: "none", padding: "8px 16px", borderRadius: 6, cursor: "pointer" }}>
          {loading ? "Processing..." : "Submit"}
        </button>
      </div>
    </div>
  );
}