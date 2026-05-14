import type { Plugin } from "@opencode-ai/plugin";

const FREE_MODEL_FALLBACK = ["big-pickle"];

export default (async () => {
  let freeModels: string[];

  try {
    const res = await fetch("https://opencode.ai/zen/v1/models");
    const data = (await res.json()) as {
      data: Array<{ id: string; object: string }>;
    };
    freeModels = data.data
      .filter((m) => m.id === "big-pickle" || m.id.endsWith("-free"))
      .map((m) => m.id);
  } catch {
    freeModels = FREE_MODEL_FALLBACK;
  }

  return {
    config: (cfg) => {
      if (cfg.provider?.opencode) {
        cfg.provider.opencode.whitelist = freeModels;
      }
    },
  };
}) satisfies Plugin;
