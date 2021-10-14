type State = {
    currentState: string,
    phone: object,
    countViews: number,
    userId: string,
    countLike: number,
    countDislike: number
};

type Action =
    | {
    type: 'index'
}
    |{
    type: 'SUCCESS_PHONE',
    phone: object,
    currentState: string,
    countViews: number,
    userId: string,
    countLike: number,
    countDislike: number
}
|{
    type: 'CHECK',
    currentState: string
}
|{
    type: 'POSITIVE',
    phone: object,
    currentState: string,
    countViews: number,
    userId: string,
    countLike: number,
    countDislike: number
}
    |{
    type: 'NEGATIVE',
    phone: object,
    currentState: string,
    countViews: number,
    userId: string,
    countLike: number,
    countDislike: number
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
                countViews: action.countViews,
                userId: action.userId,
                countLike: action.countLike,
                countDislike: action.countDislike
            }
        case 'CHECK':
            return {
                ...state,
                currentState: 'check'
            }
        case 'POSITIVE':
            return {
                ...state,
                currentState: 'positive',
                phone: action.phone,
                countViews: action.countViews,
                userId: action.userId,
                countLike: action.countLike,
                countDislike: action.countDislike
            }
            break;
        case 'NEGATIVE':
            return {
                ...state,
                currentState: 'negative',
                phone: action.phone,
                countViews: action.countViews,
                userId: action.userId,
                countLike: action.countLike,
                countDislike: action.countDislike
            }
            break;
        default:
            return {...state}
    }

};
