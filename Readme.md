# 安装包区分开发依赖和生产依赖

生产依赖 yarn add some-package 把指定的包添加到 dependencies 字段中
开发依赖 yarn add some-package --dev 把指定的包添加到 devDependencies 字段中

# 锁定包版本

yarn add some-package --exact 直接保存具体版本号
或者
yarn add some-package@9.0.1 指定具体版本

# 提交yarn.lock文件

确保一致性：

锁文件记录了所有依赖的确切版本（包括子依赖）, 提交锁文件可以确保团队成员、CI/CD 环境、甚至是生产环境中的依赖安装完全一致
