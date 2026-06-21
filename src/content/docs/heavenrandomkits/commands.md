---
title: Commands
description: Complete and exhaustive list of all commands in HeavenRandomKits.
---

# 💻 Commands

Below is the absolute complete list of every command available in HeavenRandomKits. The plugin uses a dynamic framework that hides commands from the help menu if the player does not have permission for them.

## 👥 Player Commands

These commands are available for your regular players to use and interact with the game modes.

| Command | Aliases | Description | Permission |
|---------|---------|-------------|------------|
| `/join` | `/arena join` | Teleports you to the active arena and assigns a random kit. | None |
| `/spawn` | | Teleports you to the global plugin spawn. | None |
| `/arena vote` | | Opens the voting menu for the next arena. | None |
| `/bounties` | | Opens a GUI with the top active bounties. | None |
| `/bounty check [player]`| | Checks your current bounty or a specific player's bounty. | None |
| `/killstreaks` | `/topkillstreaks`, `/rachas` | Opens a GUI showing the players with the highest killstreaks. | None |
| `/coins` | | Checks your current Coin balance. | None |
| `/kit random` | | Manually rolls a new random kit (costs coins if configured). | None |
| `/kits` | | Opens the kit selector menu. | None |
| `/kit menu` | | Opens your personal kit menu. | None |

---

## 🛠️ Administrative Commands

These commands are strictly for configuring the plugin and managing the events. They generally require the `randomkits.admin` permission or a specific subcommand node.

### ⚙️ System & Global
| Command | Aliases | Description | Permission |
|---------|---------|-------------|------------|
| `/heavenrandomkits reload` | `/hrk reload`, `/rk reload` | Reloads all configuration files (`config.yml`, `language.yml`, etc.). | `randomkits.admin` |
| `/heavenrandomkits version`| `/hrk version` | Checks the current version of the plugin. | `randomkits.admin` |
| `/setspawn` | | Sets the global spawn at your exact location. | `randomkits.admin.setspawn` |
| `/abilities give <player> <id>`| `/ability give` | Gives a specific special ability item to a player. | `randomkits.admin` |

### 🗺️ Arena Management (`/arena`)
| Command | Description | Permission Node |
|---------|-------------|-----------------|
| `/arena setup` | Starts a step-by-step setup wizard for an arena. | `randomkits.command.arenas.setup` |
| `/arena create <name>` | Creates a new arena profile. | `randomkits.command.arenas.create` |
| `/arena wand` | Gives the WorldEdit-style wand to select boundaries. | `randomkits.command.arenas.wand` |
| `/arena setbounds <name>`| Saves the wand selection as the arena bounds. | `randomkits.command.arenas.setbounds` |
| `/arena addspawn <name>` | Adds a spawn point at your current location. | `randomkits.command.arenas.addspawn` |
| `/arena clearspawns <name>`| Deletes all spawn points for that arena. | `randomkits.command.arenas.clearspawns` |
| `/arena save <name>` | Saves the arena layout into a FAWE schematic. | `randomkits.command.arenas.save` |
| `/arena regen <name>` | Regenerates the arena from its schematic. | `randomkits.command.arenas.regen` |
| `/arena enable <name>` | Enables the arena to be put into rotation. | `randomkits.command.arenas.enable` |
| `/arena disable <name>` | Disables the arena and removes it from rotation. | `randomkits.command.arenas.disable` |
| `/arena delete <name>` | Completely deletes the arena and its files. | `randomkits.command.arenas.delete` |
| `/arena tpworld <name>` | Teleports you to the arena's isolated world. | `randomkits.command.arenas.tpworld` |
| `/arena tprotation` | Teleports you to the currently active arena. | `randomkits.command.arenas.tprotation` |
| `/arena forcerotate` | Forces the rotation timer to end instantly. | `randomkits.command.arenas.forcerotate` |

### 🎲 Kit Management (`/kit`)
| Command | Description | Permission Node |
|---------|-------------|-----------------|
| `/kit create <name>` | Creates a new kit from your current inventory armor and items. | `randomkits.command.kits.create` |
| `/kit edit <name>` | Edits the contents of an existing kit. | `randomkits.command.kits.edit` |
| `/kit delete <name>` | Deletes a kit completely. | `randomkits.command.kits.delete` |
| `/kit give <player> <kit>`| Forces a player to receive a specific kit immediately. | `randomkits.command.kits.give` |
| `/kit setprice <name> <$>`| Sets the manual purchase price of a kit. | `randomkits.command.kits.setprice` |
| `/kit settings <name>` | Opens an advanced GUI to toggle kit permissions and icons. | `randomkits.command.kits.settings` |
| `/kits admin` | Opens the master Kit Manager GUI. | `randomkits.kit.admin` |

### 👑 King Event (`/ktk` / `/killtheking`)
| Command | Description | Permission |
|---------|-------------|------------|
| `/ktk start` | Forces the Kill The King event to start immediately. | `randomkits.admin` |
| `/ktk stop` | Manually aborts the event. | `randomkits.admin` |

### 💰 Economy & Bounties
| Command | Description | Permission |
|---------|-------------|------------|
| `/coins give <player> <amount>`| Adds Coins to a player's balance. | `randomkits.admin.coins` |
| `/coins remove <player> <amount>`| Subtracts Coins from a player's balance. | `randomkits.admin.coins` |
| `/coins set <player> <amount>`| Sets a player's exact Coin balance. | `randomkits.admin.coins` |
| `/bounty add <player> <amount>`| Adds a bounty to a player's head manually. | `randomkits.admin` |
| `/bounty remove <player>` | Clears the bounty on a player. | `randomkits.admin` |
