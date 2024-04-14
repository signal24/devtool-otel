Quick launch tool to launch a local Grafana LGTM environment for use in local development.

Startup: `npx @signal24/devtool-otel`\
Shutdown: `npx @signal24/devtool-otel down`

Exposes:
- Grafana trace search at http://localhost:3200/explore
- Tempo API at http://localhost:3201
- HTTP OTLP trace collector at http://localhost:3202/v1/traces
