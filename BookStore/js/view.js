let view = {};
view.showScreen = async function (screenName) {
    /* 
          log --> show giao diện của sign in, sign up
          menuGame --> show giao diện của menu 
      */
  
    let content = document.getElementById("Wrap_Content");
  
    switch (screenName) {
      case "homePage":
        // hiển thị giao diện của sign in
        content.innerHTML = component.homePage;
  
    
      
        break;
  
      
    }
  };