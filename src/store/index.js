import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import countReducer from "./count/reducer";
import movieReducer from "./movie/reducer";

const reducer = combineReducers({
    count: countReducer,
    movie: movieReducer,
});

function makeStore() {
    let store;

    if (global.document) {
        const composeEnhancers =
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        // 需要注意的是：客户端和服务端 store 是不一样的仓库，所以服务端初始化的数据，客户端是拿不到的
        // 因此，需要做如下操锁。第二个参数是服务器初始化了store 数据之后，脱水给客户端的，这里进行初始化
        store = createStore(
            reducer,
            window.pageDatas,
            composeEnhancers(applyMiddleware(thunk))
        );
    } else {
        store = createStore(reducer, applyMiddleware(thunk));
    }

    return store
}

export default makeStore;
