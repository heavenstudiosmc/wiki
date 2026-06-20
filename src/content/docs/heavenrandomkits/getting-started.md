---
title: Getting Started
---

# 🚀 Primeros pasos

Esta guía te lleva de cero a un servidor KitPvP funcional. Asume que ya completaste la [instalación](heavenrandomkits/) y la licencia está activa.

## ✅ Lista de verificación

1. [Preparar el mundo de arenas](#_1-preparar-el-mundo-de-arenas)
2. [Crear y activar tu primera arena](#_2-crear-tu-primera-arena)
3. [Crear tus primeros kits](#_3-crear-tus-primeros-kits)
4. [Configurar el spawn global](#_4-configurar-el-spawn-global)
5. [Probar el flujo de juego](#_5-probar-el-flujo-de-juego)

---

## 1. Preparar el mundo de arenas

El plugin necesita un mundo **exclusivo** donde vivirán todas las arenas. Por defecto se llama `arenas`:

```yaml
# config.yml
ARENA_SETTINGS:
  WORLD_NAME: "arenas"
```

Puedes crear el mundo con tu gestor de mundos favorito (Multiverse, etc.) o dejar que el plugin lo gestione. El plugin incluye un generador de vacío (*void*) para este mundo, ideal para pegar mapas limpios.

> 💡 Dentro del juego puedes ir al mundo de arenas con `/arena tpworld arenas`.

---

## 2. Crear tu primera arena

Todos estos comandos requieren el permiso `randomkits.admin` (o ser OP). Si en algún momento olvidas el flujo, `/arena setup` te muestra esta misma guía dentro del juego.

#### Paso 1 — Registrar la arena

```
/arena create Desierto
```

#### Paso 2 — Delimitar sus bordes

Pide la herramienta de selección y marca las dos esquinas del mapa:

```
/arena wand
```

- **Click izquierdo** → Posición 1
- **Click derecho** → Posición 2

Luego guarda esa selección como los límites de la arena:

```
/arena setbounds Desierto
```

#### Paso 3 — Añadir puntos de aparición

Párate donde quieras que aparezcan los jugadores y ejecuta:

```
/arena addspawn Desierto
```

Repítelo en varios puntos del mapa — el plugin elegirá entre ellos aleatoriamente, lo que reduce el *spawn-kill*. (¿Te equivocaste? `/arena clearspawns Desierto` borra todos los spawns de esa arena.)

#### Paso 4 — Guardar el schematic

Esto guarda el terreno de la arena con FastAsyncWorldEdit, para que el plugin pueda restaurarla/pegarla en cada rotación:

```
/arena save Desierto
```

#### Paso 5 — Activarla

```
/arena enable Desierto
```

¡Listo! La arena entra en la **rotación automática**. Con una sola arena el mapa nunca cambia; crea 2 o más para que la rotación (y la votación de mapas) cobre sentido.

> ⏱️ La rotación ocurre cada `ROTATION_TIME` **minutos** (por defecto: 2). Puedes forzarla en cualquier momento con `/arena forcerotate`.

---

## 3. Crear tus primeros kits

Los comandos de kits usan el permiso `randomkits.kit` (base) y `randomkits.kit.admin` (administración).

#### Paso 1 — Crear el kit

```
/kit create Guerrero normal
/kit create Caotico random
```

Tipos disponibles:

| Tipo | Uso |
|---|---|
| `NORMAL` | Kits que los jugadores eligen desde el menú (`/kits`). |
| `RANDOM` | Entran al sorteo de kit aleatorio (al reaparecer, al entrar, o con `/kit random`). |
| `EVENT` | Reservados para eventos — por ejemplo, el kit del Rey en Kill The King. |

#### Paso 2 — Equiparlo visualmente

```
/kit edit Guerrero
```

Se abre un cofre de 54 slots donde montas el kit **arrastrando ítems**:

| Slots | Contenido |
|---|---|
| 0 – 35 | Inventario del jugador (armas, comida, pociones…) |
| 45 / 46 / 47 / 48 | Casco / Pechera / Pantalones / Botas |
| 49 | Mano secundaria (escudo, tótem…) |
| 52 🟥 | Cancelar sin guardar |
| 53 🟩 | **Guardar** el kit |

#### Paso 3 — Ajustar sus propiedades

```
/kit settings Guerrero
```

Desde este panel configuras: nombre visible (con colores `&`), permiso requerido para usarlo, cooldown, icono del menú, slot en el menú y sonido al equiparlo.

> 💡 El kit `king` viene preinstalado como kit `EVENT` para el evento Kill The King.

---

## 4. Configurar el spawn global

Párate en el punto de spawn de tu lobby y ejecuta:

```
/setspawn
```

Luego decide en `config.yml` cuándo se teletransporta a los jugadores:

```yaml
SPAWN_SETTINGS:
  TELEPORT_ON_JOIN: false        # cada vez que entran al servidor
  TELEPORT_ON_FIRST_JOIN: true   # solo la primera vez
```

---

## 5. Probar el flujo de juego

Con todo configurado, entra como jugador normal y prueba:

1. `/join` — te lleva a la arena activa.
2. `/kits` — abre el menú de selección de kits.
3. `/kit random` — recibe un kit aleatorio (cuesta `MANUAL_PRICE` coins, por defecto 100; las entregas automáticas son gratis).
4. `/votaciones` — vota por el siguiente mapa.
5. Mata a otro jugador — deberías recibir coins (`KILL_REWARDS`) y ver el contador StatTrak en tu espada.

Si algo no funciona, revisa la consola al arrancar: el plugin reporta ahí los problemas de licencia, mundo de arenas o configuración. Después de editar cualquier archivo YAML, aplica los cambios con:

```
/hrk reload
```
