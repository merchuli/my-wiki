# Access Token & Refresh Token
> 2023.07.10

## Intro
### access token:
- Used to make requests to other endpoints that require authorization.
- Expired after a short period.

### refresh token:
- To retrieve new `access tokens` without requiring the user to perform a complete login.
- Live longer than `access token`.


## Why need refresh token?
For better user experience.

An `access token` may expire after a specific period of time like a few hours or days. Hence, in order to avoid requesting that the client perform an activity like entering a username and password to retrieve a new `access token`, we can use `refresh tokens` to get a new `access token`.

## Refresh Token Rotation
`Refresh token rotation` guarantees that every time an application exchanges a `refresh token` to get a new `access token`, a new `refresh token` is also returned.



## Reference
[1] https://passage.1password.com/post/how-refresh-tokens-work-a-complete-guide-for-beginners

[2] https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/

[3] https://ithelp.ithome.com.tw/articles/10296956?sc=iThelpR