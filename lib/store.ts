'use client';

export interface User {
  id: string;
  email: string;
  name: string;
  plan: string;
  companyName: string;
  tenantId: string;
  role: string;
  googleAuth?: boolean;
}

export interface Contact {
  id: string;
  tenantId: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: string;
  createdAt: string;
}

export interface Deal {
  id: string;
  tenantId: string;
  title: string;
  value: string;
  stage: string;
  contactName: string;
  createdAt: string;
}

export interface Invoice {
  id: string;
  tenantId: string;
  customerName: string;
  amount: string;
  status: string;
  dueDate: string;
  createdAt: string;
}

export interface Project {
  id: string;
  tenantId: string;
  name: string;
  status: string;
  progress: number;
  description: string;
  createdAt: string;
}

export interface MetisMsg {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface APIKeyItem {
  id: string;
  name: string;
  keyPrefix: string;
  keySecret: string;
  scopes: string;
  rateLimit: string;
  createdAt: string;
}

class StoreService {
  private isClient(): boolean {
    return typeof window !== 'undefined';
  }

  // --- AUTH & SESSION ---
  getCurrentUser(): User | null {
    if (!this.isClient()) return null;
    const data = localStorage.getItem('d7_session_user');
    return data ? JSON.parse(data) : null;
  }

  setCurrentUser(user: User | null): void {
    if (!this.isClient()) return;
    if (user) {
      localStorage.setItem('d7_session_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('d7_session_user');
    }
  }

  getUsers(): User[] {
    if (!this.isClient()) return [];
    const data = localStorage.getItem('d7_users');
    return data ? JSON.parse(data) : [];
  }

  registerUser(name: string, email: string, passwordHash: string, companyName: string): User {
    const users = this.getUsers();
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      throw new Error('User with this email already exists.');
    }

    const tenantId = `tenant_${Date.now()}`;
    const newUser: User = {
      id: `usr_${Date.now()}`,
      email,
      name,
      plan: 'Hobby',
      companyName: companyName || `${name}'s Workspace`,
      tenantId,
      role: 'Primary Owner',
    };

    users.push(newUser);
    if (this.isClient()) {
      localStorage.setItem('d7_users', JSON.stringify(users));
      // Save password hash separately
      localStorage.setItem(`d7_pass_${newUser.id}`, passwordHash);
    }

    this.setCurrentUser(newUser);
    return newUser;
  }

  loginUser(email: string, passwordHash: string): User {
    const users = this.getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      throw new Error('Invalid email or password.');
    }

    const savedPass = localStorage.getItem(`d7_pass_${user.id}`);
    if (savedPass && savedPass !== passwordHash) {
      throw new Error('Invalid email or password.');
    }

    this.setCurrentUser(user);
    return user;
  }

  googleLogin(email: string, name: string): User {
    const users = this.getUsers();
    let user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      const tenantId = `tenant_${Date.now()}`;
      user = {
        id: `usr_${Date.now()}`,
        email,
        name,
        plan: 'Hobby',
        companyName: `${name}'s Workspace`,
        tenantId,
        role: 'Primary Owner',
        googleAuth: true,
      };
      users.push(user);
      if (this.isClient()) {
        localStorage.setItem('d7_users', JSON.stringify(users));
      }
    }
    this.setCurrentUser(user);
    return user;
  }

  logout(): void {
    this.setCurrentUser(null);
  }

  // --- CRM CONTACTS ---
  getContacts(): Contact[] {
    if (!this.isClient()) return [];
    const user = this.getCurrentUser();
    if (!user) return [];
    const data = localStorage.getItem(`d7_contacts_${user.tenantId}`);
    return data ? JSON.parse(data) : [];
  }

  addContact(contact: Omit<Contact, 'id' | 'tenantId' | 'createdAt'>): Contact {
    const user = this.getCurrentUser();
    if (!user) throw new Error('Not authenticated');
    const contacts = this.getContacts();
    const newContact: Contact = {
      ...contact,
      id: `cnt_${Date.now()}`,
      tenantId: user.tenantId,
      createdAt: new Date().toLocaleDateString(),
    };
    contacts.unshift(newContact);
    if (this.isClient()) {
      localStorage.setItem(`d7_contacts_${user.tenantId}`, JSON.stringify(contacts));
    }
    return newContact;
  }

  deleteContact(id: string): void {
    const user = this.getCurrentUser();
    if (!user) return;
    const contacts = this.getContacts().filter(c => c.id !== id);
    if (this.isClient()) {
      localStorage.setItem(`d7_contacts_${user.tenantId}`, JSON.stringify(contacts));
    }
  }

  // --- DEALS ---
  getDeals(): Deal[] {
    if (!this.isClient()) return [];
    const user = this.getCurrentUser();
    if (!user) return [];
    const data = localStorage.getItem(`d7_deals_${user.tenantId}`);
    return data ? JSON.parse(data) : [];
  }

  addDeal(deal: Omit<Deal, 'id' | 'tenantId' | 'createdAt'>): Deal {
    const user = this.getCurrentUser();
    if (!user) throw new Error('Not authenticated');
    const deals = this.getDeals();
    const newDeal: Deal = {
      ...deal,
      id: `deal_${Date.now()}`,
      tenantId: user.tenantId,
      createdAt: new Date().toLocaleDateString(),
    };
    deals.unshift(newDeal);
    if (this.isClient()) {
      localStorage.setItem(`d7_deals_${user.tenantId}`, JSON.stringify(deals));
    }
    return newDeal;
  }

  // --- INVOICES ---
  getInvoices(): Invoice[] {
    if (!this.isClient()) return [];
    const user = this.getCurrentUser();
    if (!user) return [];
    const data = localStorage.getItem(`d7_invoices_${user.tenantId}`);
    return data ? JSON.parse(data) : [];
  }

  addInvoice(inv: Omit<Invoice, 'id' | 'tenantId' | 'createdAt'>): Invoice {
    const user = this.getCurrentUser();
    if (!user) throw new Error('Not authenticated');
    const invoices = this.getInvoices();
    const newInv: Invoice = {
      ...inv,
      id: `INV-${Math.floor(1000 + Math.random() * 9000)}`,
      tenantId: user.tenantId,
      createdAt: new Date().toLocaleDateString(),
    };
    invoices.unshift(newInv);
    if (this.isClient()) {
      localStorage.setItem(`d7_invoices_${user.tenantId}`, JSON.stringify(invoices));
    }
    return newInv;
  }

  // --- PROJECTS ---
  getProjects(): Project[] {
    if (!this.isClient()) return [];
    const user = this.getCurrentUser();
    if (!user) return [];
    const data = localStorage.getItem(`d7_projects_${user.tenantId}`);
    return data ? JSON.parse(data) : [];
  }

  addProject(proj: Omit<Project, 'id' | 'tenantId' | 'createdAt'>): Project {
    const user = this.getCurrentUser();
    if (!user) throw new Error('Not authenticated');
    const projects = this.getProjects();
    const newProj: Project = {
      ...proj,
      id: `prj_${Date.now()}`,
      tenantId: user.tenantId,
      createdAt: new Date().toLocaleDateString(),
    };
    projects.unshift(newProj);
    if (this.isClient()) {
      localStorage.setItem(`d7_projects_${user.tenantId}`, JSON.stringify(projects));
    }
    return newProj;
  }

  // --- METIS CHAT ---
  getMetisMessages(): MetisMsg[] {
    if (!this.isClient()) return [];
    const user = this.getCurrentUser();
    if (!user) return [];
    const data = localStorage.getItem(`d7_metis_${user.tenantId}`);
    return data ? JSON.parse(data) : [
      {
        id: 'msg_welcome',
        role: 'assistant',
        content: `Welcome to Dynamics 7, ${user.name}. I am Metis, your business operating companion. Add contacts, deals, or invoices to start seeing live insights.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  }

  addMetisMessage(role: 'user' | 'assistant', content: string): MetisMsg {
    const user = this.getCurrentUser();
    if (!user) throw new Error('Not authenticated');
    const msgs = this.getMetisMessages();
    const newMsg: MetisMsg = {
      id: `msg_${Date.now()}`,
      role,
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    msgs.push(newMsg);
    if (this.isClient()) {
      localStorage.setItem(`d7_metis_${user.tenantId}`, JSON.stringify(msgs));
    }
    return newMsg;
  }

  // --- API KEYS ---
  getAPIKeys(): APIKeyItem[] {
    if (!this.isClient()) return [];
    const user = this.getCurrentUser();
    if (!user) return [];
    const data = localStorage.getItem(`d7_apikeys_${user.tenantId}`);
    return data ? JSON.parse(data) : [];
  }

  addAPIKey(name: string, scopes: string, rateLimit: string): { keyItem: APIKeyItem; fullSecret: string } {
    const user = this.getCurrentUser();
    if (!user) throw new Error('Not authenticated');
    const keys = this.getAPIKeys();
    const prefix = `d7_live_${Math.random().toString(36).substring(2, 6)}`;
    const fullSecret = `${prefix}_${Math.random().toString(36).substring(2, 16)}`;

    const keyItem: APIKeyItem = {
      id: `key_${Date.now()}`,
      name,
      keyPrefix: prefix,
      keySecret: fullSecret,
      scopes,
      rateLimit,
      createdAt: new Date().toLocaleDateString()
    };

    keys.unshift(keyItem);
    if (this.isClient()) {
      localStorage.setItem(`d7_apikeys_${user.tenantId}`, JSON.stringify(keys));
    }
    return { keyItem, fullSecret };
  }

  deleteAPIKey(id: string): void {
    const user = this.getCurrentUser();
    if (!user) return;
    const keys = this.getAPIKeys().filter(k => k.id !== id);
    if (this.isClient()) {
      localStorage.setItem(`d7_apikeys_${user.tenantId}`, JSON.stringify(keys));
    }
  }
}

export const store = new StoreService();
