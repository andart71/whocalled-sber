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
        default:
            return {...state}
    }
    document.body.append(JSON.stringify(action.type));
};
