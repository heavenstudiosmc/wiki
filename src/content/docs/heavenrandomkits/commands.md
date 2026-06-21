---
title: Commands
description: Complete list of all player and admin commands in HeavenRandomKits.
---

# 💻 Commands

Below is the complete list of commands available in HeavenRandomKits. The plugin features a dynamic help system that will only show the commands a player has permission to use.

## Player Commands

These commands are intended for regular players and do not require administrative permissions (unless specified).

* `/join` or `/arena join` - Teleports the player to the active arena and gives them a random kit (if enabled in config).
* `/spawn` - Teleports the player back to the global spawn.
* `/arena vote` - Opens the Arena Voting Menu to vote for the next map.
* `/bounties` - Opens the top bounties menu.
* `/bounty check [player]` - Checks the current bounty on your head or a specific player's head.
* `/killstreaks` - Opens the top killstreaks menu.
* `/coins` - Checks your current coin balance.

---

## Admin Commands

These commands require specific administrative permissions (usually `randomkits.admin`).

### ⚙️ General Administration
* `/randomkits reload` - Reloads the plugin configuration files (`config.yml`, `language.yml`, `abilities.yml`, etc.) without restarting the server.
* `/setspawn` - Sets the global spawn location for the `/spawn` command.

### 🗺️ Arena Management (`/arena`)
The `/arena` base command is used for all arena operations.
* `/arena create <name>` - Creates a new empty arena profile.
* `/arena wand` - Gives you the selection tool to set the physical boundaries.
* `/arena setbounds <name>` - Saves your current wand selection as the boundaries for the arena. Also generates the Escape Prevention bedrock cage if enabled.
* `/arena addspawn <name>` - Adds a new spawn point for players at your current location.
* `/arena clearspawns <name>` - Removes all spawn points from the arena.
* `/arena save <name>` - Saves the blocks within the boundaries as a FAWE schematic.
* `/arena enable <name>` - Enables the arena for the automatic rotation cycle.
* `/arena disable <name>` - Disables the arena so it won't appear in the rotation.
* `/arena delete <name>` - Permanently deletes the arena.
* `/arena tp <name>` - Teleports you to the arena's world for editing.
* `/arena forcerotate` - Instantly forces the rotation to happen, skipping the timer.

### 🎲 Kit Management (`/kit` / `/kits`)
* `/kit create <name>` - Creates a new kit using your current inventory contents (armor and items).
* `/kits admin` - Opens the Kit Editor menu to preview, edit icons, set permissions, or delete kits.

### 👑 King Event Management (`/king`)
* `/king start` - Forces the "Kill The King" event to start immediately.
* `/king stop` - Manually aborts the active King event.

### 💰 Economy Management (`/coins`)
* `/coins give <player> <amount>` - Gives coins to a player.
* `/coins set <player> <amount>` - Sets a player's coin balance.
* `/coins remove <player> <amount>` - Takes coins away from a player.

### 🎯 Bounty Management (`/bounty`)
* `/bounty add <player> <amount>` - Manually adds a bounty to a player's head from the console or admin.
* `/bounty remove <player>` - Clears a player's bounty completely.
