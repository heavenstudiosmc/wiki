---
title: Placeholders
description: Full list of all PlaceholderAPI variables supported by the plugin.
---

# 🏷️ Placeholders

HeavenRandomKits hooks directly into **PlaceholderAPI (PAPI)** to allow you to display statistics, balances, and server events on your custom scoreboards, holograms, or chat formatting plugins.

You **must** have [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) installed on your server for these to work. You do *not* need to download an expansion via ecloud, the plugin handles its own placeholders natively!

---

## 🌎 Global Placeholders
These placeholders are server-wide and do not depend on a specific player.

* `%RandomKits_current_arena%` - Displays the name of the active arena (or the "None" string from `language.yml` if no arena is active).
* `%RandomKits_next_arena%` - Displays the time remaining (in `MM:SS` format) until the next arena rotation.
* `%RandomKits_is_king_event_active%` - Returns `true` if the Kill The King event is currently active, or `false` otherwise.
* `%RandomKits_king_name%` - Displays the name of the player who is currently the King.
* `%RandomKits_players_in_arena%` - Displays the total number of players currently fighting in the active arena.

## 👤 Player-Specific Placeholders
These placeholders are tied to a player's data.

### Economy & Stats
* `%RandomKits_coins%` - Returns the player's formatted coin balance.
* `%RandomKits_killstreak%` - Returns the player's current active killstreak count.
* `%RandomKits_highest_killstreak%` - Returns the player's all-time highest killstreak record.
* `%RandomKits_bounty%` - Returns the current bounty amount on the player's head (returns `0` if none).
* `%RandomKits_has_bounty%` - Returns `true` if the player has an active bounty, `false` otherwise.

### Arenas & Voting
* `%RandomKits_has_voted%` - Returns `true` if the player has voted for the upcoming arena rotation.
* `%RandomKits_arena_voted_for%` - Returns the name of the specific arena the player voted for.

### Abilities & Status
* `%RandomKits_is_king%` - Returns `true` if the player is currently the King in the event.
* `%RandomKits_has_global_cooldown%` - Returns `true` if the player is currently under the global ability cooldown.
* `%RandomKits_kit_cooldown_time_<kitname>%` - Returns the remaining cooldown time (in seconds) for a specific kit. Replace `<kitname>` with the exact ID of the kit.

---

## 🏆 Leaderboard Placeholders
You can use these placeholders to build top 10 Holograms (using DecentHolograms, for example) or leaderboards.

### Top Killstreaks
Replace `<position>` with a number from 1 to 10 (e.g., 1 for the 1st place).

* `%RandomKits_killstreaks_top_<position>_name%` - Displays the name of the player in that position.
* `%RandomKits_killstreaks_top_<position>_score%` - Displays the highest killstreak record of that player.

### Top Bounties (Active)
Replace `<position>` with a number from 1 to 10. These leaderboards are dynamic and will change as bounties are claimed or added.

* `%RandomKits_bounties_top_<position>_name%` - Displays the name of the player with the highest active bounty.
* `%RandomKits_bounties_top_<position>_amount%` - Displays the exact amount of Coins on their head.
