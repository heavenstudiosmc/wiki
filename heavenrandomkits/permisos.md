# 🔐 Permisos

Todos los nodos de permisos del plugin, listos para asignar con LuckPerms o tu gestor de permisos favorito.

## Administración

| Permiso | Otorga acceso a |
|---|---|
| `randomkits.admin` | Toda la administración: `/arena` (todos los subcomandos), `/ktk`, `/abilities`, `/hrk version` y `/hrk reload`. |
| `randomkits.admin.setspawn` | `/setspawn` — establecer el spawn global. |
| `randomkits.admin.coins` | Gestionar coins: `/coins add`, `/coins remove`, `/coins set` y consultar saldos ajenos. |
| `randomkits.kit.admin` | Crear, editar, configurar, entregar y borrar kits (`/kit create`, `edit`, `settings`, `give`, `delete`). |

## Jugadores

| Permiso | Otorga acceso a |
|---|---|
| `randomkits.kit` | El comando base `/kit` (necesario para **cualquier** subcomando de kit, incluido `/kit random`). |
| `randomkits.kits.menu` | `/kit menu` — el menú de kits VIP. |
| `randomkits.kit.list` | `/kit list <tipo>` — listar kits por tipo. |
| `randomkits.command.coins` | El comando base `/coins`. |
| *(sin permiso)* | `/join`, `/spawn`, `/kits`, `/votaciones`, `/killstreaks`, `/bounties`, `/bounty` son públicos. |

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
lp group admin permission set randomkits.admin true
lp group admin permission set randomkits.kit.admin true
lp group admin permission set randomkits.admin.coins true
lp group admin permission set randomkits.admin.setspawn true
lp group admin permission set randomkits.command.coins true
```
