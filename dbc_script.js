function openPage(url){
    if(url == null){
      return;
    }
    window.location.href = url;
}

function getInitialPage(){
  return getCookie('page')

}

function displayContent(container_id,content_id){
  var container = document.getElementById(container_id);
  if(container == null){
    return
  }
  var children = container.childNodes;
  var firstDivPanel = null;
  if(children!=null){
    for(i=0;i<children.length;i++){
      if(children[i] && children[i].style && children[i].style.display){
        children[i].style.display="none";
        if (firstDivPanel == null) firstDivPanel = children[i];
      }
    }
  }
  var contentPane = document.getElementById(content_id);
  if(contentPane!=null){
    contentPane.style.display="block";
  }else if(firstDivPanel!=null){
    firstDivPanel.style.display="block";
  }
  var date = new Date();
  date.setTime(date.getTime() + (10 * 60 * 1000));
  setCookie('page',content_id,10);

}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exmins) {
    var d = new Date();
    d.setTime(d.getTime() + (exmins*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}