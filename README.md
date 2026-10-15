# Vipul Insurance Brokers – Interactive Prototype

A responsive React + Vite **sample-data prototype** with customer, employee/agent, and administrator views.

## Run locally

Requires Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). To create a static production bundle: `npm run build`.

## Demo capabilities

- Switch between Customer, Employee / Agent, and Administrator from the sidebar.
- Request quotations, add leads and policies, submit claims, and update statuses.
- Track employee tasks, mark them complete, and view sample analytics.
- Download clearly marked **sample** policy summaries.
- Record **document metadata only** (not file contents); administrator can mark entries verified.
- Manually record steps and stress self-assessments.
- Use a scripted insurance FAQ chat (not a real AI model).
- Changes persist in the current browser's localStorage; clear site data to reset.

## Security and production limitations

**Do not use this prototype for real customers or real insurance data.** All roles are selectable without authentication, all sample records are visible across roles, and browser localStorage is not secure storage. This is intentionally a front-end demo, **not** a production platform.

Not implemented: secure authentication or real RBAC enforcement, database/backend, insurer APIs, real document upload/verification, live payment collection, WhatsApp/SMS/push delivery, renewal scheduler, live AI integration, Health Connect/HealthKit, native Android/iOS apps, regulatory/privacy controls, or real claim processing.

Production implementation should add a secure API, tenant/role authorization, audit logs, encrypted data storage, consent management, PCI-compliant payment integration, provider-approved insurer APIs, privacy/legal review, and native mobile health integrations.
