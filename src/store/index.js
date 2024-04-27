import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import countReducer from "./count/reducer";
import movieReducer from "./movie/reducer";

const reducer = combineReducers({
    count: countReducer,
    movie: movieReducer,
});

// 为什么封装一个函数来返回一个 store 呢？
// 因为如果不这样做，假如说 A 同学访问了一次电影业，初始化了 store 的数据。
// 此时，B 同学也来访问了 首页，但是 A 访问 电影业的时候已经初始化了 store，并且通过 window.pageDatas 同步到客户端了，就会导致 B 同学访问 首页的时候，依然携带电影数据，这是不对的。
// 因此，这里这么处理，就是为了，每次请求都新建一个 干净的 store，互相不影响
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
