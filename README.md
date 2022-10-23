# data-visualization-of-COVID-19
基于Flask框架，通过爬取疫情数据，前后端使用AJAX传输数据，前端页面使用Echarts实现最终可视化。想要学习FLask框架或者Echarts，可以体验一下。

## 项目体验
[点击体验](http://47.94.14.231:5000/)。

## 项目预览

![首页](https://user-images.githubusercontent.com/81068011/197386420-0b2256fc-8446-436e-8eb0-3cf02acc1a0f.png)

![图片](https://user-images.githubusercontent.com/81068011/197386504-dd4f1249-9eea-4294-9ef0-b04a84a54771.png)



## 数据来源
- [实时更新：新型冠状病毒肺炎疫情地图](https://voice.baidu.com/act/newpneumonia/newpneumonia)
  获取国内新冠疫情累计趋势，新增趋势，国内新增和境外输入趋势和新增确诊国家数据。
- [实时更新：新冠肺炎疫情最新动态](https://news.qq.com/zt2020/page/feiyan.htm#/)
  获取国内累计确诊，现有确诊，累计治愈和累计死亡病例数据。
- [DataV.GeoAtlas地理小工具系列](datav.aliyun.com/tools/atlas)
  获取全国各省市区县的JSON格式的地图数据。
  
 ## 可视化
 本项目可视化部分，采用了基于 JavaScript 的开源可视化图表库ECharts([官网](echarts.apache.org),[Github](https://github.com/apache/echarts))来制作的。
 
 ## 运行
 将项目克隆到本地以后，在终端运行以下命令来安装所需的python第三方包。
 windows:
 
 ```
 pip install -r requirements.txt
 ```
 Linux or Macos:
 
 ```
 pip3 install -r requirements.txt
 ```
 
 安装完所需包，在终端中运行`app.py`文件即可。
 ```
 python app.py
 ```
 
 **注意**
 Flask框架，运行默认端口是5000，运行之前请确保5000端口不被占用，或者修改`app.py`文件最后一行为
 ```
 if __name__ == "__main__":
   app.run(debug=True, port=XXXX) # XXX 为自己指定的端口号
 ```
 
