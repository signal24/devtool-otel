#!/usr/bin/env node

import which from "which";
import { execSync } from "child_process";
import { dirname } from "path";
import { fileURLToPath } from "url";

// exposed as import.meta.dirname in Node 20+
const __dirname = dirname(fileURLToPath(import.meta.url));

const oldCompose = await which("docker-compose", { nothrow: true });
const composeCmd = oldCompose ? "docker-compose" : "docker compose";

const cmd = process.argv[3] ?? "up";

if (cmd === "up") {
  await up();
} else if (cmd === "down") {
  await down();
} else {
  console.error(`Unknown command: ${cmd}`);
  process.exit(1);
}

async function up() {
  await execSync(`${composeCmd} up -d`, { cwd: __dirname + "/resources" });

  console.log(
    `\n@signal24/dk-server-foundation setup:\nexport OTLP_ENDPOINT=http://localhost:3202/v1/traces\n\nYou can now access Grafana at:\nhttp://localhost:3200/explore\n`
  );
}

async function down() {
  await execSync(`${composeCmd} down`, { cwd: __dirname + "/resources" });
}
