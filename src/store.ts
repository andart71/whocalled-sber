type State = {
    currentState: string,
    phone: object,
    countViews: number
};

type Action =
    | {
    type: 'index'
}
    |{
    type: 'SUCCESS_PHONE',
    phone: object,
    currentState: string,
    countViews: number
}
|{
    type: 'CHECK',
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
                phone: action.phone,
                countViews: action.countViews
            }
        case 'CHECK':
            return {
                ...state,
                currentState: 'check'
            }
        default:
            return {...state}
    }
    document.body.append(JSON.stringify(action.type));
};
