import axios from 'axios';
import { create } from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { UserType } from "./UserType";

type Action = { type: 'Login'; username: string } | { type: 'Logout' };

interface AuthStore {
    loading: boolean;
    error: string | null;
    user: UserType | null,
    username: string,
    users: UserType[];
    onLogin: (user: UserType) => void,
    onLogout: () => void
    fetchUsers: () => Promise<void>;
    dispatch: (action: Action) => void; // Handles login and logout actions
}

const useAuthStore = create<AuthStore>(set => ({
    user: null,
    username: '',
    users: [],
    loading: false,
    error: null,
    onLogin: user => set(() => ({ user: user })),
    onLogout: () => set(() => ({ user: null })),
    fetchUsers: async () => {
        set({ loading: true, error: null });

        await axios
            .get<UserType[]>('https://jsonplaceholder.typicode.com/users')
            .then((res) => { set({ users: res.data, loading: false }) })
            .catch(() => {
                set({ error: 'Error fetching users', loading: false })
            })
    },

    // Dispatch function replaces the reducer
    dispatch: (action) => {
        set((state) => {
            switch (action.type) {
                case 'Login':
                    return { ...state, username: action.username };
                case 'Logout':
                    return { ...state, username: '' };
                default:
                    return state;
            }
        });
    },
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Auth Store', useAuthStore)
}
export default useAuthStore;