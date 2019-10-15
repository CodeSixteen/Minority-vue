
//登录请求
export function getLogin(phoneNumber, password) {
    var data = null;
    userList.forEach(item => {
        if (item.phoneNumber === phoneNumber) {
            if (item.password === password) {
                item.token = (Math.random().toString() + "00000").slice(2, 7)+"DFImjOID57KHGhyw_47JH"
                data = { code: 0, msg: '登录成功', data: item };
                return;
            } else {
                data = { code: 2, msg: '密码错误' };
                return;
            }
        }
    })
    if (!data) {
        data = { code: 1, msg: '用户不存在' };
    }
    return data;
}
//返回用户信息
export function getUserInfo(id){
    var data = null;
    userList.forEach(item => {
        if (item.uid === id) {
            data = item
        }
    })
    return data;
}

//导出文章列表数据
export function getArticleLists(classifyId) {
    let list = [];
    if (classifyId === '推荐') {
        list = articleList;
    } else {
        articleList.forEach(item => {
            if (item.classifyId === classifyId) {
                list.push(item);
            }
        })
    }
    return list;
}
//导出文章详情数据
export function getArticle(id) {
    id = Number(id);
    if (id != NaN) {
        let article = {};
        articleList.forEach(item => {
            if (item.id === id) {
                article = item;
            }
        })
        return article;
    }
}
//导出评论列表数据
export function getComment(id) {
    id = Number(id);
    if (id != NaN) {
        let comment = [];
        commentList.forEach(item => {
            if (item.article_id === id) {
                comment.push(item);
            }
        })
        return comment;
    }
}

//提交评论
export function submitComment(data) {
    let newData = {}
    newData.id = commentList.length + 1
    newData.article_id = Number(data.article_id)
    newData.comment_content = data.content
    newData.user_id = Number(data.user_id)
    newData.re_username = data.re_username
    newData.re_comment_id = data.re_comment_id
    newData.created_time = Math.floor(new Date().getTime() / 1000)
    newData.reply_num = 0
    newData.like_number = 0
    commentList.push(newData)//添加一条新数据
    //根据提交的回复评论id修改评论数
    commentList.forEach(item=>{
        if(item.id === data.re_comment_id){
            item.reply_num++
        }
        if(item.id === data.subCommentId){
            item.reply_num++
        }
    })
    //根据提交的回复的谁的评论修改评论数
    return {err:0, msg:'成功'}
}


//评论数据
let commentList = [
    { id: 1, user_id: 1, article_id: 1, re_username: 0, comment_content: '我是一条评论内容', created_time: '1569737245', reply_num: 2, like_number: 0, tread_number: 0, re_comment_id: 0 },
    { id: 2, user_id: 2, article_id: 1, re_username: 0, comment_content: '我是回复第一条评论的评论内容', created_time: '1569737658', reply_num: 1, like_number: 0, tread_number: 0, re_comment_id: 1 },
    { id: 3, user_id: 3, article_id: 1, re_username: '来自远方的小个子', comment_content: '我回复来自远方的小个子', created_time: '1569739521', reply_num: 0, like_number: 0, tread_number: 0, re_comment_id: 1 },
]


//用户数据
let userList = [
    { uid: 1, username: 'Mestarry', phoneNumber: '18882372781', password: '123456', headerImg: 'https://cdn.sspai.com/2019/10/15/a189ca00886dffb2c09542993dcf7203.png' },
    { uid: 2, username: '来自远方的小个子', phoneNumber: '18882372782', password: '123456', headerImg: 'https://cdn.sspai.com/2019/10/15/f60988dc30995dd5beaf2522edfb2247.jpg' },
    { uid: 3, username: '咻咻咻，打死你', phoneNumber: '18882372783', password: '123456', headerImg: 'https://cdn.sspai.com/2019/10/15/dc7c721bc64d95c3760a0c1b8b7b4737.jpg' },
    { uid: 4, username: 'CooPsc', phoneNumber: '18882372784', password: '123456', headerImg: 'https://cdn.sspai.com/attachment/origin/2014/09/07/176159.jpg' },
]




let articleList = [
    { id: 1, title: "把 Spotlight 搜索栏变成 Siri 快捷指令启动器", created_time: '1469024900', author: "Minja", view: 32, comment: 13, list_img_src: "https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", classifyId: "推荐", like_number: 3, banner_img_src: "https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", content: `<p>自从iOS12吸收了快捷指令后，Siri就具备了触发各种自动化动作的能力。比较尴尬的是，只要环境稍微嘈杂一点，Siri就容易把命令听错；好不容易四周安静下来，估计你也不好意思在别人认真工作学习的当口儿对着手机喊话。</p><p>碍于这些原因，不少用户（包括我）干脆开启TypetoSiri来打字交互，但这又牺牲了一部分原有的语音交互功能。</p><p>iOS13中Spotlight和AskSiri的结合，终于让「打字or语音」的单选题有了转机。我们可以保留Siri作为语音助手的全部功能，同时在不方便语音输入或者用键盘更高效的情况下，通过Spotlight和Siri交流，比如，打字添加日程：</p><figuretabindex="0"draggable="false"class="ss-img-wrapper"contenteditable="false"><img src="https://cdn.sspai.com/minja/2019-10-06-打字添加日程.GIF"/><figcaptionclass="ss-image-caption"><br>打字添加日程</figcaption></figure><p>或者，问问Siri现在所播放歌曲的歌词：</p><figuretabindex="0"draggable="false"class="ss-img-wrapper"contenteditable="false"><img src="https://cdn.sspai.com/minja/2019-10-06-在%20Spotlight%20中使用%20Siri%20快捷指令.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1"/><figcaptionclass="ss-image-caption">在Spotlight里查歌词</figcaption></figure><p>这篇文章就来带你把iOS13的Spotlight变成快捷启动器。</p><h2id="ss-H2-1570360790371">从Spotlight更快地启动Siri和快捷指令</h2><p>Spotlight是iOS平台上体验最自然的启动器。</p><p>所谓启动器，就是各种功能的触发中心，你可以在这里打开应用、搜索网页或者运行自动化动作（快捷指令）。PowerUser当然喜欢LaunchCenterPro这些第三方工具，可惜由于系统限制，这些应用总和我们隔着一道墙，不如Spotlight来得那么爽快——一按快捷键<code>⌘Command-空格</code>，或者在主屏上一拽，Spotlight就出来了。真正的随叫随到，和macOS上那些老牌启动器<supsup-id="1570360789624"title="LaunchBar、Alfred等。"style="font-family:&#34;PingFangSC&#34;,&#34;HelveticaNeue&#34;,Helvetica,&#34;HiraginoSansGB&#34;,&#34;MicrosoftYaHei&#34;,Arial,sans-serif;font-style:inherit;font-variant-caps:inherit;">1</sup><spanstyle="font-family:&#34;PingFangSC&#34;,&#34;HelveticaNeue&#34;,Helvetica,&#34;HiraginoSansGB&#34;,&#34;MicrosoftYaHei&#34;,Arial,sans-serif;font-size:16px;"></span>一样。</p><p>前几年Hum写过一篇《<ahref="https://sspai.com/post/35818">iOSSpotlight调教指南</a>》，充分挖掘了SpotlightforiOS的潜力，可惜之后Spotlight的发展就陷入了停滞状态。直到iOS13，Spotlight出乎意料地和iOS上另两大主力——Siri以及快捷指令——强强联手，才让我们又开辟出新的使用思路。</p>` },
    { id: 2, title: "输入这个网址，一键为网页开启「阅读模式」：Outline", created_time: "1542352451", author: "Clyde", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/e2495421-d60c-a690-da4d-51bfe885561f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/03/12/30cd7dadecc4ca8014d6ee0d98ab2746.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "推荐", banner_img_src: "https://cdn.sspai.com/article/e2495421-d60c-a690-da4d-51bfe885561f.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708",  content: `<p>在网站阅读长文章时很多人喜欢开启「阅读模式」，这样可以去掉花哨的页面样式和穿插其中的无关内容，只保留文章正文部分。Safari 和 Microsoft Edge 都自带了「阅读模式」功能，我们此前也介绍过利用「小书签（Booklet）」的方式 <a href="https://sspai.com/post/52286" target="_blank" class="insert-link">调用稍后读工具 Instapaper 的阅读样式</a>，或是在 Chrome 上利用 <a href="https://sspai.com/post/39491">简悦</a> 等扩展来实现这一功能。</p>
    <p>今天介绍的 <a href="https://outline.com/">Outline</a> 也是一款「阅读模式」工具，它的功能非常简单，<b>如果不需要标注和评论功能，你完全不用注册账户就能使用，</b>而且由于它的实现原理简单，虽然是网页工具，但你可以把它制作成快捷指令、Chrome 扩展使用。</p>
    <p>只需要在 Outline 网页上粘贴你想转换的页面，Outline 就会自动抓取网页内容并转换为只有正文的「阅读模式」页面，除了一些需要付费的网站做了针对性限制，Outline 对大部分网友内容处理都比较好，内容和图片识别也没有问题，只不过不能像 Safari 阅读模式或者一些稍后读工具那样设置字体样式。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/15/a90f965aa27870810e2018d90ce3860f.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/15/a90f965aa27870810e2018d90ce3860f.png"/><figcaption class="ss-image-caption">中文样式对比（左 Outline，右 Safari 阅读模式）</figcaption></figure>
    <figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/15/877695250df7c965e940021361b2616d.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/15/877695250df7c965e940021361b2616d.png"/><figcaption class="ss-image-caption">英文样式对比（左 Outline，右 Safari 阅读模式）</figcaption></figure><p>阅读页面提供的标注功能其实是集成了标注服务 <a href="https://web.hypothes.is/">Hypothesis</a><sup sup-id="1571127545748" title="Hypothesis%20%E6%9C%8D%E5%8A%A1%E4%B9%9F%E6%8F%90%E4%BE%9B%E4%BA%86%20Chrome%20%E6%89%A9%E5%B1%95%EF%BC%8C%E5%A6%82%E6%9E%9C%E4%BD%A0%E5%8F%AA%E9%9C%80%E8%A6%81%E4%BD%BF%E7%94%A8%E7%BD%91%E9%A1%B5%E6%A0%87%E6%B3%A8%E5%8A%9F%E8%83%BD%E4%B9%9F%E5%8F%AF%E4%BB%A5%E8%80%83%E8%99%91%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E3%80%82" style="font-family: &#34;PingFang SC&#34;, &#34;Helvetica Neue&#34;, Helvetica, &#34;Hiragino Sans GB&#34;, &#34;Microsoft YaHei&#34;, Arial, sans-serif; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit;">1</sup><span style="font-family: &#34;PingFang SC&#34;, &#34;Helvetica Neue&#34;, Helvetica, &#34;Hiragino Sans GB&#34;, &#34;Microsoft YaHei&#34;, Arial, sans-serif; font-size: 16px;"> </span>，如果需要边阅读边标注的话可以注册使用。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/15/c41a95adca23d4abe7bb2abf363719e8.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/15/c41a95adca23d4abe7bb2abf363719e8.jpg"/><figcaption class="ss-image-caption">可以直接在页面标注并同步到 Hypothesis 账户中</figcaption></figure>
    <p>工具虽简单，但每次都要跳转到 Outline 网站去转换也很麻烦，好在 Outline 的转换方式「简单粗暴」，其实在网址 <code>https://outline.com/</code> 后面输入你要转换的文章网址就行。<b>换句话说，你只需要在当前文章页面的地址栏开头加上</b> <code>https://outline.com/</code>  <b>就可以实现「原地转换」。</b>此外，也有网友制作了 <a href="https://chrome.google.com/webstore/detail/outliner-a-chrome-extensi/eegpjjnajnplmkigmoglgbgpibgkkepo">Chrome 扩展</a> 和 <a href="https://www.reddit.com/r/shortcuts/comments/9j06lb/open_links_in_outlinecom/">iOS 快捷指令</a> 方便大家使用。</p>` },
    { id: 3, title: "Tab Space | 管理标签页，增加快捷键：助力 Safari 网上冲浪的效率工具", created_time: "1542784784", author: "SpencerWoo", view: 18, comment: 6, list_img_src: "https://cdn.sspai.com/article/4a5aa6af-3931-b9ed-ccec-4fb0654e90a1.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2018/01/25/9064878ba43e099c797e270bdedca966.jpg?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "推荐", banner_img_src: "https://cdn.sspai.com/article/4a5aa6af-3931-b9ed-ccec-4fb0654e90a1.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708", content: `<p>变革。变革总是在不经意间就发生。看了那么多进入 Web 时代的评论，我也直到亲自在 Safari 中打开了 MATLAB Online 才猛然发现，我们的大多数工作已经转变成在浏览器中完成了。<br/></p></blockquote><p>在这个「Web 时代」，苹果出品的 Safari 浏览器无疑是一件利器，它常常因为轻量、快速和省电为人称道。而对我而言，清爽的苹果设计带来的颜值也是我选择它的一个重要原因。</p><p>然而，Safari 浏览器的局限也很明显，苹果相对保守的设计限制了 Safari，不但其本身在功能上极其克制，由现代浏览器插件社区提出的新功能也常常在这里缺失。因此，结合我平常使用 Safari 的遭遇的痛点和部分网友的建议，我开发了这款 Tab Space 插件。</p><p>Tab Space 围绕网页浏览的日常需求，主要在标签页管理上实现了三个方面的需求。</p><p>首先，是灵感来自于 Chrome 插件 OneTab 的<b>快速保存当前所有的标签页和一键恢复功能</b>。这项功能是如此重要，甚至于 Tab Space 最初只是为此而开发。<br/></p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/08/22/d4783495f05de15fe535a86a84456020.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/08/22/d4783495f05de15fe535a86a84456020.jpeg"/><figcaption class="ss-image-caption">快速保存标签页<br/></figcaption></figure><p>举例来说，你可能很熟悉以下场景：在开发时，你打开了 3 个开源库的文档页，2 个问题社区的问答页和 2 个应用商店的审核政策页；一天结束，女朋友过来和你讨论旅行计划，于是你又需要打开 10 个旅游攻略、景区介绍和行程预定相关的网页，那么刚刚的开发页面怎么办呢？<br/></p><p>这就到了 Tab Space 大显身手的时候，你把开发相关的页面临时储存起来，那么在旅行计划讨论完毕后，或者是第二天，或者是下星期，无论什么时候，你又可以瞬间回到之前的工作状态，从停下的地方再继续向前了。</p><p>而同样地，对于学生来说，你可能需要在不同的课程之间保存状态。推而广之，也就是说，你的浏览器从此具有了状态。你可以瞬间恢复到任意你保存过的时间点。</p><p>如果你是第一项功能的拥趸，那么很快你就会用到第二项功能，<b>分类管理标签组</b>。因为你保存的标签组逐渐积累，很快你就会被淹没在其洪流之中。而标签功能则可以让你游刃有余地管理它们。<br/></p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/08/22/3e7d997335ba83b73eede4c9bddee02f.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/08/22/3e7d997335ba83b73eede4c9bddee02f.jpeg"/><figcaption class="ss-image-caption">标签功能<br/></figcaption></figure><p>更重要的是，在标签功能的加持下，你现在可以建立你的网页浏览工作台了。也就是说，你可以保存你常用的标签组，把 Tab Space 当作一个启动器来使用。举例来说，当我想要阅读新闻的时候，我总是会打开好几个我喜欢的新闻网站，看看他们的头条分别是什么。那么我只需打开这些网站一次，把他们存储到「阅读」标签下，从此便可以一键启动「新闻」工作流。</p><p>第三方面的功能，则来自于我长期以来的疑问，为什么 Safari 至今没有<b>复制标签页和关闭右侧标签页</b>的功能呢？也许是传闻中大厂的骄傲，但显然，我不想再继续忍受这份骄傲。有人说，在果粉心中，苹果没有的功能我们不需要，但是，果粉，对不起：）<br/></p><p>现在你可以快速关闭左侧标签页、右侧标签页和其他所有标签页，你可以快速复制当前标签页，一切都由快捷键实现。而上述图片中除了标签页管理的相关快捷键之外，值得一提的还有「在其它浏览器中打开」功能。众所周知，在 Chrome 浏览器统治互联网的今天，其它浏览器或多或少都会遇到兼容性问题，这时，Tab Space 也提供快速在其它浏览器打开当前页面的功能，省去「复制-打开 Chrome/Firefox-粘贴」三部曲的繁琐，在网上冲浪时，再次轻松一刻、快人一步。<br/></p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/08/22/c46b47a9042384c2dd65ae9ea8121a64.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/08/22/c46b47a9042384c2dd65ae9ea8121a64.jpeg"/><figcaption class="ss-image-caption">快捷键1<br/></figcaption></figure><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/08/22/5c20f441aad5524480619857fc97b3b9.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/08/22/5c20f441aad5524480619857fc97b3b9.jpeg"/><figcaption class="ss-image-caption">快捷键2<br/></figcaption></figure><p>最后一个需求点则是关于<b>网页剪藏</b>，我们已经遇见过太多想要保存的网页内容和太多优秀的笔记工具，可是他们提供的剪藏工具通常都只有 Chrome 和 Firefox 插件，那么 Safari 用户怎么办呢？这里 Tab Space 提供一个快捷方式，助你快速把喜欢的内容保存到 Mac 上知名的笔记应用 Bear 上。Bear 颜值够高，普通版的功能免费，因此作为一个信息的收件箱 Inbox 正好。下次当你遇到喜欢的网页内容，就随手 <code>⌃Ctrl + B</code> 吧！Tab Space 会为你保存选中的内容和来源网址。如此一来，我想我们的 Safari 浏览体验可能就在保留了其本身的优势之外，又补齐了所有跟其他现代浏览器对比时的短板了吧。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/08/23/12013ec202a07070becd6233de0c7ee3.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/08/23/12013ec202a07070becd6233de0c7ee3.jpeg"/><figcaption class="ss-image-caption">快捷键3<br/></figcaption></figure><p>需要注意的是，由于 Safari 浏览器的限制，以上快捷键都只能在常规页面中生效，而在启动页和扩展页（即浏览器地址栏中显示为空的页面）中无效。<br/></p><p>简单功能演示：<a href="https://www.bilibili.com/video/av66311000/" target="_blank" class="insert-link" style="">Tab Space 功能演示</a></p><p>以上就是 Tab Space 的全部功能，如果你感兴趣，欢迎前往 App Store 购买。另外，我也会从评论中挑选出我认为的有意思的赠送出兑换码，感谢支持！</p>` },
    { id: 4, title: "Docker 的入门「指北」", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "推荐", banner_img_src: "https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", content: `<p>自从iOS12吸收了快捷指令后，Siri就具备了触发各种自动化动作的能力。比较尴尬的是，只要环境稍微嘈杂一点，Siri就容易把命令听错；好不容易四周安静下来，估计你也不好意思在别人认真工作学习的当口儿对着手机喊话。</p><p>碍于这些原因，不少用户（包括我）干脆开启TypetoSiri来打字交互，但这又牺牲了一部分原有的语音交互功能。</p><p>iOS13中Spotlight和AskSiri的结合，终于让「打字or语音」的单选题有了转机。我们可以保留Siri作为语音助手的全部功能，同时在不方便语音输入或者用键盘更高效的情况下，通过Spotlight和Siri交流，比如，打字添加日程：</p><figuretabindex="0"draggable="false"class="ss-img-wrapper"contenteditable="false"><img src="https://cdn.sspai.com/minja/2019-10-06-打字添加日程.GIF"/><figcaptionclass="ss-image-caption">打字添加日程</figcaption></figure><p>或者，问问Siri现在所播放歌曲的歌词：</p><figuretabindex="0"draggable="false"class="ss-img-wrapper"contenteditable="false"><img src="https://cdn.sspai.com/minja/2019-10-06-在%20Spotlight%20中使用%20Siri%20快捷指令.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1"/><figcaptionclass="ss-image-caption">在Spotlight里查歌词</figcaption></figure><p>这篇文章就来带你把iOS13的Spotlight变成快捷启动器。</p><h2id="ss-H2-1570360790371">从Spotlight更快地启动Siri和快捷指令</h2><p>Spotlight是iOS平台上体验最自然的启动器。</p><p>所谓启动器，就是各种功能的触发中心，你可以在这里打开应用、搜索网页或者运行自动化动作（快捷指令）。PowerUser当然喜欢LaunchCenterPro这些第三方工具，可惜由于系统限制，这些应用总和我们隔着一道墙，不如Spotlight来得那么爽快——一按快捷键<code>⌘Command-空格</code>，或者在主屏上一拽，Spotlight就出来了。真正的随叫随到，和macOS上那些老牌启动器<supsup-id="1570360789624"title="LaunchBar、Alfred等。"style="font-family:&#34;PingFangSC&#34;,&#34;HelveticaNeue&#34;,Helvetica,&#34;HiraginoSansGB&#34;,&#34;MicrosoftYaHei&#34;,Arial,sans-serif;font-style:inherit;font-variant-caps:inherit;">1</sup><spanstyle="font-family:&#34;PingFangSC&#34;,&#34;HelveticaNeue&#34;,Helvetica,&#34;HiraginoSansGB&#34;,&#34;MicrosoftYaHei&#34;,Arial,sans-serif;font-size:16px;"></span>一样。</p><p>前几年Hum写过一篇《<ahref="https://sspai.com/post/35818">iOSSpotlight调教指南</a>》，充分挖掘了SpotlightforiOS的潜力，可惜之后Spotlight的发展就陷入了停滞状态。直到iOS13，Spotlight出乎意料地和iOS上另两大主力——Siri以及快捷指令——强强联手，才让我们又开辟出新的使用思路。</p>` },
    { id: 5, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", banner_img_src: "https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708",  content: `<p>自从iOS12吸收了快捷指令后，Siri就具备了触发各种自动化动作的能力。比较尴尬的是，只要环境稍微嘈杂一点，Siri就容易把命令听错；好不容易四周安静下来，估计你也不好意思在别人认真工作学习的当口儿对着手机喊话。</p><p>碍于这些原因，不少用户（包括我）干脆开启TypetoSiri来打字交互，但这又牺牲了一部分原有的语音交互功能。</p><p>iOS13中Spotlight和AskSiri的结合，终于让「打字or语音」的单选题有了转机。我们可以保留Siri作为语音助手的全部功能，同时在不方便语音输入或者用键盘更高效的情况下，通过Spotlight和Siri交流，比如，打字添加日程：</p><figuretabindex="0"draggable="false"class="ss-img-wrapper"contenteditable="false"><img src="https://cdn.sspai.com/minja/2019-10-06-打字添加日程.GIF"/><figcaptionclass="ss-image-caption">打字添加日程</figcaption></figure><p>或者，问问Siri现在所播放歌曲的歌词：</p><figuretabindex="0"draggable="false"class="ss-img-wrapper"contenteditable="false"><img src="https://cdn.sspai.com/minja/2019-10-06-在%20Spotlight%20中使用%20Siri%20快捷指令.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1"/><figcaptionclass="ss-image-caption">在Spotlight里查歌词</figcaption></figure><p>这篇文章就来带你把iOS13的Spotlight变成快捷启动器。</p><h2id="ss-H2-1570360790371">从Spotlight更快地启动Siri和快捷指令</h2><p>Spotlight是iOS平台上体验最自然的启动器。</p><p>所谓启动器，就是各种功能的触发中心，你可以在这里打开应用、搜索网页或者运行自动化动作（快捷指令）。PowerUser当然喜欢LaunchCenterPro这些第三方工具，可惜由于系统限制，这些应用总和我们隔着一道墙，不如Spotlight来得那么爽快——一按快捷键<code>⌘Command-空格</code>，或者在主屏上一拽，Spotlight就出来了。真正的随叫随到，和macOS上那些老牌启动器<supsup-id="1570360789624"title="LaunchBar、Alfred等。"style="font-family:&#34;PingFangSC&#34;,&#34;HelveticaNeue&#34;,Helvetica,&#34;HiraginoSansGB&#34;,&#34;MicrosoftYaHei&#34;,Arial,sans-serif;font-style:inherit;font-variant-caps:inherit;">1</sup><spanstyle="font-family:&#34;PingFangSC&#34;,&#34;HelveticaNeue&#34;,Helvetica,&#34;HiraginoSansGB&#34;,&#34;MicrosoftYaHei&#34;,Arial,sans-serif;font-size:16px;"></span>一样。</p><p>前几年Hum写过一篇《<ahref="https://sspai.com/post/35818">iOSSpotlight调教指南</a>》，充分挖掘了SpotlightforiOS的潜力，可惜之后Spotlight的发展就陷入了停滞状态。直到iOS13，Spotlight出乎意料地和iOS上另两大主力——Siri以及快捷指令——强强联手，才让我们又开辟出新的使用思路。</p>` },
    { id: 6, title: "如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧", created_time: "1542352451", author: "Clyde", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/abb7b13a-e945-a266-261c-01ec5b23c9ba.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 7, title: "如何让 Android 10 拥有不输 iOS 的暗色模式体验？", created_time: "1542352451", author: "SpencerWoo", view: 18, comment: 6, list_img_src: "https://cdn.sspai.com/article/8dc31f25-65eb-f2fc-40bb-25887ffe3d70.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 8, title: "Docker 的入门「指北」", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/2019/10/11/9c184fb6744195c4e3b0df2bb8773a56.png?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 9, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/9fc095bd-725f-116b-699b-7b9957d3affe.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 10, title: "编辑部的新玩意 | 自动猫砂盆、智能指纹锁……少数派的编辑们最近买了啥？", created_time: "1532658945", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/46423bae-efd5-0390-5b55-014e2ee5a6bf.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2017/12/26/18f38bad2b0724b4419b7e8bae24bd6e.jpg?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "最热",banner_img_src: "https://cdn.sspai.com/article/46423bae-efd5-0390-5b55-014e2ee5a6bf.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708",  content: `<h4 id="ss-H4-1570702355150">关于栏目</h4><p>很多读者都会好奇少数派的编辑们到底平时都「装了啥」。我们希望通过「编辑部的新玩意」介绍编辑部成员们最近在用的新奇产品，让他们自己来谈谈这些新玩意的使用体验究竟如何。</p><p></p><hr/><p></p><h2 id="ss-H2-1570703106244"><font color="#008000">@Clyde</font>：优点智能指纹锁</h2><ul><li><span>适合人群：经常找不到钥匙、但又喜欢把东西锁起来的人</span></li><li><span>购买渠道：小米有品商城</span></li><li><span>参考价格：￥109</span></li></ul><div><p>小时候移动支付还没有像现在这样普及，我总是对父母放在床底下那个加了锁的小箱子感到好奇。后来有机会打开才发现，里面存放着的都是那个年代家里的贵重物品：存折、户口本、合同、老照片……时过境迁，转眼自己也有了一个家，这才发现不管时代怎么变化，总有一些重要文件需要好好保管的。买一把锁的想法也开始时不时从脑子里蹦出来，但转念一想——手里这么多把钥匙，区分都已经有些困难，要是东西锁上钥匙丢了岂不是倒添麻烦？</p><p>只好作罢。</p><p>直到在朋友圈看到朋友推荐，发现了优点智能指纹锁这个小玩意，「现代指纹+传统挂锁」的设计一下子就俘获了我：指纹门锁如此常见的今天，怎么就没人想到这个解决方案呢？</p><p>优点智能这款指纹锁对我而言算是一个新门类，小巧玲珑的圆润锁身搭上蓝、红、金、绿四种配色非常好看，犹豫再三我最后选择了珊瑚红。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper custom-width" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/10/4fa872d6c8963b1f8e26eb9b3320f4b5.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" width="500" data-original="https://cdn.sspai.com/2019/10/10/4fa872d6c8963b1f8e26eb9b3320f4b5.jpg"/></figure></div><p><span>拿到手时不管是重量还是外观都没有让我失望，但由于整体形态非常简单，指纹录入的方式也的确让我拿着说明书钻研了好一阵子：这款指纹锁最多支持 20 枚指纹录入，其中 1~2 号指纹为管理员，其他指纹为普通用户；首次注册管理员指纹时，需要长按指纹识别区域 8 秒，绿色指示灯常亮后再按下需要注册的指纹开始注册。</span></p><figure tabindex="0" draggable="false" class="ss-img-wrapper custom-width" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/10/a18de1dfe8ee6f6246fd112dcaac7158.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" width="550" data-original="https://cdn.sspai.com/2019/10/10/a18de1dfe8ee6f6246fd112dcaac7158.jpg"/></figure><p><span>整个注册过程需要短按指纹识别区域 5 次，中间没有太大的确定感，但看到绿色指示灯闪烁时就算是注册成功了。之后添加其它指纹都需要管理员指纹进行授权，授权方式大同小异，这里就不再赘述了。</span> </p><p><span>注册好指纹之后就可以正常使用了。从</span>我<span>的使用体验来看，用它锁存放贵重物品的箱子、锁行李箱的拉链或是出门打球时把包所在栅栏上都可以，最重要的是不用为此额外去记忆自己把钥匙丢在哪里了……这才是现代化的挂锁嘛。</span></p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/10/5cf5a63f2883c24ee1b201915a1be1bc.gif?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/10/5cf5a63f2883c24ee1b201915a1be1bc.gif"/></figure><p><span>另外，不得不说用指纹打开这种机械锁的手感有些解压，拿在手里解锁、弹出再按下，解锁、弹出再按下……</span></p><p><span>最后，作为</span>一<span>款售价 109 元人民币的小锁还在使用 micro USB 接口充电实在是有些吝啬了，好在充满一次电待机续航时间长达一年，平时也不用多管。唯一需要注意的是</span><strong>一定收好说明书</strong><span>，因为没有配套的 App，丢了说明书之后无论是录入指纹还是恢复出厂设置都</span>会<span>比较麻烦</span>。</p><h2 id="ss-H2-1570698220670"><font color="#008000">@waychane</font>：Petree 自动猫砂盆</h2><ul><li><span>适合人群：养猫家庭</span></li><li><span>购买渠道：京东</span></li><li><span>参考价格：¥1699</span></li></ul><div><p>前一段时间家里的自动猫砂盆坏了，挑选了多款产品之后选择了国内品牌 Petree 的自动猫砂盆。</p><p>我之前用的是国外某品牌的「露天式」自动猫砂盆，猫咪在上厕所之后很容易把大量猫砂铲到猫砂盆外，而且这款猫砂盆会 24 小时不间断地处理便盆，对马达的损耗比较高，我的猫砂盆就因此坏过两次。</p><p>Petree 猫砂盆使用了半封闭式的设计，可以安装门帘打造全封闭式环境，猫咪上厕所后带出的猫砂量明显减少。</p></div><figure tabindex="0" draggable="false" class="ss-img-wrapper custom-width" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/10/2b6c0485c707015194d658cadb809970.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" width="550" data-original="https://cdn.sspai.com/2019/10/10/2b6c0485c707015194d658cadb809970.jpg"/></figure><p><span>这款猫砂盆的运行原理是通过监测猫砂盆内的重量变化，当猫咪进入猫砂盆再出来之后，猫砂盆会再等待一段时间，确认猫咪不会再进入猫砂盆之后开始工作，通过横向旋转 2 圈的方式将大块的猫砂通过右上角的处理区域送进机器后方的垃圾袋里。</span></p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/10/d0048b4794b9a21e907f22fd3d206df8.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/10/d0048b4794b9a21e907f22fd3d206df8.jpg"/><figcaption class="ss-image-caption">工作原理</figcaption></figure><p><span>如果猫咪在猫砂盆旋转的时候进入猫砂盆，猫砂盆会停止运转，确保猫咪不会因此收到惊吓或者受伤。由于这款猫砂盆不是 24 小时工作，声音也比较小，不会影响其他家庭成员，对零部件的损耗自然也更小。</span></p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/10/878cf7da20ba45b084e83c9da6828afc.gif?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/10/878cf7da20ba45b084e83c9da6828afc.gif"/></figure><p><span>从我的使用情况来看，一只 10 斤左右的猫使用一周半至两周的时间才需要更换一次猫砂盆的垃圾袋，这款猫砂盆可以直接配合普通的家用垃圾袋使用，比较方便。</span></p><p><span>说说这款猫砂盆的缺点，首先是垃圾盒太紧了，每次拆装很不方便，要用手用力拍才能装进猫砂盆，还好更换垃圾袋的频率不高。剩下的问题是由于体积不算小，拆装和清洗可能会比较麻烦，不过这类产品应该也不需要经常清洗就是了。</span></p><h2 id="ss-H2-1570698263336"><font color="#008000">@Oscar Liu</font>：欧乐 B 舒适清洁牙线</h2><ul><li>适合人群：所有人群</li><li>购买渠道：京东自购</li><li>入手价格：¥25/盒</li></ul><p><span>「小伙子，你这一共有 5 颗蛀牙，得注意清洁齿缝啊。」</span></p><p><span>这是最近一次体检医生告诉我的结果。作为一个小时候不注意刷牙的人，我的牙齿健康真的非常差。虽然改用电动牙刷后，刷牙这件事不再困扰我了（毕竟方便了不少），但由于已经出现了龋齿，很多齿缝用牙刷很难清洁干净。在咨询了医生的意见后，我最近开始尝试使用牙线。</span></p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/10/b95ec723ace54cdabff818235e63aedb.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/10/b95ec723ace54cdabff818235e63aedb.jpg"/></figure><p><span>在试用了几款牙线后，欧乐 B 的这款舒适清洁牙线成了我的最爱。这款牙线采用的是纤维材质，牙线扁平又有一定的弹性。我自己体验下来，感觉比棉线材质的牙线更容易进入牙缝。牙线本身有一点淡淡的薄荷味，因此用完以后感觉也很清爽，就像吃完口香糖一样。</span></p><p><span>我每天早上和晚上吃完东西后会用牙线进行一次清洁，一开始不熟练的时候可能需要 10-15 分钟，掌握方法后 5-10 分钟就可以搞定了。很多人在选择牙线时会倾向于选择更加方便的牙线棒，但我自己的体验是牙线棒在摩擦齿缝的时候角度很有限，不如牙线来得灵活，线也要比牙线更粗一点（我购买的几款都是这样）。当然牙线也有自己的问题，比如每次用完都要粘上一手口水，也不太方便在公司使用等等。总之根据场景和牙齿情况选择适合自己的就可以了。</span></p><p><span>最后，如果你在使用牙线时经常遇到牙龈出血的情况，建议考虑去洗一次牙。牙结石会压迫牙龈，引起红肿和炎症。刷牙、使用牙线和定期洗牙应该配合进行，这样才能达到最好的效果。</span></p><h2 id="ss-H2-1570698405315"><span id="ss-SPAN-1570698521051"><font color="#008000">@张奕源 Nick</font>：图书《坏血》</span></h2><ul><li><span>适合人群：所有喜欢阅读或者对新奇的故事感兴趣的朋友</span></li><li><span>购买渠道：书店自购</span></li><li><span>参考价格：¥49.8</span></li></ul><div><p>这本书购于国庆假期期间。我在海边度假，空闲时间大把。而当地刚好有一家书店，于是决定买本书读一读。看到畅销区摆着《坏血》，我果断拿下。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper custom-width" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/10/aa7a5bb5c651bd37e130130139337b17.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" width="550" data-original="https://cdn.sspai.com/2019/10/10/aa7a5bb5c651bd37e130130139337b17.jpg"/></figure></div><p><span>《坏血》讲述了一场精彩的商业欺诈和它的破灭——硅谷（Silicon Valley）的女性创业家伊丽莎白·福尔摩斯（Elizabeth Holmes）创办了一家名为 Theranos 的医疗公司，宣称自己颠覆了传统的血液检查流程。病人只需提供指尖的一滴血液，并用特殊容器放进 Theranos 的检测仪里，就可以快速获得上百项健康指标。如果一切顺利，扎针和抽血将成为历史，人类仅凭指尖采血和「纳米容器」就能获知自己的健康状况，甚至判断是否患有重大疾病。</span></p><p><span>Theranos 构建的美好愿景吸引了包含基辛格（Henry Kissinger）、克林顿（Bill Clinton）、舒尔茨（George Shultz）、马蒂斯（James Mattis）等一大批美国政界、军界名人前来站台乃至加入董事会，伊丽莎白也频频和日本首相、美国总统等重要人物出现在同一场合，成了万众瞩目的创业明星。在巅峰时期，这家公司的估值高达九十亿美元，被视为下一个苹果（Apple）。</span></p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/10/6a1c7e13c61854d39a73d69b8f846dc9.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/10/6a1c7e13c61854d39a73d69b8f846dc9.jpg"/><figcaption class="ss-image-caption"><p>伊丽莎白从不掩饰自己对乔布斯（Steve Jobs）的崇拜和模仿，她也每天穿同样的黑色高领毛衣。图片来自 The Verge</p></figcaption></figure><p><span>但事实上，由于一滴血所能提供的讯息少得可怜，Theranos 从头到尾都没有真正实现过基于指尖采血的血液检测。实验室里的研究一塌糊涂，员工受到全面监视，噩梦般的法律团队还会时刻威胁那些离开的员工「什么都不许说」。在发现自己可以用西门子（SIEMENS）的仪器获得更可靠的检查数据后，Theranos 索性将病人的采血样本偷偷装进西门子的仪器，对外装作自己的仪器完成了检测过程。</span></p><p><span>《坏血》这本书的结构是非虚构写作（nonfiction）的绝佳范本。作者从和 Theranos 以及伊丽莎白相关的人物切入，带着困惑和怀疑一步步深入漩涡中心。由众多人物和事件构成的拼图渐渐合拢，构建出伊丽莎白·福尔摩斯以及 Theranos 欺诈行为的真实样貌。在最后几个章节中，作者本人——来自华盛顿邮报（Wall Street Journal）的记者约翰·卡雷路（John Carreyrou）——出现在事件里，进一步揭开骗局的真相。他和他的线人们经历了挑战、受挫、妥协和坚持，与 Theranos 疯狂的律师团队抗争到底，终于让公众看到了伊丽莎白的真面目。</span></p><figure tabindex="0" draggable="false" class="ss-img-wrapper custom-width" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/10/665989abff2d1540aa9c5d178b702c7b.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" width="600" data-original="https://cdn.sspai.com/2019/10/10/665989abff2d1540aa9c5d178b702c7b.jpg"/><figcaption class="ss-image-caption"><p>本书的作者约翰·卡雷路，两届普利策奖（Pulitzer Prize）得主</p></figcaption></figure><p><span>这本书里的故事非常精彩，阅读起来也毫不费力。尽管登场人物众多，但用巧妙的结构让你可以很容易就分辨和记住其中的关键角色。更有意思的是，书中描写的故事就是实实在在发生在硅谷，而且尚未完全结束的真实事件（就在两天前的十月七号，伊丽莎白的部分律师还宣称自己因为数年来未收到任何款项，拒绝继续为伊丽莎白服务）。这种文字和现实的交错，也让阅读体验更加迷人且独特。</span></p><p><b>如果你也想分享「新玩意」🔉：</b></p><p>很多读者表示自己也有一些希望分享的有趣产品。为了能让更多读者参与，我们决定从下一期开始在「新玩意」栏目最后添加一个新的版块，邀请大家分享你的「新玩意」，你只需要：
</p><ul><li>用 500-800 字介绍产品</li><li>配上 1-2 张产品的实拍图片</li></ul><p>成功入选栏目除了获得登上首页的机会，还可以得到 80 元的「剁手抚恤金」🧧。如果你有兴趣参与，就赶紧 <a href="https://jinshuju.net/f/e99ga9" target="_blank" class="insert-link">填写表单</a> 报名吧！</p>` },
    { id: 11, title: " 给 Windows 电脑硬盘分区，真的有必要吗？", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/ed3c740a-c0d5-23dc-185a-2e49d2c34cba.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "最热" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 12, title: "macOS Catalina 正式版来了，更新后先来试试这些新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/e01c7983-242f-6b12-61cd-fc4ca25f444a.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "最热" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 13, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "最热" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 14, title: "把 Spotlight 搜索栏变成 Siri 快捷指令启动器", created_time: "1542352451", author: "Minja", view: 32, comment: 13, list_img_src: "https://cdn.sspai.com/article/85c37a2b-e219-00cb-6817-836e93d6986f.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "最热" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 15, title: "如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧", created_time: "1542352451", author: "Clyde", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/76510ee6-c1b5-d2c7-315b-f8e726893ace.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "最热" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 16, title: "如何让 Android 10 拥有不输 iOS 的暗色模式体验？", created_time: "1542352451", author: "SpencerWoo", view: 18, comment: 6, list_img_src: "https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "最热" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 17, title: "Docker 的入门「指北」", created_time: "1523452567", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "最热" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 18, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 19, title: "如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧", created_time: "1542352451", author: "Clyde", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "最热" },
    { id: 20, title: "如何让 Android 10 拥有不输 iOS 的暗色模式体验？", created_time: "1542352451", author: "SpencerWoo", view: 18, comment: 6, list_img_src: "https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "最热" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 21, title: "Docker 的入门「指北」", created_time: "1523452567", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "最热" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 22, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "最热" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 23, title: "一周 App 派评 | 近期值得关注的 12 款应用", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/7c74a96f-238e-5922-0726-58823e171b3d.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "应用推荐", banner_img_src:'https://cdn.sspai.com/article/7c74a96f-238e-5922-0726-58823e171b3d.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p id="ss-P-1571038211773">我们整理了近期值得关注的 12 款 App，一起看看有没有你感兴趣的应用。</p><h2 id="ss-H2-1571033099705">iOS</h2><h3 id="ss-H3-1571033190326">Noto 笔记：设计精美、动效精致的笔记工具</h3><p>
    iOS 上的笔记 App 很多，功能也大同小异，不过，前一段时间刚刚上架应用商店的 Noto 依然能给你眼前一亮的感觉。</p><p>Noto 是一款富文本笔记工具，不支持 Markdown 语法，你可以在笔记界面点击键盘上方的快捷键以快速为输入的文字设置标题、段落、粗体、列表、检查项等样式。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/8ca376e8c20e255e32d9e76a5e4d62a4.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/8ca376e8c20e255e32d9e76a5e4d62a4.jpg"/></figure><p>
    虽然许多同类应用都支持在笔记中插入视频，但它们往往是以附件的形式将视频插入笔记，我们需要手动点击附件才能预览视频。</p><p>
    在 Noto 中，你插入的视频默认会以缩略图的形式展示在笔记里，轻按即可直接在笔记里播放。如果你在设置中打开了「自动播放视频」，浏览笔记就像在看《哈利·波特》中的预言家日报一样「栩栩如生」。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/e14a76ba6b811b6578f3b76c88aa0efe.gif?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/e14a76ba6b811b6578f3b76c88aa0efe.gif"/></figure><p>
    Noto 在交互动画上也做得非常不错。比如在拖拽笔记进入文件夹时，文件夹会呈现打开的动画，松手后文件夹图标上会随之出现新的纸张，就像是你真的把一张纸放进了文件夹。类似这样精致的动效在 Noto 中随处可见，无疑能够给我们带来更好的使用体验。</p><p>
    你可以在 <a href="https://apps.apple.com/cn/app/noto-elegant-note/id1459055246" style="font-family: -apple-system, BlinkMacSystemFont, PingFang-SC-Regular, &#34;Hiragino Sans GB&#34;, &#34;Microsoft Yahei&#34;, Arial, sans-serif; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit;">App Store</a> 免费下载 Noto，内购可以解锁附件数量限制、支持更多的导出格式和代码高亮等功能。Noto 内购价格为 128 元，目前正在进行半价优惠活动，价格为 68 元。</p><p><span app-id="14963" contenteditable="false" class="ss-loading"></span><br/></p><h3>Prizmo Go 3：老牌文本识别工具更新，支持离线识别中文</h3><p>
    Prizmo Go 与 Prizmo 的关系就像「<a href="https://sspai.com/post/47406" target="_blank" class="insert-link">白描取字</a>」之于「<a href="https://sspai.com/post/55215" target="_blank" class="insert-link">白描</a>」，前者主张更轻量的 OCR 文本识别功能，后者支持导出、编辑等更丰富的功能。近期，Prizmo Go 更新了 3.0 版本，除了对 iOS 13 进行适配外，终于支持了中文的本地识别功能。</p><p>
    由于以往的版本不支持中文的本地识别功能，如果你需要识别中文内容，不得不订阅高级套餐使用云端 OCR 功能。 Prizmo Go 3 加入了对中文本地识别功能的支持，但是在识别率上依然不太理想，即使是 iPad 上的印刷体文字也会出现严重的识别错误。如果你对于中文识别功能的需要比较高，建议选择其它工具或者订阅 Prizmo Go 的高级套餐。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/a812d39cfc56e649da011fbab6caf5f0.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/a812d39cfc56e649da011fbab6caf5f0.jpeg"/></figure><p>
    由于书本内侧会产生弯曲，我们通过摄像头拍摄出来的书页文字会产生形变，影响 OCR 识别率。Prizmo Go 3 会通过特殊算法来减少书页形变对识别功能产生的影响，从而提高识别率。</p><p>
    除此之外，应用在扫描拉丁字母（比如英文）文档时，会通过机器学习自动调整文档方向，这意味着你可以从更多角度扫描文档，应用会自动帮你调整到合适的方向。</p><p>
    Prizmo Go 针对 iOS 13 的特性做了许多适配工作，深色模式、快捷指令操作等常规升级不再赘述。值得一提的是，Prizmo Go 新版适配了 iOS 13 上的 Apple OCR 功能，这一功能可以在绝大多数情况下提升识别准确率，让我们在不订阅高级套餐的情况下，也能获得较高的文本识别准确率。遗憾的是，Apple OCR 功能目前仅支持识别英文文本。</p><p>
    你可以在 <a href="https://apps.apple.com/cn/app/prizmo-go-text-grabber/id1183367390" style="font-family: -apple-system, BlinkMacSystemFont, PingFang-SC-Regular, &#34;Hiragino Sans GB&#34;, &#34;Microsoft Yahei&#34;, Arial, sans-serif; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit;">App Store</a> 免费下载 Prizmo Go，云端识别、手写英文识别、文本翻译等高级功能需要订阅解锁，价格为 7 元 / 月、73 元 / 年。</p><p><span app-id="12736" contenteditable="false" class="ss-loading"></span><br/></p><h3>Hipstamatic X Analog Camera：老牌摄影工具新版本</h3><p>老牌摄影工具 <a href="https://sspai.com/post/39648" target="_blank" class="insert-link">Hipstamatic</a> 前不久为我们带来了十周年纪念版相机应用 Hipstamatic X，新款 App 依然走的是模拟 DIY 镜头底片的老套路，但它还是在第一时间适配了 iPhone 11 Pro 的超广角镜头。</p><p>Hipstamatic X 取消了老版本「打脸式」的专业拍摄模式和复杂的修图工具，将核心放回了模拟复古相机方面。除了搭配相机镜头和胶片，我们不需要再考量其它拍摄因素。应用的后期编辑功能也完全简化成了胶片滤镜效果，连滤镜强度调整功能都不支持。</p><p>或许有人会觉得 Hipstamatic 的自由度降低了，我倒是觉得新版 Hipstamatic 这次算是「回归初心」了，毕竟研究相机已经耗尽了我的大量精力，如果这个时候还要进行复杂的后期修图工作，之前的辛苦到底是为了什么呢。</p><p>
    不过，Hipstamatic X 也有一些不足之处，例如不支持编辑系统相册中已有的素材，景深效果不可用等。此外，新版 Hipstamatic 的配置界面虽然好看却不够直观，有目的性地找镜头和胶片时会有些困难。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/19d06c6646032afc84439544534aa01c.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/19d06c6646032afc84439544534aa01c.jpg"/></figure><p>你可以在 <a href="https://apps.apple.com/cn/app/hipstamatic-x-analog-camera/id1450672436" target="_blank" style="">App Store</a> 免费下载 Hipstamatic X Analog Camera。Hipstamatic X 采用了订阅制的收费方式，价格为 168 元 / 年，应用提供了买断版本，价格为 1298 元。</p><p><span app-id="14964" contenteditable="false" class="ss-loading"></span><br/></p><h3>小键盘：帮你「花样聊天」</h3><p>
    你是否总在工作群的沟通中「找不着北」？你是否总在同学群的闲聊中被人忽视？你是否总在家庭群的争论中败下阵来？这些时候你都会需要这款能帮你更好地聊天的 App：小键盘。</p><p>「小键盘」内置了多项实用的聊天功能，比如「<a href="https://sspai.com/post/55776" target="_blank" class="insert-link">引用回复</a>」「赞同」等功能，让你在微信工作群可以更直观地与同事沟通。还有「重要的事情说三遍」，小键盘可以帮你减少重复粘贴发送文本的工作量。</p><p>
    除了提升沟通效率外，小键盘还有一个非常重（gui）要（chu）的用途，能够为你大幅提升「存在感」。无论是单字车轮战的「聊天刷屏神器」，还是阵型诡异的「S 型输出」或者「竖排文字」，大面积的「文字攻击」都会让你的群聊朋友再也无法忽视你。不过此类功能「杀伤力」过强，请谨慎使用，如果你被踢出了群聊，不要来找我哟。</p><p>「小键盘」的第三项功能是文字加密，它可以将你输入的文字转换成 Emoji 或者是无法看见的字符，只有「小键盘」的用户才可进行解密。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/38199ad7dc2fb36e7b50417a548122e2.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/38199ad7dc2fb36e7b50417a548122e2.png"/></figure><p>
    如果你以为这就是「小键盘」的全部功能，那就太天真了。打开应用中的文字流工具列表，点击右上角的「+」，你就可以创建新的文字流工具。应用不仅提供了近 20 种简单的文本编辑工具，还支持导入 JavaScript 脚本进行复杂的文本处理，可玩性十足，操作方式和理念类似 <a href="https://sspai.com/post/56821" target="_blank" class="insert-link">快捷指令</a>。</p><p>如果你用「小键盘」做了有趣的文本处理工具，别忘了在评论区和我们分享。</p><p>你可以在 <a href="https://apps.apple.com/cn/app/%E5%B0%8F%E9%94%AE%E7%9B%98-%E5%BC%80%E5%90%AF%E8%8A%B1%E6%A0%B7%E8%81%8A%E5%A4%A9%E6%A8%A1%E5%BC%8F/id1476193562" target="_blank" class="insert-link">App Store</a> 下载「小键盘」，应用售价 3 元。</p><p><span app-id="14965" contenteditable="false" class="ss-loading"></span><br/></p><h2 id="ss-H2-1571041881911">Android</h2><div><h3 id="ss-H3-1571042961690">Teehub：为你量身打造的社交媒体阅读器</h3><p>
    有多少人在浏览社交媒体的时候只浏览了信息流中的图片和视频，而完全忽略了文字？如果你是其中的一员，那么这款 Teehub 简直就是为你量身打造的社交媒体阅读器。打开侧栏菜单中显眼的 Show only media （只显示媒体）开关后，列表界面下就会只剩下图片和视频。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/30f76686a8be834de5741b78ec097d84.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/30f76686a8be834de5741b78ec097d84.png"/></figure><p>甚至在切换到 Video 分组后，你可以像使用一款短视频应用那样，上下划动连续刷取信息流中的视频。<br/></p><figure tabindex="0" draggable="false" class="ss-img-wrapper custom-width" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/9980428724f0489ed81cf8d7849da545.gif?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" width="350" data-original="https://cdn.sspai.com/2019/10/14/9980428724f0489ed81cf8d7849da545.gif"/></figure><p>其实 Teenhub 另一个作用是直接下载信息流中的图片和视频。在查看带有媒体的帖子时，在常规的转发和点赞等按钮后多增了下载按钮。轻轻一点，不仅帖子中的图片都会被下载到本地，而且也会收录在 Teehub 自带的下载管理器中。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/35413435de82b42c69406558d3f6526b.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/35413435de82b42c69406558d3f6526b.png"/></figure><p>
    Teenhub 支持登录 Twitter 和 Tumblr，但免费版仅限登录一个账号。你也可以通过订阅 Teenhub Pro 来开启多账户登录和批量下载图片视频的高级功能。</p>` },
    { id: 24, title: "Material Design 设计奖揭晓，Google 选出了 4 款最佳应用", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/6bbcccb2-7a5d-4df3-75cd-086b0e81d790.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "应用推荐", banner_img_src:'https://cdn.sspai.com/article/6bbcccb2-7a5d-4df3-75cd-086b0e81d790.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p id="ss-P-1571038211773">我们整理了近期值得关注的 12 款 App，一起看看有没有你感兴趣的应用。</p><h2 id="ss-H2-1571033099705">iOS</h2><h3 id="ss-H3-1571033190326">Noto 笔记：设计精美、动效精致的笔记工具</h3><p>
    iOS 上的笔记 App 很多，功能也大同小异，不过，前一段时间刚刚上架应用商店的 Noto 依然能给你眼前一亮的感觉。</p><p>Noto 是一款富文本笔记工具，不支持 Markdown 语法，你可以在笔记界面点击键盘上方的快捷键以快速为输入的文字设置标题、段落、粗体、列表、检查项等样式。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/8ca376e8c20e255e32d9e76a5e4d62a4.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/8ca376e8c20e255e32d9e76a5e4d62a4.jpg"/></figure><p>
    虽然许多同类应用都支持在笔记中插入视频，但它们往往是以附件的形式将视频插入笔记，我们需要手动点击附件才能预览视频。</p><p>
    在 Noto 中，你插入的视频默认会以缩略图的形式展示在笔记里，轻按即可直接在笔记里播放。如果你在设置中打开了「自动播放视频」，浏览笔记就像在看《哈利·波特》中的预言家日报一样「栩栩如生」。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/e14a76ba6b811b6578f3b76c88aa0efe.gif?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/e14a76ba6b811b6578f3b76c88aa0efe.gif"/></figure><p>
    Noto 在交互动画上也做得非常不错。比如在拖拽笔记进入文件夹时，文件夹会呈现打开的动画，松手后文件夹图标上会随之出现新的纸张，就像是你真的把一张纸放进了文件夹。类似这样精致的动效在 Noto 中随处可见，无疑能够给我们带来更好的使用体验。</p><p>
    你可以在 <a href="https://apps.apple.com/cn/app/noto-elegant-note/id1459055246" style="font-family: -apple-system, BlinkMacSystemFont, PingFang-SC-Regular, &#34;Hiragino Sans GB&#34;, &#34;Microsoft Yahei&#34;, Arial, sans-serif; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit;">App Store</a> 免费下载 Noto，内购可以解锁附件数量限制、支持更多的导出格式和代码高亮等功能。Noto 内购价格为 128 元，目前正在进行半价优惠活动，价格为 68 元。</p><p><span app-id="14963" contenteditable="false" class="ss-loading"></span><br/></p><h3>Prizmo Go 3：老牌文本识别工具更新，支持离线识别中文</h3><p>
    Prizmo Go 与 Prizmo 的关系就像「<a href="https://sspai.com/post/47406" target="_blank" class="insert-link">白描取字</a>」之于「<a href="https://sspai.com/post/55215" target="_blank" class="insert-link">白描</a>」，前者主张更轻量的 OCR 文本识别功能，后者支持导出、编辑等更丰富的功能。近期，Prizmo Go 更新了 3.0 版本，除了对 iOS 13 进行适配外，终于支持了中文的本地识别功能。</p><p>
    由于以往的版本不支持中文的本地识别功能，如果你需要识别中文内容，不得不订阅高级套餐使用云端 OCR 功能。 Prizmo Go 3 加入了对中文本地识别功能的支持，但是在识别率上依然不太理想，即使是 iPad 上的印刷体文字也会出现严重的识别错误。如果你对于中文识别功能的需要比较高，建议选择其它工具或者订阅 Prizmo Go 的高级套餐。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/a812d39cfc56e649da011fbab6caf5f0.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/a812d39cfc56e649da011fbab6caf5f0.jpeg"/></figure><p>
    由于书本内侧会产生弯曲，我们通过摄像头拍摄出来的书页文字会产生形变，影响 OCR 识别率。Prizmo Go 3 会通过特殊算法来减少书页形变对识别功能产生的影响，从而提高识别率。</p><p>
    除此之外，应用在扫描拉丁字母（比如英文）文档时，会通过机器学习自动调整文档方向，这意味着你可以从更多角度扫描文档，应用会自动帮你调整到合适的方向。</p><p>
    Prizmo Go 针对 iOS 13 的特性做了许多适配工作，深色模式、快捷指令操作等常规升级不再赘述。值得一提的是，Prizmo Go 新版适配了 iOS 13 上的 Apple OCR 功能，这一功能可以在绝大多数情况下提升识别准确率，让我们在不订阅高级套餐的情况下，也能获得较高的文本识别准确率。遗憾的是，Apple OCR 功能目前仅支持识别英文文本。</p><p>
    你可以在 <a href="https://apps.apple.com/cn/app/prizmo-go-text-grabber/id1183367390" style="font-family: -apple-system, BlinkMacSystemFont, PingFang-SC-Regular, &#34;Hiragino Sans GB&#34;, &#34;Microsoft Yahei&#34;, Arial, sans-serif; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit;">App Store</a> 免费下载 Prizmo Go，云端识别、手写英文识别、文本翻译等高级功能需要订阅解锁，价格为 7 元 / 月、73 元 / 年。</p><p><span app-id="12736" contenteditable="false" class="ss-loading"></span><br/></p><h3>Hipstamatic X Analog Camera：老牌摄影工具新版本</h3><p>老牌摄影工具 <a href="https://sspai.com/post/39648" target="_blank" class="insert-link">Hipstamatic</a> 前不久为我们带来了十周年纪念版相机应用 Hipstamatic X，新款 App 依然走的是模拟 DIY 镜头底片的老套路，但它还是在第一时间适配了 iPhone 11 Pro 的超广角镜头。</p><p>Hipstamatic X 取消了老版本「打脸式」的专业拍摄模式和复杂的修图工具，将核心放回了模拟复古相机方面。除了搭配相机镜头和胶片，我们不需要再考量其它拍摄因素。应用的后期编辑功能也完全简化成了胶片滤镜效果，连滤镜强度调整功能都不支持。</p><p>或许有人会觉得 Hipstamatic 的自由度降低了，我倒是觉得新版 Hipstamatic 这次算是「回归初心」了，毕竟研究相机已经耗尽了我的大量精力，如果这个时候还要进行复杂的后期修图工作，之前的辛苦到底是为了什么呢。</p><p>
    不过，Hipstamatic X 也有一些不足之处，例如不支持编辑系统相册中已有的素材，景深效果不可用等。此外，新版 Hipstamatic 的配置界面虽然好看却不够直观，有目的性地找镜头和胶片时会有些困难。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/19d06c6646032afc84439544534aa01c.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/19d06c6646032afc84439544534aa01c.jpg"/></figure><p>你可以在 <a href="https://apps.apple.com/cn/app/hipstamatic-x-analog-camera/id1450672436" target="_blank" style="">App Store</a> 免费下载 Hipstamatic X Analog Camera。Hipstamatic X 采用了订阅制的收费方式，价格为 168 元 / 年，应用提供了买断版本，价格为 1298 元。</p><p><span app-id="14964" contenteditable="false" class="ss-loading"></span><br/></p><h3>小键盘：帮你「花样聊天」</h3><p>
    你是否总在工作群的沟通中「找不着北」？你是否总在同学群的闲聊中被人忽视？你是否总在家庭群的争论中败下阵来？这些时候你都会需要这款能帮你更好地聊天的 App：小键盘。</p><p>「小键盘」内置了多项实用的聊天功能，比如「<a href="https://sspai.com/post/55776" target="_blank" class="insert-link">引用回复</a>」「赞同」等功能，让你在微信工作群可以更直观地与同事沟通。还有「重要的事情说三遍」，小键盘可以帮你减少重复粘贴发送文本的工作量。</p><p>
    除了提升沟通效率外，小键盘还有一个非常重（gui）要（chu）的用途，能够为你大幅提升「存在感」。无论是单字车轮战的「聊天刷屏神器」，还是阵型诡异的「S 型输出」或者「竖排文字」，大面积的「文字攻击」都会让你的群聊朋友再也无法忽视你。不过此类功能「杀伤力」过强，请谨慎使用，如果你被踢出了群聊，不要来找我哟。</p><p>「小键盘」的第三项功能是文字加密，它可以将你输入的文字转换成 Emoji 或者是无法看见的字符，只有「小键盘」的用户才可进行解密。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/38199ad7dc2fb36e7b50417a548122e2.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/38199ad7dc2fb36e7b50417a548122e2.png"/></figure><p>
    如果你以为这就是「小键盘」的全部功能，那就太天真了。打开应用中的文字流工具列表，点击右上角的「+」，你就可以创建新的文字流工具。应用不仅提供了近 20 种简单的文本编辑工具，还支持导入 JavaScript 脚本进行复杂的文本处理，可玩性十足，操作方式和理念类似 <a href="https://sspai.com/post/56821" target="_blank" class="insert-link">快捷指令</a>。</p><p>如果你用「小键盘」做了有趣的文本处理工具，别忘了在评论区和我们分享。</p><p>你可以在 <a href="https://apps.apple.com/cn/app/%E5%B0%8F%E9%94%AE%E7%9B%98-%E5%BC%80%E5%90%AF%E8%8A%B1%E6%A0%B7%E8%81%8A%E5%A4%A9%E6%A8%A1%E5%BC%8F/id1476193562" target="_blank" class="insert-link">App Store</a> 下载「小键盘」，应用售价 3 元。</p><p><span app-id="14965" contenteditable="false" class="ss-loading"></span><br/></p><h2 id="ss-H2-1571041881911">Android</h2><div><h3 id="ss-H3-1571042961690">Teehub：为你量身打造的社交媒体阅读器</h3><p>
    有多少人在浏览社交媒体的时候只浏览了信息流中的图片和视频，而完全忽略了文字？如果你是其中的一员，那么这款 Teehub 简直就是为你量身打造的社交媒体阅读器。打开侧栏菜单中显眼的 Show only media （只显示媒体）开关后，列表界面下就会只剩下图片和视频。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/30f76686a8be834de5741b78ec097d84.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/30f76686a8be834de5741b78ec097d84.png"/></figure><p>甚至在切换到 Video 分组后，你可以像使用一款短视频应用那样，上下划动连续刷取信息流中的视频。<br/></p><figure tabindex="0" draggable="false" class="ss-img-wrapper custom-width" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/9980428724f0489ed81cf8d7849da545.gif?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" width="350" data-original="https://cdn.sspai.com/2019/10/14/9980428724f0489ed81cf8d7849da545.gif"/></figure><p>其实 Teenhub 另一个作用是直接下载信息流中的图片和视频。在查看带有媒体的帖子时，在常规的转发和点赞等按钮后多增了下载按钮。轻轻一点，不仅帖子中的图片都会被下载到本地，而且也会收录在 Teehub 自带的下载管理器中。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/14/35413435de82b42c69406558d3f6526b.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/14/35413435de82b42c69406558d3f6526b.png"/></figure><p>
    Teenhub 支持登录 Twitter 和 Tumblr，但免费版仅限登录一个账号。你也可以通过订阅 Teenhub Pro 来开启多账户登录和批量下载图片视频的高级功能。</p>`},
    { id: 25, title: "Surface 手机来了，还有新电脑和双屏平板：微软硬件发布会汇总", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/2019/10/03/7358f014182474c91d8773ee9203a481.png?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "应用推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 26, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "应用推荐",banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 27, title: "如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧", created_time: "1542352451", author: "Clyde", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "应用推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 28, title: "如何让 Android 10 拥有不输 iOS 的暗色模式体验？", created_time: "1542352451", author: "SpencerWoo", view: 18, comment: 6, list_img_src: "https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "应用推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 29, title: "Docker 的入门「指北」", created_time: "1523452567", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "应用推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 30, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "应用推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 31, title: "如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧", created_time: "1542352451", author: "Clyde", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "应用推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 32, title: "如何让 Android 10 拥有不输 iOS 的暗色模式体验？", created_time: "1542352451", author: "SpencerWoo", view: 18, comment: 6, list_img_src: "https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "应用推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 33, title: "Docker 的入门「指北」", created_time: "1523452567", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "应用推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 34, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "应用推荐" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},

    { id: 35, title: "在 B 站学做美食，我关注了这些 UP 主", created_time: "1548754215", author: "100GooWoo", view: 25, comment: 32, list_img_src: "https://cdn.sspai.com/article/619b5bc4-0fa0-ff09-6293-021195c3c90a.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/08/28/477d070ddac6f198eaad61dd4a02da15.jpeg?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "生活方式",banner_img_src:'https://cdn.sspai.com/2019/10/13/a6f195e0291a70e52f8b9966b2519cf1.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<h2 id="ss-H2-1570957148178">我关注了哪些 UP 主</h2><h3><a href="https://space.bilibili.com/290526283?from=search&amp;seid=12326806457892648881" target="_blank" class="insert-link" id="ss-A-1570957207866">美食作家王刚R</a></h3><p>王刚，一个以「美食作家」自居的男人，朴实无华的名字下一直贴着「硬核」的标签，「宽油」一直以来都是他视频里的硬核标志之一。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/de9e282edab4397556a7895b9feb7826.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/de9e282edab4397556a7895b9feb7826.png"/></figure><p>王刚似乎不仅仅满足于教你做菜，甚至是在教你开饭店！从挑选厨具再到技术总结，无时无刻不透露出一个会做饭的厨子的魅力；青椒、花椒、二荆条，酱油鸡精调味料，火辣的菜品是他教学视频中的常客。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/220de45e0d037cef5ff40a340b084d7c.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/220de45e0d037cef5ff40a340b084d7c.png"/></figure><p>从他的视频中我学到最多的就是<b>「热锅冷油滑锅」不粘锅</b>，煎鱼、煎蛋屡试不爽。</p><p>练习难度：★★★★☆</p><h3><a href="https://space.bilibili.com/321116648?from=search&amp;seid=10360018185110514760" target="_blank" class="insert-link" id="ss-A-1570957344274">火筵家常</a></h3><p>火哥，花名「火花石」，川味川语直都是他视频里的特色。</p><p>如果你喜欢川菜，那么他的视频一定合你的胃口；即便你对川菜不了解，看他做菜后相信川菜也会给你留下味型丰富、千姿百态的印象。「巴适得板」这一句方言在结尾中也每每透露出一种川渝美食的爽辣怡人。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/7b5c550b43cadc9cec36115a99ab0913.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/7b5c550b43cadc9cec36115a99ab0913.png"/></figure><p>当然火哥也不仅仅只做菜这么简单，记得前段时间他还录制了自己一人在天台搭一个棚子的系列视频，不得不佩服他除了厨艺，木艺巧思也十分出彩。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/bf77bc5bd61b155e8285234a708dd80f.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/bf77bc5bd61b155e8285234a708dd80f.png"/></figure><p>火筵家常做大多数菜品也都还是可以实践的，跟着火哥做准没错。</p><p>练习难度：★★★</p><h3><a href="https://space.bilibili.com/174890586?from=search&amp;seid=14881958940661110778" target="_blank" class="insert-link" id="ss-A-1570957458687">厨男冬阳君</a></h3><p>冬阳君的视频在 B 站的虽然视频弹幕不算多，但是做菜的风格也是独树一帜。</p><p>语速、手速无一不快，视频时长大多介于 1~2 分钟左右，短小精悍，适合现学现用。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/f246fb1b2f69f6ec5f049a295043033b.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/f246fb1b2f69f6ec5f049a295043033b.png"/></figure><p>冬阳君做的菜品几乎没有固定的派系，类型丰富多样，总有一款适合你。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/6c73f27205e1753f62822480e6ec3a16.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/6c73f27205e1753f62822480e6ec3a16.png"/></figure><p>练习难度：★★★</p><h3><a href="https://space.bilibili.com/8960728?from=search&amp;seid=8532443136241675498" target="_blank" class="insert-link" id="ss-A-1570957542586">日食记</a></h3><p>如果有那么一种生物能让人欲罢不能，那非猫星人莫属。而当「治愈」一词和猫碰到一起时，在人上产生的化学反应不仅是感官上的愉悦，更是心里的满足。</p><p>「日食记」 就是带有这类属性的视频作品。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/850add2eb93cf70af0ada8ef4b0026dc.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/850add2eb93cf70af0ada8ef4b0026dc.png"/></figure><p>日食记应该是最早以这种「和猫一起做饭」的治愈风格为特点的视频自媒体之一了。最初关注日食记不是因为姜老刀做的东西，而是陪他一起出镜的那只猫——酥饼。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/d257f6c4ceb7097a3584fc421b49e4f5.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/d257f6c4ceb7097a3584fc421b49e4f5.jpeg"/></figure><p>日食记视频里透露出那种小而美的精致感，一直都会让人享受生活憧憬着美好地幻想。</p><p>练习难度：★★★☆</p><h3><a href="https://space.bilibili.com/5957440?from=search&amp;seid=16961316960903594833" target="_blank" class="insert-link" id="ss-A-1570957642748">曼食慢语</a></h3><p>阿曼达老师是我最早关注的 UP 主之一，即便最初还不怎么用 B 站，也经常在优酷刷到她的一些视频。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/ec5f3648cfc4b665f0ab7fbb61a1ba87.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/ec5f3648cfc4b665f0ab7fbb61a1ba87.png"/></figure><p>她的教学菜品最开始无论是从技法还是摆盘，大多数都带有明显的西式风格；而现在的风格不仅仅局限于西式的菜肴，中式菜肴、饮品等一应俱全。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/1f2551a71472eb64b020f35b5d14532b.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/1f2551a71472eb64b020f35b5d14532b.jpg"/></figure><p>虽然从 2014 年到现在已经过去了 5 年，但变的是菜肴的品类，不变的是阿曼达老师的美貌。</p><p>练习难度：★★★★</p><h3><a href="https://space.bilibili.com/17546432?from=search&amp;seid=11068968225534157338" id="ss-A-1570957766386">马壮实Hera</a></h3><p>「Hello 大家好我是盲石」。</p><p>不看 ID 的时候我确实以为这人的昵称叫盲石，但是后面看了才发现其实他的 ID 念快了确实会有这种「大舌头」的效果。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/d9664f24bb6030e978ebf0c7076ab909.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/d9664f24bb6030e978ebf0c7076ab909.png"/></figure><p>他无论是西式还是中式的菜品都会做，一直以来他的视频也都是以「不露脸」出镜为主，声音也很有磁性；马壮实使用盐和黑胡椒的独特方式也成为了看客们确认是否是他本人的标志之一。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/dabd767db8bac2f6fb8b2df5ee9e8d20.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/dabd767db8bac2f6fb8b2df5ee9e8d20.png"/></figure><p>不过看到他本人露脸出镜时我才明白，这一位兼具帅气和厨艺的小伙子为什么会受到那么多人喜欢了。</p><p>练习难度：★★★</p><h3><a href="https://space.bilibili.com/343457597?from=search&amp;seid=2053790561364731731" id="ss-A-1570957882274">詹姆士的厨房</a></h3><p>记得早年最喜欢看的一些家常菜的教学节目还是央视频道的《天天饮食》以及《厨王争霸》，往后就就很少在电视上看到喜欢的烹饪节目了。</p><p>直到我在 YouTube 上发现了《詹姆士厨房》。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/bcf283466f729f53edea96b9d40f7d6b.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/bcf283466f729f53edea96b9d40f7d6b.png"/></figure><p>《詹姆士的厨房》是贵州卫视的一档节目，里面詹姆士「大叔」和林晶晶「傻白甜」的这种反差萌组合还是让人觉得蛮有趣的。老詹是个有着丰富做菜经验的台湾人，而林晶晶好像还是个在读的大学生（当然不知道现在毕业没有）。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/92f8f596dc4a376eff7d750c1952e57a.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/92f8f596dc4a376eff7d750c1952e57a.jpg"/></figure><p>虽然西式菜肴是《詹姆士厨房》的常客，但对新手或者喜欢做饭的人来说也并不是特别麻烦——它们更多地反而是比较接地气、比较家常的版本，操作起来不算复杂。</p><p>练习难度：★★☆</p><h3><a href="https://space.bilibili.com/236711132?from=search&amp;seid=15802148234346657710" target="_blank" class="insert-link" id="ss-A-1570958009236">大师的菜</a></h3><p>虽然大师的菜片头往往都放着这么一句话：</p><blockquote><p>大师的菜，家常的味。</p></blockquote><p>但事实上他们做的菜往往都不家常……大多数都属于可远观不可尝试的范畴。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/cdad7f2d253eada866a01dd6bccf4ca2.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/cdad7f2d253eada866a01dd6bccf4ca2.png"/></figure><p>尽管如此，看大师做菜还是能领略到中国人对于「吃」这方面是有多么挑剔，千百年来不断积淀发展地饮食文化，造就了现今中国菜系遍地开花。</p><p>练习难度：★★★★★（王者级）</p><h3><a href="https://space.bilibili.com/30643878?from=search&amp;seid=8377593907404291207" id="ss-A-1570958084207">野食小哥</a></h3><p>野食小哥，一个「不会说话」且有多处「房产」的男人，「诸食皆宜，百无禁忌」是他的标志，一个「野」字就注定他视频的场景多数是在室外。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/565df205a214605012168f7795b62de4.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/565df205a214605012168f7795b62de4.png"/></figure><p>在野外做菜倒是个不小的挑战，学习不言传，全靠身教。野食小哥做菜内容没有那么多技法的讲究，都是很原始、简单的做法，也不会跟你讲有什么步骤。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/2fe0f26f485b5f28c62a11a936d90a81.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/2fe0f26f485b5f28c62a11a936d90a81.png"/></figure><p>大多数时候看他的视频，其实更多是在看一种「一人食」的故事风格。</p><p>练习难度：★★</p><h3><a href="https://space.bilibili.com/101229184?from=search&amp;seid=6772173380081240936" id="ss-A-1570958144048">滇西小哥</a></h3><p>如果不看视频，光看名字你是否会认为滇西小哥是一位男性的 UP 主？</p><p>非也，其实是滇西妹子一枚。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper custom-width" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/212d1fa7c36db0f8a4882d48afa48956.jpg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" width="690" data-original="https://cdn.sspai.com/2019/10/13/212d1fa7c36db0f8a4882d48afa48956.jpg"/></figure><p>她的视频以乡间风格为主，透过视频你可以领略到滇西那块宝地的乡村美。 看过「李子柒」视频的朋友会不自觉将她们俩进行对比，但是两者全然不是一种风格，前者营造出一种世外桃源的感觉，是憧憬中的理想乡；后者则会给你一种悠然自得的真实感，是实打实地水村山郭。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/caa312d991245e8ac60a6ac0143f6409.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/caa312d991245e8ac60a6ac0143f6409.png"/></figure><p>但是我的关注点可能是，小哥每次做菜的份量都很多（感觉乡下的物价都很低的亚子）！</p><p>练习难度：★★</p><h2 id="ss-H2-1570958188812">附：水煮肉片的制作流程</h2><p id="ss-P-1570958190941">光说不练假把式，虽然说从小到大一直会有看别人关于做菜的视频，但是真正自己按别人的步骤来做菜还是第一次。</p><p id="ss-P-1570958190941">所以趁着国庆放假期间的时候挑战了一次 <strong style="font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit;">「水煮肉片」</strong>。</p><p>关于自己做饭做菜的一些感想，你可以参考我这篇文章：<a href="https://beta.sspai.com/post/56740">一个人也要好好吃饭——都市青年做饭指北</a></p><p>水煮肉片看起来好像是一道味道温和地菜肴，但是如果你曾吃过带有「水煮」字样的菜品，如水煮鱼、水煮牛肉等你就会知道，这道菜绝对是有种「扮猪吃老虎」地感觉，名字看起来很温和，但味道却异常地辛辣。</p><p>这道菜地配料并不复杂，主要有：</p><ul><li>素菜：多以莴笋、油麦菜、豆芽等为主</li><li>荤菜：牛肉、猪肉、鱼肉片皆可</li><li>其他配料：葱姜蒜末、干辣椒、青花椒和豆瓣酱</li></ul><div><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/bc6b9714fa0c79396dba4ee9a1818431.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/bc6b9714fa0c79396dba4ee9a1818431.jpeg"/></figure></div><h3>预处理</h3><p>将所有配料准备好后就需要对其进行一些基本的预处理：</p><ul><li>叶菜类的素菜切成手指长度地长段，根茎类的素菜切成片状</li><li>肉片切薄，一是方便入味，二是便于煮熟；然后以适量的酱油、盐、淀粉腌制，最后导入些许食用油防止粘连</li><li>干辣椒剪段后和青花椒用小火干炒，见干辣椒外皮微微烧焦后倒出慢慢剁细制成刀口辣椒</li><li>葱、姜、蒜都分别剁碎。</li></ul><h3 id="ss-H3-1570958281902">炒制</h3><p>炒料这一步首先是要将垫底的素菜起油锅后加盐炒制断生，加盐是为了让素菜有点底味。断生之后即可盛出铺在容器底部。</p><p>然后再另起油锅下姜和一半蒜末、一半刀口辣椒爆香，之后下一勺或两勺豆瓣酱转小火慢炒出红油；看到锅里油光红亮后就加半碗水烧开，期间加入酱油、耗油和一些鸡精调味。</p><p>水开后下肉片滑散防止粘连，转小火防止脱浆并将肉煮熟煮透。大约 5 分钟后即可盛出装盘</p><h3 id="ss-H3-1570958293872">点缀</h3><p>所有菜码乘出后再撒上葱末和剩下的一半蒜末和一半刀口辣椒，之后将锅烧热倒入少量食用油，加热至稍微冒青烟即可泼在上面即可葱蒜末和辣椒上激发气香味即可。</p><p>一道麻辣鲜香的水煮肉片就做好了！</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/10/13/0db8a8cb102fcf292c6760a551f51bf0.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/10/13/0db8a8cb102fcf292c6760a551f51bf0.jpeg"/></figure><p>你的拿手好菜是什么，又有哪些「宝藏」视频 UP 主想要推荐，欢迎在评论区分享你的看法。</p><p>文中配图源自 UP 主 B 站界面截图、微博配图。<br/></p><p>题图源于 Photo by <a href="https://unsplash.com/@icons8?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Icons8 team</a> on <a href="https://unsplash.com/s/photos/cooking?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>。</p>` },
    { id: 36, title: "在 Kindle 上看漫画、RSS、PDF？5 个小工具帮你获得最佳体验", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/fad71661-1950-66ff-3d49-9dca0874d39c.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "生活方式" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 37, title: "FM 3.14 周报 | 让人迷醉的后摇序曲、音乐动画电影《声怒》上线、盘尼西林、麻油叶新专发布", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/b2d7cf4e-2b3d-e6e9-3b95-34900d1e3b11.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "生活方式" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 38, title: "全新的桌面布局，提供选择不同图标大小", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "生活方式" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 39, title: "如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧", created_time: "1542352451", author: "Clyde", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "生活方式" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 40, title: "如何让 Android 10 拥有不输 iOS 的暗色模式体验？", created_time: "1542352451", author: "SpencerWoo", view: 18, comment: 6, list_img_src: "https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "生活方式",banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>` },
    { id: 41, title: "Docker 的入门「指北」", created_time: "1523452567", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "生活方式",banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>` },
    { id: 42, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg" },
    { id: 43, title: "如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧", created_time: "1542352451", author: "Clyde", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "生活方式" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 44, title: "如何让 Android 10 拥有不输 iOS 的暗色模式体验？", created_time: "1542352451", author: "SpencerWoo", view: 18, comment: 6, list_img_src: "https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "生活方式" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 45, title: "Docker 的入门「指北」", created_time: "1523452567", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "生活方式" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 46, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "生活方式" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 47, title: "我们如何用 Notion 做会议记录 | 工作日志", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/a4c14091-209d-1554-49b5-c5f46e1857e3.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2018/01/16/1fe3263b926fcf2da1829ff7ed302168.jpg?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "Power+",banner_img_src: 'https://cdn.sspai.com/article/a4c14091-209d-1554-49b5-c5f46e1857e3.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p>相信 Power+ 的读者对 Notion 已经不陌生了，在 Power+ 2.0 的初期就写过《<a href="https://sspai.com/post/52176">Notion 使用详解：来自未来的笔记协作工具</a>》和《<a href="https://sspai.com/post/52769">Notion 进阶技巧：学会使用「组合技」 | 工作日志</a>》这两篇文章，其中介绍了 Notion 的使用方法和一些实用技巧。</p>
    <p>除了介绍之外，Notion 还贯穿着我们的工作流程，我们用 Notion 保存选题、建立知识库、分配文章排期。在顺利完成这些任务之余，我们每周都要进行选题会，期间的会议记录也都是通过 Notion 完成的。在这一年间，我们一共记录了 55 次会议内容，处理了 1232 个选题，积累了 208 个知识库内容。由于涉及到具体的工作内容，不能将所有内容展示出来，这里可以给大家展示一下我们的会议记录截图。</p><figure tabindex="0" draggable="false" class="ss-img-wrapper" contenteditable="false"><img src="https://cdn.sspai.com/2019/09/04/92b52a0b1812752681d30c6fb3843561.png?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1" alt="" data-original="https://cdn.sspai.com/2019/09/04/92b52a0b1812752681d30c6fb3843561.png"/><figcaption class="ss-image-caption">去年至今，每周一次的会议记录</figcaption></figure>
    
    <p>在这一整套体系之中，最值得一提的是我们用于会议记录的模板，这一套会议记录模板能够<strong>充分配合会议进程</strong>，对多个表格的内容筛选、排序、处理，让每个参与会议的人都能在会议期间高度集中注意力，共同解决问题。</p>
    <p><a href="https://sspai.com/series/70">🔒 订阅以下载 Notion 单个会议记录模板</a></p>
    <p>这一套模板也会分享给大家参考，不过这和我们实际工作环境仍有很大的区别，删去了真实的数据统计、精简了表格内可选项、改为相对简单的表格关联，仅保留部分示例数据。</p>
    <p>如果你想将整个套件收入囊中，可以将下面这个 Notion 会议记录模板组保存到自己的 Workspace，其中包含了演示数据库、少量演示标签。大家可以在它的基础上根据自己的实际需求进行调整。</p>
    <p><a href="https://sspai.com/series/70">🔒 订阅以下载 Notion 会议记录模板组（包含演示数据库、演示标签系统）</a></p>` },
    { id: 48, title: "国庆看什么：DC 新片《猛禽小队和哈莉·奎因》正式预告，《我和我的祖国》上映", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/3156926e-2b92-b834-735b-9edb3daea9c1.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "Power+",banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>` },
    { id: 49, title: "展示来自用户的最真实的体验和观点", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/2019/10/13/a6f195e0291a70e52f8b9966b2519cf1.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "Power+",banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>` },
    { id: 50, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "Power+" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 51, title: "如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧", created_time: "1542352451", author: "Clyde", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "Power+" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 52, title: "如何让 Android 10 拥有不输 iOS 的暗色模式体验？", created_time: "1542352451", author: "SpencerWoo", view: 18, comment: 6, list_img_src: "https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "Power+" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 53, title: "Docker 的入门「指北」", created_time: "1523452567", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "Power+" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 54, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "Power+" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 55, title: "如何用 Quicker 优化 Windows 的剪贴板功能 | 实用技巧", created_time: "1542352451", author: "Clyde", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/b7faf603-977c-87d8-8ea4-170d34293077.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/08/28/88c5ab085428f7c4bce981810ff073bc.png?imageMogr2/quality/95/thumbnail/!64x64r/gravity/Center/crop/64x64", classifyId: "Power+" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 56, title: "如何让 Android 10 拥有不输 iOS 的暗色模式体验？", created_time: "1542352451", author: "SpencerWoo", view: 18, comment: 6, list_img_src: "https://cdn.sspai.com/article/047e3478-08c6-cfab-5ad1-8a945076f431.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/03/21/6cd415f9bb5ae6efb08c6a63a1b0ba67.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "Power+" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 57, title: "Docker 的入门「指北」", created_time: "1523452567", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/5d660a82-c12e-1c09-c966-91ec1641d4eb.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/attachment/origin/2015/02/17/226650.jpg?imageMogr2/quality/95/thumbnail/!48x48r/gravity/Center/crop/48x48", classifyId: "Power+" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`},
    { id: 58, title: "除了年年都有的新表盘，一起来看看 watchOS 6 的实用新功能", created_time: "1542352451", author: "SpencerWoo", view: 88, comment: 0, list_img_src: "https://cdn.sspai.com/article/59491614-e890-9d5c-2b6c-33d4da8b2946.jpg?imageMogr2/quality/95/thumbnail/!800x400r/gravity/Center/crop/800x400", headerImg: "https://cdn.sspai.com/2019/07/31/avatar/c328e1cae65eb20dde99d811b58d0bd0.jpg", classifyId: "Power+" ,banner_img_src:'https://cdn.sspai.com/article/bd719603-6f3f-a731-a3e3-ce4735e9e62c.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708',content:`<p><strong>Power+ 要开直播啦 📣！</strong></p>

    <p>我们会在直播当中讨论读者在 Slack 群提出的选题建议，并且也会回答读者的其它提问。直播时间定在了这周日晚上 8 点半，具体参与方法参见下文的介绍，欢迎各位读者踊跃参与～</p>
    
    <p>此外，从下周开始，Power+ 奏折将会再迎来一次升级，<b>新增「📱 我的主屏」板块，接受读者投稿。</b>稿件一经采用，我们将会给读者提供 100 元的现金奖励 💰。</p>
    
    <h2 id="ss-H2-1567773656251">⭐️ 重点关注</h2>
    
    <h3 id="ss-H3-1567773658510">Power+ 直播预告：本周日晚 8 点半</h3>
    
    <p><strong>@文刀漢三：</strong>在 Power+ 的 Slack 群中，我们设立了 #选题建议 频道，方便读者提交自己感兴趣的选题。原本我们打算每周在选题会里统一讨论这些选题，并且发布一份处理汇报到群中。但是，我们在讨论过程中发现了两个问题：</p>
    
    <ol>
    <li>大家提的选题建议非常多，写成一篇文字报告可能会比较冗长；</li>
    <li>有些选题建议虽然不适合写成文章，但却有讨论的价值。</li>
    </ol>
    
    <p>所以，我们决定将汇报方式改成<strong>音频直播！</strong>在直播中，我们可以展开讨论大家提交的选题建议，读者们也可以更直接地参与互动讨论。</p>
    
    <p>没时间参与直播的读者，之后也能听到我们剪辑后的<strong>录播版本</strong>，不用担心错过～</p>
    
    <p>如果过程顺利，并且大家对这种方式感到满意，未来可能会每周固定做一次直播。</p>`}
]

