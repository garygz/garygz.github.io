function openPage(url){
    if(url == null){
      return;
    }
    window.location.href = url;
}

function displayContent(container_id,content_id){
  var container = document.getElementById(container_id);
  if(container == null){
    return
  }
  var children = container.childNodes;
  if(children!=null){
    for(i=0;i<children.length;i++){
      if(children[i] && children[i].style && children[i].style.display){
        children[i].style.display="none";
      }
    }
  }
  var contentPane = document.getElementById(content_id);
  if(contentPane!=null){
    contentPane.style.display="block";
  }

}