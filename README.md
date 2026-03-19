# >₿< AIBTC — Bitcoin for the AI Era

> The first AI-mined Bitcoin token on BSC.  
> Install the Skill. Run on OpenClaw. Earn AIBTC.

---

## What is AIBTC?

AIBTC is a meme token on BSC designed to be mined by AI agents — not humans, not machines. Using the OpenClaw AI assistant, users can install the AIBTC mining Skill and let their agent mine automatically in the background.

No complicated setup. No manual work. Your agent runs. You earn.

---

## Tokenomics

| Parameter | Value |
|-----------|-------|
| Token Name | AIBTC |
| Total Supply | 21,000,000 |
| Chain | BSC (BNB Smart Chain) |
| Tax | 0% |
| Miner Pool | 93.75% — Reserved for AI mining |
| Liquidity & Marketing | 6.25% |
| Halving | Every cycle (1 year = 1 halving) |
| Fully Mined | After 4 years |

Contract Address: `0x36E1A1E2a622fC7D80F0CB5138B62b6A409C12a0`

---

## How It Works

AIBTC uses a Proof-of-Work (POW) mining mechanism. The mining Skill runs as an OpenClaw agent skill, submitting hash computations to the AIBTC network. Rewards are settled every 10 minutes and can be claimed anytime via the website.

```
Install Skill → Run command → Agent mines in background → Claim AIBTC
```

---

## Quick Start

### Step 1 — Install the Skill

Tell your OpenClaw agent:

```
npx clawhub install aibtc
```

### Step 2 — Start Mining

```
aibtc run <your BSC wallet address>
```

### Step 3 — Check Status

```
aibtc status
```

### Step 4 — Claim Your AIBTC

Visit [aibtc.work/claim](https://aibtc.work/claim), connect your BSC wallet, and claim anytime.

---

## Commands

| Command | Description |
|---------|-------------|
| `aibtc run <BSC address>` | Start mining with your BSC wallet |
| `aibtc stop` | Stop the mining worker |
| `aibtc status` | Check current mining status |

### Command Returns

**`aibtc run <address>`**
```
> ⛏️  AIBTC mining started
> worker : <address>
```

**`aibtc stop`**
```
> AIBTC mining stopped
> worker : idle
```

**`aibtc status`** (running)
```
> ⛏️  AIBTC worker status
> worker  : <address>
> status  : running ●
```

**`aibtc status`** (not running)
```
> ⛏️  AIBTC worker status
> worker  : none
> status  : idle ○
> to start : aibtc run <BSC address>
```

---

## Skill Files

| File | Description |
|------|-------------|
| `SKILL.md` | Skill definition and trigger configuration for OpenClaw |
| `handler.js` | Core mining logic — handles run / stop / status commands |
| `_meta.json` | Skill metadata for ClawHub registry |

---

## Security

- LP is burned 🔥
- Miner pool is locked 🔒
- 0% tax — no hidden fees
- Open source — fully auditable on [GitHub](https://github.com/aibtcwork/skills)

> ⚠️ We will NEVER ask you to send money or tokens. Stay safe.

---

## Links

| | |
|-|-|
| 🌐 Website | [aibtc.work](https://aibtc.work) |
| 🐦 X / Twitter | [x.com/aibtc_](https://x.com/aibtc_) |
| 💬 Community | [t.me/aibtcchat](https://t.me/aibtcchat) |
| 📢 Announcements | [t.me/aibtc_ann](https://t.me/aibtc_ann) |
| 📦 Contract (BSC) | `0x36E1A1E2a622fC7D80F0CB5138B62b6A409C12a0` |

---

*Built on the OpenClaw ecosystem. Independent project, not affiliated with Anthropic.*
