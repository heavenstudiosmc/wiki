---
title: Commands
---

# 🎮 Comandos

Referencia completa, extraída directamente del código del plugin. Los argumentos entre `<>` son obligatorios; entre `[]`, opcionales.

## 🙋 Comandos de jugador

| Comando | Descripción | Permiso |
|---|---|---|
| `/join` | Te teletransporta a la arena activa en rotación. | — |
| `/spawn` | Te teletransporta al spawn global del servidor. | — |
| `/kits` | Abre el menú de selección de kits. | — |
| `/votaciones` (alias `/votar`) | Abre el menú de votación del siguiente mapa. | — |
| `/killstreaks` (alias `/topkillstreaks`, `/rachas`) | Abre el menú con el top de rachas. | — |
| `/bounties` | Abre el menú con las recompensas activas. | — |
| `/bounty <jugador> <cantidad>` | Pone una recompensa por la cabeza de otro jugador, pagando con tus propias coins. No puedes ponerte recompensa a ti mismo. | — |
| `/kit random` | Te entrega un kit aleatorio de tipo `RANDOM`. Cuesta `MANUAL_PRICE` coins (por defecto 100). | `randomkits.kit` |
| `/kit menu` | Abre el menú de kits VIP. | `randomkits.kit` + `randomkits.kits.menu` |
| `/kit list <tipo>` | Lista los kits registrados por tipo (`normal`, `random`, `event`). | `randomkits.kit` + `randomkits.kit.list` |

> ⚠️ Todos los subcomandos de `/kit` requieren además el permiso base `randomkits.kit`. Si quieres que los jugadores usen `/kit random`, dales ese nodo.

## 🛡️ Comandos de administración

### `/arena` (alias `/arenas`)

| Subcomando | Descripción | Permiso |
|---|---|---|
| `/arena setup` | Muestra la guía de configuración de arenas dentro del juego. | `randomkits.command.arenas.setup` |
| `/arena create <nombre>` | Registra una nueva arena. | `randomkits.command.arenas.create` |
| `/arena wand` | Te entrega la herramienta de selección (click izq. = Pos1, click der. = Pos2). | `randomkits.command.arenas.wand` |
| `/arena setbounds <nombre>` | Guarda tu selección de wand como límites de la arena. | `randomkits.command.arenas.setbounds` |
| `/arena addspawn <nombre>` | Añade un punto de aparición en tu posición actual (puedes añadir varios). | `randomkits.command.arenas.addspawn` |
| `/arena clearspawns <nombre>` | Elimina todos los puntos de aparición de la arena. | `randomkits.command.arenas.clearspawns` |
| `/arena save <nombre>` | Guarda los datos y el schematic de la arena (vía FastAsyncWorldEdit). | `randomkits.command.arenas.save` |
| `/arena enable <nombre>` | Habilita la arena y la añade a la rotación. | `randomkits.command.arenas.enable` |
| `/arena disable <nombre>` | Desactiva la arena y la saca de la rotación. | `randomkits.command.arenas.disable` |
| `/arena delete <nombre>` | Elimina la arena por completo. | `randomkits.command.arenas.delete` |
| `/arena restart <nombre>` | Reinicia y vuelve a pegar el schematic de una arena específica. | `randomkits.command.arenas.restart` |
| `/arena forcerotate` | Fuerza la rotación de arena inmediatamente. | `randomkits.command.arenas.forcerotate` |
| `/arena join` | Te envía a la arena activa en rotación. | `randomkits.command.arenas.join` |
| `/arena vote` | Abre el menú de votación (equivalente admin de `/votaciones`). | — |
| `/arena tprotation <nombre> <true/false>` | Activa/desactiva el teletransporte de jugadores cuando esa arena entra en rotación. | `randomkits.command.arenas.tprotation` |
| `/arena tpworld <mundo>` | Te teletransporta a un mundo específico (útil para ir al mundo de arenas). | `randomkits.command.arenas.tpworld` |

### `/kit` — gestión de kits

| Subcomando | Descripción | Permiso |
|---|---|---|
| `/kit create <nombre> <tipo>` | Crea un kit (`normal`, `random` o `event`). | `randomkits.command.kits.create` |
| `/kit edit <nombre>` | Abre el editor visual de inventario del kit. | `randomkits.command.kits.edit` |
| `/kit setprice <nombre> <precio>` | Establece el precio de un kit (acepta decimales; -1 usa el precio global). | `randomkits.command.kits.setprice` |
| `/kit settings <nombre>` | Abre el panel de propiedades: nombre visible, permiso, cooldown, icono, slot y sonido. | `randomkits.command.kits.settings` |
| `/kit give <kit> <jugador>` | Entrega un kit directamente a un jugador. | `randomkits.command.kits.give` |
| `/kit delete <nombre>` | Elimina un kit. | `randomkits.command.kits.delete` |

### `/ktk` (alias `/killtheking`)

| Subcomando | Descripción | Permiso |
|---|---|---|
| `/ktk start <jugador>` | Inicia el evento Kill The King nombrando Rey a ese jugador. | `randomkits.command.ktk.start` |
| `/ktk stop` | Detiene el evento en curso forzosamente. | `randomkits.command.ktk.stop` |

### `/abilities` (alias `/ability`)

| Subcomando | Descripción | Permiso |
|---|---|---|
| `/abilities give <jugador> <habilidad> [cantidad]` | Entrega el ítem de una habilidad. IDs válidos: `FIREBALL`, `TNT`, `GRAPPLING_HOOK`, `THOR_HAMMER`, `SPEED`, `STRENGTH`, `MEDKIT`, `SWITCH_BALL`, `WEB_SHOOTER`, `BUBBLE`, `WEB_CUTTER`, `GUILLOTINE`. | `randomkits.command.abilities.give` |

### `/coins`

| Subcomando | Descripción | Permiso |
|---|---|---|
| `/coins` | Muestra tu saldo actual. Si tienes permisos de admin, muestra la lista de comandos. | — |
| `/coins <jugador>` | Consulta el saldo de coins de un jugador (o el tuyo propio). | `randomkits.admin.coins` |
| `/coins add <jugador> <cantidad>` | Añade coins. | `randomkits.admin.coins` |
| `/coins remove <jugador> <cantidad>` | Quita coins. | `randomkits.admin.coins` |
| `/coins set <jugador> <cantidad>` | Fija el saldo exacto. | `randomkits.admin.coins` |

### Otros

| Comando | Descripción | Permiso |
|---|---|---|
| `/setspawn` | Establece el spawn global en tu posición actual. | `randomkits.admin.setspawn` |
| `/hrk version` (alias `/heavenrandomkits`, `/rk`, `/randomkits`) | Muestra la versión y autor del plugin. | `randomkits.command.version` |
| `/hrk reload` | Recarga `config.yml`, `language.yml` y `abilities.yml`. | `randomkits.command.reload` |
