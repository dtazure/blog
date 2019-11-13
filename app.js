const Koa = require('koa');
const static = require('koa-static'); //静态资源服务插件
const router = require('koa-router')();
const views = require('koa-views');
const ejs = require('ejs');
const app = new Koa();

const person = require('./src/data/person.json');
const blog = require('./src/data/blog.json');
const column = require('./src/data/column.json');



// 静态资源
app.use(static(__dirname + '/static'));

app.use(views(__dirname+ '/src', {
    map: {
        html: 'ejs'
    }
}));

//文章详情
router.get('/article1.html', async (ctx, next)=> {  
    await ctx.render('./article/article1');
    await next();
});
router.get('/article2.html', async (ctx, next)=> {  
    await ctx.render('./article/article2');
    await next();
});
router.get('/article3.html', async (ctx, next)=> {  
    await ctx.render('./article/article3');
    await next();
});
router.get('/article4.html', async (ctx, next)=> {  
    await ctx.render('./article/article4');
    await next();
});
router.get('/article5.html', async (ctx, next)=> {  
    await ctx.render('./article/article5');
    await next();
});
router.get('/article6.html', async (ctx, next)=> {  
    await ctx.render('./article/article6');
    await next();
});

//页面
router.get('/homePage.html', async (ctx, next)=> {  
    await ctx.render('homePage');
    await next();
});

router.get('/person.html', async (ctx, next)=> {
    let personData = person.personData;
    await ctx.render('person', {
        personData: personData
    });
    await next();
});

router.get('/blog.html', async (ctx, next) => {
    let blogDetail = blog.blogDetail;
    await ctx.render('blog', {
        blogDetail: blogDetail
    });
    await next();
});

router.get('/column.html', async (ctx, next) => {
    let columnList = column.columnList;
    await ctx.render('column', {
        columnList: columnList
    });
    await next();
});

app.use(router.routes());//使用路由
app.listen((3000),()=>{
  console.log(3000);
  
})
    
    
