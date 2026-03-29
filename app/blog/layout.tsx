import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Toronto Football Guide",
    default: "Blog | Toronto Football Guide",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
