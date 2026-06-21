---
title: Configuration Files
description: Learn how to configure HeavenRandomKits settings, messages, and menus.
---

# ⚙️ Configuration Files

HeavenRandomKits generates several files in its `plugins/HeavenRandomKits/` folder. The plugin is highly customizable, allowing you to tweak almost every aspect of the gameplay, economy, and visuals.

## `config.yml`

This is the core configuration file. Here you can find the general settings for the plugin.

### Key Sections:
* **License**: Your authentication key.
* **Database Settings**: Configure the auto-save interval for user data.
* **Arena Settings**: Adjust the `ROTATION_TIME` (how often maps change) and toggle `ESCAPE_PREVENTION` (the bedrock cage). You can also control vanilla world rules like weather and daylight cycles.
* **VIP Settings**: Configure the weight of votes for different VIP ranks in the voting menu (`VIP_VOTES`) and coin multipliers (`VIP_COIN_MULTIPLIERS`).
* **Random Kits Toggles**: Choose when players get random kits automatically (e.g., `GIVE_ON_RESPAWN_ENABLED`, `GIVE_ON_FIRST_JOIN_ENABLED`).
* **Systems Toggles**: Enable or disable major features like `KING_EVENT`, `KILLSTREAKS`, `STAT_TRAK`, and `BOUNTIES`.

> [!TIP]
> Whenever you modify `config.yml`, you can run `/randomkits reload` in-game or from the console to apply the changes without restarting the server.

---

## `language.yml`

Every single message sent by the plugin can be modified or translated in this file. It supports standard Minecraft color codes (`&c`, `&l`, etc.) and hex colors.

If you are translating the plugin into another language, ensure you preserve the exact variable placeholders like `<player>` or `<arena>` so the plugin can still inject the correct information.

---

## `abilities.yml`

This file handles the 12 custom Special Abilities included in the plugin. You can toggle each ability individually, change their display item, adjust their cooldowns, and modify their specific stats.

**Available Abilities and their Tweaks:**
1. **FIREBALL**: Adjust explosion yield and velocity.
2. **TNT**: Toggle auto-ignite and fuse ticks.
3. **GRAPPLING_HOOK**: Change maximum uses.
4. **THOR_HAMMER**: Summon lightning bolts on click.
5. **SPEED**: Duration of the Speed effect.
6. **STRENGTH**: Duration of the Strength effect.
7. **MEDKIT**: Adjust the amount of health restored.
8. **SWITCH_BALL**: Swap positions with hit enemies.
9. **WEB_SHOOTER**: Change the radius of the spawned cobweb trap.
10. **BUBBLE**: Create a bedrock shield. Adjust duration and radius.
11. **WEB_CUTTER**: Remove nearby webs.
12. **GUILLOTINE**: A high-risk, high-reward item. Configure the `SUCCESS_CHANCE` (default 50%) to leave the enemy at 1 heart, or yourself if it fails!

---

## `menus/` Directory

This directory contains YAML files responsible for the Graphical User Interfaces (GUIs). 

While the core functionality of the menus is hardcoded (like slots required for kits or arenas), you can customize:
* The title of the menus.
* The items used for background fillers (e.g., changing the glass pane color).
* The lore and names of buttons (like the "Next Page" or "Previous Page" buttons).

---

## `database/` Directory

*Please do not modify files in this directory manually.* 

This folder contains local SQLite or JSON data where the plugin stores player statistics (kills, deaths, highest killstreak, coins) and arena profile data. If you need to edit a player's coins, use the in-game admin commands instead of modifying the database files directly to prevent corruption.
