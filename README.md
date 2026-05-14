# opencodezen-free-only

Opencode plugin that restricts available models to free-tier only.

When loaded, it fetches the list of free models from `https://opencode.ai/zen/v1/models` and sets them as the whitelist for the opencode provider, ensuring only free models (those ending with `-free` or named `big-pickle`) are used.

## Usage

Move `opencodezen-free-only.ts` to `~/.config/opencode/plugins/`, then add to your `opencode.json`:

```json
{
  "provider": {
    "opencode": {}
  }
}
```

The `provider.opencode` object must exist (even if empty) so the plugin can add the model whitelist to it.
