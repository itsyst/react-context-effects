import { create } from "zustand";
import { UserType } from "../../admin/types/UserType";
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface AuthStore {
    user: UserType | null,
    onLogin: (user: UserType) => void,
    onLogout: () => void
}

const useAuthStore = create<AuthStore>(set => ({
    user: null,
    onLogin: user => set(() => ({ user: user })),
    onLogout: () => set(() => ({ user: null })),
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Auth Store', useAuthStore)
}
export default useAuthStore;