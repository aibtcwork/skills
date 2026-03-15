import { spawn } from "child_process";
import fs from "fs";
import path from "path";

const PID_FILE = path.join(process.cwd(), ".aibtc-worker.pid");

function isRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

export default async function handler({ params }) {
  const [subcommand, address] = params.split(" ");

  if (subcommand === "run") {

    if (!address) {
      return "error: address required";
    }

    if (fs.existsSync(PID_FILE)) {
      const pid = Number(fs.readFileSync(PID_FILE));

      if (isRunning(pid)) {
        return `⛏️  AIBTC worker already running
worker : ${address}
pid    : ${pid}`;
      } else {
        fs.unlinkSync(PID_FILE);
      }
    }

    const child = spawn(
      "npx",
      ["--yes", "aibtc-worker", address, "--threads", "4"],
      {
        stdio: "ignore",
        detached: true
      }
    );

    child.unref();

    fs.writeFileSync(PID_FILE, String(child.pid));

    return `⛏️  AIBTC mining started
worker : ${address}
pid    : ${child.pid}`;
  }

  else if (subcommand === "stop") {

    if (!fs.existsSync(PID_FILE)) {
      return `AIBTC mining stopped
worker : idle`;
    }

    const pid = Number(fs.readFileSync(PID_FILE));

    try {
      process.kill(pid);
    } catch {}

    fs.unlinkSync(PID_FILE);

    return `AIBTC mining stopped
worker : idle`;
  }

  else if (subcommand === "status") {

    if (!fs.existsSync(PID_FILE)) {
      return `⛏️  AIBTC worker status
worker  : none
status  : idle ○`;
    }

    const pid = Number(fs.readFileSync(PID_FILE));

    if (isRunning(pid)) {
      return `⛏️  AIBTC worker status
pid     : ${pid}
status  : running ●`;
    } else {
      fs.unlinkSync(PID_FILE);
      return `⛏️  AIBTC worker status
worker  : none
status  : idle ○`;
    }
  }

  else {
    return `unknown command
try :
  aibtc run <BSC address>
  aibtc stop
  aibtc status`;
  }
}

if (process.argv[1].endsWith("handler.js")) {
  const params = process.argv.slice(2).join(" ");

  handler({ params }).then(res => {
    if (res) console.log(res);
  });
}