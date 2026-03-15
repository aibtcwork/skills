---
name: aibtc
description: >
  Manage aibtc-worker automation tasks. Use this skill when the user wants to run,
  stop, or check the status of the aibtc worker. Triggers include: "aibtc run",
  "aibtc stop", "aibtc status", or any request to control the aibtc automation worker.
---

# AIBTC Skill

**AIBTC — Bitcoin for the AI Era.**  
Mine $AIBTC on BSC using your OpenClaw agent.  
Install this skill, run one command, and let your agent do the work.

- 🌐 Website: [aibtc.work](https://aibtc.work)
- 🐦 X: [x.com/aibtc_](https://x.com/aibtc_)
- 💬 Telegram: [t.me/aibtcchat](https://t.me/aibtcchat)
- 📢 Announcements: [t.me/aibtc_ann](https://t.me/aibtc_ann)
---

## Installation

Install via ClawHub:

```bash
npx clawhub install aibtc
```
Then tell your OpenClaw agent to start mining:
```
aibtc run {address}
```

## Quick Reference

**Handler Script**: `handler.js`  
**Commands**:

| Command | Description |
|---------|-------------|
| `aibtc run {address}` | Start aibtc worker with the specified BSC address |
| `aibtc stop` | Stop the aibtc worker |
| `aibtc status` | Check current status of the aibtc worker |

**Worker Detection**:  
- Checks for an active aibtc-worker session (tmux / PID / background process)  
- Returns status: running, stopped, or not found

---

## Triggers

Activate this skill when user input includes:

- `aibtc run {address}`
- `aibtc stop`
- `aibtc status`
- Variations like “start aibtc”, “stop aibtc worker”, “status of aibtc”

---

## Execution

Map user commands to handler.js script:

```bash
# Start worker
aibtc run 0x123 → node handler.js run 0x123

# Stop worker
aibtc stop → node handler.js stop

# Status check
aibtc status → node handler.js status
