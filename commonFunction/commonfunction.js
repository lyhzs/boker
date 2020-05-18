export default{
    backtop(){
        var timer = setInterval(() => {
            if (document.scrollingElement.scrollTop <= 0) {
              clearInterval(timer);
              timer = null;
            } else {
              document.scrollingElement.scrollTop =
                document.scrollingElement.scrollTop - 200;
            }
          }, 50);
    }
}