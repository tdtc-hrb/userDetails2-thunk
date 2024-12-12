This is the demo that shows a datasheet.

<img src="https://images2018.cnblogs.com/blog/359743/201806/359743-20180619222509796-2072292283.png" />

## Table of Contents

- [Reference](#reference)
- [Fetch](#fetch)
- [Breaking](#breaking)
- [Run](#run)

## Fetch
```js
  const fetchPosts = subreddit => dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`http://localhost:8080/${subreddit}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)));
}
```

### Data
    One row of data is as follows:
```json
{
  "userId":8,
  "userName":"test8",
  "name":"test",
  "passwrod":"$2a$04$HcffZJMrgN0.lmEFpC4KTeeQhitLYzrH0uTCpGRJRBw4o03ms.qWa",
  "email":"test4@163.com",
  "address":"wuhan-hanyang"
}
```

## Breaking
- readux-thunk
> In readux-thunk@3 there is no longer any default export, 
> so with import thunk from "redux-thunk" thunk is undefined.
also see [import thunk from `redux-thunk` not working in stackblitz](https://stackoverflow.com/a/78244503)

## Run
```bash
npm install
```
- parcel
```
npx parcel public/index.html --port 3000
```


## Reference
* [async(redux-thunk)](https://github.com/xiaobin80/userDetails-thunk)
* [demo-jpa](https://github.com/xiaobin80/demo-jpa-spring-boot2-mysql)
