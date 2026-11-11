# Moda Analytics — Website Source

React + Vite source for the Moda Analytics fashion-emissions database.

## What changed in this version

- Emissions data moved out of `App.jsx` into `src/data.js`.
- Brand cards are clickable.
- Every included brand has a profile view with 2023/2024 figures, reporting notes and source link.
- Inditex/Zara includes a longer restated historical series (2018, 2023, 2024).
- Scope 3 boundary caveats are surfaced explicitly instead of describing every brand as excluding use-phase.
- Homepage insights were updated to use the current dataset.
- The design remains based on the original editorial Moda Analytics mockup.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Data flow

The website currently reads `src/data.js`. The intended next step is to generate this file automatically from the native Google Sheet `Moda Analytics — Master Emissions Database`, specifically its `Website Export` layer, after data verification.

Until that automation is connected, update the Google Sheet first and then regenerate/sync `src/data.js`.

## Important data rule

Do not assume all Scope 3 boundaries are identical. Inditex and Shein currently include use-phase emissions in the captured totals. Brand profiles display comparability notes so users can see these differences.
