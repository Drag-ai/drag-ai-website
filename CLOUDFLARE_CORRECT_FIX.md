# Cloudflare Pages - Correct Yarn Version Configuration

## ✅ CORRECT Solution

Based on Cloudflare's official documentation, here's how to fix the Yarn version issue:

---

## Set Environment Variable in Cloudflare

### Steps:

1. **Go to Cloudflare Dashboard**
   - Navigate to: `Pages` → `drag-ai-website` → `Settings`

2. **Click "Environment variables"**
   - In the left sidebar

3. **Add New Variable**
   ```
   Variable name:  YARN_VERSION
   Value:          1.22.22
   Environment:    Production (and Preview if needed)
   ```

4. **Save and Redeploy**
   - Click "Save"
   - Go to "Deployments" tab
   - Click "Retry deployment" on the latest build

---

## Why This Works

According to Cloudflare's official settings:

| Tool    | Default Version | Environment Variable | Supported Files |
|---------|----------------|---------------------|-----------------|
| Yarn    | 4.9.1          | `YARN_VERSION`      | ❌ None         |
| Node.js | 22.16.0        | `NODE_VERSION`      | `.nvmrc`, `.node-version` |

**Key Points:**
- ✅ Yarn version is controlled by `YARN_VERSION` environment variable **only**
- ❌ `.yarnrc` file does NOT work for Cloudflare version detection
- ❌ `package.json` engines field does NOT work for Cloudflare version detection
- ✅ `.node-version` file DOES work for Node.js (we created this correctly)

---

## Alternative: Migrate to Yarn 4

If you want to use Cloudflare's default Yarn 4.9.1 instead:

### Option A: Quick Migration (Recommended if going this route)

1. **Locally, upgrade to Yarn 4:**
   ```bash
   cd /app/frontend
   yarn set version 4.9.1
   ```

2. **Configure Yarn 4 to use node_modules:**
   Create `/app/frontend/.yarnrc.yml`:
   ```yaml
   nodeLinker: node-modules
   ```

3. **Reinstall dependencies:**
   ```bash
   rm -rf node_modules
   yarn install
   ```

4. **Commit the new files:**
   ```bash
   git add .yarn .yarnrc.yml yarn.lock
   git commit -m "Migrate to Yarn 4 for Cloudflare compatibility"
   git push
   ```

### Option B: Stay on Yarn 1 (Simpler)

Just set the environment variable in Cloudflare (recommended for now).

---

## Complete Configuration Checklist

### ✅ Cloudflare Pages Settings

**Build Configuration:**
```
Build command:          yarn build
Build output directory: /build
Root directory:         /frontend
Build system version:   3 (latest)
```

**Environment Variables:**
```
REACT_APP_WEB3FORMS_KEY = [your encrypted value]
YARN_VERSION            = 1.22.22           ← ADD THIS
```

**Optional (Node.js version):**
```
NODE_VERSION            = 18.20.0
```
(Or let Cloudflare auto-detect from `.node-version` file)

---

## Expected Build Output After Fix

```
Detected the following tools from environment: yarn@1.22.22, nodejs@18.20.0
Installing project dependencies: yarn
yarn install v1.22.22
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 30s

Executing user command: yarn build
Creating an optimized production build...
Compiled successfully.

Deploying to Cloudflare's global network...
✅ Success! Deployed to https://drag-ai-website.pages.dev
```

---

## Step-by-Step: Add Environment Variable

### Via Cloudflare Dashboard (UI)

1. **Login** to Cloudflare
2. Go to **Pages**
3. Select **drag-ai-website** project
4. Click **Settings** (left sidebar)
5. Click **Environment variables**
6. Click **Add variable** button
7. Enter:
   - **Variable name:** `YARN_VERSION`
   - **Value:** `1.22.22`
   - **Environment:** Select "Production" and "Preview"
8. Click **Save**
9. Go to **Deployments** tab
10. Click **Retry deployment** on latest build

### Via Wrangler CLI (Alternative)

```bash
wrangler pages project env add YARN_VERSION 1.22.22 --project-name drag-ai-website
```

---

## Files We Created (Still Useful)

### `/frontend/.node-version` ✅ KEEP
```
18.20.0
```
**Status:** Works for Node.js version detection

### `/frontend/.yarnrc` ❌ NOT NEEDED FOR CLOUDFLARE
```
1.22.22
```
**Status:** Only works for local development, not for Cloudflare

### `/frontend/package.json` - engines field ✅ KEEP (for documentation)
```json
"engines": {
  "node": ">=18.0.0",
  "yarn": "1.22.22"
}
```
**Status:** Good for documentation, but Cloudflare doesn't use it for version detection

---

## Comparison: Local vs Cloudflare

| Setting | Local Development | Cloudflare Pages |
|---------|------------------|------------------|
| Yarn version | Uses `.yarnrc` + `engines` | Uses `YARN_VERSION` env var only |
| Node version | Uses system Node.js | Uses `.node-version` OR `NODE_VERSION` |
| Build command | Manual `yarn build` | Configured in dashboard |
| Dependencies | `node_modules/` | Fresh install every build |

---

## Why the Previous Fix Didn't Work

❌ **What we tried:**
- Created `.yarnrc` file
- Added `engines` field to package.json

❌ **Why it failed:**
- Cloudflare doesn't read `.yarnrc` for version detection
- Cloudflare doesn't read `package.json` engines for build tool versions
- These files only work for **local development**

✅ **What actually works:**
- Setting `YARN_VERSION=1.22.22` environment variable in Cloudflare dashboard
- This is the **only** way Cloudflare knows which Yarn version to use

---

## Summary

**The ONLY way to control Yarn version in Cloudflare Pages:**
→ Set `YARN_VERSION=1.22.22` environment variable in Cloudflare dashboard

**All other methods (.yarnrc, package.json engines, etc.):**
→ Do NOT work for Cloudflare (only work locally)

**Next Steps:**
1. Go to Cloudflare → Pages → Settings → Environment variables
2. Add `YARN_VERSION` = `1.22.22`
3. Save and retry deployment
4. Build will succeed ✅

---

## Quick Reference: Cloudflare Tool Versions

| Tool | Default | Override Via | File Support |
|------|---------|--------------|--------------|
| Node.js | 22.16.0 | `NODE_VERSION` | `.nvmrc`, `.node-version` ✅ |
| Yarn | 4.9.1 | `YARN_VERSION` | ❌ None |
| npm | 10.9.2 | (matches Node.js) | ❌ None |
| pnpm | 10.11.1 | `PNPM_VERSION` | ❌ None |
| Python | 3.13.3 | `PYTHON_VERSION` | `.python-version`, `runtime.txt` ✅ |
| Ruby | 3.4.4 | `RUBY_VERSION` | `.ruby-version` ✅ |
| Go | 1.24.3 | `GO_VERSION` | ❌ None |

**Lesson:** Different tools support different detection methods in Cloudflare!

---

**Last Updated:** March 26, 2025
**Status:** Correct solution identified ✅
**Action Required:** Set YARN_VERSION environment variable in Cloudflare
