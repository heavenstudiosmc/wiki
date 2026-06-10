# 🌌 HeavenRandomKits - Wiki Oficial y Guía Avanzada

Bienvenido a la documentación oficial de **HeavenRandomKits**, un plugin de PvP y KitPvP de alto rendimiento y altamente dinámico para servidores de Minecraft (Spigot/Paper). 

Este plugin ofrece un sistema completo de combate basado en **Kits** (normales, aleatorios y de eventos) y **Arenas** dinámicas con soporte para rotaciones automáticas de mapas, votaciones, habilidades únicas y un sistema de spawns integrado.

---

## 🛠️ Requisitos Previos

Antes de configurar el plugin, asegúrate de contar con:
1. **Mundo de Arenas:** El plugin requiere un mundo exclusivo donde se encuentren todas tus arenas de combate. Por defecto, este mundo se llama `arenas` en el archivo `config.yml`.
2. **Permisos:** La administración de arenas y kits requiere permisos de operador o permisos específicos como:
   * `randomkits.admin` (Para gestionar arenas y spawns generales).
   * `randomkits.kit.admin` (Para crear, editar y configurar kits).

---

## 🗺️ Guía Paso a Paso: Configuración de Arenas

Las arenas son mapas o zonas de combate delimitadas. El plugin cuenta con un sistema de **rotación automática**, lo que significa que el mapa activo cambiará cada cierto tiempo (configurable en `config.yml`), teletransportando a los jugadores y manteniendo el PvP fresco.

### Paso 1: Crear la Arena
Para registrar una nueva arena en el sistema:
```bash
/arena create <nombre_de_la_arena>
```
*Ejemplo:* `/arena create Desierto`

### Paso 2: Obtener la Herramienta de Selección (Wand)
Para delimitar los límites físicos de la arena (los bordes donde los jugadores pueden combatir), necesitas la varita de selección:
```bash
/arena wand
```
* **Acción:** Recibirás un ítem especial (un hacha de madera o similar). Dirígete al mundo de arenas y selecciona las esquinas de tu mapa:
  * **Click Izquierdo:** Establece la **Posición 1** (Pos1).
  * **Click Derecho:** Establece la **Posición 2** (Pos2).

### Paso 3: Guardar los Límites de la Arena
Una vez que tengas seleccionada el área con la varita, guarda estos límites para tu arena:
```bash
/arena setbounds <nombre_de_la_arena>
```
*Ejemplo:* `/arena setbounds Desierto`

### Paso 4: Añadir Puntos de Spawn (Aparición)
Una arena requiere puntos de aparición para que los jugadores aparezcan al entrar o reaparezcan al morir. Puedes añadir tantos puntos como quieras para evitar el spawn-kill.
* **Acción:** Párate en la ubicación exacta donde quieres que aparezcan los jugadores y ejecuta:
```bash
/arena addspawn <nombre_de_la_arena>
```
* Repite este paso en diferentes ubicaciones del mapa para crear múltiples puntos de aparición aleatorios.

### Paso 5: Activar la Arena
Una vez configurada con límites y spawns, actívala para que entre en la rotación de mapas del servidor:
```bash
/arena enable <nombre_de_la_arena>
```
*(Puedes desactivarla temporalmente con `/arena disable <nombre_de_la_arena>` si necesitas hacerle reparaciones o cambios).*

---

## 🛡️ Guía Paso a Paso: Configuración de Kits

Los kits representan el equipamiento (armas, armadura, comida, mano secundaria y efectos) que reciben los jugadores al combatir.

### Tipos de Kits disponibles:
1. **NORMAL:** Kits tradicionales que los jugadores pueden elegir desde un menú interactivo.
2. **RANDOM:** Kits de asignación aleatoria (se equipan automáticamente al reaparecer para un PvP caótico y variado).
3. **EVENT:** Kits específicos reservados para eventos globales del plugin.

### Paso 1: Crear un Kit
Para registrar un nuevo kit, debes asignarle un nombre y un tipo:
```bash
/kit create <nombre_del_kit> <tipo>
```
*Ejemplos:*
* `/kit create Guerrero normal`
* `/kit create Arquero random`

### Paso 2: Edición Visual del Inventario (Equipamiento)
Esta es la característica más potente. Puedes configurar todo el equipamiento del kit de forma visual dentro del juego:
```bash
/kit edit <nombre_del_kit>
```
* **Interfaz Gráfica (GUI):** Se abrirá un menú de cofre con 54 slots:
  * **Slots 0 al 35 (Las primeras 4 filas):** Coloca aquí los ítems que irán al inventario del jugador (espada, flechas, pociones, comida, etc.).
  * **Fila Inferior (Slots 45 al 48):** Coloca las piezas de armadura del kit (Casco, Pechera, Pantalones y Botas respectivamente).
  * **Slot 49 (Mano Secundaria / Offhand):** Coloca el ítem que el jugador llevará en la mano izquierda (ej. Escudo, Tótem, Flechas).
  * **Slot 53 (Botón Verde):** Haz click aquí para **Guardar** los cambios.
  * **Slot 52 (Botón Rojo):** Cancela los cambios sin guardar.

### Paso 3: Configurar Propiedades Avanzadas
Puedes ajustar las propiedades internas del kit de forma gráfica:
```bash
/kit settings <nombre_del_kit>
```
* **Interfaz de Ajustes:** Abre un panel interactivo para configurar:
  * **Nombre Visible (Display Name):** Cambia cómo se ve el nombre en los menús (soporta códigos de colores `&`).
  * **Permiso Requerido:** Restringe el kit para que solo jugadores con un permiso específico (ej. VIPs) puedan equiparlo.
  * **Tiempo de Espera (Cooldown):** Define cada cuánto tiempo se puede volver a seleccionar el kit.
  * **Icono del Menú:** Arrastra cualquier ítem a este slot para que sea la imagen de presentación del kit en el menú de selección.
  * **Sonido de Equipamiento:** Define el sonido de Minecraft que sonará cuando un jugador se equipe el kit.
  * **Slot en el Menú:** Ajusta en qué posición del menú de selección aparecerá este kit de forma ordenada.

---

## 🎮 Comandos de Uso General

### Para Jugadores:
* `/join` - Te une al combate en la arena que esté actualmente activa en la rotación.
* `/spawn` - Teletransporta al jugador al spawn general del servidor (si está configurado).
* `/kit menu` - Abre el inventario de selección de kits normales disponibles.
* `/kit random` - Asigna al jugador un kit aleatorio de los disponibles en el servidor.
* `/votaciones` (o `/votar`) - Permite votar por el siguiente mapa en la rotación de arenas de forma pública y sin permisos.
* `/bounty <jugador> <monto>` - Coloca una recompensa de monedas por la cabeza de otro jugador.

### Para Administradores:
* `/setspawn` - Establece el spawn general del servidor en tu ubicación actual.
* `/arena forcesetup` - Abre el configurador rápido de arenas.
* `/arena forcespin` o `/arena rotation` - Fuerza la rotación del mapa activo de inmediato.
* `/kit give <jugador> <kit>` - Entrega directamente el equipamiento de un kit a un jugador.
* `/heavenrandomkits reload` - Recarga todos los archivos de configuración (`config.yml`, `language.yml`, `abilities.yml`).

---

## ⚙️ Estructura de Archivos de Configuración

### 📄 `config.yml`
Define las configuraciones estructurales del plugin. Algunas de las opciones más importantes son:
* `LICENSE`: Clave de licencia del plugin para su validación.
* `ARENA_SETTINGS.WORLD_NAME`: El nombre del mundo de Minecraft donde se configuran y cargan las arenas.
* `ARENA_SETTINGS.ROTATION_TIME`: El tiempo en segundos que dura cada arena activa antes de rotar automáticamente al siguiente mapa.
* `SPAWN_SETTINGS.TELEPORT_ON_JOIN`: Si se teletransporta automáticamente a los jugadores al spawn al ingresar al servidor.
* `SPAWN_SETTINGS.TELEPORT_ON_FIRST_JOIN`: Si se teletransporta únicamente la primera vez que ingresan.

### 📄 `language.yml`
Contiene todas las cadenas de texto del plugin. Puedes traducir y personalizar todos los mensajes del chat, títulos de menús, lore de ítems y alertas en su totalidad con soporte de colores de Minecraft (`&`).

### 📄 `abilities.yml`
Permite definir los parámetros y configuraciones para las habilidades especiales que los kits pueden usar en combate (como multiplicadores de daño, tiempos de recarga de habilidades, partículas y efectos).
