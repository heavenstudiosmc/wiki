---
title: Permissions
description: Complete list of all permissions available in HeavenRandomKits.
---

# 🔐 Permissions

Here is the exhaustive list of permissions used in HeavenRandomKits. You should assign these using a permission plugin like LuckPerms.

## 🛠️ Administrative Permissions

These permissions should only be given to Server Administrators, Owners, or Managers.

* `randomkits.admin` - The master permission. Grants access to the general `/randomkits` commands (like reload) and most admin base commands.
* `randomkits.admin.setspawn` - Allows the use of `/setspawn` to define the global hub location.
* `randomkits.admin.coins` - Allows editing player balances using `/coins give/set/remove`.
* `randomkits.kit.admin` - Grants access to `/kit create` and the `/kits admin` editor menu.

*(Note: The `/arena` management subcommands, the `/king` force commands, and the `/bounty` admin commands inherit their security checks from the main `randomkits.admin` permission).*

---

## 🎮 VIP & Player Perks

These permissions are meant to be given to your players through VIP ranks (e.g., VIP, MVP, Elite). They grant advantages in voting and economy multipliers.

### 🗳️ Arena Voting Weight
The default setup in `config.yml` provides the following permissions to multiply a player's vote value during the arena rotation phase:

* `randomkits.vip` - Vote counts as **5** points.
* `randomkits.vip+` - Vote counts as **10** points.
* `randomkits.mvp` - Vote counts as **15** points.
* `randomkits.mvp+` - Vote counts as **20** points.

> [!TIP]
> You can create completely custom permission nodes (e.g., `my.server.donator`) in the `VIP_VOTES` section of `config.yml`. The plugin will automatically hook into them!

### 💰 Coin Multipliers
These permissions boost the amount of Coins earned when getting a kill or claiming a bounty:

* `randomkits.vip` - x1.25 Coins
* `randomkits.vip+` - x1.5 Coins
* `randomkits.mvp` - x2.0 Coins
* `randomkits.mvp+` - x2.5 Coins

---

## 🎲 Kit-Specific Permissions

You can lock certain random kits so they can only be rolled by players with a specific rank.

To do this, open the Kit Editor (`/kits admin`), click on a kit, and assign a custom permission string to it (e.g., `randomkits.kits.warrior`). 
* Only players who have the permission `randomkits.kits.warrior` will be able to receive that kit when they respawn. 
* Players without the permission will only roll kits that do not have a permission requirement.
