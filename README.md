# todolist

Live demo: https://veetihietasalo.github.io/todolist/ (the app on `main`)

A small React todo app from a course exercise. Type a description, pick a date, add it to the table, delete rows.

Stack: React 18, Vite 4.

What it does on `main`:
- Description and date inputs with an Add button
- A table of todos with a Delete button on each row
- Todos live in React state only, so a reload clears them

Later steps of the exercise are on branches. Each builds on the one before and none is merged into `main`:
- `pilkkominen` (27 Sep 2023): split into `TodoList` and `TodoTable` components
- `ag-grid` (2 Oct 2023): the table moved to AG Grid with column filters
- `MUI` (11 Oct 2023): MUI tabs (Home, TodoList) and an MUI date picker

Run:

```bash
npm install
npm run dev
```

The app runs under `/todolist/` (http://localhost:5173/todolist/ in dev), the same path as on GitHub Pages. The demo is `dist/` from `npm run build` pushed to the `gh-pages` branch. The exercise branches aren't deployed.

Status: course exercise, autumn 2023 (27 Sep to 11 Oct).
