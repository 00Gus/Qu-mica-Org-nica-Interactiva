# ANNAIS — Química Orgánica Interactiva

Aplicación web para estudiar química orgánica: dibuja estructuras moleculares y recibe retroalimentación pedagógica instantánea.

## Características

- **Editor molecular JSME** compatible con touch (móvil y tablet)
- **50+ ejercicios** de identificación y reacciones
- **Validación por SMILES** con OpenChemLib
- **Retroalimentación detallada** cuando la respuesta es incorrecta
- **Sistema de puntuación** con penalización por intentos (como Moodle)
- **Progreso guardado** en localStorage
- **100% cliente** — funciona en GitHub Pages sin backend

## Temario incluido

| Categoría | Contenido |
|-----------|-----------|
| Ejercicios básicos | Fenol, THF, ácido acético, dimetilamina, 1-octino |
| Bencenos y arenos | PABA, aspirina, paracetamol, TNT, DDT, Friedel-Crafts, SₙAr |
| Pirrol | Estructura, nitración, sulfonación, Paal-Knorr |
| Furano | Estructura, vitamina C, nitración, síntesis |
| Tiofeno | Estructura, nitración, acilación, Vilsmeier-Haack |
| Indol | Triptófano, serotonina, nitración, Fischer |
| Benzofurano/Benzotiofeno | Estructuras y sustitución electrofílica |
| Piridina | Nicotina, isoniazida, protonación, nitración |
| Diazinas | Pirimidina, citosina, timina, pirazina |
| Quinolina | Quinolina, isoquinolina |

## Despliegue en GitHub Pages

1. Crea un repositorio en GitHub y sube estos archivos
2. Ve a **Settings → Pages**
3. En **Source**, selecciona la rama `main` y carpeta `/ (root)`
4. Guarda y espera unos minutos
5. Accede a `https://tu-usuario.github.io/ANNAIS/`

### Estructura del proyecto

```
ANNAIS/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── problems.js    # Base de datos de ejercicios
│   ├── validator.js   # Validación SMILES y feedback
│   └── app.js         # Lógica de la aplicación
└── README.md
```

## Uso local

Abre `index.html` en un navegador o usa un servidor local:

```bash
npx serve .
```

> **Nota:** El editor JSME se carga desde `https://jsme-editor.github.io` y requiere conexión a internet.

## Tecnologías

- HTML5, CSS3, JavaScript (vanilla)
- [JSME](https://jsme-editor.github.io/) — editor molecular
- [OpenChemLib](https://www.npmjs.com/package/openchemlib) — canonicalización SMILES

## Licencia

Proyecto educativo. JSME y OpenChemLib tienen sus propias licencias (BSD).
