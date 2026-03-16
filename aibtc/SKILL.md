---
name: aibtc
description: >
  Manage aibtc-worker automation tasks. Use this skill when the user wants to start,
  stop, or check the status of the aibtc worker. Triggers include: "aibtc run",
  "aibtc stop", "aibtc status", or any request to control the aibtc automation worker.
---

# AIBTC Skill

Automate and monitor aibtc-worker processes for BTC-related automation tasks.

## Quick Reference

**Handler Script**: `handler.js`  
**Commands**:

| Command | Description |
|---------|-------------|
| `aibtc run {address}` | Start aibtc worker with the specified address |
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
```
