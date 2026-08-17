import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

type Item = { q: string; a: string };

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export function FaqSearch({
  items,
  searchLabel,
  emptyLabel,
}: {
  items: Item[];
  searchLabel: string;
  emptyLabel: string;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return items;
    return items.filter(
      (i) => normalize(i.q).includes(q) || normalize(i.a).includes(q),
    );
  }, [items, query]);

  return (
    <div>
      <div className="relative mb-6">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchLabel}
          aria-label={searchLabel}
          className="h-12 rounded-full border-border bg-background pl-11 text-base"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted-foreground">{emptyLabel}</p>
      ) : (
        <Accordion
          type="single"
          collapsible
          className="border-y border-border"
          key={query ? "filtered" : "all"}
        >
          {filtered.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-border">
              <AccordionTrigger className="py-5 text-left font-display text-lg hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
