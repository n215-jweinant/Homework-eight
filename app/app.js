var homeView =` <div class="hero">
<div class="callout">
  <h1>Family Built</h1>
  <p>
    "Turning A House Into A Home ." Family Owned Since The Dawn Of Time.
  </p>

</div>

</div>
`;

var reviewView = `<div class="three-sect">
<div class="pict">
  <div class="one"></div>
  <div class="two"></div>
</div>
<div class="text">
  <h1>5 STAR REVIEW</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim facilisis gravida neque convallis a. Tincidunt vitae semper quis lectus nulla at volutpat diam. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. At consectetur lorem donec massa sapien faucibus et molestie ac. Euismod in pellentesque massa placerat duis ultricies lacus. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Nisl tincidunt eget nullam non. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Amet consectetur adipiscing elit ut aliquam purus sit amet. Convallis convallis tellus id interdum. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse.
    <div class="text-2">
      <h1>1 STAR REVIEW:</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim facilisis gravida neque convallis a. Tincidunt vitae semper quis lectus nulla at volutpat diam. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. At consectetur lorem donec massa sapien faucibus et molestie ac. Euismod in pellentesque massa placerat duis ultricies lacus. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Nisl tincidunt eget nullam non. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Amet consectetur adipiscing elit ut aliquam purus sit amet. Convallis convallis tellus id interdum. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse.
    </div>
  </p>
</div>
</div>`;
var contactView = `<div class="bout">
<div class="pict"></div>
<div class="text">
  <h1>Contact Us</h1>
  <p>Name:</p>
  <div class="single-line-input-holder">
    <input class="large-input" type="text" >
  </div>
  <p>Email:</p>
  <div class="single-line-input-holder">
    <input class="large-input" type="text" >
  </div>
  <p>Phone:</p>
  <div class="single-line-input-holder">
    <input class="large-input" type="text">
  </div>
  <div class="bigbutton">
    <span>Submit</span>
  </div>
</div>

</div>`;
var aboutView = ` <div class="two-sect">
<div class="pict"></div>
<div class="text">
  <h1>ABOUT OUR FAMILY</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim facilisis gravida neque convallis a. Tincidunt vitae semper quis lectus nulla at volutpat diam. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. At consectetur lorem donec massa sapien faucibus et molestie ac. Euismod in pellentesque massa placerat duis ultricies lacus. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Nisl tincidunt eget nullam non. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Amet consectetur adipiscing elit ut aliquam purus sit amet. Convallis convallis tellus id interdum. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse.
  </p>
</div>
</div>`;

function initListeners(){
 
 $("nav a").on("click",function(e){
    btnID=e.currentTarget.id;
   let pageViewID = btnID + "View";
    console.log(eval(pageViewID));
changePageView(pageViewID);

});
 
}



function changePageView(pageViewVarName){
    $("#app").html(eval(pageViewVarName ));

}

$(document).ready(function(){  
    changePageView("homeView"); 
    initListeners();
    
});

