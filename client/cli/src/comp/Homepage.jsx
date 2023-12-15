import React from 'react'

const Homepage = () => {
  return (
    <div>
    <script id="new_front_page" language="text">
        <!-- desk version -->
    <div class="desk" id="main_container">
       <div style="padding:20px; height:85vh;">
          <div style="display:table; width:100%">
             <!--<div style="display:table-cell; vertical-align:middle; width:300px; text-align:left">
                <img style="width:10vw;margin-top:5px;cursor: pointer;" onclick="new PageContents().new PageContents().changePage('/#')"  src="static/img/arxena-logo/arxena-logo.png"/>
             </div>-->
             <!--<div style="display:table-cell; vertical-align:middle; width:130px; text-align:center">
                <span style="font-size:12pt; cursor:pointer" onclick="$('html').animate({ scrollTop: 1400}, 1000);">Product</span>
             </div>
             <div style="display:table-cell; vertical-align:middle; width:130px; text-align:center">
                <span style="font-size:12pt; cursor:pointer" onclick="$('html').animate({ scrollTop: 2100}, 1000);">Use Cases</span>
             </div>
             <div style="display:table-cell; vertical-align:middle; width:130px; text-align:center">
                <span style="font-size:12pt; cursor:pointer" onclick="$('html').animate({ scrollTop: 700}, 1000);">Customers</span>
             </div>
             <div style="display:table-cell; vertical-align:middle; width:130px; text-align:center">
                <span style="font-size:12pt; cursor:pointer" onclick="$('html').animate({ scrollTop: 2850}, 1000);">Pricing</span>
             </div>
             <div style="display:table-cell; vertical-align:middle; width:100px; text-align:center">
                <span style="font-size:12pt; cursor:pointer" onclick="window.open('api.html', '_blank');">API</span>
             </div>
             <div style="display:table-cell; vertical-align:middle; width:100px; text-align:center">
                <span style="font-size:12pt; cursor:pointer" onclick="">Faqs</span>
             </div> -->
             <div style="display:table-cell; vertical-align:middle"></div>
             <div id = "sign_up_button_front_page" style="display:table-cell; vertical-align:middle; width: 190px; text-align:right">
                <div class="landing_white_button" style="display:inline-block; background-color:rgb(36,116,204);border-color:rgb(36,116,204); color:white; width:150px" onclick="new PageContents().changePage('/signup')">Sign up</div>
             </div>
             <div id = "log_in_button_front_page" style="display:table-cell; vertical-align:middle; width: 190px; text-align:right; padding-right:20px">
                <div class="landing_white_button" style="display:inline-block; background-color:white;border:1px solid rgb(36,116,204); color:rgb(36,116,204); width:150px" onclick="new PageContents().changePage('/login')">Log in</div>
             </div>
          </div>
    
          <div style="display:table; width:100%;padding-left:20px;padding-right:20px;height:100%">
             <div style="display:table; width:40%; margin-left:30%; text-align:center; vertical-align: middle; padding-top:8%;">
                <!-- fake fields are a workaround for chrome autofill getting the wrong fields -->
                <input style="display: none" type="text" name="fakeusernameremembered" />
                <input style="display: none" type="password" name="fakepasswordremembered" />
                <!--<em style="color:#2474CC;font-size:20px;  ">Search any company's org chart</em>-->
                <img style="width:15vw;margin-top:5px;cursor: pointer;" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png">
                <input id="search_bar_front_page" value="" class="search-bar-front" autocomplete="new-company-entered-by-user" onblur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)" onfocus= "new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)" placeholder="🔍 Search any company's org chart" style="display:table; width:100%;border-color:rgb(232,232,232); placeholder-color:rgb(232,232,232);height:3rem; margin-top:8%;" oninput="new SearchBarLoadersDropdowns().updateHomePageSearchKeyword(this)" onkeypress="if (event.keyCode === 13) homePageSearch()" >
                <input id="search_bar_front_page_raw_text" value="" class="search-bar-front" autocomplete="new-raw_text-entered-by-user" onblur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)" onfocus="new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)" placeholder="🔍 Which people are you looking for?" style="display:table; width:100%;border-color:rgb(232,232,232); placeholder-color:rgb(232,232,232);height:3rem; margin-top:8%;display:none;" onkeypress="if (event.keyCode === 13) new SearchBarLoadersDropdowns().updateHomePageSearchRawTextKeyword(this)"  >
    
                <p id="error_home_page" style="font-size:12px; float:left; margin-left:20px;display:none;"></p>
    
                <div id = "front_page_search_bar_loader" style ="text-align:right; margin-top: -6.5%;margin-left: -1%;margin-bottom:2%; width:10%; margin-left:85%;">
                <div id="button_dropdown_search_jd" onclick="new SearchBarLoadersDropdowns().placeDropdownBelowSearchforJDInput()" style="cursor:pointer; text-align:right; margin-top: -6.25%;"><img style="width:25px" src="/static/img/new_upload.png"/></div>
                </div>
                <!-- <div style="display:table-cell; vertical-align:top">
                <label style="margin-top:10px" class="switch">
                   <input id="auto_updates_switch" onclick="updateAutoUpdates(this)" type="checkbox">
                   <div class="slider round" onmouseover="showAutoUpdatesPopup()">
                      <div id="switch_text" class="switch_text">Auto</div>
                   </div>
                </label>
                </div> -->
                <!--<div class="btn dropdown-toggle" id = "home_page_dropdown_elements" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></div>-->
                <div  id = "home_page_dropdown_elements" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></div>
                <div  id = "home_page_jd_dropdown_element"></div>
                </div>
                <div style="margin-top:5%">
                <center><img src="/static/img/powered_by_gpt4.png" alt="Open AI Logo" width="200" ></center>
                </div>
             </div>
    
          </div>
       <div style="width:100%; bottom:0%; text-align:center;">
          <div style="display:table; width:100%">
             <div style="display:table-cell; width:100%; padding-left:20px;padding-top:2%; text-align:left">
                <div style="padding-left:25px; display:inline-block;">OrgGPT - Talent Identification Software for Ambitious Companies<br>
                   <a style="font-size:10pt" href="/pricing">Pricing</a> | <a style="font-size:10pt" href="/eula">Terms of Service</a> | <a style="font-size:10pt" href="/privacy">Privacy Policy</a> | <a style="font-size:10pt" href= "javascript:"onclick="new UtilityFunctions().openHelpModal()">How to Use</a> | <a style="font-size:10pt" href= "/download_chrome_extension" onclick="new UtilityFunctions().openHelpModal()">Download Extension</a><br>
    
                   <br>
                </div>
                <div style="display:table-cell;  padding-left:25px; float:right; margin-right:5%">
                   <div style="display:table-cell; width:70px">
                      <a href="https://www.linkedin.com/company/arxena" target="_blank"><img style="width:35px; cursor:pointer" src="static/img/linkedin-icon-png-circle-2.png"/></a>
                   </div>
                   <div style="display:table-cell; width:70px">
                      <a href="https://twitter.com/arxenainc" target="_blank"><img style="width:43px; cursor:pointer" src="static/img/tw.png"/></a>
                   </div>
                   <div style="display:table-cell; width:70px">
                      <a href="https://facebook.com/arxenainc" target="_blank"><img style="width:35px; cursor:pointer" src="static/img/facebook.png"/></a>
                   </div>
                   <div style="display:table-cell; width:70px">
                      <a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA" target="_blank"><img style="width:35px; cursor:pointer" src="static/img/youtube.png"/></a>
                   </div>
                   <div style="display:table-cell;"></div>
                </div>
                <br>
             </div>
          </div>
       </div>
    </div>
    
    <!-- mobile version -->
    <div class="mobi" id="main_container" style="height:100%">
       <div style="padding:10px">
          <div style="display:table; height:100%; width:100%">
             <div style="display:table-cell; vertical-align:text-bottom; width:300px; text-align:left">
                <img style="width:25vw;margin-top:9px;cursor: pointer;" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png"/>
             </div>
             <div style="display:table-cell; vertical-align:text-bottom"></div>
             <div style="display:table-cell; vertical-align:text-bottom; width: 160px; text-align:right; padding-right:10px">
                <div class="landing_white_button" style="display:inline-block; background-color:rgb(36,116,204);border-color:rgb(36,116,204); color:white; width:150px" onclick="new PageContents().changePage('/signup')">Sign up </div>
             </div>
          </div>
          <div style="padding-left:2%; margin-top:40px;  margin-bottom:40px">
             <!-- fake fields are a workaround for chrome autofill getting the wrong fields -->
             <input style="display: none" type="text" name="fakeusernameremembered" />
             <input style="display: none" type="password" name="fakepasswordremembered" />
             <input id="search_bar_front_page_mobi" type="text" class="search-bar-front" autocomplete='new-password' onblur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)" onfocus= "new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)" placeholder="🔍 Search any company's org chart" style="z-index:1; display:table; margin-top:-120%; width:90%;border-color:rgb(232,232,232); placeholder-color:rgb(232,232,232)" oninput="new SearchBarLoadersDropdowns().updateHomePageSearchKeyword(this)" onkeypress="if (event.keyCode === 13) homePageSearch()">
             <div id = "home_page_dropdown_mobi_elements"></div>
          </div>
       </div>
       <div style="width:100%; bottom:0%; position:absolute; text-align:center; background-color: rgb(247,247,251)">
          <div style="text-align:left; margin-left:5%; margin-top:5%;">
             <div style="display:table; width:100%;">
                <a href="https://www.linkedin.com/company/arxena" target="_blank"><img style="width:35px; cursor:pointer" src="/static/img/linkedin-icon-png-circle-2.png"/></a>
                &nbsp&nbsp&nbsp&nbsp<a href="https://twitter.com/arxena" target="_blank"><img style="width:43px; cursor:pointer" src="/static/img/tw.png"/></a>
                &nbsp&nbsp&nbsp&nbsp<a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA" target="_blank"><img style="width:45px; cursor:pointer" src="/static/img/yt.png"/></a>
             </div>
                <span style="font-size:11pt">OrgGPT - Mapping Companies & People</span><br><br>
                <a style="font-size:10pt" href="/eula">Terms of Service</a><br>
                <a style="font-size:10pt" href="/privacy">Privacy Policy</a>
                <br>
                <span>© 2023 Arxena, Inc. All Rights Reserved.</span>
                <br>
                <br>
          </div>
       </div>
    </script></div>
  )
}

export default Homepage