---
title: "Simulador de Colectivos Urbanos: Un Proyecto de Grafos, Algoritmos y Java"
date: 2025-06-26
---

Hoy presento con mucho orgullo el proyecto integrador final de la materia **Algorítmica y Programación II**, una de las cátedras centrales de la Licenciatura en Informática. Junto a mi compañero Enzo, desarrollamos un **Simulador de Colectivos Urbanos**, un sistema complejo diseñado no solo para simular, sino para analizar la eficiencia de una red de transporte.

## El Desafío: Modelar la Complejidad de un Sistema de Transporte

El objetivo era claro: crear un motor de simulación en Java capaz de procesar el funcionamiento de múltiples líneas de colectivos. Esto implicaba gestionar el movimiento ciclo a ciclo de cada unidad, la subida y bajada de pasajeros en las paradas, y el control de la capacidad máxima de cada colectivo, diferenciando incluso entre pasajeros sentados y parados.

Pero el verdadero reto era ir más allá de la simulación y construir herramientas para analizar y optimizar el sistema.

## Nuestra Solución Técnica

Para construir una solución robusta y mantenible, nos apoyamos en tres pilares técnicos fundamentales:

### 1. Encontrando el Mejor Camino: Grafos y el Algoritmo de Dijkstra

El corazón del módulo de planificación es la representación de la red de transporte como un **grafo dirigido**, donde cada parada es un vértice y cada tramo de ruta una arista con un peso (distancia o tiempo). Para calcular la ruta óptima entre dos puntos cualesquiera, implementamos el **algoritmo de Dijkstra**, una demostración práctica de la aplicación de la teoría de grafos para resolver problemas del mundo real.

### 2. Calidad de Código: Arquitectura por Capas y una Suite de +100 Tests

Desde el inicio, el diseño del software fue una prioridad. Implementamos una estricta **arquitectura por capas** (modelo, datos, lógica e interfaz) y un patrón Controlador-UI para asegurar una clara separación de responsabilidades.

Pero el mayor compromiso con la calidad se refleja en nuestra suite de pruebas. Desarrollamos más de **100 pruebas unitarias utilizando JUnit 5 y el framework de mocks Mockito**. Esta extensa cobertura de tests garantiza la robustez, el correcto funcionamiento de cada componente y la mantenibilidad del código a largo plazo, adoptando una práctica esencial en el desarrollo de software profesional.

### 3. Un Ecosistema Java Moderno

Todo el proyecto fue desarrollado con **Java 21**, utilizando **Apache Maven** para la gestión de dependencias y la construcción del proyecto, lo que nos permitió manejar librerías externas e internas de forma ordenada.

## Características y Resultados

El simulador final no solo ejecuta el movimiento, sino que también genera un completo reporte de estadísticas que incluye:

* **Índice de Satisfacción del Pasajero:** Una métrica que calcula qué tan buena fue la experiencia del usuario, basándose en si consiguió asiento o si tuvo que esperar a más de un colectivo.
* **Ocupación Promedio:** Reportes detallados del porcentaje de ocupación de cada colectivo.
* **Desglose de Viajes:** Información clave sobre cuántos pasajeros llegaron a su destino y cuántos no pudieron completar su viaje.

## Conclusión

Este proyecto fue un desafío increíble que nos permitió aplicar y profundizar en conceptos fundamentales de la algorítmica, las estructuras de datos, el diseño de software y las buenas prácticas de ingeniería. Fue una experiencia de aprendizaje inmensa, desde la implementación de algoritmos clásicos hasta la construcción de una base de código resiliente gracias al testing automatizado.

Te invito a explorar el código fuente, la documentación y la arquitectura completa en el repositorio.

🚀 **Puedes ver el proyecto completo en GitHub aquí: [Simulador de Colectivos Urbanos](https://github.com/MiyoBran/simulador-colectivos)**
