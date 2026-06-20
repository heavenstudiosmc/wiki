---
title: Overview
---

# 🌌 HeavenRandomKits

> Plugin de **KitPvP dinámico** para servidores Paper 1.21+: kits aleatorios, arenas con rotación automática de mapas, habilidades especiales, rachas, recompensas por cabeza y el evento **Kill The King**.

---

## ✨ Características

- ⚔️ **Sistema de Kits** — kits `NORMAL`, `RANDOM` y `EVENT`, con editor visual de inventario en el juego (sin tocar archivos).
- 🗺️ **Arenas rotativas** — el mapa activo cambia automáticamente cada cierto tiempo; las arenas se guardan y pegan como schematics mediante FastAsyncWorldEdit.
- 🗳️ **Votación de mapas** — los jugadores votan la siguiente arena desde un menú; los rangos VIP tienen votos con más peso.
- 🔮 **12 habilidades especiales** — Bola de Fuego, Martillo de Thor, Gancho de Agarre, Guillotina, Burbuja y más, todas configurables.
- 👑 **Kill The King** — evento donde un jugador se convierte en Rey y todo el servidor va por su cabeza.
- 🔥 **Killstreaks** — recompensas automáticas por rachas de bajas (coins, comandos de consola, broadcasts).
- 💰 **Economía interna (Coins)** — moneda propia del plugin, con multiplicadores por rango VIP.
- 🎯 **Bounties** — recompensas por la cabeza de otros jugadores: manuales, aleatorias automáticas y por racha.
- 🗡️ **StatTrak** — contador de asesinatos grabado en el lore del arma, con historial de víctimas.
- 🏠 **Spawn global** — sistema de spawn integrado con teletransporte al entrar al servidor.
- 📊 **PlaceholderAPI** — 18 placeholders para scoreboards, tablists y hologramas.

---

## 📋 Requisitos

| Requisito | Detalle |
|---|---|
| **Servidor** | Paper 1.21+ (o forks como Purpur/Leaf). ⚠️ Usa `paper-plugin.yml`, por lo que **no funciona en Spigot puro**. |
| **Java** | 17 o superior |
| **FastAsyncWorldEdit** | **Obligatorio** (v2.12.3+). El plugin no carga sin él — se usa para guardar/pegar las arenas. |
| **PlaceholderAPI** | Opcional. Si está presente, se registra la expansión `randomkits` automáticamente. |
| **Licencia** | El plugin requiere una clave de licencia válida (con límite de IPs según tu plan). |

---

## 📦 Instalación

1. Descarga `HeavenRandomKits.jar` y colócalo en la carpeta `plugins/` de tu servidor.
2. Asegúrate de tener **FastAsyncWorldEdit** instalado (y PlaceholderAPI si lo deseas).
3. Inicia el servidor una vez para que se generen los archivos de configuración.
4. Abre `plugins/HeavenRandomKits/config.yml` y coloca tu clave en:
   ```yaml
   LICENSE: "TU-CLAVE-DE-LICENCIA"
   ```
5. Reinicia el servidor. Si la licencia es válida verás en consola:
   ```
   - HeavenRandomKits: 1.0
   - License: VALID
   - Owner: <tu_usuario> | Ips: 1/3
   ```
   > ⚠️ Si la licencia es inválida, el plugin se desactiva automáticamente.
6. Continúa con la guía de [Primeros pasos](heavenrandomkits/primeros-pasos.md) para configurar tu primera arena y tus kits.

---

## 📁 Archivos generados

| Archivo | Propósito |
|---|---|
| `config.yml` | Configuración general: arenas, kits automáticos, killstreaks, bounties, evento King, StatTrak… Ver [Configuración](heavenrandomkits/configuracion.md). |
| `language.yml` | **Todos** los mensajes, menús y textos del plugin. 100% traducible, con códigos de color `&`. |
| `abilities.yml` | Las 12 habilidades especiales: ítem, cooldown, sonidos y parámetros de cada una. |
| `database/kits/*.json` | Cada kit se guarda como un archivo JSON individual (ej. `king.json`). |

---

## 🧭 Navegación

| Página | Contenido |
|---|---|
| [Primeros pasos](heavenrandomkits/primeros-pasos.md) | Configura tu primera arena y tus primeros kits en 10 minutos |
| [Comandos](heavenrandomkits/comandos.md) | Referencia completa de comandos de jugador y administración |
| [Permisos](heavenrandomkits/permisos.md) | Todos los nodos de permisos del plugin |
| [Placeholders](heavenrandomkits/placeholders.md) | Los 18 placeholders de PlaceholderAPI |
| [Sistemas](heavenrandomkits/sistemas.md) | Cómo funciona cada sistema en detalle |
| [Configuración](heavenrandomkits/configuracion.md) | Referencia de `config.yml`, `abilities.yml` y `language.yml` |
