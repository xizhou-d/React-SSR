import { CHANGE_LIST } from './contants'

export default function(state = [], {type, payload}) {
    switch(type) {
        case CHANGE_LIST:
            return payload
        default:
            return state
    }
}