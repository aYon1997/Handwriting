const http = require('http');

// 创建HTTP服务器并定义请求处理逻辑
const server = http.createServer((req, res) => {
  // 设置HTTP响应头部的状态码和内容类型
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // 发送响应体"Hello, World!"并结束响应过程
  res.end('Hello, World!\n');
});

// 服务器开始监听8080端口
server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
