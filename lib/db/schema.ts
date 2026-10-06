import { pgTable, text, timestamp, boolean, integer, numeric, jsonb } from 'drizzle-orm/pg-core';

// --- CORE TABLES ---
export const coreUsers = pgTable('core_users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  passwordHash: text('password_hash'),
  avatarUrl: text('avatar_url'),
  plan: text('plan').default('hobby').notNull(),
  googleId: text('google_id'),
  isAdmin: boolean('is_admin').default(false),
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
  type: text('type').default('personal').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const tenantMembers = pgTable('tenant_members', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  userId: text('user_id').notNull(),
  role: text('role').default('Editor').notNull(),
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

// --- METISWORK & METISLOVEB TABLES ---
export const metisworkWorkflows = pgTable('metiswork_workflows', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  name: text('name').notNull(),
  triggerType: text('trigger_type').notNull(),
  actionType: text('action_type').notNull(),
  status: text('status').default('active').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const metislovebTools = pgTable('metisloveb_tools', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  category: text('category').notNull(),
  description: text('description').notNull(),
});

export const notifications = pgTable('notifications', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  userId: text('user_id').notNull(),
  type: text('type').notNull(), // AI Insights, Reminders, System
  title: text('title').notNull(),
  message: text('message').notNull(),
  read: boolean('read').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// --- CRM & OTHER TABLES ---
export const crmContacts = pgTable('crm_contacts', {
  id: text('id').primaryKey(),
  tenantId: text('tenant_id').notNull(),
  name: text('name').notNull(),
  email: text('email'),
  phone: text('phone'),
  company: text('company'),
  status: text('status').default('active'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
