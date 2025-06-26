import type { ReactNode } from "react";

interface Content {
  title: string | null;
  body: ReactNode[];
}

export interface EssayType {
  image: string | null;
  titleEssay: ReactNode | null;
  content: Content[];
}
