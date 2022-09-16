# The Learning Note for Git

> 2019.11
>
> 過去都使用 GUI 介面來操作 Git ，像是 Sourcetree，最近開始想直接用 command line 來學習操作 Git ，所以開始這個文件



## Overview

Git basic intro

常用指令

情境



## Git Basic Intro

![git-transport](./img/git-transport.png)

## 常用指令

- fetch

  ```
  // 將遠端儲存庫的最新版下載回來
  git fetch
  ```

- pull

  ```
  // 更新到最新的現在分支（可以避免無謂的 merge 節點）
  git pull --rebase
  
  // 更新到最新 <branch_name> codebase
  git pull --rebase origin <branch_name>
  ```


- push

  ```
  // 將本地分支新增到 remote，以下兩種方式都可以
  git push --set-upstream origin <new_branch>
  git push -u origin <new_branch>
  
  // 強制把本機的分支覆蓋遠端的
  git push -f
  ```
  
  
  
- add

  ```
  // 把文件放到 stage
  git add <file_name>
  
  // 加入全部文件到 stage
  git add .
  
  // 一個文件部分移交
  git add -p <file_name>
  // https://gitbook.tw/chapters/using-git/stage-hunks.html
  // Stage this hunk [y,n,q,a,d,j,J,g,/,s,e,?]? s 可以用 s ，就會把一個 hunk 再切成更小的部分
  ```

  

- commit

  ```
  git commit -m "The content you want to commit"
  ```

  

- merge (待補)

  ```
  
  ```

  

- delete

  ```
  // delete local branch
   git branch -d <branch_name>
   
   // delete remote branch (讓遠端跟本地同步 -> 一起刪除)
   git push origin :<branch_name>
  ```

  

- stash

  ```
  // 儲存
  git stash
  
  // 儲存成什麼名字
  git stash save "<stash_name>"
  
  // 列出所有 stash
  git stash list
  
  // 提取想要的 stash
  git stash apply stash@{0}
  
  // 捨棄不需要的 stash
  git stash drop stash@{1}
  
  // 提取想要的 stash 並刪除
  git stash pop stash@{0}
  
  // 查看想要的 stash
  git stash show -p stash@{2}
  ```

- log

  ```
  // 列出 log 紀錄
  git log
  
  // 列出 log 紀錄，只顯示一行
  git log --oneline
  
  // 圖形化 log
  git log --graph
  
  // 顯示最近兩筆提交所做的修改內容
  git log -p -2
  ```


- cherry-pick

  ```
  // 複製其他分支的 Commit 的內容過來貼上，並生成一個 commit
  git cherry-pick <commit_hash>

  // cherry-pick multiple commits - cherry-pick all the commits from commit A to commit B (where A is older than B
  git cherry-pick A^..B
  ```



- branch

  ```
  // 查看現在在哪個分支，以及本地端有哪些分支
  git branch
  
  // 以 current_branch 為 base 建 new_branch
  git checkout -b <new_branch> <current_branch>
  
  // 建立 local new_branch 並與遠端連接
  git checkout origin/new_branch -b new_branch

  // Rename local branch name
  git branch -m <new_branch_name>
  ```



- reset（待補充更多）

  ```
  // 將 head 移到 commit_hash 或 tag_name 的位置，codebase 變到 commit_hash 或 tag_name
  // git reset <commit_hash || tag_name> --<param>
  // param:
  // - 0. --soft, Does not touch the index file or the working tree at all (but resets the head to <commit>). This leaves all your changed files "Changes to be committed", as git status would put it.
  // - 1. --mixed, default, Resets the index but not the working tree (i.e., the changed files are preserved but not marked for commit) 
  // - 2. --hard, 工作目錄和暫存區的內容都直接丟掉
  
  // 恢復到上一步，[scenario]: 剛才的 commit 後悔了，想要拆掉重做
  git reset HEAD^
  ```



- rebase（待補充）  

  ```
  // 有好幾個操作行為
  git rebase -i <commit_hash>
  
  // - 0. 改 commit 排序(請注意不同 commit 之間的相依性)
  // - 1. reword 改 commit 訊息
  // - 2. edit 修改 commit 訊息以及內容
  // - 3. fixup 將 commit 內容併入前一個 commit，只留下前一個 commit 的訊息
  // - 4. drop 捨棄 commit
  
  // edit 可以修改 commit 內容，例如新增檔案或改 code
  // 使用 edit 後，新增 / 改檔案
  // git add <file_name>
  // git commit --amend
  // git rebase --continue 完成 rebase 的操作
  
  // 完成 rebase 的操作
  git rebase --continue
  
  // 跳出 rebase mode
  git rebase --abort
  
  // https://gitbook.tw/chapters/rewrite-history/change-commit-message.html
  // 會常常搭配 git push -f 處理
  ```



- config

  ```
  // show git user name
  git config user.name
  
  git config --global user.name "John Doe"
  git config --global user.email johndoe@example.com
  
  // 再次提醒，若你有傳遞 `--global` 參數，只需要做這工作一次，
  // 因為在此系統，不論 Git 做任何事都會採用此資訊。
  // 若你想指定不同的名字或電子郵件給特定的專案，只需要在該專案目錄內執行此命令，並確定未加上 `--global` 參數。 
  // Reference[1]: https://alvinalexander.com/git/git-show-change-username-email-address
  // Reference[2]: https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-%E5%88%9D%E6%AC%A1%E8%A8%AD%E5%AE%9A-Git
  ```




- show

  ```
  // 查看修改內容
  git show <file_name>
  ```




- tag

  ```
  // 列出標籤
  git tag
  
  // 新增 tag (commit_hash 如果不加，default 就是當前的 commit)
  git tag -a <tag_name> <commit_hash> -m "<tag_message>"
  
  // 將標籤推送到 remote
  git push origin <tag_name>
  
  // 刪除 Local 標籤
  git tag -d <tag_name>

  // 刪除 Remote 標籤
  git push --delete origin <tag_name>
  ```
  
  

## 情境

### 使用 pull --rebase 更新分支的 codebase

- `git pull --rebase origin <target_branch>` (更新到最新的 \<target_branch> codebase)
- git push -f (強制把本機的分支覆蓋遠端的)






 ## Reference

https://blog.darkthread.net/blog/my-git-cheatsheet/


  ```