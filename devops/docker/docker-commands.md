# Docker Commands

## Docker Image
- 列出所有的 docker images
  ```
  docker images
  ```
- 建立 docker image，並為這個 image 命名
  ```
  docker build . -t <IMAGE_NAME>
  ```
- 把 Image 建立成 Container
  ```
  docker create <IMAGE_ID>
  ```
- 把 Image 建立成 Container 並執行
  ```
  docker run -p <PORT_HOST>:<PORT_CONTAINER> -it <IMAGE_ID>
  ```
  > 會先從本地端看是否已存在此 Image，如果沒有就會從 Docker Hub 下載下來
  
  > PORT_HOST, 我們真正存取的 Port；PORT_CONTAINER，Container 的 Port
- 刪除本地端的 image
  ```
  docker rmi <IMAGE_ID>
  ``` 
- 從 Docker Hub 上下載 Image
  ```
  docker pull <IMAGE_NAME>
  ```
- 將 image 推到 Docker Hub 上
  ```
  docker push <USER_ID>/<IMAGE_NAME>
  ```


## Docker Container
- 列出所有運行中的 Container
  ```
  docker ps
  ```
- 列出所有運行中以及沒有運行的 Container
  ```
  docker ps -a
  ```
- 執行指定的 Container
  ```
  docker start <CONTAINER_ID>
  ```
- 關閉正在執行的 Container
  ```
  docker stop <CONTAINER_ID>
  ```
- 刪除已停止的 Container
  ```
  docker rm <CONTAINER_ID>
  ```


## Docker Compose
> 搭配檔案 `docker-compose.yml`

- Build or rebuild services
  ```
  docker compose build
  ```
- Create and start containers
  ```
  docker compose up
  ```



## 情境題
### 把 Docker Image 推到 Docker Hub
1. 把 Docker Image 加上 tag，`docker tag <IMAGE_NAME> <USER_ID>/<IMAGE_NAME>`。

2. `docker push <USER_ID>/<IMAGE_NAME>`。

3. 可以到 Docker Hub 的 Repositories 確認有沒有成功。