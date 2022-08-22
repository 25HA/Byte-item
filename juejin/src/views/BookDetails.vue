<template>
  <div class="wrap">
      <div class="book-title">
        <div class="booK-title-content">
          <div class="content-bookInco">
            <img src="../../src/assets/book-images/book-name.png" alt="书名" >
          </div>
          <div class="content-bookdetail">
            <div class="bookdetail-name">
              <div class="name-isnew"> <p>新品</p></div>
             <p> 基于 Vite 的组件库工程化实战</p>
             </div>
            <div class="bookdetail-detail">
              <p>1:1 还原开源前端组件库搭建全过程 </p>
             </div>
            <div class="bookdetail-author">
                <div class="author-icon">
                  <img src="../../src/assets/book-images/author-icon.png" alt="">

                </div>
                <div class="author-name">
                  <p>全栈然叔</p>
                  <img src="../assets/book-images/author-vip.png" alt="">
                </div>
                <div class="author-class">
                  <p>公众号：前端大班车</p>
                </div>
                <div class="author-studygroup">
                  <img src="../../src/assets/book-images/author-addgroup.png" alt="">
                  学习群
                </div>
             </div>
            <div class="bookdetail-bookstudy">
                <div class="bookstudy-price">
                  <button class="button-style">购买：￥39.9</button>
                </div>
                <div class="bookstudy-trystudy">
                  <img src="../../src/assets/book-images/bookstudy-book.png" alt="">
                  <p>免费试学</p>
                </div>
                <div class="bookstudy-studydata">
                  <p>676 人加入学习 &nbsp;|&nbsp;26 小节&nbsp;·&nbsp;约 462分34秒</p>
                </div>
             </div>
          </div>
        </div>
      </div>
      <div class="book-content">
        
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 10px;
}
body.html{
  width: 100%;
  height: 100%;
}
.wrap{
  width: 100%;
  height: 100%;
  .book-title{
    width: 90rem;
    background: #fff;
    margin: 2rem auto;
    border-radius: 4px;
    .booK-title-content{
      display: flex;
      padding: 2rem;
      box-sizing: border-box;
      .content-bookInco img{
        width: 13rem;
        border-radius: 0.5rem;
      }
      .content-bookdetail{
        margin-left: 2rem;
        width: 100%;
        .bookdetail-name{
          display: flex;
          font-size: 2.4rem;
          font-weight: 600;
          .name-isnew{
            font-size: 1.2rem;
            text-align: center;
            line-height: 2rem;
            background-color: rgb(239, 64, 64);
            color: #fff;
            margin-right: 1.6rem;
            width: 4rem;
            height: 2rem;
            border-radius: 4px;
            margin-top: 0.6rem;
          }
        }
        .bookdetail-detail{
          font-size: 1.4rem;
          color: #807d7d;
          margin-top: 1rem;
        }
        .bookdetail-author{
          display: flex;
          align-items: center;
          margin-top: 3rem;
          font-size: 1.4rem;
          .author-icon img{
            width: 2.6rem;
            display: flex;
            align-items: center;
          }
          .author-name{
            display: flex;
            align-items: center;
            margin-left: 0.8rem;
            font-weight: 500;
            img{
              margin-left: 0.5rem;
              width: 1.2rem;
              height: 1.6rem;
            }
          }
          .author-class{
            margin-left: 1rem;
            color: #655f5f;
          }
          .author-studygroup{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 2rem;
            background: rgb(189, 218, 252);
            color: #1296db;
            width: 9rem;
            height: 2.2rem;
            border-radius: 10px;
            img{
              width: 1.4rem;
              margin-right: 4px;
            }
          }
        }
        .bookdetail-bookstudy{
          display: flex;
          width: 100%;
          align-items: center;
          margin-top: 2rem;
          position: relative;
          .bookstudy-price{
            .button-style{
              width: 12rem;
              height: 4rem;
              border: transparent;
              border-radius: 5px;
              color: #fff;
              background: rgb(59, 113, 239);
              font-size: 1.6rem;
            }
          }
          .bookstudy-trystudy{
           margin-left: 2rem;
           color:rgb(94, 94, 94);
           img{
             width: 2rem;
             margin-left: 1rem;
           }
          }
          .bookstudy-studydata{
            position: absolute;
            right: 0;
            font-size: 1.4rem;
            color:rgb(94, 94, 94);
          }
        }
        
      }
    }
  }
}

</style>

