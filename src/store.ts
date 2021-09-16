type State = {
    currentState: string,
    phone: string
};

type Action =
    | {
    type: 'index'
}
    |{
    type: 'SUCCESS_PHONE',
    phone: string,
    currentState: string
}

export const reducer = (state: State, action: Action) => {

    switch (action.type) {
        case 'index':
            return {
                ...state,
                currentState: 'index'
            };
        case 'SUCCESS_PHONE':
            return {
                ...state,
                currentState: 'phone',
                phone: action.phone
            }
        default:
            return {...state}
    }
    document.body.append(JSON.stringify(action.type));
};
