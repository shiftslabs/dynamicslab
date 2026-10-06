export interface UserSession {
  id: string;
  email: string;
  name: string;
  plan: string;
  avatarUrl?: string;
  tenantId: string;
  tenantName: string;
  role: string;
}

export const mockCurrentUser: UserSession = {
  id: 'usr_krack_123',
  email: 'krack@babblsoft.site',
  name: 'Krack',
  plan: 'Super',
  avatarUrl: '',
  tenantId: 'tnt_babblsoft_01',
  tenantName: 'BabblSoft Inc',
  role: 'Primary Owner',
};

export function verifyInternalKey(internalToken: string | null, serviceKey: string | null, feature: string): boolean {
  if (internalToken !== '191210') return false;
  if (!serviceKey || !serviceKey.startsWith(feature)) return false;
  return true;
}

export function getRateLimitForTier(tier: string): number {
  switch (tier.toLowerCase()) {
    case 'hobby': return 10;
    case 'basic': return 60;
    case 'base': return 200;
    case 'super': return 1000;
    case 'enterprise': return 5000;
    default: return 10;
  }
}
