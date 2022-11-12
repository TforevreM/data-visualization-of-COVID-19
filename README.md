项目的说明文档在主分支[传送门](https://github.com/foreverMMMM/data-visualization-of-COVID-19), 本篇仅介绍更新部分。

## 更新说明

之前为了准确获取服务器端的时间（假定网络延迟很小），我使用轮询的方法，每个一秒向服务器发送请求来更新时间：

![image](https://user-images.githubusercontent.com/81068011/201475105-70b7fd0b-34dc-441e-9b87-b84d847f0d83.png)


轮询，显然会造成服务端压力大，而且上述代码中的`setInterval` 并不能保证每隔一秒执行函数并获取时间。

我们只需要从服务器那边获取时间，那么`WebSocket` 和 `Server sent Events` 会是更好的选择。
- [WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSockets_API)
- [Server sent Events](https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events)

因为`WebSocket` 比较重量级，而且本项目中不需要客户端主动向服务端发送请求,只需服务端把时间传输过来，所以使用`Server sent Events` 更好。

主要更新在`app.py` 和 `templates/index.html` 中:

![image](https://user-images.githubusercontent.com/81068011/201475056-38f9d4a6-7766-4c79-8e00-df75ddbfbdb1.png)

![image](https://user-images.githubusercontent.com/81068011/201475180-6320a138-67e5-416b-b73c-762b377fd74f.png)


运行后的截图：

![image](https://user-images.githubusercontent.com/81068011/201475279-e613186e-1a1d-489a-aa0c-9f272a595bdf.png)


## 参考文章
1. [Python中使用 WebSocket 和 SSE 实现 HTTP 服务器消息推送](https://blog.csdn.net/weixin_44777680/article/details/114692497)
2. [Server-Sent Events 教程](https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html)
