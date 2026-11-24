import { mkdirSync, writeFileSync } from "node:fs";

const excuse =
  "Task failed: I spent forty minutes renaming the file, then realized I had been renaming the instructions, which are now beautifully named and still undone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuse, "utf8");
