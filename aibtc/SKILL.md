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

## AIBTC Skill Disclaimer

Purpose of the Program:
This program is a cryptocurrency mining worker intended to allow users to participate in mining and earn airdrop rewards. Its functionality is limited to calculating hashes in a loop and submitting seeds.

Source Code:
The execution code is open-source and available at https://github.com/aibtcwork/AIBTC-worker
. It only performs hash computation and seed submission—no hidden backdoors or malicious actions are included.

Address:
The address parameter is provided by the user. Only the user’s own address is used for mining rewards.

VirusTotal / Security Warnings:
VirusTotal and other antivirus engines may flag the skill as suspicious because it fetches and executes remote code via npx. This behavior is inherent to the mining logic and is not malware. Users are advised to read this disclaimer before execution.