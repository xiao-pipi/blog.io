import * as React from "react"
import { Link } from "gatsby"
import { Tabs } from 'antd'
import Body  from "../../components/body"
import Item from "../../components/item"

import "./index.less"
const Technics = () => {
  const articles = [
    {img: 'https://creativemass.cn/media/navigation_contents/2021/08/31/Artboard.jpg', title: 'webpack热更新原理', link: 'https://juejin.cn/post/6844904008432222215#comment'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/05/13/Artboard_Copy_59.jpg', title: '关于Promise', link: 'https://zhuanlan.zhihu.com/p/23312442'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/01/04/WechatIMG367.jpeg', title: '宏任务、微任务、事件循环', link: 'https://juejin.cn/post/6844903657264136200'},
    {img: 'http://creativemass.cn/media/navigation_contents/2021/12/13/behance.jpg', title: '几种循环方式快慢比较', link: 'https://mp.weixin.qq.com/s?__biz=MzA4Nzg0MDM5Nw==&mid=2247498205&idx=2&sn=7b05e42db5a3e6dce5bc5e6cf5e4bf58&chksm=9031fa3fa746732967830defbf1773704150fe459bbc473f792c4cecb3ff18c0a8fa06401cfd&mpshare=1&scene=1&srcid=0526t0MKzJNGQkgCcCysTxex&sharer_sharetime=1622007264294&sharer_shareid=743150b8ba9020886df2629b1e11fc04#rd'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/01/04/WechatIMG366.jpeg', title: 'react hook -- part1', link: 'https://juejin.cn/post/6944863057000529933#comment'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/01/27/Artboard_Copy_44.jpg', title: 'react hook -- part2', link: 'https://juejin.cn/post/6944863057000529933#heading-23'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/01/29/pinterest.jpg', title: '关于Promise', link: 'https://zhuanlan.zhihu.com/p/23312442'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/05/26/Hunky-dunky%E7%99%BD%E5%AD%97_HzE3KiK.jpg', title: 'babel工作原理', link: 'https://juejin.cn/post/6844903956905197576'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/07/30/campagin.jpg', title: '浏览器缓存', link: 'https://juejin.cn/post/6844904133024022536#comment'},
    {img: 'http://creativemass.cn/media/navigation_contents/2021/11/24/%E7%90%83%E7%90%83.jpg', title: '跨域 -- part1', link: 'https://juejin.cn/post/6844903767226351623#comment'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/02/03/%E6%95%B0%E8%8B%B1.jpg', title: '跨域 -- part2', link: 'http://www.ruanyifeng.com/blog/2016/04/cors.html'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/01/04/WechatIMG463.jpeg', title: 'XSS -- part1', link: 'https://tech.meituan.com/2018/09/27/fe-security.html'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/01/02/Artboard_Copy_24.jpg', title: 'XSS -- part2', link: 'https://www.cnblogs.com/54chensongxia/p/11643787.html'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/01/04/WechatIMG463.jpeg', title: 'XSS -- part3', link: 'https://juejin.cn/post/6844903685122703367'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/04/12/%E5%A4%A7%E5%88%9B%E6%84%8F.jpg', title: 'CSRF', link: 'https://tech.meituan.com/2018/10/11/fe-security-csrf.html'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/01/04/WechatIMG382.jpeg', title: '输入URL到页面展现过程', link: 'https://juejin.cn/post/6844903717259444232'},
    {img: 'http://creativemass.cn/media/navigation_contents/2018/03/19/WechatIMG289.jpg', title: 'AST相关', link: 'https://segmentfault.com/a/1190000016231512'},
    {img: 'http://creativemass.cn/media/navigation_contents/2020/06/16/Artboard_Copy_67%E5%A4%8D%E5%88%B6_5%E5%A4%87%E4%BB%BD_7.jpg', title: 'AST抽象语法数', link: 'https://resources.jointjs.com/demos/javascript-ast'}
  ]
  return (
    <Body>
      <h5>文章摘录</h5>
      {articles.map((value, index) => {
        const {img, title, link} = value
        return <Item bgImg={img} title={title} link={link}/>
      })}
    </Body>
  )
}

export default Technics
