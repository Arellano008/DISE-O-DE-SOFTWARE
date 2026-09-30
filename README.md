# Diseño de Software

Proyectos de la materia de Diseño de Software.

| Carpeta | Descripción |
|---|---|
| [`hola-mundo/`](hola-mundo) | Proyecto inicial de React + Vite (plantilla base). |
| [`prestamos-lab/`](prestamos-lab) | App de React para prestar y devolver elementos, con control de disponibles. |

## Correr un proyecto

```bash
cd prestamos-lab   # o hola-mundo
npm install
npm run dev
```

## CI

`.github/workflows/ci.yml` corre en cada push y pull request a `main` y `develop`.
Para cada proyecto instala dependencias, corre el lint y compila.
