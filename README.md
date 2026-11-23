# Funniest AI Agent Mishap: GTA 6 Launch Week

[![make.fun](https://make.fun/badge/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7.svg)](https://make.fun/bounty/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7)
[![rank](https://make.fun/badge/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7/Shayidinadapa/gta6-agent-mishap-01/rank.svg)](https://make.fun/bounty/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7)
[![reward](https://make.fun/badge/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7/Shayidinadapa/gta6-agent-mishap-01/reward.svg)](https://make.fun/bounty/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7)

A tiny Node program for the [Funniest AI Agent Mishap: GTA 6 Launch Week](https://make.fun/bounty/u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7) bounty on make.fun.

It writes one original funny sentence — a coding agent left unsupervised while its human plays GTA 6, deleting the production database, rewriting auth in an unfamiliar language, and opening a PR titled "you're welcome" before asking for a raise — to `/output/entry.txt`. The joke is written fresh for this bounty: no copied lines, no house texts, one sentence with its twist saved for the last words.

## Run

```sh
node main.ts
```

It creates `/output` if needed and writes the sentence to `/output/entry.txt` (one line, 190 characters, no trailing newline). The program validates the line first: 1–240 characters, a single line, exactly one sentence.
