---
title: "针对不同版本的ie调用不同css样式"
category: "代码人生"
tags: [css,ie]
---
因为IE各版本的浏览器对我们制作的WEB标准的页面解释不一样，具体就是对CSS的解释不同，我们为了兼容这些，可运用条件注释来各自定义，最终达到兼容的目的。比如：


<!– 默认先调用css.css样式表 –>

<link rel=”stylesheet” type=”text/css” href=”css.css” />

<!–[if IE 7]>

<!– 如果IE浏览器版是7,调用ie7.css样式表 –>

<link rel=”stylesheet” type=”text/css” href=”ie7.css” />

<![endif]–>

<!–[if lte IE 6]>

<!– 如果IE浏览器版本小于等于6,调用ie.css样式表 –>

<link rel=”stylesheet” type=”text/css” href=”ie.css” />

<![endif]–>

这其中就区分了IE7和IE6向下的浏览器对CSS的执行，达到兼容的目的。同时，首行默认的css.css还能与其他非IE浏览器实现兼容。

注意：默认的CSS样式应该位于HTML文档的首行，进行条件注释判断的所有内容必须位于该默认样式之后。

这也是所谓的css hack技术…