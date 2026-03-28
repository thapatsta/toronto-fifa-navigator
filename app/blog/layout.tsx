import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Toronto FIFA Navigator",
    default: "Blog | Toronto FIFA Navigator",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
