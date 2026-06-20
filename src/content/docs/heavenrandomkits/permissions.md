---
title: Permissions
---

# 🔐 Permisos

Todos los nodos de permisos del plugin, listos para asignar con LuckPerms o tu gestor de permisos favorito.

## Administración

| Permiso | Otorga acceso a |
|---|---|
| `randomkits.admin.setspawn` | `/setspawn` — establecer el spawn global. |
| `randomkits.admin.coins` | Gestionar coins: `/coins add`, `/coins remove`, `/coins set` y consultar saldos ajenos. |
| `randomkits.command.version` | `/hrk version` |
| `randomkits.command.reload` | `/hrk reload` |
| `randomkits.command.ktk.start` | `/ktk start` |
| `randomkits.command.ktk.stop` | `/ktk stop` |
| `randomkits.command.abilities.give` | `/abilities give` |

### Permisos de Arena

| Permiso | Otorga acceso a |
|---|---|
| `randomkits.command.arenas.setup` | `/arena setup` |
| `randomkits.command.arenas.create` | `/arena create` |
| `randomkits.command.arenas.delete` | `/arena delete` |
| `randomkits.command.arenas.wand` | `/arena wand` |
| `randomkits.command.arenas.setbounds` | `/arena setbounds` |
| `randomkits.command.arenas.addspawn` | `/arena addspawn` |
| `randomkits.command.arenas.clearspawns` | `/arena clearspawns` |
| `randomkits.command.arenas.save` | `/arena save` |
| `randomkits.command.arenas.enable` | `/arena enable` |
| `randomkits.command.arenas.disable` | `/arena disable` |
| `randomkits.command.arenas.restart` | `/arena restart` |
| `randomkits.command.arenas.forcerotate` | `/arena forcerotate` |
| `randomkits.command.arenas.tprotation` | `/arena tprotation` |
| `randomkits.command.arenas.join` | `/arena join` |
| `randomkits.command.arenas.tpworld` | `/arena tpworld` |

### Permisos de Kits (Staff)

| Permiso | Otorga acceso a |
|---|---|
| `randomkits.command.kits.create` | `/kit create` |
| `randomkits.command.kits.delete` | `/kit delete` |
| `randomkits.command.kits.edit` | `/kit edit` |
| `randomkits.command.kits.settings` | `/kit settings` |
| `randomkits.command.kits.setprice` | `/kit setprice` |
| `randomkits.command.kits.give` | `/kit give` |

## Jugadores

| Permiso | Otorga acceso a |
|---|---|
| `randomkits.kit` | El comando base `/kit` (necesario para **cualquier** subcomando de kit, incluido `/kit random`). |
| `randomkits.kits.menu` | `/kit menu` — el menú de kits VIP. |
| `randomkits.kit.list` | `/kit list <tipo>` — listar kits por tipo. |
| *(sin permiso)* | `/coins` (para ver tu saldo), `/join`, `/spawn`, `/kits`, `/votaciones`, `/killstreaks`, `/bounties`, `/bounty` son públicos. |

## Rangos VIP

Estos nodos no dan comandos: dan **beneficios automáticos** definidos en `config.yml` (peso de voto en la votación de mapas y multiplicador de coins por bajas y bounties). Tanto los nodos como sus valores son personalizables.

| Permiso | Peso de voto | Multiplicador de coins |
|---|---|---|
| `randomkits.vip` | 5 | ×1.25 |
| `randomkits.vip+` | 10 | ×1.5 |
| `randomkits.mvp` | 15 | ×2.0 |
| `randomkits.mvp+` | 20 | ×2.5 |

> 💡 Si un jugador tiene varios rangos, se aplica el **peso más alto** (votos) y su multiplicador correspondiente. Un jugador sin rango vota con peso 1 y recibe coins sin multiplicar.

## Permisos por kit

Cada kit puede exigir un permiso propio, configurable desde `/kit settings <kit>` (opción *Permiso requerido*). El nodo es de texto libre — por ejemplo, podrías crear `randomkits.kit.guerrero` y asignárselo solo a tus VIPs.

## Ejemplo con LuckPerms

```bash
# Jugador estándar: acceso a kits aleatorios
lp group default permission set randomkits.kit true

# Rango VIP: menú de kits + beneficios VIP
lp group vip permission set randomkits.kits.menu true
lp group vip permission set randomkits.vip true

# Staff: administración completa
lp group admin permission set randomkits.admin.coins true
lp group admin permission set randomkits.admin.setspawn true
lp group admin permission set randomkits.command.* true
```
