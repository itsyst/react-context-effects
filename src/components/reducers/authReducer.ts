interface LoginAction {
    type: 'Login';
    username: string
}

interface LogoutAction {
    type: 'Logout';
}

export type Action = LoginAction | LogoutAction

const loginStatusReducer = (state: string, action: Action): string => {
    if (action.type === 'Login') return action.username;
    if (action.type === 'Logout') return '';
    return state; // Default case returns current state
}

export default loginStatusReducer;