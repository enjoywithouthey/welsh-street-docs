# Nextra Layout Component Props

This document describes all available props for the `<Layout>` component in `nextra-theme-docs` v4.x.

## Required Props

### children
- **Type:** `React.ReactNode`
- **Description:** The main content to be rendered inside the layout

### pageMap
- **Type:** `PageMapItem[]`
- **Description:** Result of `getPageMap()` call - contains the page structure and navigation data

## Layout Components

### banner
- **Type:** `React.ReactNode` (optional)
- **Description:** Rendered `<Banner>` component for displaying announcements or messages at the top of the page

### navbar
- **Type:** `React.ReactNode` (optional)
- **Description:** Rendered `<Navbar>` component for the top navigation bar

### footer
- **Type:** `React.ReactNode` (optional)
- **Description:** Rendered `<Footer>` component for the page footer

### search
- **Type:** `React.ReactNode` (optional)
- **Default:** `<Search />`
- **Description:** Rendered `<Search>` component for site search functionality

## Repository & Links

### docsRepositoryBase
- **Type:** `string` (optional)
- **Default:** `"https://github.com/shuding/nextra"`
- **Description:** Repository URL used for "Edit this page" links and other repository-related features

### editLink
- **Type:** `React.ReactNode` (optional)
- **Default:** `"Edit this page"`
- **Description:** Content for the edit link that appears in the page footer

## UI Controls

### darkMode
- **Type:** `boolean` (optional)
- **Default:** `true`
- **Description:** Show/hide the dark mode toggle button

### copyPageButton
- **Type:** `boolean` (optional)
- **Default:** `true`
- **Description:** Show/hide the copy page content button

## Feedback System

### feedback
- **Type:** `object` (optional)
- **Properties:**
  - `content?: React.ReactNode` - Feedback link content (default: "Question? Give us feedback")
  - `labels?: string` - GitHub issue labels (default: "feedback")
  - `link?: string` - Custom feedback link URL

## Internationalization

### i18n
- **Type:** `Array` (optional)
- **Description:** Configuration for language dropdown in internationalized websites
- **Structure:**
  ```typescript
  Array<{
    locale: string    // Locale code from next.config
    name: string      // Display name in dropdown
  }>
  ```

## Navigation

### navigation
- **Type:** `boolean | object` (optional)
- **Default:** `true`
- **Description:** Enable/disable navigation links (next/previous page)
- **Object Structure:**
  ```typescript
  {
    next: boolean
    prev: boolean
  }
  ```

## Sidebar Configuration

### sidebar
- **Type:** `object` (optional)
- **Properties:**
  - `autoCollapse?: boolean` - Auto-collapse inactive folders
  - `defaultMenuCollapseLevel?: number` - Collapse level (default: 2)
  - `defaultOpen?: boolean` - Show sidebar by default (default: true)
  - `toggleButton?: boolean` - Show sidebar toggle (default: true)

## Table of Contents

### toc
- **Type:** `object` (optional)
- **Properties:**
  - `backToTop?: React.ReactNode` - Back to top text (default: "Scroll to top")
  - `extraContent?: React.ReactNode` - Extra content below TOC
  - `float?: boolean` - Float TOC next to content (default: true)
  - `title?: React.ReactNode` - TOC title (default: "On This Page")

## Theme Configuration

### themeSwitch
- **Type:** `object` (optional)
- **Properties:**
  - `dark?: string` - Dark mode label (default: "Dark")
  - `light?: string` - Light mode label (default: "Light")
  - `system?: string` - System mode label (default: "System")

## Next.js Themes Integration

### nextThemes
- **Type:** `object` (optional)
- **Description:** Configuration for the [next-themes](https://github.com/pacocoursey/next-themes) package
- **Properties:**
  - `attribute?: 'class' | \`data-${string}\` | Array<'class' | \`data-${string}\`>` (default: "class")
  - `defaultTheme?: string` - Default theme (default: "system")
  - `disableTransitionOnChange?: boolean` (default: true)
  - `forcedTheme?: string` - Force specific theme
  - `storageKey?: string` - LocalStorage key (default: "theme")

## Last Updated Info

### lastUpdated
- **Type:** `React.ReactElement` (optional)
- **Default:** `<LastUpdated />`
- **Description:** Component to render the last updated information

## Example Usage

```jsx
import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { Banner } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()
  
  return (
    <Layout
      // Required
      pageMap={pageMap}
      
      // Layout components
      banner={<Banner storageKey="announcement">New version available!</Banner>}
      navbar={<Navbar logo={<div>My Site</div>} />}
      footer={<Footer>© 2023 My Company</Footer>}
      
      // Repository settings
      docsRepositoryBase="https://github.com/user/repo"
      editLink="Edit on GitHub"
      
      // UI controls
      darkMode={true}
      copyPageButton={true}
      
      // Feedback
      feedback={{
        content: "Give feedback →",
        labels: "feedback"
      }}
      
      // Sidebar
      sidebar={{
        defaultMenuCollapseLevel: 1,
        autoCollapse: true
      }}
      
      // Table of Contents
      toc={{
        float: true,
        extraContent: <div>Sponsored content</div>
      }}
    >
      {children}
    </Layout>
  )
}
```