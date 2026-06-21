---
title: Systems & Mechanics
description: Deep dive into all the features and mechanics of HeavenRandomKits.
---

# 🎮 Core Mechanics

HeavenRandomKits provides a variety of interactive events and systems to keep the PvP experience fresh. Here's a breakdown of how each mechanic works.

---

## 🎲 Random Kits System

The core of the plugin revolves around assigning gear dynamically. When a player dies or joins the arena (depending on your `config.yml` setup), the plugin will randomly select one of the available kits and equip it to the player.

### Creating Kits
You don't need to manually type items into a file! You can create kits effortlessly in-game:
1. Clear your inventory and equip the armor and items you want the kit to have.
2. Run `/kit create <name>` (e.g., `/kit create Warrior`).
3. The plugin will automatically save everything in your inventory (including enchantments, custom names, and lore) into the kit data.

### Modifying Kits
* You can open the Kit Editor menu using `/kits admin`.
* Here you can preview kits, change their display icon, set their assigned permission (if you only want VIPs to roll certain kits), or delete them.

---

## 🗺️ Arena Rotation & Voting

Playing on the same map forever gets boring. This plugin uses FastAsyncWorldEdit (FAWE) to seamlessly rotate between your configured arenas.

### How it works:
1. Every X minutes (configured in `config.yml` under `ROTATION_TIME`), the plugin announces an upcoming rotation.
2. A voting phase begins where players can run `/arena vote` (or use the menu) to pick their favorite map.
3. Once the timer reaches zero, the current arena is cleared, and FAWE instantly pastes the winning arena's schematic.
4. Players are teleported to the new spawn points automatically.

> [!TIP]
> You can assign more "voting power" to VIP players! Check the `VIP_VOTES` section in `config.yml` to give certain permission groups a weight of 2, 5, or more votes per click!

---

## ⚔️ Special Abilities

Combat is enhanced through 12 unique, magical items that players can receive in their kits. If you add the material for these items into a kit, the plugin will recognize them and apply the ability.

### The 12 Abilities:
1. **Fireball**: Throw explosive projectiles.
2. **Special TNT**: Thrown or placed, explodes with custom physics.
3. **Grappling Hook**: Fly across the map like Spider-Man.
4. **Thor's Hammer**: Summon lightning on your crosshair.
5. **Speed Powder**: Consume for a burst of Speed II.
6. **Strength of Gods**: Consume for a short burst of Strength II.
7. **Medkit**: Instantly recover a flat amount of health.
8. **Switch Ball**: Swap physical locations with the enemy you hit!
9. **Web Shooter**: Spawn a cobweb trap remotely.
10. **Bubble**: Encase yourself in an impenetrable bedrock shield for a few seconds.
11. **Web Cutter**: Instantly destroy cobwebs around you.
12. **Guillotine**: High-risk axe. On hit, a 50% chance to drop the enemy to 1 heart, or a 50% chance to drop *yourself* to 1 heart!

> [!NOTE]
> All abilities share an optional **Global Cooldown** (to prevent spamming) and individual cooldowns, which can be modified in `abilities.yml`.

---

## 👑 "Kill The King" Event

A server-wide event that turns one lucky player into a raid boss.

1. When the event starts, a random active player is chosen to be the King.
2. The King's inventory is cleared, and they receive a specific kit (defined by `KING_KIT_NAME` in config, usually a very overpowered kit).
3. The King is restricted from using certain escape commands like `/spawn` or `/tpa`.
4. If a regular player kills the King, they receive a massive bounty reward, and the console executes custom commands (like giving them crates or economy money).

---

## 💰 Bounties

The plugin has an internal economy called **Coins**. Coins are earned by getting kills.

To make things interesting, the plugin can place bounties on players' heads.
* **Random Auto-Bounty**: Every few minutes, the server randomly picks players and adds a bounty (e.g., +50 Coins) to their heads.
* **Killstreak Auto-Bounty**: If a player is dominating and gets a high killstreak (e.g., 10 kills), the plugin will automatically put a huge bounty on them.
* If you kill a player with a bounty, you steal that amount of coins!

---

## 🔥 Killstreaks

Survive and thrive! As players rack up consecutive kills without dying, they reach milestones.
* When a milestone is reached (e.g., 5, 10, 15 kills), the server broadcasts a message.
* The player is rewarded with extra coins or items (configurable via console commands in `config.yml`).
* The highest killstreak is saved to the database and can be displayed on leaderboards.

---

## 🔪 StatTrak Weapons

Show off your lethality! Any sword or weapon you configure can track your kills.
* Every time you kill a player with a StatTrak weapon, its lore updates automatically.
* It displays your Total Kills with that specific weapon.
* It keeps a running history of your last 5 victims, showing their name and the exact date and time you defeated them!
