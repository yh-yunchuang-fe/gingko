## gingko

#### 介绍
gingko是基于React Native的UI组件库，为永辉云创RN项目提供支撑。

#### 文档
地址：http://test-activity.yonghuivip.com/newstage/h5/yh-super-partner/yh-fireworm/#/gingko/gingkoIntroduction

### 开发调试
#### 安装
```
npm install
```
#### 运行前需更改 package.json
线上发布更改字段：
"main": "lib/index"

本地运行更改字段
"main": "node_modules/expo/AppEntry.js"

#### 运行
```$xslt
npm start 
# open ios simulator
npm run ios
# open android
npm run android
```

#### 使用
需要先在客户端设备上按照expo 然后去扫描终端上生产的二维码或打开如下地址：
exp://localhost:19000

#### 组件列表
- [x] Badge 徽标
- [x] Button 按钮
- [x] Card 卡片
- [x] Checkbox 选择框
- [x] Dialog 底层弹窗
- [x] Grid 宫格
- [x] Icon 图表
- [x] Indicator 指示器
- [x] InputItem 输入框
- [x] InputNumber 数字输入框
- [x] Modal 模态窗
- [x] NoticeBar 通知栏
- [x] Picker 选择器
- [x] Popup 底部弹窗窗
- [x] RadioGroup 单选组
- [x] SearchBar 搜索栏
- [x] SearchInput 搜索框
- [x] Tag 标签
- [x] WhiteSpace 上下留白
- [x] WingBlank 左右留白  
- [x] NavBar 导航栏
- [x] Result 结果页
- [x] Toast 轻提示
- [x] DatePicker 日期选择
- [x] Tabs 标签页
- [ ] Steps 步骤条
- [ ] Select 下拉选择器