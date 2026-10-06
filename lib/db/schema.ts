import { pgTable, text, timestamp, boolean, integer, numeric, jsonb } from 'drizzle-orm/pg-core';

// --- CORE TABLES ---
export const coreUsers = pgTable('core_users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  passwordHash: text('password_hash'),
  avatarUrl: text('avatar_url'),
  plan: text('plan').default('hobby').notNull(), // hobby, basic, base, super, enterprise
  googleId: text('google_id'),
  legacyMode: boolean('legacy_mode').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const coreSessions = pgTable('core_sessions', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  token: text('token').notNull().unique(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const tenants = pgTable('tenants', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  ownerId: text('owner_id').notNull(),
  type: text('type').default('personal').notNull(), // personal, company
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const tenantMembers = pgTable('tenant_members', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  userId: text('user_id').notNull(),
  role: text('role').default('Editor').notNull(), // Primary Owner, Co-Owner, Admin, Editor, Viewer, Guest, Custom
  customRoleName: text('custom_role_name'),
  permissions: jsonb('permissions'),
  joinedAt: timestamp('joined_at').defaultNow().notNull(),
});

export const groups = pgTable('groups', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  name: text('name').notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const groupMembers = pgTable('group_members', {
  id: text('id').primaryKey(),
  groupId: text('group_id').notNull(),
  userId: text('user_id').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// --- API KEYS & AUTH TABLES ---
export const apiKeys = pgTable('api_keys', {
  id: text('id').primaryKey(),
  feature: text('feature').notNull(),
  tenantId: text('tenant_id').notNull(),
  userId: text('user_id').notNull(),
  name: text('name').notNull(),
  keyHash: text('key_hash').notNull(),
  keyPrefix: text('key_prefix').notNull(),
  scopes: text('scopes').notNull(), // read, write, public, internal, hmac, service
  rateLimit: integer('rate_limit').default(60),
  expiresAt: timestamp('expires_at'),
  lastUsedAt: timestamp('last_used_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  revokedAt: timestamp('revoked_at'),
});

export const personalAccessTokens = pgTable('personal_access_tokens', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  name: text('name').notNull(),
  tokenHash: text('token_hash').notNull(),
  tokenPrefix: text('token_prefix').notNull(),
  scopes: text('scopes').notNull(),
  expiresAt: timestamp('expires_at'),
  lastUsedAt: timestamp('last_used_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  revokedAt: timestamp('revoked_at'),
});

export const oauthApps = pgTable('oauth_apps', {
  id: text('id').primaryKey(),
  feature: text('feature').notNull(),
  tenantId: text('tenant_id').notNull(),
  userId: text('user_id').notNull(),
  name: text('name').notNull(),
  clientId: text('client_id').notNull().unique(),
  clientSecretHash: text('client_secret_hash').notNull(),
  redirectUris: text('redirect_uris').notNull(),
  scopes: text('scopes').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  revokedAt: timestamp('revoked_at'),
});

export const internalKeys = pgTable('internal_keys', {
  id: text('id').primaryKey(),
  feature: text('feature').notNull().unique(),
  key: text('key').notNull(), // e.g., crm191210
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// --- AI & METIS TABLES ---
export const aiProviders = pgTable('ai_providers', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  baseUrl: text('base_url').notNull(),
  apiKeyEncrypted: text('api_key_encrypted'),
  status: text('status').default('active').notNull(),
});

export const aiModels = pgTable('ai_models', {
  id: text('id').primaryKey(),
  name: text('name').notNull(), // metis, metis-kessa, metis-toru, metis-veyra, metis-zamu, metis-noki, metis-suri
  realModelId: text('real_model_id').notNull(),
  providerId: text('provider_id').notNull(),
  isDefault: boolean('is_default').default(false),
  tokensPerDay: integer('tokens_per_day').default(5000),
  pricePerMillion: numeric('price_per_million').default('0.00'),
  status: text('status').default('active').notNull(),
});

export const aiTokens = pgTable('ai_tokens', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  modelId: text('model_id').notNull(),
  balance: integer('balance').default(0).notNull(),
  purchased: integer('purchased').default(0).notNull(),
});

export const aiDailyFree = pgTable('ai_daily_free', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull(),
  date: text('date').notNull(), // YYYY-MM-DD
  usedTokens: integer('used_tokens').default(0).notNull(),
  maxTokens: integer('max_tokens').default(5000).notNull(),
});

export const metisConversations = pgTable('metis_conversations', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  userId: text('user_id').notNull(),
  title: text('title').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const metisMessages = pgTable('metis_messages', {
  id: text('id').primaryKey(),
  conversationId: text('conversation_id').notNull(),
  role: text('role').notNull(), // user, assistant, system
  content: text('content').notNull(),
  tokensUsed: integer('tokens_used').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// --- FEATURE SPECIFIC TABLES ---
export const crmContacts = pgTable('crm_contacts', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  name: text('name').notNull(),
  email: text('email'),
  phone: text('phone'),
  company: text('company'),
  notes: text('notes'),
  status: text('status').default('active'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const crmDeals = pgTable('crm_deals', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  title: text('title').notNull(),
  value: numeric('value').default('0.00'),
  stage: text('stage').default('lead'), // lead, proposal, qualified, won, lost
  contactId: text('contact_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const crmCompanies = pgTable('crm_companies', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  name: text('name').notNull(),
  industry: text('industry'),
  website: text('website'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const invoicingInvoices = pgTable('invoicing_invoices', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  customerName: text('customer_name').notNull(),
  amount: numeric('amount').notNull(),
  status: text('status').default('draft'), // draft, sent, paid, overdue
  dueDate: text('due_date'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const projectsProjects = pgTable('projects_projects', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  name: text('name').notNull(),
  status: text('status').default('active'), // active, completed, archived
  progress: integer('progress').default(0),
  deadline: text('deadline'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const projectsTasks = pgTable('projects_tasks', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  projectId: text('project_id'),
  title: text('title').notNull(),
  priority: text('priority').default('medium'), // low, medium, high
  completed: boolean('completed').default(false),
  assignedTo: text('assigned_to'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const financeTransactions = pgTable('finance_transactions', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  type: text('type').notNull(), // income, expense
  category: text('category').notNull(),
  amount: numeric('amount').notNull(),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const ticketsTickets = pgTable('tickets_tickets', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  subject: text('subject').notNull(),
  status: text('status').default('open'), // open, assigned, closed
  priority: text('priority').default('medium'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
