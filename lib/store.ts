'use client';

export interface User {
  id: string;
  email: string;
  name: string;
  plan: string;
  companyName: string;
  tenantId: string;
  role: string;
  isAdmin?: boolean;
}

export interface NotificationItem {
  id: string;
  type: 'AI Insights' | 'Reminders' | 'System';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export interface MetisworkWorkflow {
  id: string;
  name: string;
  trigger: string;
  action: string;
  status: 'Active' | 'Paused';
  runs: number;
}

class StoreService {
  private isClient(): boolean {
    return typeof window !== 'undefined';
  }

  getCurrentUser(): User | null {
    if (!this.isClient()) return null;
    const data = localStorage.getItem('d7_session_user');
    return data ? JSON.parse(data) : {
      id: 'usr_krack_123',
      email: 'krack@babblsoft.site',
      name: 'Krack',
      plan: 'Super',
      companyName: 'BabblSoft Inc',
      tenantId: 'tnt_babblsoft_01',
      role: 'Primary Owner',
      isAdmin: true,
    };
  }

  setCurrentUser(user: User | null): void {
    if (!this.isClient()) return;
    if (user) {
      localStorage.setItem('d7_session_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('d7_session_user');
    }
  }

  getNotifications(): NotificationItem[] {
    if (!this.isClient()) return [];
    const user = this.getCurrentUser();
    if (!user) return [];
    const data = localStorage.getItem(`d7_notifs_${user.tenantId}`);
    return data ? JSON.parse(data) : [
      { id: '1', type: 'AI Insights', title: 'Metis Recommendation', message: 'Follow up with David Miller regarding Globex deal renewal.', time: '10m ago', read: false },
      { id: '2', type: 'Reminders', title: 'Invoice Overdue', message: 'Invoice #1043 for $3,400 is overdue by 5 days.', time: '1h ago', read: false },
      { id: '3', type: 'System', title: 'Daily Backup Completed', message: 'All tenant records backed up to user storage.', time: '4h ago', read: true }
    ];
  }

  markNotificationRead(id: string): void {
    const user = this.getCurrentUser();
    if (!user) return;
    const notifs = this.getNotifications().map(n => n.id === id ? { ...n, read: true } : n);
    if (this.isClient()) {
      localStorage.setItem(`d7_notifs_${user.tenantId}`, JSON.stringify(notifs));
    }
  }

  getFavorites(): string[] {
    if (!this.isClient()) return ['/crm/', '/invoicing/', '/projects/'];
    const user = this.getCurrentUser();
    if (!user) return ['/crm/', '/invoicing/', '/projects/'];
    const data = localStorage.getItem(`d7_favs_${user.tenantId}`);
    return data ? JSON.parse(data) : ['/crm/', '/invoicing/', '/projects/'];
  }

  toggleFavorite(path: string): void {
    const user = this.getCurrentUser();
    if (!user) return;
    let favs = this.getFavorites();
    if (favs.includes(path)) {
      favs = favs.filter(p => p !== path);
    } else {
      if (favs.length < 3) favs.push(path);
    }
    if (this.isClient()) {
      localStorage.setItem(`d7_favs_${user.tenantId}`, JSON.stringify(favs));
    }
  }

  getMetisworkWorkflows(): MetisworkWorkflow[] {
    if (!this.isClient()) return [];
    const user = this.getCurrentUser();
    if (!user) return [];
    const data = localStorage.getItem(`d7_workflows_${user.tenantId}`);
    return data ? JSON.parse(data) : [
      { id: 'wf_1', name: 'New Lead to Slack & CRM', trigger: 'New Form Submission', action: 'Create CRM Contact & Send Slack Msg', status: 'Active', runs: 142 },
      { id: 'wf_2', name: 'Invoice Paid to Accounting Sync', trigger: 'Stripe Payment Received', action: 'Mark Invoice Paid & Send Receipt Email', status: 'Active', runs: 89 }
    ];
  }

  addMetisworkWorkflow(name: string, trigger: string, action: string): MetisworkWorkflow {
    const user = this.getCurrentUser();
    if (!user) throw new Error('Not authenticated');
    const list = this.getMetisworkWorkflows();
    const newWf: MetisworkWorkflow = {
      id: `wf_${Date.now()}`,
      name,
      trigger,
      action,
      status: 'Active',
      runs: 0
    };
    list.unshift(newWf);
    if (this.isClient()) {
      localStorage.setItem(`d7_workflows_${user.tenantId}`, JSON.stringify(list));
    }
    return newWf;
  }
}

export const store = new StoreService();
