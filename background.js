var retrieve = true;
setInterval(function() {
  getOrders();
}, 15000);
function getOrders(){
   if (!retrieve){
       return;
   }
    //chrome.browserAction.onClicked.addListener(function() {
        //alert("b");
       var iframes = document.getElementsByTagName('iframe');
       var iframe = iframes[1];
       //console.log(iframes.length);
       var targetElements = iframe.contentDocument.getElementsByClassName('meshim_dashboard_components_ReservedChatList');
       //var targetElements = document.getElementsByClassName('jx_ui_html_div separator');
      // var targetElements = document.getElementsByClassName('meshim_dashboard_components_widgets_ListPlaceHolder');
       if(!targetElements) return;
       var currentDiv=targetElements[0];
       if (!currentDiv) {console.log("not found; meshim_dashboard_components_ReservedChatList");}
       
       /* find email */
       var emails = iframe.contentDocument.getElementsByClassName(
           'meshim_dashboard_components_chatPanel_VisitorInfoTextField visitor_email info'
       );
       var email = emails[0];
       console.log('email: '+email.value);
       if(!email.value){
           return;
       }
       
       
               var newDiv = iframe.contentDocument.createElement("div");
               //var newContent = document.createTextNode("Hi there and greetings!");

            console.log(targetElements.length);
            //console.log(currentDiv.innerHTML);
            var str = '<b>Order History for '+email.value+':</b><br/>';
            str+= '<br/>Order 1: 2/1/2019 Z45896832 $500';
            str+= '<br/>Order 2: 3/5/2019 Z45456832 $400';
            str+= '<br/>Order 3: 4/7/2019 Z45896111 $700';
            str+= '<br/>Order 4: 5/19/2019 Z45888888 $100';
            str+= '<br/>Order 5: 6/19/2019 Z45888888 $445';
            newDiv.innerHTML=str;
            var currentDivParent = currentDiv.parentElement;
            currentDivParent.insertBefore(newDiv, currentDiv); 
            retrieve = false;
       
    }
//div[0].innerText+=str;
//});
