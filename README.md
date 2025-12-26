# Trial Task — Read-Only Item Facts Panel

A Next.js application featuring a read-only Item Facts panel within the item detail view. This is a UI-only, read-only implementation with no backend logic.

## Features

- **Item Detail View**: Full detail view with item information
- **Item Facts Panel**: Read-only panel displaying:
  - Category
  - Dimensions (formatted as L × W × H cm)
  - Unit
  - CBM (Cubic Meters)
  - Sourcing Type
  - Timeline Type
- **Missing Data Handling**: Displays "—" for any missing or null values
- **Modern UI**: Clean, professional interface built with Tailwind CSS
- **Mock Data**: Sample items with various data combinations for testing

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Mock JSON Data** - Static data file for demonstration

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
frontend/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx             # Main page with item list and detail view
│   └── globals.css          # Global styles with Tailwind
├── components/
│   ├── ItemDetailView.tsx   # Item detail view container
│   └── ItemFactsPanel.tsx   # Read-only Item Facts panel component
├── types/
│   └── item.ts              # TypeScript interfaces for Item data
├── public/
│   └── data/
│       └── mock-items.json  # Mock item data
└── README.md
```

## Component Details

### ItemFactsPanel

The read-only Item Facts panel component that displays item metadata:
- Shows "—" for missing/null values
- Formats dimensions as "L × W × H cm"
- Formats CBM as "X.XXX m³"
- No editing capabilities
- No buttons or actions

### ItemDetailView

The main detail view component that contains:
- Item name and description
- Item Facts panel

## Mock Data

The application uses mock data from `public/data/mock-items.json`. The data includes:
- Items with complete information
- Items with missing fields (null values)
- Various categories and types

## Acceptance Criteria Met

✅ Panel appears in the Full / Detail view  
✅ Values render correctly or show "—"  
✅ Refresh does not change behavior  
✅ No console errors  
✅ No network requests triggered (uses local mock data)  
✅ Read-only implementation (no editing, saving, or backend logic)  
✅ Modern, professional, seamless UI

## Development

- **Build**: `npm run build`
- **Start Production**: `npm start`
- **Lint**: `npm run lint`

## Notes

- This is a UI-only implementation
- No backend or API integration
- All data is read from static JSON file
- No data persistence or editing capabilities
