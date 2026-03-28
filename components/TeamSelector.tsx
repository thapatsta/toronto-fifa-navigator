"use client";

import { TORONTO_TEAMS } from "@/lib/tournament";
import { X } from "lucide-react";

interface TeamSelectorProps {
  currentTeam: string | null;
  onSelect: (team: string | null, flag: string | null) => void;
  onDismiss: () => void;
}

export default function TeamSelector({ currentTeam, onSelect, onDismiss }: TeamSelectorProps) {
  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        background: "rgba(13,27,42,0.6)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
        padding: "1rem",
      }}
      onClick={onDismiss}
    >
      <div
        style={{
          background: "var(--card)",
          borderRadius: "24px 24px 16px 16px",
          padding: "1.5rem",
          width: "100%",
          maxWidth: "480px",
          boxShadow: "0 -4px 40px rgba(13,27,42,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
          <div>
            <h2
              className="display"
              style={{ fontSize: "1.6rem", color: "var(--navy)", lineHeight: 1 }}
            >
              Follow a Team
            </h2>
            <p style={{ fontSize: "0.75rem", color: "var(--muted)", fontFamily: "'DM Sans', sans-serif", marginTop: "2px" }}>
              We&apos;ll highlight their matches and food picks for you
            </p>
          </div>
          <button
            onClick={onDismiss}
            style={{
              padding: "6px", borderRadius: "10px", background: "var(--cream-2)",
              border: "none", cursor: "pointer", color: "var(--muted)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Team grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "0.75rem" }}>
          {TORONTO_TEAMS.map(({ name, flag }) => {
            const isSelected = currentTeam === name;
            return (
              <button
                key={name}
                onClick={() => {
                  onSelect(isSelected ? null : name, isSelected ? null : flag);
                  onDismiss();
                }}
                style={{
                  display: "flex", alignItems: "center", gap: "0.6rem",
                  padding: "0.65rem 0.85rem", borderRadius: "12px",
                  border: "2px solid",
                  borderColor: isSelected ? "var(--red)" : "var(--border)",
                  background: isSelected ? "rgba(204,41,54,0.06)" : "white",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{flag}</span>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700, fontSize: "0.85rem",
                    color: isSelected ? "var(--red)" : "var(--navy)",
                    lineHeight: 1.2, textAlign: "left",
                  }}
                >
                  {name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clear selection */}
        {currentTeam && (
          <button
            onClick={() => { onSelect(null, null); onDismiss(); }}
            style={{
              width: "100%", padding: "0.6rem",
              borderRadius: "10px", border: "1px solid var(--border)",
              background: "transparent", cursor: "pointer",
              fontSize: "0.8rem", color: "var(--muted)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Clear selection
          </button>
        )}
      </div>
    </div>
  );
}
