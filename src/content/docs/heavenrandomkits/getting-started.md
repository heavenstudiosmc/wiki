---
title: Getting Started
description: How to install and setup HeavenRandomKits on your server.
---

# 🚀 Getting Started

Follow this guide to install HeavenRandomKits on your server, configure your license, and set up your very first arena step-by-step.

## 📋 Prerequisites

Before installing the plugin, ensure your server meets the following requirements:
* **Server Version**: Paper 1.20.1 or higher (1.20.x, 1.21.x). Spigot is not officially supported.
* **Java Version**: Java 17 or Java 21.
* **FastAsyncWorldEdit (FAWE)**: Required for the automatic arena loading, pasting, and rotating mechanics.
* **PlaceholderAPI**: (Optional but highly recommended) For displaying player stats on scoreboards or chat formats.

---

## 📦 Installation

1. Download the `HeavenRandomKits-x.x.x.jar` file.
2. Stop your server completely.
3. Place the downloaded `.jar` file into your server's `plugins/` folder.
4. Start your server.
5. The plugin will generate a folder named `HeavenRandomKits`. Navigate to `plugins/HeavenRandomKits/config.yml`.
6. Open `config.yml` and insert your license key in the `LICENSE:` field.
   ```yaml
   LICENSE: "YOUR-LICENSE-KEY-HERE"
   ```
7. Restart the server. Check your console to ensure the license is authenticated successfully.

> [!NOTE]
> If your console prints "Invalid or expired license", please double-check that you copied the exact key provided by our Discord bot.

---

## 🛠️ Setting up your first Arena

HeavenRandomKits works by rotating through multiple arenas. To start playing, you need at least one fully configured arena.

### Step 1: Set the Global Spawn
Navigate to your main server lobby or the place where players should spawn when they join the server, and run:
```bash
/setspawn
```
*(Permission: `randomkits.admin.setspawn`)*

### Step 2: Create the Arena Profile
Create the arena data profile by running:
```bash
/arena create <arena_name>
```
*Example:* `/arena create Desert`

### Step 3: Define the Arena Bounds
You need to define the physical area of your arena. This allows the plugin to save it as a schematic and prevents players from escaping (if `ESCAPE_PREVENTION` is enabled).
1. Run `/arena wand` to receive the selection tool.
2. Left-click one corner of your arena, and Right-click the opposite corner (just like WorldEdit).
3. Once selected, run:
```bash
/arena setbounds <arena_name>
```

### Step 4: Add Spawn Points
Players need locations to spawn inside the arena. You can add as many as you want (we recommend at least 10 for a good flow).
Stand in a spot where you want players to spawn and run:
```bash
/arena addspawn <arena_name>
```
Repeat this step across different locations in your arena.

### Step 5: Save and Enable
Once you've set the bounds and added all spawn points, it's time to save the arena structure into a schematic and enable it for rotation.

1. Run `/arena save <arena_name>` (This will capture all blocks inside the bounds using FAWE).
2. Run `/arena enable <arena_name>` to make the arena active and ready for the rotation cycle.

> [!TIP]
> You can repeat Steps 2-5 to create as many arenas as you like. The plugin will automatically add them to the rotation pool and voting menus!

---

## 🎉 You're all set!

Your players can now use `/join` or `/arena join` to enter the battle. When they die, they will automatically respawn with a brand new random kit.

Check the [Configuration](/wiki/heavenrandomkits/configuration/) page to learn how to customize kits, coin multipliers, and other settings.
