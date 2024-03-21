import getCSS from "./getCSS"
import getScripts from "./getScripts"

export default function(HomeComponentHtml, url, store) {
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            ${getCSS()}
        </head>
        <body>
            <div id='root'>${HomeComponentHtml}</div>
            <!-- 这个代码是服务器将数据脱水给客户端，同步给客户端，不然会报错：客户端和服务端两端UI不一致 -->
            <script>
                window.pageDatas = ${JSON.stringify(store.getState())}
                window.pathName = '${url}'
            </script>
            ${getScripts()}
        </body>
        </html>
    `

    return html
}