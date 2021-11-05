#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# echo 'icpove.me' > CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:lit-lug/homepage.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://lit-lug:${GITHUB_TOKEN}@github.com/lit-lug/homepage.git 
  git config --global user.name "gaoajia"
  git config --global user.email "gaoajia@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支

# deploy to coding pages
echo 'litunix.org' > CNAME  # 自定义域名

if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
   codingUrl=git@e.coding.net:litlug/homepage/homepage.git
else
   codingUrl=https://kZABGpwdbp:${CODING_TOKEN}@e.coding.net/litlug/homepage/homepage.git
fi
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding


# deploy to coding pages
echo 'iluoli.ren' > CNAME  # 自定义域名

if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
   codingUrl=git@e.coding.net:litlug/homepage/homepage-cn.git
else
   codingUrl=https://kZABGpwdbp:${CODING_TOKEN}@e.coding.net/litlug/homepage/homepage-cn.git
fi
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding


cd -
rm -rf docs/.vuepress/dist