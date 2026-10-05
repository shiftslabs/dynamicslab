I hear you. I wrote nonsense. Let me fix it. I will be real.

---

# DYNAMICS 7 — METIERBM BUILD PROMPT

## Version 2.0
## 2026

---

# PART 1: WHAT DYNAMICS 7 IS

Dynamics 7 is a business operating system. One app. One login. One database. It holds the whole of a company's work — contacts, deals, invoices, projects, documents, people, money, plans — in one place, under one roof, with one AI companion named Metis sitting beside them through all of it.

One app. Many features. The user opens it. Everything is already there.

---

# PART 2: THE PHILOSOPHY

Dynamics 7 was built on three beliefs.

A business is worth running well. Not just the highlight reel. The ordinary Mondays. The hard quarters. The small wins. The record is the point. You cannot delete entries. You can only edit them. The timeline stays.

Software should be nourishing, not addictive. No ads. No algorithm. No infinite scroll. No training on user data. The dashboard stops when it reaches the bottom. Metis does not chase you. Pause interrupts you when you've scrolled too long and offers you a breath. The app wants you to close it and go run your business.

Your data is yours. Nothing is public. Nothing is sold. Nothing is used to train anything. Legacy Mode lets you decide what gets passed on when you're gone. Nothing gets passed on unless you say so.

---

# PART 3: THE IDENTITY

App Name: Dynamics 7 (MetierBM)
Tagline: "Your business, run well."
Domain: `metierbm.babblsoft.site`
Purpose: Business operating system
AI Companion: Metis
Colors: Deep Blue (#1E3A8A), Dark Blue (#1E40AF), White (#FFFFFF), Black (#000000)
Aesthetic: Business glass
Icons: Phosphor Icons
No emoji. No favicon.

---

# PART 4: THE ARCHITECTURE

One app. One repo. One database. One login. One session. One AI. Many features.

Repo: `github.com/babblsoft/metierbm`.
Deployment: One Vercel project or Netlify project.
Database: One standard PostgreSQL database. Connection string only. No provider name in code. Portable.
Tables: Prefixed per feature. `crm_contacts`, `invoicing_invoices`, `projects_tasks`, `core_users`, `core_sessions`.
Auth: Same database. One `core_users` table. One session.
Redis: One Redis DB. Keys prefixed per feature.
Storage: User-provided. Google Drive, OneDrive, Dropbox. We do not host files.
AI: Metis. BYOK supported. Metered AI via admin.
Admin: Separate `admin/` app inside the same repo.

Stack: TypeScript. Framework is either Vite+React or Next.js. Both are TS and JS. The choice is not final. The code must be portable between both.

---

# PART 5: THE ENV TOGGLES

Every integration is toggled independently in `.env`. If a toggle is off, that integration is hidden.

```
PAYSTACK_ENABLED=true
STRIPE_ENABLED=true
GOOGLE_DRIVE_ENABLED=true
ONEDRIVE_ENABLED=true
DROPBOX_ENABLED=true
GOOGLE_BUTTON_ENABLED=true
```

Auth: Email/password and Google button. Google button is the only OAuth. It collects email and basic details from Google. We store them the same way as email signup. A user who signed in with Google can also set a password later. No lock-in.

---

# PART 6: THE TENANT MODEL

Dynamics 7 supports teams, companies, departments, and any group of people who want to share parts of their work.

A tenant is a container. It holds people. It holds shared data. It has a name. It has a `tenant_id`.

When a user signs up, they get a personal tenant. Their own private workspace. Named after them.

When a user creates a company, they create a new tenant. They invite people. The tenant holds the shared data.

The `tenant_members` table links users to tenants. Columns: `id`, `tenant_id`, `user_id`, `role`, `permissions`, `joined_at`.

The roles are Primary Owner, Co-Owner, Admin, Editor, Viewer, Guest.

Primary Owner: everything, delete tenant, transfer ownership.
Co-Owner: everything except delete and transfer.
Admin: manage members, manage settings, no billing.
Editor: create, edit, delete shared content.
Viewer: read only.
Guest: limited access, specific groups only.

Custom roles are supported. A CFO role can access billing, invoicing, and financial reports but not member management. A CTO role can access projects, documents, and integrations but not billing. An HR role can manage members, onboarding, and offboarding but not financials. A Legal role can access documents, contracts, and compliance but is read-only on everything else.

Inside a tenant, there can be groups. A group is a sub-container. The `groups` table has `id`, `tenant_id`, `name`, `description`, `created_at`. The `group_members` table links users to groups.

Every shareable table has a `tenant_id` column. Row Level Security (RLS) enforces isolation at the database level.

---

# PART 7: THE 12 CATEGORIES FOR THE MORE GRID

Dynamics 7 has 12 categories. These are the categories in the More grid. Each category contains features.

**Category 1: Sales**
CRM, Leads, Proposals, Quotes, Pipeline.

**Category 2: Finance**
Invoicing, Payments, Finance, Taxes, Subscriptions, Expenses.

**Category 3: Operations**
Projects, Tasks, Time Tracking, Inventory, Supply Chain, Procurement, Vendors, Assets.

**Category 4: People**
Team, HR, Payroll, Recruitment.

**Category 5: Marketing**
Campaigns, Email Marketing, Social Media, SEO, Forms.

**Category 6: Support**
Tickets, Live Chat, Knowledge Base.

**Category 7: Analytics**
Reports, Analytics, Dashboards.

**Category 8: Commerce**
Products, Orders, Storefront, Shipping.

**Category 9: Collaboration**
Chat, Meetings, Video Calls, Announcements.

**Category 10: Content**
Documents, Website Builder, Blog.

**Category 11: AI**
Metis, Metisbook, MorningBrief, Memory.

**Category 12: Workspace**
Calendar, Focus.

---

# PART 8: THE FEATURES (65 FEATURES)

All features ship on day one.

## Category 1: Sales

**1. CRM** — contacts, deals, companies. Log every interaction. Track every deal stage. Forecast revenue. Notes on every contact. Reminders to follow up.

**2. Leads** — capture leads. Score leads. Nurture leads. Track conversion.

**3. Proposals** — create proposals. Send proposals. Track acceptance. Convert to quote.

**4. Quotes** — create quotes. Send quotes. Track acceptance. Convert to invoice.

**5. Pipeline** — the feed. Industry news, market trends, competitor updates, blog posts, book recommendations. Curated. Finite. Not endless scrolling.

## Category 2: Finance

**6. Invoicing** — create invoices. Send invoices. Track payments. Send reminders. Mark as paid. Partial payments. Recurring invoices.

**7. Payments** — record payments. Track balances. Payment methods. Refunds. Receipts.

**8. Finance** — income. Expenses. Categories. Budgets. Savings goals. Net worth.

**9. Taxes** — tax tracking. Deductions. Filing reminders. Document storage.

**10. Subscriptions** — recurring expenses. Every subscription. Monthly spend. Renewal dates. Alerts before charges.

**11. Expenses** — expense reports. Approvals. Receipts. Categories.

## Category 3: Operations

**12. Projects** — projects, tasks, deadlines, subtasks. Assign to team members. Track progress. Gantt views. Dependencies.

**13. Tasks** — to-do list. Tasks, projects, deadlines, subtasks. Organize by priority. Recurring tasks.

**14. Time Tracking** — track time per task. Billable hours. Timesheets.

**15. Inventory** — stock levels. Reorder points. Warehouse locations. Barcode scanning.

**16. Supply Chain** — suppliers. Lead times. Logistics.

**17. Procurement** — purchase orders. Approvals. Receiving. Inventory updates.

**18. Vendors** — vendor management. Contacts. Contracts. Payment terms. Performance.

**19. Assets** — company assets. Assignment. Depreciation. Maintenance schedules.

## Category 4: People

**20. Team** — team directory. Roles. Permissions. Contact info. Availability. Time zones.

**21. HR** — onboarding. Offboarding. Leave management. Attendance. Documents. Reviews.

**22. Payroll** — salary. Deductions. Bonuses. Payslips. Tax documents. Payment history.

**23. Recruitment** — job openings. Applicants. Interview scheduling. Notes. Hiring pipeline.

## Category 5: Marketing

**24. Campaigns** — email campaigns. Social campaigns. Track performance. ROI.

**25. Email Marketing** — bulk emails. Templates. A/B testing. Automation.

**26. Social Media** — schedule posts. Monitor mentions. Track engagement.

**27. SEO** — keywords. Rankings. Backlinks. Site audits.

**28. Forms** — forms. Landing pages. Lead capture.

## Category 6: Support

**29. Tickets** — support tickets. SLA tracking. Assignment. Status. Priority.

**30. Live Chat** — website chat. Canned responses. Routing.

**31. Knowledge Base** — internal wiki. Customer-facing docs. Search. Categories.

## Category 7: Analytics

**32. Reports** — financial reports. Sales reports. Project reports. Custom reports. Export.

**33. Analytics** — website analytics. Conversion tracking. Traffic sources. Custom dashboards.

**34. Dashboards** — custom dashboards. Widgets. Real-time data.

## Category 8: Commerce

**35. Products** — product catalog. SKUs. Pricing. Inventory. Categories. Variants.

**36. Orders** — create orders. Track fulfillment. Update status. Shipping details. Order history.

**37. Storefront** — online store. Product pages. Checkout.

**38. Shipping** — shipping rates. Tracking. Delivery confirmation.

## Category 9: Collaboration

**39. Chat** — team chat. Channels. Direct messages. File sharing.

**40. Meetings** — meeting scheduling. Agendas. Minutes. Action items.

**41. Video Calls** — video conferencing. Screen sharing. Recording.

**42. Announcements** — company announcements. Read receipts. Scheduling.

## Category 10: Content

**43. Documents** — rich text documents. Databases. Wikis. Folders and tags. Version history.

**44. Website Builder** — build websites. Drag and drop. Templates.

**45. Blog** — blog posts. Categories. Comments. SEO.

## Category 11: AI

**46. Metis** — the AI companion. Watches everything. Connects dots. Surfaces insights. Remembers your patterns. Reaches out spontaneously. Voice mode. Memory that persists.

**47. Metisbook** — the AI research notebook. Upload sources. Metis reads them. Summaries. Study guides. Audio overviews.

**48. MorningBrief** — the morning brief. Overnight, pulls together calendar, pipeline, projects, tasks. Wakes you with a personalized story about your day.

**49. Memory** — the business archive. Automatically gathers documents, contracts, meeting notes, project history. Organizes them into a timeline. "On This Day" flashbacks. Monthly reports. Legacy Mode.

## Category 12: Workspace

**50. Calendar** — schedule. Day, week, month views. Drag tasks onto time slots. Color-coded events. Meeting scheduling. Deadline tracking.

**51. Focus** — Pomodoro timer. Work sessions. Breaks. Ambient sounds. Deep focus mode.

## Additional Features

**52. Base** — today's dashboard. The home. The welcome page.

**53. Kanban** — board view. Drag cards between columns.

**54. Sprints** — two-week sprints. Backlog. Velocity tracking.

**55. Whiteboard** — collaborative canvas. Draw. Diagram. Brainstorm.

**56. Surveys** — surveys. NPS. CSAT. Feedback collection.

**57. Forecasts** — revenue forecasting. Pipeline forecasting. Scenario planning.

**58. Commissions** — sales commissions. Payouts. Statements.

**59. Territories** — sales territories. Assignment. Coverage.

**60. Discounts** — discount codes. Promotions. Coupons.

**61. Landing Pages** — landing pages. A/B testing. Conversion tracking.

**62. Community** — customer forum. Discussions. Peer support.

**63. Contracts** — contract management. E-signatures. Renewals.

**64. Compliance** — compliance tracking. Audits. Certifications.

**65. Training** — training modules. Tracking. Certifications.

---

# PART 9: THE SUB-FEATURES

These are enhancements that belong to features. They are not separate features.

## Metis Sub-Features

Voice Mode. Always-On Presence. Vector Memory. Auto-Executor. Sub-Agent Delegation. Telos Document. TELOS Interview. AI Companion with Gentle and Professional Personality. Relationship System with AI Companion Who Remembers and Grows. Euphoric Surprise as the Success Metric. Semantic Memory for User Preferences. Realistic Next Steps Based on True Availability. Voice-Activated Browser Automation. Gesture-Based Interaction. Hand Gesture Webcam Control.

## CRM Sub-Features

Personal CRM with Automatic Contact Enrichment. Network Alerts for Relationship Nurturing. Business Card Scanning. Relationship Intelligence and Network Search. AI Relationship Nudges. Automatic CRM Sync from Emails and Documents. Context-Rich Pre-Meeting Briefs.

## Invoicing Sub-Features

Recurring invoices. Payment reminders. Partial payments. Multi-currency. Tax calculation.

## Projects Sub-Features

Gantt views. Dependencies. Milestones. Time tracking. Resource allocation.

## Documents Sub-Features

Version history. Comments. Suggestions. Templates. Import from Notion.

## Calendar Sub-Features

Meeting scheduling. Availability. Time zones. Video conferencing links.

## Team Sub-Features

Custom roles. Permissions. Time off tracking. Availability.

## HR Sub-Features

Onboarding checklists. Offboarding checklists. Document storage. E-signatures.

## Payroll Sub-Features

Tax calculation. Payslip generation. Direct deposit. Payment history.

## Finance Sub-Features

What-If Simulator. Goal Decomposer. Auto-Replan Engine. Self-Adjusting Budgets.

## Reports Sub-Features

Custom report builder. Scheduled reports. Export to PDF, CSV, Excel.

## Campaigns Sub-Features

Email templates. A/B testing. Segment targeting. Automation.

## Tickets Sub-Features

SLA tracking. Escalation rules. Customer satisfaction surveys.

## Chat Sub-Features

Channels. Direct messages. Threads. File sharing. Search.

## Meetings Sub-Features

Agendas. Minutes. Action items. Recording. Transcription.

## System Sub-Features

No Analytics and No Tracking. Privacy-First Architecture. Offline-First Data Architecture with Local Encryption. Professional Design. Holistic Business Management. Goal Connection from Purpose to Daily Action.

---

# PART 10: THE NAVIGATION

## Desktop

Three columns, always visible. Left column is the Global Sidebar. Middle column is the Feature Nav. Right column is the Main Canvas.

Global Sidebar contains: Base, Metis, More, Pipeline, CRM, Recent Features, Settings, and the user card at the bottom.

Feature Nav contains the feature-specific navigation items. For CRM: Contacts, Deals, Companies, Settings. For Projects: Active, Completed, Archived, Settings. For Invoicing: All Invoices, Drafts, Sent, Paid, Overdue, Settings.

Main Canvas contains the feature content.

## Mobile

One global sidebar. No second sidebar. Feature Nav lives inside a dropdown.

Top bar has: hamburger, chevron for Feature Nav dropdown, search icon, AI icon, bell icon, avatar.

Bottom dock has five buttons: Base, CRM, Metis, Projects, More.

Hamburger opens the Global Sidebar as a slide-in drawer. Chevron opens a card showing the Feature Nav items for the current feature. Tap any item. The main view changes. The card closes.

## Mobile Dock (5 Buttons)

Position 1 is Base. Fixed. Always first. Home. Dashboard.
Position 2 is CRM. The core. Contacts, deals, pipeline.
Position 3 is Metis. The AI. Center. Raised. Filled. Always.
Position 4 is Projects. The work. Tasks, deadlines, delivery.
Position 5 is More. The grid. Everything else. Last. Always.

## Global Sidebar (5 Sections)

Section 1 is Core: Base, Metis, More. A divider.
Section 2 is System defaults: Pipeline, CRM. A divider.
Section 3 is Frequently used: the user's most frequently used features, up to ten. A "See more" item that opens a popup showing all frequently used features. A divider.
Section 4 is Utilities: Settings. A divider.
Section 5 is Bottom: user card with avatar, name, plan.

## The Header

Left side has the logo mark and the word "Dynamics 7."
Right side has the notification bell and the profile avatar.
The bell sits before the avatar. Both are always in the top right.
There is no middle in the header.

## The Tenant Switcher

The tenant switcher sits at the top of the Global Sidebar. It shows the current tenant name. When tapped, it opens a list of all tenants the user belongs to. The user can switch between them. There is also a "Create new company" option.

---

# PART 11: THE MORE GRID

When the user taps More, a full-screen overlay opens. At the top, there is a card. The card shows:

A greeting. "Good morning, Krack."

A one-line summary. "5 deals in pipeline. 2 invoices overdue. 1 insight from Metis."

A button. "Open Metis."

Below the card, the 12 categories. Sales. Finance. Operations. People. Marketing. Support. Analytics. Commerce. Collaboration. Content. AI. Workspace.

Each category is collapsible. Tap the category name. It expands. The feature cards appear inside. Tap a feature card. The feature opens.

---

# PART 12: THE FEATURE NAV FOR EACH FEATURE

**CRM:** Contacts, Deals, Companies, Settings.
**Leads:** All Leads, Scoring, Nurturing, Settings.
**Proposals:** Drafts, Sent, Accepted, Settings.
**Quotes:** Drafts, Sent, Accepted, Settings.
**Pipeline:** Feed, Sources, Settings.
**Invoicing:** All, Drafts, Sent, Paid, Overdue, Settings.
**Payments:** Received, Pending, Refunds, Settings.
**Finance:** Income, Expenses, Budgets, Settings.
**Taxes:** Obligations, Deductions, Filings, Settings.
**Subscriptions:** Active, Renewals, History, Settings.
**Expenses:** All, Pending Approval, Approved, Settings.
**Projects:** Active, Completed, Archived, Settings.
**Tasks:** Today, Upcoming, Projects, Settings.
**Time Tracking:** Timer, Timesheets, Reports, Settings.
**Inventory:** Stock, Reorder, Locations, Settings.
**Supply Chain:** Suppliers, Lead Times, Logistics, Settings.
**Procurement:** Purchase Orders, Approvals, Receiving, Settings.
**Vendors:** All Vendors, Contracts, Performance, Settings.
**Assets:** All Assets, Assignment, Depreciation, Settings.
**Team:** Members, Roles, Permissions, Settings.
**HR:** Onboarding, Offboarding, Leave, Settings.
**Payroll:** Run Payroll, History, Payslips, Settings.
**Recruitment:** Openings, Applicants, Interviews, Settings.
**Campaigns:** Active, Scheduled, Past, Settings.
**Email Marketing:** Campaigns, Templates, Lists, Settings.
**Social Media:** Scheduled, Published, Analytics, Settings.
**SEO:** Keywords, Rankings, Audits, Settings.
**Forms:** All Forms, Submissions, Settings.
**Tickets:** Open, Assigned, Closed, Settings.
**Live Chat:** Active, History, Canned Responses, Settings.
**Knowledge Base:** Articles, Categories, Search, Settings.
**Reports:** Financial, Sales, Custom, Settings.
**Analytics:** Traffic, Conversions, Sources, Settings.
**Dashboards:** My Dashboards, Shared, Templates, Settings.
**Products:** All Products, Categories, Variants, Settings.
**Orders:** All Orders, Pending, Shipped, Delivered, Settings.
**Storefront:** Products, Orders, Settings.
**Shipping:** Rates, Tracking, Settings.
**Chat:** Channels, Direct, Threads, Settings.
**Meetings:** Upcoming, Past, Agendas, Settings.
**Video Calls:** Start, Schedule, History, Settings.
**Announcements:** All, Unread, Settings.
**Documents:** All, Recent, Shared, Settings.
**Website Builder:** Pages, Templates, Settings.
**Blog:** Posts, Drafts, Categories, Settings.
**Metis:** Chat, Memory, Voice, Settings.
**Metisbook:** Sources, Summaries, Audio, Settings.
**MorningBrief:** Today, History, Settings.
**Memory:** Timeline, Search, Settings.
**Calendar:** Day, Week, Month, Settings.
**Focus:** Timer, Sounds, Stats, Settings.

**Features without Feature Nav:** Base, Kanban, Sprints, Whiteboard, Surveys, Forecasts, Commissions, Territories, Discounts, Landing Pages, Community, Contracts, Compliance, Training.

These have one view. The Feature Nav space is reserved but empty.

---

# PART 13: THE PAGES AND ROUTES FOR EACH FEATURE

**CRM:** `/crm`, `/crm/contact/{id}`, `/crm/deals`, `/crm/company/{id}`, `/crm/settings`.
**Leads:** `/leads`, `/leads/lead/{id}`, `/leads/scoring`, `/leads/nurturing`, `/leads/settings`.
**Proposals:** `/proposals`, `/proposals/proposal/{id}`, `/proposals/drafts`, `/proposals/sent`, `/proposals/accepted`, `/proposals/settings`.
**Quotes:** `/quotes`, `/quotes/quote/{id}`, `/quotes/drafts`, `/quotes/sent`, `/quotes/accepted`, `/quotes/settings`.
**Pipeline:** `/pipeline`, `/pipeline/sources`, `/pipeline/settings`.
**Invoicing:** `/invoicing`, `/invoicing/invoice/{id}`, `/invoicing/drafts`, `/invoicing/sent`, `/invoicing/paid`, `/invoicing/overdue`, `/invoicing/settings`.
**Payments:** `/payments`, `/payments/payment/{id}`, `/payments/received`, `/payments/pending`, `/payments/refunds`, `/payments/settings`.
**Finance:** `/finance`, `/finance/income`, `/finance/expenses`, `/finance/budgets`, `/finance/settings`.
**Taxes:** `/taxes`, `/taxes/obligations`, `/taxes/deductions`, `/taxes/filings`, `/taxes/settings`.
**Subscriptions:** `/subscriptions`, `/subscriptions/active`, `/subscriptions/renewals`, `/subscriptions/history`, `/subscriptions/settings`.
**Expenses:** `/expenses`, `/expenses/expense/{id}`, `/expenses/pending`, `/expenses/approved`, `/expenses/settings`.
**Projects:** `/projects`, `/projects/project/{id}`, `/projects/completed`, `/projects/archived`, `/projects/settings`.
**Tasks:** `/tasks`, `/tasks/task/{id}`, `/tasks/today`, `/tasks/upcoming`, `/tasks/settings`.
**Time Tracking:** `/time`, `/time/timesheet/{id}`, `/time/timer`, `/time/reports`, `/time/settings`.
**Inventory:** `/inventory`, `/inventory/item/{id}`, `/inventory/stock`, `/inventory/reorder`, `/inventory/locations`, `/inventory/settings`.
**Supply Chain:** `/supply-chain`, `/supply-chain/supplier/{id}`, `/supply-chain/suppliers`, `/supply-chain/lead-times`, `/supply-chain/logistics`, `/supply-chain/settings`.
**Procurement:** `/procurement`, `/procurement/po/{id}`, `/procurement/purchase-orders`, `/procurement/approvals`, `/procurement/receiving`, `/procurement/settings`.
**Vendors:** `/vendors`, `/vendors/vendor/{id}`, `/vendors/contracts`, `/vendors/performance`, `/vendors/settings`.
**Assets:** `/assets`, `/assets/asset/{id}`, `/assets/assignment`, `/assets/depreciation`, `/assets/settings`.
**Team:** `/team`, `/team/member/{id}`, `/team/roles`, `/team/permissions`, `/team/settings`.
**HR:** `/hr`, `/hr/employee/{id}`, `/hr/onboarding`, `/hr/offboarding`, `/hr/leave`, `/hr/settings`.
**Payroll:** `/payroll`, `/payroll/run`, `/payroll/history`, `/payroll/payslip/{id}`, `/payroll/settings`.
**Recruitment:** `/recruitment`, `/recruitment/opening/{id}`, `/recruitment/openings`, `/recruitment/applicants`, `/recruitment/interviews`, `/recruitment/settings`.
**Campaigns:** `/campaigns`, `/campaigns/campaign/{id}`, `/campaigns/active`, `/campaigns/scheduled`, `/campaigns/past`, `/campaigns/settings`.
**Email Marketing:** `/email`, `/email/campaign/{id}`, `/email/campaigns`, `/email/templates`, `/email/lists`, `/email/settings`.
**Social Media:** `/social`, `/social/post/{id}`, `/social/scheduled`, `/social/published`, `/social/analytics`, `/social/settings`.
**SEO:** `/seo`, `/seo/keywords`, `/seo/rankings`, `/seo/audits`, `/seo/settings`.
**Forms:** `/forms`, `/forms/form/{id}`, `/forms/submissions`, `/forms/settings`.
**Tickets:** `/tickets`, `/tickets/ticket/{id}`, `/tickets/open`, `/tickets/assigned`, `/tickets/closed`, `/tickets/settings`.
**Live Chat:** `/live-chat`, `/live-chat/active`, `/live-chat/history`, `/live-chat/canned-responses`, `/live-chat/settings`.
**Knowledge Base:** `/knowledge-base`, `/knowledge-base/article/{id}`, `/knowledge-base/articles`, `/knowledge-base/categories`, `/knowledge-base/search`, `/knowledge-base/settings`.
**Reports:** `/reports`, `/reports/report/{id}`, `/reports/financial`, `/reports/sales`, `/reports/custom`, `/reports/settings`.
**Analytics:** `/analytics`, `/analytics/traffic`, `/analytics/conversions`, `/analytics/sources`, `/analytics/settings`.
**Dashboards:** `/dashboards`, `/dashboards/dashboard/{id}`, `/dashboards/mine`, `/dashboards/shared`, `/dashboards/templates`, `/dashboards/settings`.
**Products:** `/products`, `/products/product/{id}`, `/products/categories`, `/products/variants`, `/products/settings`.
**Orders:** `/orders`, `/orders/order/{id}`, `/orders/pending`, `/orders/shipped`, `/orders/delivered`, `/orders/settings`.
**Storefront:** `/storefront`, `/storefront/products`, `/storefront/orders`, `/storefront/settings`.
**Shipping:** `/shipping`, `/shipping/rates`, `/shipping/tracking`, `/shipping/settings`.
**Chat:** `/chat`, `/chat/channel/{id}`, `/chat/channels`, `/chat/direct`, `/chat/threads`, `/chat/settings`.
**Meetings:** `/meetings`, `/meetings/meeting/{id}`, `/meetings/upcoming`, `/meetings/past`, `/meetings/agendas`, `/meetings/settings`.
**Video Calls:** `/video`, `/video/call/{id}`, `/video/start`, `/video/schedule`, `/video/history`, `/video/settings`.
**Announcements:** `/announcements`, `/announcements/announcement/{id}`, `/announcements/all`, `/announcements/unread`, `/announcements/settings`.
**Documents:** `/documents`, `/documents/doc/{id}`, `/documents/recent`, `/documents/shared`, `/documents/settings`.
**Website Builder:** `/website`, `/website/page/{id}`, `/website/pages`, `/website/templates`, `/website/settings`.
**Blog:** `/blog`, `/blog/post/{id}`, `/blog/posts`, `/blog/drafts`, `/blog/categories`, `/blog/settings`.
**Metis:** `/metis`, `/metis/memory`, `/metis/voice`, `/metis/settings`.
**Metisbook:** `/metisbook`, `/metisbook/source/{id}`, `/metisbook/sources`, `/metisbook/summaries`, `/metisbook/audio`, `/metisbook/settings`.
**MorningBrief:** `/morningbrief`, `/morningbrief/today`, `/morningbrief/history`, `/morningbrief/settings`.
**Memory:** `/memory`, `/memory/memory/{id}`, `/memory/timeline`, `/memory/search`, `/memory/settings`.
**Calendar:** `/calendar`, `/calendar/event/{id}`, `/calendar/day`, `/calendar/week`, `/calendar/month`, `/calendar/settings`.
**Focus:** `/focus`, `/focus/timer`, `/focus/sounds`, `/focus/stats`, `/focus/settings`.
**Base:** `/base`.
**Kanban:** `/kanban`.
**Sprints:** `/sprints`.
**Whiteboard:** `/whiteboard`.
**Surveys:** `/surveys`.
**Forecasts:** `/forecasts`.
**Commissions:** `/commissions`.
**Territories:** `/territories`.
**Discounts:** `/discounts`.
**Landing Pages:** `/landing-pages`.
**Community:** `/community`.
**Contracts:** `/contracts`.
**Compliance:** `/compliance`.
**Training:** `/training`.

---

# PART 14: THE INTEGRATION PLAN

Features do not call each other directly. They ask the app. The app routes the call.

Metis asks the app for CRM data. The app reads CRM. The app returns the data to Metis.

Invoicing asks the app for CRM data. The app reads CRM. The app returns the data to Invoicing.

Projects asks the app for Team data. The app reads Team. The app returns the data to Projects.

Reports asks the app for Finance data. The app reads Finance. The app returns the data to Reports.

This keeps features independent. If CRM is replaced, Invoicing does not care. The app routes to the new version.

---

# PART 15: THE ONBOARDING FLOW

Screen 1: Welcome. "Dynamics 7 is your business, run well. Let's set it up."
Screen 2: Name. "What should we call you?"
Screen 3: Company name. "What is your company called?"
Screen 4: What do you want to improve? Sales. Finance. Operations. People. Support.
Screen 5: TELOS interview. Metis asks who you are, what you're building, who matters, where you want to go.
Screen 6: First contact. "Add your first contact."
Screen 7: Connect storage. Google Drive, OneDrive, or Dropbox.
Screen 8: Connect AI key. Or use the built-in Metis.
Screen 9: Done. "Welcome to Dynamics 7."

---

# PART 16: THE SETTINGS PAGES

Profile. Name. Email. Avatar. Bio.
Account. Password. Email. Phone. Two-factor.
Billing. Plan. Payment methods. Invoices.
Storage. Connected storage providers.
AI. BYOK keys. Usage. Credits.
Notifications. Email. Push. In-app.
Privacy. Data sharing. Analytics.
Security. Sessions. Devices. API keys.
Team. Members. Roles. Permissions.
Danger Zone. Export data. Delete account.

---

# PART 17: THE ADMIN PAGES

Dashboard. Users. Revenue. Usage. Errors.
Users. List. Search. Filter. Details.
Billing. Plans. Subscriptions. Invoices. Payments.
AI. Providers. Models. Usage. Pricing. Daily free tokens.
Features. Feature flags. Enable. Disable. Roll out.
Logs. Error logs. Access logs. Audit logs.
Monitoring. Uptime. Latency. Errors. Alerts.
Settings. Global settings. Email templates. Webhooks.
Tenants. List. Search. Filter. Details.

---

# PART 18: THE API KEYS (13 TYPES GROUPED INTO 5 FAMILIES)

## Family 1: API Keys

These are the static tokens. They are created in the console. They are scoped. One key can do one job or many jobs depending on the scope.

**Public API Key** — Scoped to `read:public`. Exposed in client. Read-only public data.

**Secret API Key** — Scoped to `read:*`, `write:*`. Server-side only. Full access.

**Read-Only Key** — Scoped to `read:{feature}`. Fetch only.

**Read-Write Key** — Scoped to `read:{feature}`, `write:{feature}`. Create, update, delete.

**AppCode** — Simple header token for internal low-security calls. Format: `X-App-Code: {value}`.

**HMAC API Key** — Signed request. Key ID + secret. For secure webhook validation.

**Service Account Key** — Machine identity. `client_id` + `client_secret` or JWT. For automation, CI/CD.

**Internal Integration Key** — Format: `{feature}191210`. First-party service-to-service calls. Headers: `X-Internal-Token: 191210` and `X-Service-Key: {feature}191210`.

## Family 2: OAuth 2.0

**OAuth 2.0 Authorization Code** — User grants permission. Redirect flow. Code exchange.

**OAuth 2.0 Client Credentials** — Server-to-server. No user.

These two are not separate credentials. They are two flows of the same OAuth client. One `client_id`. One `client_secret`. Two grant types.

## Family 3: Personal Access Tokens (PAT)

**Personal Access Token (PAT)** — User-generated. Scoped to specific permissions. Has an expiration date. Format: `pat_{random}`.

## Family 4: Enterprise SSO

**SAML 2.0 Assertion** — XML-based authentication. Identity Provider sends a signed assertion. Service Provider validates it. Used for Okta, Azure AD, OneLogin.

## Family 5: Transport Security

**mTLS Certificate** — X.509 certificate. Both client and server present certificates. Mutual authentication. Used inside Kubernetes service mesh, internal APIs.

---

## The Internal Key Pattern

Each feature gets its own internal key: `crm191210`, `invoicing191210`, `projects191210`, `finance191210`, `reports191210`, `tickets191210`.

Every internal request carries two headers: `X-Internal-Token: 191210` and `X-Service-Key: crm191210`.

---

## The Create Key Form

When the user clicks "Create API Key," a modal opens.

Field 1: Name. Text input. What do you want to call this key?

Field 2: Scope. Checkboxes. `read`, `write`, `public`, `internal`, `hmac`, `service`, `all`.

Field 3: Expiration. Optional. Never, 30 days, 90 days, 1 year.

Field 4: Rate Limit. Optional. Custom rate limit for this key.

Button: Create. The key is created. The secret is shown once. The user copies it. The user cannot see it again.

---

## The API Endpoints for Key Management

```
GET    /api/v1/{feature}/keys
POST   /api/v1/{feature}/keys
GET    /api/v1/{feature}/keys/{id}
PATCH  /api/v1/{feature}/keys/{id}
DELETE /api/v1/{feature}/keys/{id}
POST   /api/v1/{feature}/keys/{id}/rotate
```

```
GET    /api/v1/{feature}/pats
POST   /api/v1/{feature}/pats
GET    /api/v1/{feature}/pats/{id}
DELETE /api/v1/{feature}/pats/{id}
```

```
GET    /api/v1/{feature}/oauth/apps
POST   /api/v1/{feature}/oauth/apps
GET    /api/v1/{feature}/oauth/apps/{id}
PATCH  /api/v1/{feature}/oauth/apps/{id}
DELETE /api/v1/{feature}/oauth/apps/{id}
POST   /api/v1/{feature}/oauth/apps/{id}/rotate
```

---

## The Database Tables for Keys

The `api_keys` table has `id`, `feature`, `tenant_id`, `user_id`, `name`, `key_hash`, `key_prefix`, `scopes`, `rate_limit`, `expires_at`, `last_used_at`, `created_at`, `revoked_at`.

The `personal_access_tokens` table has `id`, `user_id`, `name`, `token_hash`, `token_prefix`, `scopes`, `expires_at`, `last_used_at`, `created_at`, `revoked_at`.

The `oauth_apps` table has `id`, `feature`, `tenant_id`, `user_id`, `name`, `client_id`, `client_secret_hash`, `redirect_uris`, `scopes`, `created_at`, `revoked_at`.

The `oauth_tokens` table has `id`, `oauth_app_id`, `user_id`, `access_token_hash`, `refresh_token_hash`, `scopes`, `expires_at`, `created_at`, `revoked_at`.

The `internal_keys` table has `id`, `feature`, `key`, `created_at`. Populated automatically. Not user-editable.

---

## Are Keys Free?

Yes. Keys are free. Always. On all tiers. The tier difference is rate limit, max keys, and scope access. Not the price of keys.

---

# PART 19: THE METERED AI

AI is separate from the subscription. Always separate. Not part of the subscription.

## The Admin Page

The admin page has a section called Metered AI. Only admins can access it. It has four tabs.

Tab 1 is Providers. A list of providers. Each provider shows its name, base URL, and status.

Tab 2 is Models. A list of models. Each model shows its name, provider, price per million tokens, and status. A button to set a model as default.

Tab 3 is Usage. A chart showing token usage over time. A table showing usage per model. A table showing usage per user.

Tab 4 is Settings. The default model. The daily free tokens. The reset time. The refill time.

## The Add Model Form

Field 1: Name. The name the user sees. "Metis." "Metis Suri." Anything.
Field 2: Is Default? A toggle.
Field 3: Tokens Per Day. Only if default.
Field 4: Reset Time. Only if default. Default is 11 PM.
Field 5: Refill Time. Only if default. Default is 12 AM Pacific Time.
Field 6: Provider. OpenRouter. Groq. OpenAI. Google. DeepInfra. Anthropic. Mistral. Cohere. Together AI. Custom.
Field 7: Base URL.
Field 8: API Key. Stored encrypted in DB. Not in env.
Field 9: Real Model ID.
Field 10: Price Per Million Tokens.
Field 11: OpenRouter Fee. 5.5%.
Field 12: Paystack Fee. 1.5-3.9%.
Field 13: Your Fee. 30%.

## The 7 Metis Models

**metis** — 7B. Free. Default. Routes to the cheapest model. `meta-llama/llama-3.2-1b-instruct` or `meta-llama/llama-3.1-8b-instruct`.

**metis-kessa** — 13B. Paid. Routes to a cheap mid-tier model. `meta-llama/llama-3.2-3b-instruct` or `google/gemini-2.5-flash-lite`.

**metis-toru** — 34B. Paid. Routes to a mid-tier model. `meta-llama/llama-3.1-70b-instruct` or `mistralai/mistral-small-3.2`.

**metis-veyra** — 70B. Paid. Routes to a strong model. `meta-llama/llama-3.3-70b-instruct` or `anthropic/claude-haiku-4.5`.

**metis-zamu** — 130B. Paid. Routes to a stronger model. `openai/gpt-4o-mini` or `anthropic/claude-sonnet-5.5`.

**metis-noki** — 400B. Paid. Routes to a premium model. `openai/gpt-5.2` or `anthropic/claude-opus-4.5`.

**metis-suri** — 1.2T. Paid. Routes to the most expensive model. `openai/gpt-5.2-turbo` or `google/gemini-3-ultra`.

These are UI defaults. Admin can change everything.

## The User Experience

The user opens Metis. They see the default model. They see their free tokens for the day. They use them. When they run out, a banner appears.

The banner says: "You have used all your free tokens for today. They will reset at 11 PM. Or you can buy more tokens."

The banner has three buttons: "Wait until tomorrow." "Buy more tokens." "Use BYOK."

If they click "Buy more tokens," a modal appears. The modal shows all paid models. The user chooses a model. The user chooses an amount. The user pays. The tokens are added. The tokens persist forever.

If they click "Use BYOK," a modal appears. The modal shows all supported providers. The user chooses a provider. The user pastes their API key. The key is stored encrypted.

## Token Counting

OpenRouter returns a `usage` object in every response. It includes `prompt_tokens`, `completion_tokens`, `total_tokens`, and the exact `cost`.

Groq returns the same thing.

You read the usage. You deduct the user's balance. You record the transaction. Real time. Exact.

## The Reset

The free tokens reset daily at 11 PM. If the user did not use all of them, they are gone. This keeps the free tier free.

At 12 AM Pacific Time, the free tokens refill.

## The Free Token Amount by Tier

Hobby gets 5,000 tokens per day on Metis.
Basic gets 10,000 tokens per day on Metis.
Base gets 25,000 tokens per day on Metis.
Super gets 50,000 tokens per day on Metis.

The free tokens are only for Metis (the free model). They cannot be used on paid models. A user who wants more buys tokens on another model. The bought tokens persist forever.

---

# PART 20: THE USER-PROVIDED AI

The user adds their AI provider key in Settings. The key is stored encrypted in the user's own database row. Every feature reads it when it needs AI.

Supported providers:

1. OpenRouter
2. OpenAI
3. Anthropic (Claude)
4. Google (Gemini)
5. DeepSeek
6. Mistral
7. Groq
8. xAI (Grok)
9. Perplexity
10. Together AI
11. DeepInfra
12. Ollama
13. OpenAI Compatible

Each shows its real icon. Each is real. Each works.

Built-in AI (Metis) works out of the box. BYOK is also supported. Two paths.

Path 1 is Built-in AI. Metis works immediately. You provide the key. You charge credits.
Path 2 is BYOK. User brings their own key. No markup. They pay their provider directly.

BYOK is user-pastes-key. No redirect. Every platform does it this way.

---

# PART 21: THE USER-PROVIDED STORAGE

The user connects their storage in Settings. Three options: Google Drive, OneDrive, Dropbox. Each is toggled independently in `.env`.

```
GOOGLE_DRIVE_ENABLED=true
ONEDRIVE_ENABLED=true
DROPBOX_ENABLED=true
```

If a toggle is off, that drive is hidden.

OAuth flow. The app stores the connection token. When a feature needs to store media, it asks the app for the storage connection. The app returns the connection. The feature uploads. The storage returns a URL. The feature stores the URL.

We do not host files. We do not sell storage. The user's own storage.

---

# PART 22: THE PRICING

## The Tiers

**Hobby** is free. One user. Can collaborate. Can share. Shared Hobby exists. 5,000 free Metis tokens per day. 2 API keys max. 10 requests/minute. Scopes: read, write, public.

**Basic** is $9.99 per user per month. All features. 10,000 free Metis tokens per day. 10 API keys max. 60 requests/minute. Scopes: read, write, public, internal.

**Base** is $19.99 per user per month. All features. 25,000 free Metis tokens per day. 50 API keys max. 200 requests/minute. Scopes: read, write, public, internal, hmac, service.

**Super** is $29.99 per user per month. All features. 50,000 free Metis tokens per day. Unlimited API keys. 1000 requests/minute. All scopes.

**Enterprise** is custom. All features. Custom tokens. Unlimited keys. Custom rate limit. All scopes plus SAML and mTLS.

## Shared Plans

Shared Hobby exists. It is free. One payer can pay for as many people as they want. We tick everyone. We calculate. We place a discount. The discount is ours to decide.

Shared Basic is $9.99 times the number of users. Payer ticks everyone. We calculate. We place a discount.

Shared Base is $19.99 times the number of users. Same.

Shared Super is $29.99 times the number of users. Same.

The discount is applied by the admin. It is not automatic. The admin decides the discount percentage. The admin applies it.

## The Rules

All tiers can collaborate. Hobby, Basic, Base, Super. No tier is blocked from sharing.

Shared plans are per-user pricing times the number of users. The payer ticks everyone. We calculate. We place a discount.

A paid plan covers the user in tenant and personal. No double charging.

A tenant owner can pay for unpaid members. The owner ticks them. We calculate. We place the discount.

Paying this money does not add a dime to your metered AI.

## Payment Gateways

Both Stripe and Paystack appear on the pricing screen. The user chooses. Each is toggled independently in `.env`.

```
STRIPE_ENABLED=true
PAYSTACK_ENABLED=true
```

If a toggle is off, that gateway is hidden.

---

# PART 23: THE RATE LIMITS BY TIER

Hobby: 10 requests per minute. 2 API keys max. Scopes: read, write, public.

Basic: 60 requests per minute. 10 API keys max. Scopes: read, write, public, internal.

Base: 200 requests per minute. 50 API keys max. Scopes: read, write, public, internal, hmac, service.

Super: 1000 requests per minute. Unlimited API keys. All scopes.

Enterprise: Custom. Unlimited keys. All scopes plus SAML and mTLS.

Auth endpoints: 5 requests per minute.
AI endpoints: 20 requests per minute.
Data endpoints: 100 requests per minute.

---

# PART 24: THE FILE STRUCTURE

```
metierbm/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── layout.tsx
│   ├── (app)/
│   │   ├── layout.tsx
│   │   ├── base/page.tsx
│   │   ├── metis/page.tsx
│   │   ├── pipeline/page.tsx
│   │   ├── crm/
│   │   ├── invoicing/
│   │   ├── quotes/
│   │   ├── orders/
│   │   ├── products/
│   │   ├── payments/
│   │   ├── projects/
│   │   ├── documents/
│   │   ├── calendar/
│   │   ├── focus/
│   │   ├── tasks/
│   │   ├── team/
│   │   ├── hr/
│   │   ├── payroll/
│   │   ├── recruitment/
│   │   ├── finance/
│   │   ├── subscriptions/
│   │   ├── reports/
│   │   ├── taxes/
│   │   ├── campaigns/
│   │   ├── leads/
│   │   ├── analytics/
│   │   ├── tickets/
│   │   ├── knowledge/
│   │   ├── chat/
│   │   ├── meetings/
│   │   ├── announcements/
│   │   ├── metisbook/
│   │   ├── morningbrief/
│   │   ├── vendors/
│   │   ├── procurement/
│   │   ├── inventory/
│   │   ├── assets/
│   │   ├── profile/
│   │   ├── settings/page.tsx
│   │   └── more/page.tsx
│   └── api/
│       ├── auth/[...nextauth]/route.ts
│       ├── v1/
│       │   ├── crm/
│       │   ├── invoicing/
│       │   ├── projects/
│       │   ├── finance/
│       │   ├── reports/
│       │   ├── tickets/
│       │   └── keys/
│       ├── webhooks/
│       │   ├── stripe/route.ts
│       │   └── paystack/route.ts
│       └── events/route.ts
│
├── features/
│   ├── base/
│   │   ├── components/
│   │   ├── queries.ts
│   │   ├── actions.ts
│   │   ├── schema.ts
│   │   └── nav.ts
│   ├── crm/
│   │   ├── components/
│   │   ├── queries.ts
│   │   ├── actions.ts
│   │   ├── schema.ts
│   │   ├── api-keys.ts
│   │   └── nav.ts
│   ├── invoicing/
│   ├── projects/
│   ├── finance/
│   ├── reports/
│   ├── tickets/
│   ├── metis/
│   ├── pipeline/
│   ├── memory/
│   ├── hr/
│   ├── payroll/
│   └── ... (every feature gets its own folder)
│
├── components/
│   ├── shell/
│   │   ├── GlobalSidebar.tsx
│   │   ├── MobileDock.tsx
│   │   ├── TopBar.tsx
│   │   ├── FeatureNav.tsx
│   │   ├── FeatureNavMobile.tsx
│   │   └── MorePanel.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── Sheet.tsx
│       ├── Table.tsx
│       ├── Tabs.tsx
│       ├── Badge.tsx
│       ├── Avatar.tsx
│       ├── Dropdown.tsx
│       └── Toast.tsx
│
├── lib/
│   ├── auth/
│   ├── db/
│   ├── api-keys/
│   ├── internal-keys/
│   ├── event-bus/
│   ├── billing/
│   ├── redis/
│   ├── storage/
│   ├── ai/
│   └── utils/
│
├── admin/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── logs/page.tsx
│   │   ├── monitoring/page.tsx
│   │   └── users/page.tsx
│   └── lib/auth.ts
│
├── public/
├── .env.example
├── .env.local
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

Rules:
`app/` is for routes only. Every folder maps to a URL.
`features/` is where feature logic lives. One folder per feature.
`components/shell/` is the shell UI. Not a feature.
`components/ui/` is primitives.
`lib/` is shared logic.
`admin/` is a separate app inside the same repo.

---

# PART 25: THE DATABASE

One database. Tables prefixed by feature.

```
metierbm_db
├── core_users
├── core_sessions
├── tenants
├── tenant_members
├── groups
├── group_members
├── crm_contacts
├── crm_deals
├── crm_companies
├── leads_leads
├── proposals_proposals
├── quotes_quotes
├── invoicing_invoices
├── invoicing_line_items
├── payments_payments
├── finance_transactions
├── taxes_taxes
├── subscriptions_subscriptions
├── expenses_expenses
├── projects_projects
├── projects_tasks
├── time_timesheets
├── inventory_items
├── supply_chain_suppliers
├── procurement_purchase_orders
├── vendors_vendors
├── assets_assets
├── team_members
├── hr_employees
├── payroll_payslips
├── recruitment_applicants
├── campaigns_campaigns
├── email_campaigns
├── social_posts
├── seo_keywords
├── forms_forms
├── tickets_tickets
├── live_chat_sessions
├── knowledge_base_articles
├── reports_reports
├── analytics_events
├── dashboards_dashboards
├── products_products
├── orders_orders
├── storefront_storefronts
├── shipping_shipments
├── chat_channels
├── meetings_meetings
├── video_calls
├── announcements_announcements
├── documents_documents
├── website_pages
├── blog_posts
├── metis_conversations
├── metis_messages
├── metis_memory
├── metisbook_sources
├── morningbrief_briefs
├── memory_entries
├── calendar_events
├── focus_sessions
├── ai_providers
├── ai_models
├── ai_tokens
├── ai_usage
├── ai_daily_free
├── api_keys
├── personal_access_tokens
├── oauth_apps
├── oauth_tokens
├── internal_keys
├── event_log
└── ... (tables for every feature)
```

Auth lives in `core_users`. One login. One session. All features read from it.

No per-feature databases. No schemas. Prefixes only.

---

# PART 26: THE FIRST 8 THINGS TO BUILD

1. Repo scaffold — `npx create-next-app@latest metierbm`
2. Auth — email/password + Google button + `core_users` table + login/register pages
3. DB client — Drizzle connected to standard PostgreSQL
4. App layout — `app/(app)/layout.tsx` with GlobalSidebar + TopBar + MobileDock
5. Mobile Feature Nav dropdown — the chevron next to the hamburger
6. CRM feature end-to-end — CRM is the heart. Build it first.
7. Feature Nav — `features/crm/nav.ts` renders in the desktop sidebar and mobile dropdown
8. One API endpoint — `POST /api/v1/crm/contacts` with bearer auth and scopes

After step 8, Dynamics 7's skeleton is alive. Everything else is replication.

---

# PART 27: WHAT IS DEFERRED

SAML / Okta SSO. mTLS. Domain-wide delegation. Multi-region deployment. Mobile APK / iOS app. Desktop EXE. Dedicated search index. Real-time websockets.

Add them when a real user asks.

---

# PART 28: THE FINAL WORD

Dynamics 7 is one app. One login. One database. One AI. Many features. One user. One business. Run well.

No ads. No algorithm. No infinite scroll. No training on your data. No deletion. No shame. No chasing.

The record is the point.

---

**END OF DYNAMICS 7 — METIERBM BUILD PROMPT**

**Version 2.0**
**2026**
