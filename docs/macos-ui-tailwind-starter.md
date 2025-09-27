# macos-ui-tailwind-starter

A minimal React + TypeScript + Tailwind UI package that provides macOS-style components. Use this as a npm package or local package in a monorepo.

---

## File tree

```
macos-ui-tailwind-starter/
├─ package.json
├─ tsconfig.json
├─ rollup.config.js
├─ postcss.config.cjs
├─ tailwind.config.cjs
├─ src/
│  ├─ index.ts
│  ├─ styles.css
│  └─ components/
│     ├─ MacWindow.tsx
│     ├─ MacButton.tsx
│     └─ IconSF.tsx
├─ dist/ (built files)
└─ README.md
```

---

## package.json

```json
{
  "name": "@your-scope/macos-ui",
  "version": "0.1.0",
  "description": "macOS style UI components for React + Tailwind",
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "scripts": {
    "build": "rollup -c",
    "dev": "vite",
    "lint": "eslint . --ext .ts,.tsx"
  },
  "peerDependencies": {
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "typescript": "^5",
    "rollup": "^3",
    "rollup-plugin-dts": "^5",
    "@rollup/plugin-node-resolve": "^15",
    "@rollup/plugin-commonjs": "^24",
    "postcss": "^8",
    "tailwindcss": "^4",
    "autoprefixer": "^10",
    "vite": "^5",
    "esbuild": "^0"
  }
}
```

---

## tailwind.config.cjs

```js
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "mac-bg": "#f6f7f8",
        "mac-panel": "#ffffff",
        "mac-accent": "#0a84ff",
      },
      borderRadius: { mac: "12px" },
    },
  },
  plugins: [],
};
```

---

## postcss.config.cjs

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## src/styles.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* macOS small tweaks */
.macos-shadow {
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}
.mac-title {
  font-size: 13px;
  font-weight: 600;
}
```

---

## src/index.ts

```ts
export { default as MacWindow } from "./components/MacWindow";
export { default as MacButton } from "./components/MacButton";
export { default as IconSF } from "./components/IconSF";
import "./styles.css";
```

---

## src/components/IconSF.tsx

This component expects the package consumer to export SVGs from SF Symbols or provide their own SVG.

```tsx
import React from "react";

export default function IconSF({
  svg,
  size = 16,
  className = "",
}: {
  svg: string | React.ReactNode;
  size?: number;
  className?: string;
}) {
  if (typeof svg === "string") {
    return (
      <span
        className={className}
        style={{ width: size, height: size }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );
  }
  return (
    <span className={className} style={{ width: size, height: size }}>
      {svg}
    </span>
  );
}
```

Notes: the consumer should export SF Symbol as SVG string or component. This avoids licensing issues and keeps package small.

---

## src/components/MacButton.tsx

```tsx
import React from "react";

export interface MacButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export default function MacButton({
  variant = "primary",
  children,
  className = "",
  ...rest
}: MacButtonProps) {
  const base = "px-3 py-1 rounded-mac text-sm font-medium shadow-sm";
  const map: Record<string, string> = {
    primary: "bg-mac-accent text-white macos-shadow",
    secondary: "bg-mac-panel text-black border border-slate-200",
    ghost: "bg-transparent text-mac-accent",
  };
  return (
    <button className={`${base} ${map[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
```

---

## src/components/MacWindow.tsx

```tsx
import React from "react";
import MacButton from "./MacButton";

export default function MacWindow({
  title = "Untitled",
  children,
  className = "",
}: {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-mac bg-mac-panel p-3 w-full max-w-xl macos-shadow ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center mac-title">{title}</div>
        <div className="w-12" />
      </div>
      <div>{children}</div>
    </div>
  );
}
```

---

## README.md (short)

```
Install: npm i @your-scope/macos-ui

Usage:

import { MacWindow, MacButton } from '@your-scope/macos-ui'

function App(){
  return (
    <MacWindow title="Finder">
      <MacButton variant="primary">Open</MacButton>
    </MacWindow>
  )
}
```

Notes and best practices:

- Ship only components and styles. Do not bundle React.
- Ask consumers to provide SF Symbol SVGs. Provide a small helper to load SVG strings.
- Keep Tailwind's `content` paths minimal so consumers can purge unused styles.
- Provide a storybook or example app in `examples/` for visual testing.

---

## Quick publish checklist

1. Build: `npm run build`
2. Verify `dist` has ESM and CJS outputs and `.d.ts`
3. `npm publish --access public` (or use your scope)

---

Nếu muốn mình tạo sẵn repo mẫu với các file build-ready, tao code trực tiếp vào canvas nữa. Chỉ báo 'ok' là mình push full template.
