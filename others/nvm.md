# nvm
> 切換不同版本的 Node.js

## Install
> 建議使用官方建議的方式下載，ex: `curl` or `wget`

1. Install Package

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

2. Update setting

`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`
```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

## Commands

```
// see what versions are installed:
nvm ls


// install specific node version
nvm install <version>
nvm install 16.16.0


// setup default node version
nvm alias default <version>
nvm alias default 16.16.0


// change to another node version temporarily
nvm use <version>
nvm use 13.13.0
```


## Reference
[1] https://github.com/nvm-sh/nvm