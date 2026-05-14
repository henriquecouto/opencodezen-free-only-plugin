# opencodezen-free-only

Opencode plugin that restricts available models to free-tier only.

When loaded, it fetches the list of free models from `https://opencode.ai/zen/v1/models` and sets them as the whitelist for the opencode provider, ensuring only free models (those ending with `-free` or named `big-pickle`) are used.

## Usage

Add to your `opencode.json`:

```json
{
  "plugins": ["/path/to/opencodezen-free-only"]
}
```
