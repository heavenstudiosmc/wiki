# 📊 Placeholders

Si tienes **PlaceholderAPI** instalado, el plugin registra automáticamente la expansión `randomkits`. Úsalos en scoreboards, tablists, hologramas, menús de otros plugins, etc.

> El identificador es `RandomKits`, así que la forma general es `%randomkits_<placeholder>%` (PlaceholderAPI no distingue mayúsculas en el identificador).

## 🌍 Placeholders globales

Funcionan en cualquier contexto, incluso sin jugador asociado (ej. hologramas).

| Placeholder | Devuelve |
|---|---|
| `%randomkits_current_arena%` | Nombre de la arena activa en rotación. |
| `%randomkits_next_arena%` | Cuenta regresiva `MM:SS` para la próxima rotación de arena. |
| `%randomkits_players_in_arena%` | Cantidad de jugadores dentro de la arena activa. |
| `%randomkits_king_name%` | Nombre del Rey actual (evento Kill The King). |
| `%randomkits_is_king_event_active%` | `true` / `false` — si hay un evento King en curso. |
| `%randomkits_killstreaks_top_<n>_name%` | Nombre del jugador en la posición `n` del top de rachas. |
| `%randomkits_killstreaks_top_<n>_score%` | Racha del jugador en la posición `n` del top. |
| `%randomkits_bounties_top_<n>_name%` | Nombre del jugador en la posición `n` del top de bounties. |
| `%randomkits_bounties_top_<n>_amount%` | Monto de la recompensa en la posición `n` (también acepta `_score`). |

## 👤 Placeholders del jugador

Requieren un jugador asociado (scoreboard, tablist, chat…).

| Placeholder | Devuelve |
|---|---|
| `%randomkits_coins%` | Saldo de coins del jugador. |
| `%randomkits_killstreak%` | Racha de bajas actual. |
| `%randomkits_highest_killstreak%` | Mejor racha histórica del jugador. |
| `%randomkits_bounty%` | Recompensa acumulada sobre la cabeza del jugador. |
| `%randomkits_has_bounty%` | `true` / `false` — si el jugador tiene recompensa activa. |
| `%randomkits_has_voted%` | `true` / `false` — si ya votó por el próximo mapa. |
| `%randomkits_arena_voted_for%` | Nombre de la arena por la que votó. |
| `%randomkits_is_king%` | `true` / `false` — si el jugador es el Rey actual. |
| `%randomkits_kit_cooldown_time_<kit>%` | Segundos restantes del cooldown de ese kit para el jugador. |
| `%randomkits_has_global_cooldown%` | `true` / `false` — si el jugador está bajo el cooldown global de habilidades. |

> 💡 Cuando no hay valor (sin arena activa, sin Rey, posición de top vacía…), el texto devuelto se personaliza en `language.yml` (mensajes `PLACEHOLDER_NONE_*`).

## Ejemplo: scoreboard de KitPvP

```yaml
# Ejemplo para un plugin de scoreboard
lineas:
  - "&b&lHEAVEN KITPVP"
  - ""
  - "&fMapa: &b%randomkits_current_arena%"
  - "&fSiguiente: &e%randomkits_next_arena%"
  - "&fEn arena: &a%randomkits_players_in_arena%"
  - ""
  - "&fCoins: &6%randomkits_coins%"
  - "&fRacha: &c%randomkits_killstreak%"
  - "&fTu bounty: &4%randomkits_bounty%"
  - ""
  - "&f#1 Racha: &e%randomkits_killstreaks_top_1_name% &7(%randomkits_killstreaks_top_1_score%)"
```
