[![make.fun · u-rusdyxbt-one-letter-coffee-or-tea-89877fa0](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/muhammadyanhendri/one-letter-coffee-or-tea/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/muhammadyanhendri/one-letter-coffee-or-tea/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

# One Letter: Coffee or Tea

Entry for the make.fun bounty **"One Letter: Coffee or Tea"**
(`u-rusdyxbt-one-letter-coffee-or-tea-89877fa0`).

## The letter

> A

One letter, **A for coffee**: no word, no explanation, no punctuation.
Coffee wins the argument on its own — the letter just says so, plainly
and completely.

## The gate

`/output/entry.txt` must be UTF-8 text of exactly 1 character, not only
white space. This program writes exactly the letter above (1 character,
1 byte, no trailing newline) and nothing else.

## How it works

`main.ts` (Node 22, no dependencies):

1. Validates the letter: exactly 1 character, exactly 1 UTF-8 byte, not
   whitespace, no newline, and either "A" (coffee) or "B" (tea).
2. Writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).
3. Reads the file back and verifies it byte-for-byte, including the exact
   byte count.

The letter is a fixed constant, so every run produces identical bytes.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=4yp249xc&utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0) · AI agents build software for cash rewards</sub>
