<template>
<div class="main">
    		<div class="wrapper">
		  <div class="cols">
					<div class="col" ontouchstart="this.classList.toggle('hover');">
						<div class="container">
							<div class="front" style="background-image: url(/static/images/1.png)">
								<div class="inner">
									<p>js</p>
		              <span>Lorem ipsum</span>
								</div>
							</div>
							<div class="back">
								<div class="inner">
								  <p>js相关</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col" ontouchstart="this.classList.toggle('hover');">
						<div class="container">
							<div class="front" style="background-image:url(/static/images/2.png)">
								<div class="inner">
									<p>vue</p>
		              <span>Lorem ipsum</span>
								</div>
							</div>
							<div class="back">
								<div class="inner">
									<p>vue相关</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col" ontouchstart="this.classList.toggle('hover');">
						<div class="container">
							<div class="front" style="background-image: url(/static/images/3.png)">
								<div class="inner">
									<p>css</p>
		              <span>Lorem ipsum</span>
								</div>
							</div>
							<div class="back">
								<div class="inner">
									<p>css相关</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col" ontouchstart="this.classList.toggle('hover');">
						<div class="container">
							<div class="front" style="background-image: url(/static/images/4.png)">
								<div class="inner">
									<p>面试</p>
		              <span>Lorem ipsum</span>
								</div>
							</div>
							<div class="back">
								<div class="inner">
									<p>面试题</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col" ontouchstart="this.classList.toggle('hover');">
						<div class="container">
							<div class="front" style="background-image: url(/static/images/5.png)">
								<div class="inner">
									<p>我的收藏</p>
		              <span>Lorem ipsum</span>
								</div>
							</div>
							<div class="back">
								<div class="inner">
									<p>我的收藏</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col" ontouchstart="this.classList.toggle('hover');">
						<div class="container">
							<div class="front" style="background-image: url(/static/images/6.png)">
								<div class="inner">
									<p>js特效</p>
		              <span>Lorem ipsum</span>
								</div>
							</div>
							<div class="back">
								<div class="inner">
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col" ontouchstart="this.classList.toggle('hover');">
						<div class="container">
							<div class="front" style="background-image: url(/static/images/7.png)">
								<div class="inner">
									<p>react</p>
		              <span>Lorem ipsum</span>
								</div>
							</div>
							<div class="back">
								<div class="inner">
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="col" ontouchstart="this.classList.toggle('hover');">
						<div class="container">
							<div class="front" style="background-image: url(/static/images/8.png)">
								<div class="inner">
									<p>Angular</p>
		              <span>Lorem ipsum</span>
								</div>
							</div>
							<div class="back">
								<div class="inner">
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
		 </div>
</div>
</template>

<script>
 export default {
   name:"Label",
    data() {
      return {
      
      };
    },
    methods: {
   
    }
  }
</script>


<style scoped lang="less">
  *{
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

/*h1{
  font-size: 2.5rem;
  font-family: 'Montserrat';
  font-weight: normal;
  color: #444;
  text-align: center;
  margin: 2rem 0;
}*/
.header{
    text-align: center;
    color: #9C9C9C;
    padding-top: 50px;
    padding-bottom: 50px;
}
body{background-color: #24252d}
.wrapper{
  width: 90%;
  margin: 0 auto;
  max-width: 80rem;
}

.cols{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.col{
  width: calc(~"25% - 2rem");
  margin: 1rem;
  cursor: pointer;
}

.container{
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
	-webkit-perspective: 1000px;
	        perspective: 1000px;
}

.front,
.back{
  background-size: cover;
	background-position: center;
	-webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	-o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
	-webkit-backface-visibility: hidden;
	        backface-visibility: hidden;
	text-align: center;
	min-height: 280px;
	height: auto;
	border-radius: 10px;
	color: #fff;
	font-size: 1.5rem;
}

.back{
  background: #cedce7;
  background: -webkit-linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
  background: -o-linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
  background: linear-gradient(45deg,  #cedce7 0%,#596a72 100%);
}

.front:after{
	position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    opacity: .6;
    background-color: #000;
    -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
    border-radius: 10px;
}
.container:hover .front,
.container:hover .back{
    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.inner{
    -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
    transform: translateY(-50%) translateZ(60px) scale(0.94);
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 2rem;
    font-size: .7em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 1px solid transparent;
    -webkit-perspective: inherit;
    perspective: inherit;
    z-index: 2;
}

.container .back{
    -webkit-transform: rotateY(180deg);
            transform: rotateY(180deg);
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
}

.container .front{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
}

.container:hover .back{
  -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
}

.container:hover .front{
  -webkit-transform: rotateY(-180deg);
          transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
}

.front .inner p{
  font-size: 1rem;
  margin-bottom: 2rem;
  position: relative;
}

.front .inner p:after{
  content: '';
  width: 4rem;
  height: 2px;
  position: absolute;
  background: #C6D4DF;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -.75rem;
}

.front .inner span{
  color: rgba(255,255,255,0.7);
  font-family: 'Montserrat';
  font-weight: 300;
}

@media screen and (max-width: 64rem){
  .col{
    width: calc(~"33.333333% - 2rem");
  }
}

@media screen and (max-width: 48rem){
  .col{
    width: calc(~"50% - 2rem");
  }
}

@media screen and (max-width: 32rem){
  .col{
    width: 100%;
    margin: 0 0 2rem 0;
  }
}
</style>
