import EncryptedStorage from 'react-native-encrypted-storage';
import {ROUTES} from '../../constants/enums';

const AUTH_ENTRY_SEEN_KEY = 'auth_entry_seen';

/**
 * New device users land on the auth-choice screen (AUTH).
 * Returning device users are sent directly to LOGIN.
 */
export async function resolveAuthEntryRoute(): Promise<
  ROUTES.AUTH | ROUTES.LOGIN
> {
  try {
    const hasSeenAuthEntry = await EncryptedStorage.getItem(
      AUTH_ENTRY_SEEN_KEY,
    );

    if (hasSeenAuthEntry === 'true') {
      return ROUTES.LOGIN;
    }

    await EncryptedStorage.setItem(AUTH_ENTRY_SEEN_KEY, 'true');
    return ROUTES.AUTH;
  } catch {
    // Storage access failed; keep the experience safe and explicit.
    return ROUTES.AUTH;
  }
}
