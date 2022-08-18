const app = require('./src/app.js');

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
  console.log(`listening on port${port}`)
})

// {
//   "routes": [
//     { "src": "/redirect", "status": 308, "headers": { "Location": "https://example.com/" } },
//     { "src": "/custom-page", "headers": {"cache-control": "s-maxage=1000"}, "dest": "/index.html" },
//     { "src": "/api", "dest": "/my-api.js" },
//     { "src": "/users", "methods": ["POST"], "dest": "/users-api.js" },
//     { "src": "/users/(?<id>[^/]*)", "dest": "/users-api.js?id=$id" },
//     { "src": "/legacy", "status": 404},
//     { "src": "/.*", "dest": "https://my-old-site.com"}
//   ]
// }