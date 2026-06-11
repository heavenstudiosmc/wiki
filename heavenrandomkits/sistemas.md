# ⚙️ Sistemas del plugin

Explicación en profundidad de cada sistema y cómo se relacionan entre sí.

## ⚔️ Kits

Cada kit guarda: inventario completo (36 slots), armadura, ítem de mano secundaria, nombre visible, permiso, cooldown, icono, slot de menú y sonido de equipamiento. Se almacenan como JSON en `plugins/HeavenRandomKits/database/kits/`.

**Tipos:**

- **`NORMAL`** — el jugador los elige manualmente desde `/kits` (y los VIP desde `/kit menu`). Pueden requerir permiso propio.
- **`RANDOM`** — forman el pool del sorteo aleatorio. El plugin puede entregarlos automáticamente según `config.yml`:

  | Opción (`RANDOM_KITS`) | Cuándo entrega kit |
  |---|---|
  | `GIVE_ON_FIRST_JOIN_ENABLED` | La primera vez que el jugador entra al servidor |
  | `GIVE_ON_JOIN_ENABLED` | Cada vez que entra al servidor |
  | `GIVE_ON_RESPAWN_ENABLED` | Al reaparecer tras morir |
  | `GIVE_ON_ARENA_JOIN_ENABLED` | Al entrar a la arena |

  La entrega **manual** (`/kit random` o menú) cuesta `MANUAL_PRICE` coins; las automáticas son gratis.
- **`EVENT`** — reservados para eventos del plugin (ej. el kit `king`).

## 🗺️ Arenas y rotación

Las arenas viven en un mundo dedicado (`ARENA_SETTINGS.WORLD_NAME`, por defecto `arenas`). Cada arena guarda sus límites (Pos1/Pos2), sus puntos de spawn y un **schematic** del terreno creado con FastAsyncWorldEdit.

El ciclo de rotación, cada `ROTATION_TIME` minutos:

1. El plugin elige la siguiente arena — **gana la más votada**; los votos VIP pesan más (ver [Permisos](heavenrandomkits/permisos.md)).
2. Pega el schematic de la arena (mapa fresco, sin grietas de la ronda anterior).
3. Teletransporta a los jugadores a los spawns de la nueva arena (configurable por arena con `/arena tprotation`).
4. Anuncia el cambio con un título en pantalla (`ROTATION_TITLES_ENABLED`).

**Protecciones integradas:**

- **No-Fall** — inmunidad al daño de caída durante los primeros segundos tras entrar o rotar (`NO_FALL.DURATION`, por defecto 10 s).
- **Rayo al morir** — efecto visual/sonoro de un rayo donde muere un jugador (`LIGHTNING_DEATH`), sin daño real.

## 🗳️ Votación de mapas

Los jugadores abren el menú con `/votaciones` (o `/votar`) y eligen la próxima arena. Cada jugador tiene un voto, pero su **peso** depende de sus permisos VIP (`VIP_VOTES` en `config.yml`). El placeholder `%randomkits_has_voted%` permite mostrar en el scoreboard quién ya votó.

## 🔮 Habilidades

Ítems especiales de combate, entregables con `/abilities give` o incluidos dentro de kits. Cada una es configurable en `abilities.yml` (ítem, nombre, lore, cooldown, sonido, parámetros propios) y se puede desactivar individualmente.

| Habilidad (ID) | Ítem por defecto | Efecto |
|---|---|---|
| `FIREBALL` | Carga ígnea | Lanza una bola de fuego explosiva (radio y velocidad configurables). |
| `TNT` | TNT | TNT especial: lanzable, se enciende sola al colocarla y puede explotar al impacto. |
| `GRAPPLING_HOOK` | Caña de pescar | Gancho de agarre para impulsarte hacia enemigos o estructuras. |
| `THOR_HAMMER` | Hacha de oro | Invoca un rayo destructivo donde apuntas. |
| `SPEED` | Azúcar | Consumible: Velocidad II temporal. |
| `STRENGTH` | Polvo de blaze | Consumible: Fuerza II temporal. |
| `MEDKIT` | Papel | Consumible: cura 4 corazones al instante. |
| `SWITCH_BALL` | Bola de nieve | Golpea a un enemigo para **intercambiar posiciones** con él. |
| `WEB_SHOOTER` | Huevo | Crea una trampa de telarañas donde impacta. |
| `BUBBLE` | Bola de slime | Esfera protectora de bedrock a tu alrededor durante unos segundos. |
| `WEB_CUTTER` | Tijeras | Limpia las telarañas a tu alrededor. |
| `GUILLOTINE` | Hacha de hierro | Apuesta total: 50% de dejar al enemigo a 1 corazón… o quedarte tú a 1 corazón. |

> ⏳ Existe un **cooldown global** opcional (`GLOBAL_COOLDOWN`, por defecto 2 s) que bloquea todas las habilidades brevemente al usar cualquiera, evitando combos instantáneos. Algunas habilidades tienen además **usos máximos** (`MAX_USES`) antes de romperse.

## 👑 Kill The King

Evento global activable con `/ktk start <jugador>`:

- El elegido se convierte en **Rey**, recibe el kit configurado en `KING_EVENT.KING_KIT_NAME` (por defecto `king`) y suena un sonido global en el servidor.
- El Rey tiene **comandos bloqueados** (`BLOCKED_COMMANDS`: `/spawn`, `/tpa`, `/home`…) para que no pueda huir del combate.
- Quien mate al Rey dispara los `KILLER_REWARDS`: comandos de consola con la variable `<player>` (dinero de tu economía, broadcasts, crates…).
- El evento termina al morir el Rey o con `/ktk stop`.

Placeholders relacionados: `%randomkits_king_name%`, `%randomkits_is_king%`, `%randomkits_is_king_event_active%`.

## 🔥 Killstreaks

Cuenta las bajas consecutivas sin morir. Al alcanzar una racha **exacta** definida en `KILLSTREAKS.REWARDS` (por defecto 3, 5, 10 y 15), el jugador recibe coins y se ejecutan comandos de consola (broadcasts, manzanas, crates…). El top histórico se consulta con `/killstreaks` y con los placeholders `killstreaks_top_<n>_*`.

## 🎯 Bounties

Tres formas de poner precio a una cabeza:

1. **Manual** — `/bounty <jugador> <cantidad>`: cualquier jugador paga con sus coins para poner (o aumentar) la recompensa sobre otro.
2. **Aleatoria automática** (`RANDOM_AUTO_BOUNTY`) — cada `INTERVAL_SECONDS` (por defecto 300 s), si hay al menos `MIN_PLAYERS_ONLINE` conectados, el servidor elige hasta `MAX_PLAYERS_AT_ONCE` jugadores al azar y les pone `COINS_REWARD` de recompensa. Con `ACCUMULATIVE: false` no se elige a quien ya tiene bounty.
3. **Por racha** (`KILLSTREAK_AUTO_BOUNTY`) — los jugadores en racha acumulan recompensa automáticamente: por defecto 200 coins a las 5 bajas, 500 a las 10 y 1000 a las 15. Caza-tryhards integrado.

Quien mate al jugador marcado cobra la recompensa (con multiplicador VIP). El menú `/bounties` muestra las recompensas activas; las bounties se guardan al apagar el servidor.

## 💰 Coins

Moneda interna del plugin (independiente de Vault). Se gana por:

- **Bajas** — `KILL_REWARDS.COINS` por asesinato (por defecto 10).
- **Rachas** — los premios de `KILLSTREAKS.REWARDS`.
- **Bounties** — al cobrar la recompensa de una cabeza.

Los rangos VIP multiplican las ganancias (`VIP_COIN_MULTIPLIERS`, hasta ×2.5). Se gastan en kits aleatorios manuales y en poner bounties. Administración: `/coins add|remove|set`.

## 🗡️ StatTrak

Graba en el **lore del arma** las estadísticas del combate:

- Contador total de kills (`KILLS_FORMAT`, ej. `Kills: 47`).
- Historial de últimas víctimas con fecha (`KILL_STRING`).

Solo funciona con los materiales de `TRACKING_ITEMS` (por defecto, todas las espadas — puedes añadir hachas u otros).

## 🏠 Spawn y datos de usuario

- **Spawn global**: se fija con `/setspawn` y los jugadores vuelven con `/spawn`. El teletransporte automático al entrar se controla en `SPAWN_SETTINGS`.
- **Datos de usuario** (coins, rachas, cooldowns de kits): se guardan automáticamente cada `AUTO_SAVE_INTERVAL` minutos (por defecto 5) y siempre al apagar el servidor.
