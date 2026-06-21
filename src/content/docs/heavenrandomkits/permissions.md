---
title: Permissions
description: Exhaustive list of all permission nodes in HeavenRandomKits.
---

# 🔐 Permissions

Here is the absolute complete list of every permission node utilized by HeavenRandomKits. The plugin checks these nodes to display commands, menus, or assign VIP perks.

## 👑 Administrative Permissions

These permissions should only be given to your Server Owners, Admins, or Developers.

| Permission Node | Description |
|-----------------|-------------|
| `randomkits.admin` | Master permission. Grants access to the base commands like `/hrk reload`, King events, Bounties management, and Abilities spawning. |
| `randomkits.admin.setspawn` | Allows setting the global spawn using `/setspawn`. |
| `randomkits.admin.coins` | Allows modifying player balances (`/coins give/set/remove`). |
| `randomkits.kit.admin` | Grants access to the master kit editor menu (`/kits admin`). |

### Arena Management Nodes
By default, these are inherited if a player is an operator or has `randomkits.admin` (using luckperms wildcards like `randomkits.command.arenas.*`), but they can be assigned individually:

| Permission Node | Command Granted |
|-----------------|-----------------|
| `randomkits.command.arenas.setup` | `/arena setup` |
| `randomkits.command.arenas.create` | `/arena create` |
| `randomkits.command.arenas.wand` | `/arena wand` |
| `randomkits.command.arenas.setbounds` | `/arena setbounds` |
| `randomkits.command.arenas.addspawn` | `/arena addspawn` |
| `randomkits.command.arenas.clearspawns` | `/arena clearspawns` |
| `randomkits.command.arenas.save` | `/arena save` |
| `randomkits.command.arenas.regen` | `/arena regen` |
| `randomkits.command.arenas.enable` | `/arena enable` |
| `randomkits.command.arenas.disable` | `/arena disable` |
| `randomkits.command.arenas.delete` | `/arena delete` |
| `randomkits.command.arenas.tpworld` | `/arena tpworld` |
| `randomkits.command.arenas.tprotation` | `/arena tprotation` |
| `randomkits.command.arenas.forcerotate` | `/arena forcerotate` |

### Kit Management Nodes
| Permission Node | Command Granted |
|-----------------|-----------------|
| `randomkits.command.kits.create` | `/kit create` |
| `randomkits.command.kits.edit` | `/kit edit` |
| `randomkits.command.kits.delete` | `/kit delete` |
| `randomkits.command.kits.give` | `/kit give` |
| `randomkits.command.kits.setprice` | `/kit setprice` |
| `randomkits.command.kits.settings` | `/kit settings` |

---

## ⭐ VIP Perks & Multipliers

These permissions are meant to be assigned to your VIP and Donator ranks (e.g., in LuckPerms) to grant them gameplay advantages.

### 🗳️ Arena Voting Weight
Configured via the `VIP_VOTES` section in `config.yml`. The plugin defaults to these:

| Permission Node | Weight | Description |
|-----------------|--------|-------------|
| `randomkits.vip` | **5** | Their single click counts as 5 votes. |
| `randomkits.vip+`| **10** | Their single click counts as 10 votes. |
| `randomkits.mvp` | **15** | Their single click counts as 15 votes. |
| `randomkits.mvp+`| **20** | Their single click counts as 20 votes. |

### 💰 Coin Multipliers
Configured via the `VIP_COIN_MULTIPLIERS` section in `config.yml`. Boosts their income from Kills and Bounties:

| Permission Node | Multiplier | Description |
|-----------------|------------|-------------|
| `randomkits.vip` | **x1.25** | Earns 25% more coins. |
| `randomkits.vip+`| **x1.50** | Earns 50% more coins. |
| `randomkits.mvp` | **x2.0** | Earns double coins. |
| `randomkits.mvp+`| **x2.5** | Earns 150% more coins. |

---

## 🔒 Custom Kit Permissions

You can optionally lock certain Kits so they can only be rolled or purchased by players who have a specific permission. 

* **Example:** If you set a kit named `Warrior` to require the permission `randomkits.kits.warrior` (via the `/kit settings` menu), only players who are granted `randomkits.kits.warrior` will be able to receive that kit.
* Default kits should be left without a permission so everyone can roll them.
