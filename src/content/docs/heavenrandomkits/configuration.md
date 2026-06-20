---
title: Configuration
---

# 🛠️ Configuración

El plugin genera tres archivos en `plugins/HeavenRandomKits/`. Después de editar cualquiera, aplica los cambios con `/hrk reload` (no hace falta reiniciar).

## 📄 config.yml

### Licencia y base de datos

```yaml
LICENSE: "TU-CLAVE-DE-LICENCIA"   # Sin licencia válida el plugin se desactiva

DATABASE_SETTINGS:
  AUTO_SAVE_ENABLED: true    # Autoguardado periódico de datos de usuarios
  AUTO_SAVE_INTERVAL: 5      # Cada cuántos MINUTOS guardar
```

### Spawn

```yaml
SPAWN_SETTINGS:
  TELEPORT_ON_JOIN: false        # TP al spawn global en cada ingreso
  TELEPORT_ON_FIRST_JOIN: true   # TP solo en el primer ingreso
```

### Arenas

```yaml
ARENA_SETTINGS:
  ROTATION_TIME: 2                 # MINUTOS entre rotaciones de mapa
  WORLD_NAME: "arenas"             # Mundo dedicado a las arenas
  ROTATION_TITLES_ENABLED: true    # Título en pantalla al anunciar el nuevo mapa
  NO_FALL:
    ENABLED: true                  # Inmunidad a daño de caída tras entrar/rotar
    DURATION: 10                   # Segundos de inmunidad

LIGHTNING_DEATH:
  ENABLED: true    # Rayo visual/sonoro al morir un jugador en la arena
```

### Rangos VIP

Define los nodos de permiso y sus beneficios. Puedes renombrar los rangos, cambiar los nodos y añadir tantos como quieras.

```yaml
VIP_VOTES:           # Peso del voto en la votación de mapas
  VIP:
    PERMISSION: "randomkits.vip"
    WEIGHT: 5
  MVP+:
    PERMISSION: "randomkits.mvp+"
    WEIGHT: 20

VIP_COIN_MULTIPLIERS:    # Multiplicador de coins por bajas y bounties
  VIP:
    PERMISSION: "randomkits.vip"
    MULTIPLIER: 1.25     # 10 coins -> 12 coins
  MVP+:
    PERMISSION: "randomkits.mvp+"
    MULTIPLIER: 2.5
```

> Si un jugador tiene varios nodos, se usa el peso más alto.

### Kits aleatorios

```yaml
RANDOM_KITS:
  GIVE_ON_FIRST_JOIN_ENABLED: true   # Kit gratis en el primer ingreso
  GIVE_ON_JOIN_ENABLED: false        # Kit gratis en cada ingreso
  GIVE_ON_RESPAWN_ENABLED: true      # Kit gratis al reaparecer
  GIVE_ON_ARENA_JOIN_ENABLED: false  # Kit gratis al entrar a la arena
  MANUAL_PRICE: 100                  # Precio global por defecto en coins. Puedes establecer precios individuales con /kit setprice.
```

### Evento Kill The King

```yaml
KING_EVENT:
  ENABLED: true
  KING_KIT_NAME: "king"               # Kit (tipo EVENT) que recibe el Rey
  START_SOUND: "ENDERDRAGON_GROWL"    # Sonido global al iniciar ("" para desactivar)
  BLOCKED_COMMANDS:                   # Comandos prohibidos para el Rey
    - "/spawn"
    - "/tpa"
  KILLER_REWARDS:                     # Comandos de consola al matar al Rey
    - "eco give <player> 1000"        # <player> = nombre del asesino
    - "broadcast &e<player> ha derrotado al Rey!"
```

### Killstreaks y recompensas por baja

```yaml
KILLSTREAKS:
  ENABLED: true
  REWARDS:
    '3':                  # Al llegar EXACTAMENTE a 3 bajas seguidas
      COINS: 100          # Coins (con multiplicador VIP)
      COMMANDS:           # Comandos de consola, <player> = el jugador
        - "broadcast &e<player> &flleva una racha de &c3 bajas&f!"
        - "give <player> golden_apple 2"

KILL_REWARDS:             # Recompensa por CADA baja
  ENABLED: true
  COINS: 10
  COMMANDS:
    - ""                  # Comandos opcionales por baja
```

> Puedes añadir todas las fases de racha que quieras (`'20'`, `'30'`…). El número es la cantidad **exacta** de bajas.

### StatTrak

```yaml
STAT_TRAK:
  ENABLED: true
  KILLS_FORMAT: "&6&lKills&7: &b<kills>"                       # Contador en el lore
  KILL_STRING: "&e<player> &ffue asesinado por &e<killer> &6<date>"  # Historial
  TRACKING_ITEMS:          # Materiales que registran kills
    - "DIAMOND_SWORD"
    - "NETHERITE_SWORD"
```

### Bounties

```yaml
BOUNTIES:
  ENABLED: true
  RANDOM_AUTO_BOUNTY:        # El servidor pone precio a jugadores al azar
    ENABLED: true
    INTERVAL_SECONDS: 300    # Cada cuánto ocurre el evento
    MIN_PLAYERS_ONLINE: 10   # Mínimo de jugadores conectados
    MAX_PLAYERS_AT_ONCE: 4   # Cuántos jugadores marcar por evento
    COINS_REWARD: 50         # Recompensa añadida a cada cabeza
    ACCUMULATIVE: false      # false = no elegir a quien ya tiene bounty
  KILLSTREAK_AUTO_BOUNTY:    # Bounty automática a los que están en racha
    ENABLED: true
    STREAKS:
      '5': 200               # racha : coins añadidas a su cabeza
      '10': 500
      '15': 1000
```

---

## 📄 abilities.yml

Configura las 12 habilidades. Estructura común a todas:

```yaml
ABILITIES_SETTINGS:
  GLOBAL_COOLDOWN_ENABLED: true   # Bloquear TODAS las habilidades al usar una
  GLOBAL_COOLDOWN: 2              # Segundos del bloqueo global

ABILITIES:
  FIREBALL:
    ENABLED: true            # Desactivar una habilidad individualmente
    ITEM:
      MATERIAL: "FIRE_CHARGE"
      NAME: "&6Bola de Fuego"
      LORE:
        - "&7Haz click derecho para lanzar"
    COOLDOWN: 5              # Segundos entre usos de ESTA habilidad
    SOUND:
      ENABLED: true
      NAME: "entity.ghast.shoot"
      VOLUME: 1.0
      PITCH: 1.0
```

Parámetros específicos por habilidad:

| Habilidad | Parámetros propios |
|---|---|
| `FIREBALL` | `YIELD` (radio de explosión), `VELOCITY_MULTIPLIER` |
| `TNT` | `AUTO_IGNITE_ON_PLACE`, `THROWABLE`, `EXPLODE_ON_IMPACT`, `FUSE_TICKS`, `VELOCITY_MULTIPLIER` |
| `GRAPPLING_HOOK` | `VELOCITY_MULTIPLIER`, `MAX_USES` (-1 = infinito) |
| `THOR_HAMMER` | `MAX_USES` |
| `SPEED` / `STRENGTH` | `DURATION` (segundos del efecto) |
| `MEDKIT` | `HEAL_AMOUNT` (en medios corazones; 8.0 = 4 ❤) |
| `WEB_SHOOTER` / `WEB_CUTTER` | `RADIUS`; `WEB_CUTTER` además `MAX_USES` |
| `BUBBLE` | `RADIUS` (esfera de bedrock), `DURATION` |
| `GUILLOTINE` | `SUCCESS_CHANCE` (%), `REMAINING_HEALTH` (vida restante), `MAX_USES` |

---

## 📄 language.yml

Contiene **todos** los textos del plugin: prefijos, mensajes de chat, títulos de menús, lore de botones, mensajes de error y los textos de los placeholders vacíos (`PLACEHOLDER_NONE_*`). Soporta códigos de color `&` — puedes traducir o re-brandear el plugin por completo sin tocar código.

---

## ❓ Solución de problemas

| Síntoma | Causa probable |
|---|---|
| El plugin se desactiva al arrancar con `License: INVALID` | Clave incorrecta en `LICENSE`, o superaste el límite de IPs de tu licencia. |
| El plugin no aparece / error de carga | Falta **FastAsyncWorldEdit** (dependencia obligatoria), o el servidor no es Paper 1.21+. |
| La arena no rota | Solo hay una arena habilitada, o ninguna tiene schematic guardado (`/arena save`). |
| Los jugadores no reciben kit al reaparecer | `GIVE_ON_RESPAWN_ENABLED: false`, o no existe ningún kit de tipo `RANDOM`. |
| `/kit random` dice que faltan coins | El uso manual cuesta `MANUAL_PRICE` (100 por defecto); las entregas automáticas son gratis. |
| Los placeholders se muestran sin reemplazar | Falta PlaceholderAPI, o el plugin que los muestra no llama a PAPI. |
