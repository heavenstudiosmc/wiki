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

### `/arena` (alias `/arenas`) — requiere `randomkits.admin`

| Subcomando | Descripción |
|---|---|
| `/arena setup` | Muestra la guía de configuración de arenas dentro del juego. |
| `/arena create <nombre>` | Registra una nueva arena. |
| `/arena wand` | Te entrega la herramienta de selección (click izq. = Pos1, click der. = Pos2). |
| `/arena setbounds <nombre>` | Guarda tu selección de wand como límites de la arena. |
| `/arena addspawn <nombre>` | Añade un punto de aparición en tu posición actual (puedes añadir varios). |
| `/arena clearspawns <nombre>` | Elimina todos los puntos de aparición de la arena. |
| `/arena save <nombre>` | Guarda los datos y el schematic de la arena (vía FastAsyncWorldEdit). |
| `/arena enable <nombre>` | Habilita la arena y la añade a la rotación. |
| `/arena disable <nombre>` | Desactiva la arena y la saca de la rotación. |
| `/arena delete <nombre>` | Elimina la arena por completo. |
| `/arena restart <nombre>` | Reinicia y vuelve a pegar el schematic de una arena específica. |
| `/arena forcerotate` | Fuerza la rotación de arena inmediatamente. |
| `/arena join` | Te envía a la arena activa en rotación. |
| `/arena vote` | Abre el menú de votación (equivalente admin de `/votaciones`). |
| `/arena tprotation <nombre> <true/false>` | Activa/desactiva el teletransporte de jugadores cuando esa arena entra en rotación. |
| `/arena tpworld <mundo>` | Te teletransporta a un mundo específico (útil para ir al mundo de arenas). |

### `/kit` — gestión de kits

| Subcomando | Descripción | Permiso |
|---|---|---|
| `/kit create <nombre> <tipo>` | Crea un kit (`normal`, `random` o `event`). | `randomkits.kit.admin` |
| `/kit edit <nombre>` | Abre el editor visual de inventario del kit. | `randomkits.kit.admin` |
| `/kit settings <nombre>` | Abre el panel de propiedades: nombre visible, permiso, cooldown, icono, slot y sonido. | `randomkits.kit.admin` |
| `/kit give <kit> <jugador>` | Entrega un kit directamente a un jugador. | `randomkits.kit.admin` |
| `/kit delete <nombre>` | Elimina un kit. | `randomkits.kit.admin` |

### `/ktk` (alias `/killtheking`) — requiere `randomkits.admin`

| Subcomando | Descripción |
|---|---|
| `/ktk start <jugador>` | Inicia el evento Kill The King nombrando Rey a ese jugador. |
| `/ktk stop` | Detiene el evento en curso forzosamente. |

### `/abilities` (alias `/ability`) — requiere `randomkits.admin`

| Subcomando | Descripción |
|---|---|
| `/abilities give <jugador> <habilidad> [cantidad]` | Entrega el ítem de una habilidad. IDs válidos: `FIREBALL`, `TNT`, `GRAPPLING_HOOK`, `THOR_HAMMER`, `SPEED`, `STRENGTH`, `MEDKIT`, `SWITCH_BALL`, `WEB_SHOOTER`, `BUBBLE`, `WEB_CUTTER`, `GUILLOTINE`. |

### `/coins` — requiere `randomkits.command.coins`

| Subcomando | Descripción | Permiso |
|---|---|---|
| `/coins <jugador>` | Consulta el saldo de coins de un jugador. | `randomkits.admin.coins` |
| `/coins add <jugador> <cantidad>` | Añade coins. | `randomkits.admin.coins` |
| `/coins remove <jugador> <cantidad>` | Quita coins. | `randomkits.admin.coins` |
| `/coins set <jugador> <cantidad>` | Fija el saldo exacto. | `randomkits.admin.coins` |

### Otros

| Comando | Descripción | Permiso |
|---|---|---|
| `/setspawn` | Establece el spawn global en tu posición actual. | `randomkits.admin.setspawn` |
| `/hrk version` (alias `/heavenrandomkits`, `/rk`, `/randomkits`) | Muestra la versión y autor del plugin. | `randomkits.admin` |
| `/hrk reload` | Recarga `config.yml`, `language.yml` y `abilities.yml`. | `randomkits.admin` |
