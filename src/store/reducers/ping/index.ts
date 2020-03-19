type State = {
    isPinging: boolean;
}

export default (state: State = { isPinging: false }, action: any) => {
    switch (action.type) {
        case 'PING':
            return {
                isPinging: true
            };

        case 'PONG':
            return {
                isPinging: false
            };

        default:
            return state;
    }
}
