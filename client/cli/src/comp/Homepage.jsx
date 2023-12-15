import React from 'react'
import "../css/main.css"
import "../css/bootstrap.min.css"
import "../css/arxena.css"

import Orgchat from '../hooks/Orgchat'
import ParamsStorage from '../hooks/ParamsStorage'

const Homepage = () => {
return (

<div class="desk" id="main_container">
   <div style="padding:20px; height:85vh">
      <div style="display:table; width:100%">
         <!--<div style="display:table-cell; vertical-align:middle; width:300px; text-align:left">
               <img style="width:10vw;margin-top:5px;cursor: pointer;" onclick="new PageContents().new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png" />
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
         <div id="sign_up_button_front_page" style="display:table-cell; vertical-align:middle; width: 190px; text-align:right">
            <div class="landing_white_button" style="display:inline-block; background-color:rgb(36,116,204);border-color:rgb(36,116,204); color:white; width:150px" onclick="new PageContents().changePage('/signup')">Sign up</div>
         </div>
         <div id="log_in_button_front_page" style="display:table-cell; vertical-align:middle; width: 190px; text-align:right; padding-right:20px">
            <div class="landing_white_button" style="display:inline-block; background-color:white;border:1px solid rgb(36,116,204); color:rgb(36,116,204); width:150px" onclick="new PageContents().changePage('/login')">Log in</div>
         </div>
      </div>

      <div style="display:table; width:100%;padding-left:20px;padding-right:20px;height:100%">
         <div style="display:table; width:40%; margin-left:30%; text-align:center; vertical-align: middle; padding-top:8%;">
            <!-- fake fields are a workaround for chrome autofill getting the wrong fields -->
            <input style="display: none" type="text" name="fakeusernameremembered" />
            <input style="display: none" type="password" name="fakepasswordremembered" />
            <!--<em style="color:#2474CC;font-size:20px;  ">Search any company's org chart</em>-->
            <img style="width:15vw; margin-top:5px; cursor: pointer" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png" />
            <input id="search_bar_front_page" value="" class="search-bar-front" autocomplete="new-company-entered-by-user" onblur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)" onfocus="new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)" placeholder="🔍 Search any company's org chart" style="display:table; width:100%;border-color:rgb(232,232,232); placeholder-color:rgb(232,232,232);height:3rem; margin-top:8%;" oninput="new SearchBarLoadersDropdowns().updateHomePageSearchKeyword(this)" onkeypress="if (event.keyCode === 13) homePageSearch()" />
            <input id="search_bar_front_page_raw_text" value="" class="search-bar-front" autocomplete="new-raw_text-entered-by-user" onblur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)" onfocus="new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)" placeholder="🔍 Which people are you looking for?" style="display:table; width:100%;border-color:rgb(232,232,232); placeholder-color:rgb(232,232,232);height:3rem; margin-top:8%;display:none;" onkeypress="if (event.keyCode === 13) new SearchBarLoadersDropdowns().updateHomePageSearchRawTextKeyword(this)" />

            <p id="error_home_page" style="font-size:12px; float:left; margin-left:20px;display:none;"></p>

            <div id="front_page_search_bar_loader" style="text-align:right; margin-top: -6.5%;margin-left: -1%;margin-bottom:2%; width:10%; margin-left:85%;">

               <div id="button_dropdown_search_jd" onclick="new SearchBarLoadersDropdowns().placeDropdownBelowSearchforJDInput()" style="cursor:pointer; text-align:right; margin-top: -6.25%;"><img style="width:25px" src="/static/img/new_upload.png" /></div>
            </div>
            <!-- <div style="display:table-cell; vertical-align:top">
                  <label style="margin-top:10px" class="switch">

                     <input id="auto_updates_switch" onclick="updateAutoUpdates(this)" type="checkbox" />
                     <div class="slider round" onmouseover="showAutoUpdatesPopup()">
                        <div id="switch_text" class="switch_text">Auto</div>
                     </div>
                  </label>
               </div> -->
            <!--<div class="btn dropdown-toggle" id="home_page_dropdown_elements" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></div>-->
            <div id="home_page_dropdown_elements" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </div>
            <div id="home_page_jd_dropdown_element"></div>
         </div>
         <div style="margin-top:5%">
            <center><img src="/static/img/powered_by_gpt4.png" alt="Open AI Logo" width="200" /></center>
         </div>
      </div>

   </div>
   <div style="width:100%; bottom:0%; text-align:center;">
      <div style="display:table; width:100%">
         <div style="display:table-cell; width:100%; padding-left:20px;padding-top:2%; text-align:left">
            <div style="padding-left:25px; display:inline-block;">OrgGPT - Talent Identification Software for Ambitious
               Companies</div>
            <br />
            <a style="font-size:10pt" href="/pricing">Pricing</a> | <a style="font-size:10pt" href="/eula">Terms of
               Service</a> | <a style="font-size:10pt" href="/privacy">Privacy Policy</a> | <a style="font-size:10pt" href="javascript:" onclick="new UtilityFunctions().openHelpModal()">How to Use</a> | <a style="font-size:10pt" href="/download_chrome_extension" onclick="new UtilityFunctions().openHelpModal()">Download Extension</a>
            <br />
            <br />
         </div>
         <div style="display:table-cell;  padding-left:25px; float:right; margin-right:5%">
            <div style="display:table-cell; width:70px">
               <a href="https://www.linkedin.com/company/arxena" target="_blank"><img style="width:35px; cursor:pointer" src="static/img/linkedin-icon-png-circle-2.png" /></a>
            </div>
            <div style="display:table-cell; width:70px">
               <a href="https://twitter.com/arxenainc" target="_blank"><img style="width:43px; cursor:pointer" src="static/img/tw.png" /></a>
            </div>
            <div style="display:table-cell; width:70px">
               <a href="https://facebook.com/arxenainc" target="_blank"><img style="width:35px; cursor:pointer" src="static/img/facebook.png" /></a>
            </div>
            <div style="display:table-cell; width:70px">
               <a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA" target="_blank"><img style="width:35px; cursor:pointer" src="static/img/youtube.png" /></a>
            </div>
            <div style="display:table-cell;"></div>
         </div>
         <br>
      </div>
   </div>
</div>
</div>

< !--mobile version-->
   <div class="mobi" id="main_container" style="height:100%">
      <div style="padding:10px">
         <div style="display:table; height:100%; width:100%">
            <div style="display:table-cell; vertical-align:text-bottom; width:300px; text-align:left">
               <img style="width:25vw;margin-top:9px;cursor: pointer;" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png" />
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
            <input id="search_bar_front_page_mobi" type="text" class="search-bar-front" autocomplete='new-password' onblur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)" onfocus="new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)" placeholder="🔍 Search any company's org chart" style="z-index:1; display:table; margin-top:-120%; width:90%;border-color:rgb(232,232,232); placeholder-color:rgb(232,232,232)" oninput="new SearchBarLoadersDropdowns().updateHomePageSearchKeyword(this)" onkeypress="if (event.keyCode === 13) homePageSearch()">
            <div id="home_page_dropdown_mobi_elements"></div>
         </div>
      </div>
      <div style="width:100%; bottom:0%; position:absolute; text-align:center; background-color: rgb(247,247,251)">
         <div style="text-align:left; margin-left:5%; margin-top:5%;">
            <div style="display:table; width:100%;">
               <a href="https://www.linkedin.com/company/arxena" target="_blank"><img style="width:35px; cursor:pointer" src="/static/img/linkedin-icon-png-circle-2.png" /></a>
               &nbsp&nbsp&nbsp&nbsp<a href="https://twitter.com/arxena" target="_blank"><img style="width:43px; cursor:pointer" src="/static/img/tw.png" /></a>
               &nbsp&nbsp&nbsp&nbsp<a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA" target="_blank"><img style="width:45px; cursor:pointer" src="/static/img/yt.png" /></a>
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
      </script>

      <!-- NEW LANDING PAGE -->
      <script id="new_landing_page" language="text">
         <!-- desk version 
         -->
      <div class="desk" id="main_container">
         <div style="padding:20px">
            <div style="display:table; width:100%">
               <div style="display:table-cell; vertical-align:middle; width:300px; text-align:left">
                  <img style="width:25%; cursor:pointer;  margin-left:-5%; margin-top:1%" src="/static/img/arxena-logo/arxena-logo.png" />
               </div>
               <div style="display:table-cell; vertical-align:middle; width:130px; text-align:center">
                  <span style="font-size:12pt; cursor:pointer" onclick="$('html').animate({ scrollTop: 1400}, 1000);">PRODUCT</span>
               </div>
               <div style="display:table-cell; vertical-align:middle; width:130px; text-align:center">
                  <span style="font-size:12pt; cursor:pointer" onclick="$('html').animate({ scrollTop: 2100}, 1000);">USE
                     CASES</span>
               </div>
               <div style="display:table-cell; vertical-align:middle; width:130px; text-align:center">
                  <span style="font-size:12pt; cursor:pointer" onclick="$('html').animate({ scrollTop: 700}, 1000);">CUSTOMERS</span>
               </div>
               <div style="display:table-cell; vertical-align:middle; width:130px; text-align:center">
                  <span style="font-size:12pt; cursor:pointer" onclick="$('html').animate({ scrollTop: 2850}, 1000);">PRICING</span>
               </div>
               <div style="display:table-cell; vertical-align:middle; width:100px; text-align:center">
                  <span style="font-size:12pt; cursor:pointer" onclick="window.open('https://www.arxena.com/api', '_blank');">API</span>
               </div>
               <div style="display:table-cell; vertical-align:middle; width:100px; text-align:center">
                  <span style="font-size:12pt; cursor:pointer" onclick="window.open('https://www.notion.so/arxena-FAQ-68810ecd75b243af94a8ac93a933ed09', '_blank');">FAQS</span>
               </div>
               <div style="display:table-cell; vertical-align:middle"></div>
               <div style="display:table-cell; vertical-align:middle; width: 190px; text-align:right">
                  <div class="landing_white_button" style="display:inline-block; background-color:rgb(36,116,204);border-color:rgb(36,116,204); color:white; width:150px" onclick="new PageContents().changePage('/signup')">Sign up free</div>
               </div>
               <div style="display:table-cell; vertical-align:middle; width: 190px; text-align:right; padding-right:20px">
                  <div class="landing_white_button" style="display:inline-block; background-color:white;border:1px solid rgb(36,116,204); color:rgb(36,116,204); width:150px" onclick="new PageContents().changePage('/login')">Log in</div>
               </div>
            </div>
            <div style="padding-left:20px; padding-right:20px; margin-top:70px">
               <div style="display:table; width:100%">
                  <div style="display:table-cell; width:50%; vertical-align: middle">
                     <span style="font-size:40pt; line-height:70px">Global Org Chart<br>Database & Search</span>
                     <br>
                     <!--<span style="font-size:40pt; line-height:70px">of your <span id="landing_top_animation" style="font-size:40pt; line-height:70px; color:rgb(36,116,204)">prospects</span></span>-->
                     <br><br>
                     <span style="font-size:16pt; line-height:30px">Provide a vacancy and instantly get relevant org charts
                        and interested candidates (using GPT3).</span><br>
                     <div class="landing_white_button" style="display:inline-block; margin-top: 40px; background-color:rgb(36,116,204);border-color:rgb(36,116,204); color:white; height:54px; border-radius:26px;padding-top:13px" onclick="new PageContents().changePage('/signup')">Get started free</div>

                  </div>
                  <div style="display:table-cell; width:50%; vertical-align: middle; text-align:right">

                     <div class="shadow content_section" style="width:500px;padding:30px; background-color:rgba(255,255,255);border-radius: 5px; text-align:center; left:0, right:0">
                        <div id="signup_form_content">
                           <span style="font-size:16pt;font-weight:300;">Get started with 10 free org-chart credits.<br>No
                              credit card is needed.</span>
                           <br>
                           <br>
                           <div style="width: 90%; left:5%; position:relative">
                              <div class="row">
                                 <div class="col-sm-12">
                                    <input id="full_name" type="text" class="form-control-custom" placeholder="Full Name" oninput="new SessionStorageUpdates().updateFullName(this)"><br>
                                 </div>
                                 <div class="col-sm-12 phone_number_input" style="height: 62px">
                                    <div class="iti iti--allow-dropdown iti--separate-dial-code" style="width: 100%;">
                                       <div class="iti__flag-container">
                                          <div class="iti__selected-flag" role="combobox" aria-controls="iti-0__country-listbox" aria-owns="iti-0__country-listbox" aria-expanded="false" tabindex="0" title="India (भारत): +91" aria-activedescendant="iti-0__item-in-preferred">
                                             <div class="iti__flag iti__in"></div>
                                             <div class="iti__selected-dial-code">+91</div>
                                             <div class="iti__arrow"></div>
                                          </div>
                                          <ul class="iti__country-list iti__hide" id="iti-0__country-listbox" role="listbox" aria-label="List of countries">
                                             <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-us-preferred" role="option" data-dial-code="1" data-country-code="us" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__us"></div>
                                                </div><span class="iti__country-name">United States</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-gb-preferred" role="option" data-dial-code="44" data-country-code="gb" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gb"></div>
                                                </div><span class="iti__country-name">United Kingdom</span><span class="iti__dial-code">+44</span>
                                             </li>
                                             <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-ca-preferred" role="option" data-dial-code="1" data-country-code="ca" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ca"></div>
                                                </div><span class="iti__country-name">Canada</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-de-preferred" role="option" data-dial-code="49" data-country-code="de" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__de"></div>
                                                </div><span class="iti__country-name">Germany (Deutschland)</span><span class="iti__dial-code">+49</span>
                                             </li>
                                             <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-au-preferred" role="option" data-dial-code="61" data-country-code="au" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__au"></div>
                                                </div><span class="iti__country-name">Australia</span><span class="iti__dial-code">+61</span>
                                             </li>
                                             <li class="iti__country iti__preferred iti__active" tabindex="-1" id="iti-0__item-in-preferred" role="option" data-dial-code="91" data-country-code="in" aria-selected="true">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__in"></div>
                                                </div><span class="iti__country-name">India (भारत)</span><span class="iti__dial-code">+91</span>
                                             </li>
                                             <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-sg-preferred" role="option" data-dial-code="65" data-country-code="sg" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sg"></div>
                                                </div><span class="iti__country-name">Singapore</span><span class="iti__dial-code">+65</span>
                                             </li>
                                             <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-ae-preferred" role="option" data-dial-code="971" data-country-code="ae" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ae"></div>
                                                </div><span class="iti__country-name">United Arab Emirates (<U202b>الإمارات
                                                      العربية المتحدة<U202c>‎)</span><span class="iti__dial-code">+971</span>
                                             </li>
                                             <li class="iti__divider" role="separator" aria-disabled="true"></li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-af" role="option" data-dial-code="93" data-country-code="af" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__af"></div>
                                                </div><span class="iti__country-name">Afghanistan (<U202b>افغانستان<U202c>
                                                         ‎)</span><span class="iti__dial-code">+93</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-al" role="option" data-dial-code="355" data-country-code="al" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__al"></div>
                                                </div><span class="iti__country-name">Albania (Shqipëri)</span><span class="iti__dial-code">+355</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-dz" role="option" data-dial-code="213" data-country-code="dz" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__dz"></div>
                                                </div><span class="iti__country-name">Algeria (<U202b>الجزائر<U202c>
                                                         ‎)</span><span class="iti__dial-code">+213</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-as" role="option" data-dial-code="1" data-country-code="as" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__as"></div>
                                                </div><span class="iti__country-name">American Samoa</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ad" role="option" data-dial-code="376" data-country-code="ad" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ad"></div>
                                                </div><span class="iti__country-name">Andorra</span><span class="iti__dial-code">+376</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ao" role="option" data-dial-code="244" data-country-code="ao" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ao"></div>
                                                </div><span class="iti__country-name">Angola</span><span class="iti__dial-code">+244</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ai" role="option" data-dial-code="1" data-country-code="ai" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ai"></div>
                                                </div><span class="iti__country-name">Anguilla</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ag" role="option" data-dial-code="1" data-country-code="ag" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ag"></div>
                                                </div><span class="iti__country-name">Antigua and Barbuda</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ar" role="option" data-dial-code="54" data-country-code="ar" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ar"></div>
                                                </div><span class="iti__country-name">Argentina</span><span class="iti__dial-code">+54</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-am" role="option" data-dial-code="374" data-country-code="am" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__am"></div>
                                                </div><span class="iti__country-name">Armenia (Հայաստան)</span><span class="iti__dial-code">+374</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-aw" role="option" data-dial-code="297" data-country-code="aw" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__aw"></div>
                                                </div><span class="iti__country-name">Aruba</span><span class="iti__dial-code">+297</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ac" role="option" data-dial-code="247" data-country-code="ac" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ac"></div>
                                                </div><span class="iti__country-name">Ascension Island</span><span class="iti__dial-code">+247</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-au" role="option" data-dial-code="61" data-country-code="au" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__au"></div>
                                                </div><span class="iti__country-name">Australia</span><span class="iti__dial-code">+61</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-at" role="option" data-dial-code="43" data-country-code="at" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__at"></div>
                                                </div><span class="iti__country-name">Austria (Österreich)</span><span class="iti__dial-code">+43</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-az" role="option" data-dial-code="994" data-country-code="az" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__az"></div>
                                                </div><span class="iti__country-name">Azerbaijan (Azərbaycan)</span><span class="iti__dial-code">+994</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bs" role="option" data-dial-code="1" data-country-code="bs" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bs"></div>
                                                </div><span class="iti__country-name">Bahamas</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bh" role="option" data-dial-code="973" data-country-code="bh" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bh"></div>
                                                </div><span class="iti__country-name">Bahrain (<U202b>البحرين<U202c>
                                                         ‎)</span><span class="iti__dial-code">+973</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bd" role="option" data-dial-code="880" data-country-code="bd" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bd"></div>
                                                </div><span class="iti__country-name">Bangladesh (বাংলাদেশ)</span><span class="iti__dial-code">+880</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bb" role="option" data-dial-code="1" data-country-code="bb" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bb"></div>
                                                </div><span class="iti__country-name">Barbados</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-by" role="option" data-dial-code="375" data-country-code="by" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__by"></div>
                                                </div><span class="iti__country-name">Belarus (Беларусь)</span><span class="iti__dial-code">+375</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-be" role="option" data-dial-code="32" data-country-code="be" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__be"></div>
                                                </div><span class="iti__country-name">Belgium (België)</span><span class="iti__dial-code">+32</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bz" role="option" data-dial-code="501" data-country-code="bz" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bz"></div>
                                                </div><span class="iti__country-name">Belize</span><span class="iti__dial-code">+501</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bj" role="option" data-dial-code="229" data-country-code="bj" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bj"></div>
                                                </div><span class="iti__country-name">Benin (Bénin)</span><span class="iti__dial-code">+229</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bm" role="option" data-dial-code="1" data-country-code="bm" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bm"></div>
                                                </div><span class="iti__country-name">Bermuda</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bt" role="option" data-dial-code="975" data-country-code="bt" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bt"></div>
                                                </div><span class="iti__country-name">Bhutan (འབྲུག)</span><span class="iti__dial-code">+975</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bo" role="option" data-dial-code="591" data-country-code="bo" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bo"></div>
                                                </div><span class="iti__country-name">Bolivia</span><span class="iti__dial-code">+591</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ba" role="option" data-dial-code="387" data-country-code="ba" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ba"></div>
                                                </div><span class="iti__country-name">Bosnia and Herzegovina (Босна и
                                                   Херцеговина)</span><span class="iti__dial-code">+387</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bw" role="option" data-dial-code="267" data-country-code="bw" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bw"></div>
                                                </div><span class="iti__country-name">Botswana</span><span class="iti__dial-code">+267</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-br" role="option" data-dial-code="55" data-country-code="br" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__br"></div>
                                                </div><span class="iti__country-name">Brazil (Brasil)</span><span class="iti__dial-code">+55</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-io" role="option" data-dial-code="246" data-country-code="io" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__io"></div>
                                                </div><span class="iti__country-name">British Indian Ocean
                                                   Territory</span><span class="iti__dial-code">+246</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-vg" role="option" data-dial-code="1" data-country-code="vg" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__vg"></div>
                                                </div><span class="iti__country-name">British Virgin Islands</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bn" role="option" data-dial-code="673" data-country-code="bn" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bn"></div>
                                                </div><span class="iti__country-name">Brunei</span><span class="iti__dial-code">+673</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bg" role="option" data-dial-code="359" data-country-code="bg" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bg"></div>
                                                </div><span class="iti__country-name">Bulgaria (България)</span><span class="iti__dial-code">+359</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bf" role="option" data-dial-code="226" data-country-code="bf" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bf"></div>
                                                </div><span class="iti__country-name">Burkina Faso</span><span class="iti__dial-code">+226</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bi" role="option" data-dial-code="257" data-country-code="bi" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bi"></div>
                                                </div><span class="iti__country-name">Burundi (Uburundi)</span><span class="iti__dial-code">+257</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kh" role="option" data-dial-code="855" data-country-code="kh" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__kh"></div>
                                                </div><span class="iti__country-name">Cambodia (កម្ពុជា)</span><span class="iti__dial-code">+855</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cm" role="option" data-dial-code="237" data-country-code="cm" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cm"></div>
                                                </div><span class="iti__country-name">Cameroon (Cameroun)</span><span class="iti__dial-code">+237</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ca" role="option" data-dial-code="1" data-country-code="ca" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ca"></div>
                                                </div><span class="iti__country-name">Canada</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cv" role="option" data-dial-code="238" data-country-code="cv" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cv"></div>
                                                </div><span class="iti__country-name">Cape Verde (Kabu Verdi)</span><span class="iti__dial-code">+238</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bq" role="option" data-dial-code="599" data-country-code="bq" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bq"></div>
                                                </div><span class="iti__country-name">Caribbean Netherlands</span><span class="iti__dial-code">+599</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ky" role="option" data-dial-code="1" data-country-code="ky" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ky"></div>
                                                </div><span class="iti__country-name">Cayman Islands</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cf" role="option" data-dial-code="236" data-country-code="cf" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cf"></div>
                                                </div><span class="iti__country-name">Central African Republic (République
                                                   centrafricaine)</span><span class="iti__dial-code">+236</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-td" role="option" data-dial-code="235" data-country-code="td" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__td"></div>
                                                </div><span class="iti__country-name">Chad (Tchad)</span><span class="iti__dial-code">+235</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cl" role="option" data-dial-code="56" data-country-code="cl" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cl"></div>
                                                </div><span class="iti__country-name">Chile</span><span class="iti__dial-code">+56</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cn" role="option" data-dial-code="86" data-country-code="cn" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cn"></div>
                                                </div><span class="iti__country-name">China (中国)</span><span class="iti__dial-code">+86</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cx" role="option" data-dial-code="61" data-country-code="cx" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cx"></div>
                                                </div><span class="iti__country-name">Christmas Island</span><span class="iti__dial-code">+61</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cc" role="option" data-dial-code="61" data-country-code="cc" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cc"></div>
                                                </div><span class="iti__country-name">Cocos (Keeling) Islands</span><span class="iti__dial-code">+61</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-co" role="option" data-dial-code="57" data-country-code="co" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__co"></div>
                                                </div><span class="iti__country-name">Colombia</span><span class="iti__dial-code">+57</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-km" role="option" data-dial-code="269" data-country-code="km" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__km"></div>
                                                </div><span class="iti__country-name">Comoros (<U202b>جزر القمر<U202c>
                                                         ‎)</span><span class="iti__dial-code">+269</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cd" role="option" data-dial-code="243" data-country-code="cd" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cd"></div>
                                                </div><span class="iti__country-name">Congo (DRC) (Jamhuri ya Kidemokrasia ya
                                                   Kongo)</span><span class="iti__dial-code">+243</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cg" role="option" data-dial-code="242" data-country-code="cg" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cg"></div>
                                                </div><span class="iti__country-name">Congo (Republic)
                                                   (Congo-Brazzaville)</span><span class="iti__dial-code">+242</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ck" role="option" data-dial-code="682" data-country-code="ck" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ck"></div>
                                                </div><span class="iti__country-name">Cook Islands</span><span class="iti__dial-code">+682</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cr" role="option" data-dial-code="506" data-country-code="cr" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cr"></div>
                                                </div><span class="iti__country-name">Costa Rica</span><span class="iti__dial-code">+506</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ci" role="option" data-dial-code="225" data-country-code="ci" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ci"></div>
                                                </div><span class="iti__country-name">Côte d’Ivoire</span><span class="iti__dial-code">+225</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-hr" role="option" data-dial-code="385" data-country-code="hr" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__hr"></div>
                                                </div><span class="iti__country-name">Croatia (Hrvatska)</span><span class="iti__dial-code">+385</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cu" role="option" data-dial-code="53" data-country-code="cu" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cu"></div>
                                                </div><span class="iti__country-name">Cuba</span><span class="iti__dial-code">+53</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cw" role="option" data-dial-code="599" data-country-code="cw" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cw"></div>
                                                </div><span class="iti__country-name">Curaçao</span><span class="iti__dial-code">+599</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cy" role="option" data-dial-code="357" data-country-code="cy" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cy"></div>
                                                </div><span class="iti__country-name">Cyprus (Κύπρος)</span><span class="iti__dial-code">+357</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cz" role="option" data-dial-code="420" data-country-code="cz" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__cz"></div>
                                                </div><span class="iti__country-name">Czech Republic (Česká
                                                   republika)</span><span class="iti__dial-code">+420</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-dk" role="option" data-dial-code="45" data-country-code="dk" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__dk"></div>
                                                </div><span class="iti__country-name">Denmark (Danmark)</span><span class="iti__dial-code">+45</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-dj" role="option" data-dial-code="253" data-country-code="dj" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__dj"></div>
                                                </div><span class="iti__country-name">Djibouti</span><span class="iti__dial-code">+253</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-dm" role="option" data-dial-code="1" data-country-code="dm" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__dm"></div>
                                                </div><span class="iti__country-name">Dominica</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-do" role="option" data-dial-code="1" data-country-code="do" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__do"></div>
                                                </div><span class="iti__country-name">Dominican Republic (República
                                                   Dominicana)</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ec" role="option" data-dial-code="593" data-country-code="ec" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ec"></div>
                                                </div><span class="iti__country-name">Ecuador</span><span class="iti__dial-code">+593</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-eg" role="option" data-dial-code="20" data-country-code="eg" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__eg"></div>
                                                </div><span class="iti__country-name">Egypt (<U202b>مصر<U202c>‎)</span><span class="iti__dial-code">+20</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sv" role="option" data-dial-code="503" data-country-code="sv" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sv"></div>
                                                </div><span class="iti__country-name">El Salvador</span><span class="iti__dial-code">+503</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gq" role="option" data-dial-code="240" data-country-code="gq" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gq"></div>
                                                </div><span class="iti__country-name">Equatorial Guinea (Guinea
                                                   Ecuatorial)</span><span class="iti__dial-code">+240</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-er" role="option" data-dial-code="291" data-country-code="er" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__er"></div>
                                                </div><span class="iti__country-name">Eritrea</span><span class="iti__dial-code">+291</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ee" role="option" data-dial-code="372" data-country-code="ee" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ee"></div>
                                                </div><span class="iti__country-name">Estonia (Eesti)</span><span class="iti__dial-code">+372</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sz" role="option" data-dial-code="268" data-country-code="sz" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sz"></div>
                                                </div><span class="iti__country-name">Eswatini</span><span class="iti__dial-code">+268</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-et" role="option" data-dial-code="251" data-country-code="et" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__et"></div>
                                                </div><span class="iti__country-name">Ethiopia</span><span class="iti__dial-code">+251</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-fk" role="option" data-dial-code="500" data-country-code="fk" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__fk"></div>
                                                </div><span class="iti__country-name">Falkland Islands (Islas
                                                   Malvinas)</span><span class="iti__dial-code">+500</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-fo" role="option" data-dial-code="298" data-country-code="fo" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__fo"></div>
                                                </div><span class="iti__country-name">Faroe Islands (Føroyar)</span><span class="iti__dial-code">+298</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-fj" role="option" data-dial-code="679" data-country-code="fj" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__fj"></div>
                                                </div><span class="iti__country-name">Fiji</span><span class="iti__dial-code">+679</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-fi" role="option" data-dial-code="358" data-country-code="fi" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__fi"></div>
                                                </div><span class="iti__country-name">Finland (Suomi)</span><span class="iti__dial-code">+358</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-fr" role="option" data-dial-code="33" data-country-code="fr" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__fr"></div>
                                                </div><span class="iti__country-name">France</span><span class="iti__dial-code">+33</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gf" role="option" data-dial-code="594" data-country-code="gf" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gf"></div>
                                                </div><span class="iti__country-name">French Guiana (Guyane
                                                   française)</span><span class="iti__dial-code">+594</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pf" role="option" data-dial-code="689" data-country-code="pf" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__pf"></div>
                                                </div><span class="iti__country-name">French Polynesia (Polynésie
                                                   française)</span><span class="iti__dial-code">+689</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ga" role="option" data-dial-code="241" data-country-code="ga" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ga"></div>
                                                </div><span class="iti__country-name">Gabon</span><span class="iti__dial-code">+241</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gm" role="option" data-dial-code="220" data-country-code="gm" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gm"></div>
                                                </div><span class="iti__country-name">Gambia</span><span class="iti__dial-code">+220</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ge" role="option" data-dial-code="995" data-country-code="ge" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ge"></div>
                                                </div><span class="iti__country-name">Georgia (საქართველო)</span><span class="iti__dial-code">+995</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-de" role="option" data-dial-code="49" data-country-code="de" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__de"></div>
                                                </div><span class="iti__country-name">Germany (Deutschland)</span><span class="iti__dial-code">+49</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gh" role="option" data-dial-code="233" data-country-code="gh" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gh"></div>
                                                </div><span class="iti__country-name">Ghana (Gaana)</span><span class="iti__dial-code">+233</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gi" role="option" data-dial-code="350" data-country-code="gi" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gi"></div>
                                                </div><span class="iti__country-name">Gibraltar</span><span class="iti__dial-code">+350</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gr" role="option" data-dial-code="30" data-country-code="gr" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gr"></div>
                                                </div><span class="iti__country-name">Greece (Ελλάδα)</span><span class="iti__dial-code">+30</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gl" role="option" data-dial-code="299" data-country-code="gl" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gl"></div>
                                                </div><span class="iti__country-name">Greenland (Kalaallit Nunaat)</span><span class="iti__dial-code">+299</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gd" role="option" data-dial-code="1" data-country-code="gd" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gd"></div>
                                                </div><span class="iti__country-name">Grenada</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gp" role="option" data-dial-code="590" data-country-code="gp" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gp"></div>
                                                </div><span class="iti__country-name">Guadeloupe</span><span class="iti__dial-code">+590</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gu" role="option" data-dial-code="1" data-country-code="gu" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gu"></div>
                                                </div><span class="iti__country-name">Guam</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gt" role="option" data-dial-code="502" data-country-code="gt" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gt"></div>
                                                </div><span class="iti__country-name">Guatemala</span><span class="iti__dial-code">+502</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gg" role="option" data-dial-code="44" data-country-code="gg" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gg"></div>
                                                </div><span class="iti__country-name">Guernsey</span><span class="iti__dial-code">+44</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gn" role="option" data-dial-code="224" data-country-code="gn" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gn"></div>
                                                </div><span class="iti__country-name">Guinea (Guinée)</span><span class="iti__dial-code">+224</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gw" role="option" data-dial-code="245" data-country-code="gw" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gw"></div>
                                                </div><span class="iti__country-name">Guinea-Bissau (Guiné Bissau)</span><span class="iti__dial-code">+245</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gy" role="option" data-dial-code="592" data-country-code="gy" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gy"></div>
                                                </div><span class="iti__country-name">Guyana</span><span class="iti__dial-code">+592</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ht" role="option" data-dial-code="509" data-country-code="ht" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ht"></div>
                                                </div><span class="iti__country-name">Haiti</span><span class="iti__dial-code">+509</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-hn" role="option" data-dial-code="504" data-country-code="hn" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__hn"></div>
                                                </div><span class="iti__country-name">Honduras</span><span class="iti__dial-code">+504</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-hk" role="option" data-dial-code="852" data-country-code="hk" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__hk"></div>
                                                </div><span class="iti__country-name">Hong Kong (香港)</span><span class="iti__dial-code">+852</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-hu" role="option" data-dial-code="36" data-country-code="hu" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__hu"></div>
                                                </div><span class="iti__country-name">Hungary (Magyarország)</span><span class="iti__dial-code">+36</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-is" role="option" data-dial-code="354" data-country-code="is" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__is"></div>
                                                </div><span class="iti__country-name">Iceland (Ísland)</span><span class="iti__dial-code">+354</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-in" role="option" data-dial-code="91" data-country-code="in" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__in"></div>
                                                </div><span class="iti__country-name">India (भारत)</span><span class="iti__dial-code">+91</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-id" role="option" data-dial-code="62" data-country-code="id" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__id"></div>
                                                </div><span class="iti__country-name">Indonesia</span><span class="iti__dial-code">+62</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ir" role="option" data-dial-code="98" data-country-code="ir" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ir"></div>
                                                </div><span class="iti__country-name">Iran (<U202b>ایران<U202c>‎)</span><span class="iti__dial-code">+98</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-iq" role="option" data-dial-code="964" data-country-code="iq" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__iq"></div>
                                                </div><span class="iti__country-name">Iraq (<U202b>العراق<U202c>‎)</span><span class="iti__dial-code">+964</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ie" role="option" data-dial-code="353" data-country-code="ie" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ie"></div>
                                                </div><span class="iti__country-name">Ireland</span><span class="iti__dial-code">+353</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-im" role="option" data-dial-code="44" data-country-code="im" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__im"></div>
                                                </div><span class="iti__country-name">Isle of Man</span><span class="iti__dial-code">+44</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-il" role="option" data-dial-code="972" data-country-code="il" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__il"></div>
                                                </div><span class="iti__country-name">Israel (<U202b>ישראל<U202c>
                                                         ‎)</span><span class="iti__dial-code">+972</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-it" role="option" data-dial-code="39" data-country-code="it" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__it"></div>
                                                </div><span class="iti__country-name">Italy (Italia)</span><span class="iti__dial-code">+39</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-jm" role="option" data-dial-code="1" data-country-code="jm" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__jm"></div>
                                                </div><span class="iti__country-name">Jamaica</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-jp" role="option" data-dial-code="81" data-country-code="jp" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__jp"></div>
                                                </div><span class="iti__country-name">Japan (日本)</span><span class="iti__dial-code">+81</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-je" role="option" data-dial-code="44" data-country-code="je" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__je"></div>
                                                </div><span class="iti__country-name">Jersey</span><span class="iti__dial-code">+44</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-jo" role="option" data-dial-code="962" data-country-code="jo" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__jo"></div>
                                                </div><span class="iti__country-name">Jordan (<U202b>الأردن<U202c>
                                                         ‎)</span><span class="iti__dial-code">+962</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kz" role="option" data-dial-code="7" data-country-code="kz" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__kz"></div>
                                                </div><span class="iti__country-name">Kazakhstan (Казахстан)</span><span class="iti__dial-code">+7</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ke" role="option" data-dial-code="254" data-country-code="ke" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ke"></div>
                                                </div><span class="iti__country-name">Kenya</span><span class="iti__dial-code">+254</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ki" role="option" data-dial-code="686" data-country-code="ki" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ki"></div>
                                                </div><span class="iti__country-name">Kiribati</span><span class="iti__dial-code">+686</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-xk" role="option" data-dial-code="383" data-country-code="xk" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__xk"></div>
                                                </div><span class="iti__country-name">Kosovo</span><span class="iti__dial-code">+383</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kw" role="option" data-dial-code="965" data-country-code="kw" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__kw"></div>
                                                </div><span class="iti__country-name">Kuwait (<U202b>الكويت<U202c>
                                                         ‎)</span><span class="iti__dial-code">+965</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kg" role="option" data-dial-code="996" data-country-code="kg" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__kg"></div>
                                                </div><span class="iti__country-name">Kyrgyzstan (Кыргызстан)</span><span class="iti__dial-code">+996</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-la" role="option" data-dial-code="856" data-country-code="la" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__la"></div>
                                                </div><span class="iti__country-name">Laos (ລາວ)</span><span class="iti__dial-code">+856</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lv" role="option" data-dial-code="371" data-country-code="lv" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__lv"></div>
                                                </div><span class="iti__country-name">Latvia (Latvija)</span><span class="iti__dial-code">+371</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lb" role="option" data-dial-code="961" data-country-code="lb" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__lb"></div>
                                                </div><span class="iti__country-name">Lebanon (<U202b>لبنان<U202c>
                                                         ‎)</span><span class="iti__dial-code">+961</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ls" role="option" data-dial-code="266" data-country-code="ls" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ls"></div>
                                                </div><span class="iti__country-name">Lesotho</span><span class="iti__dial-code">+266</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lr" role="option" data-dial-code="231" data-country-code="lr" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__lr"></div>
                                                </div><span class="iti__country-name">Liberia</span><span class="iti__dial-code">+231</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ly" role="option" data-dial-code="218" data-country-code="ly" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ly"></div>
                                                </div><span class="iti__country-name">Libya (<U202b>ليبيا<U202c>‎)</span><span class="iti__dial-code">+218</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-li" role="option" data-dial-code="423" data-country-code="li" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__li"></div>
                                                </div><span class="iti__country-name">Liechtenstein</span><span class="iti__dial-code">+423</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lt" role="option" data-dial-code="370" data-country-code="lt" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__lt"></div>
                                                </div><span class="iti__country-name">Lithuania (Lietuva)</span><span class="iti__dial-code">+370</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lu" role="option" data-dial-code="352" data-country-code="lu" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__lu"></div>
                                                </div><span class="iti__country-name">Luxembourg</span><span class="iti__dial-code">+352</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mo" role="option" data-dial-code="853" data-country-code="mo" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mo"></div>
                                                </div><span class="iti__country-name">Macau (澳門)</span><span class="iti__dial-code">+853</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mk" role="option" data-dial-code="389" data-country-code="mk" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mk"></div>
                                                </div><span class="iti__country-name">North Macedonia (Македонија)</span><span class="iti__dial-code">+389</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mg" role="option" data-dial-code="261" data-country-code="mg" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mg"></div>
                                                </div><span class="iti__country-name">Madagascar (Madagasikara)</span><span class="iti__dial-code">+261</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mw" role="option" data-dial-code="265" data-country-code="mw" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mw"></div>
                                                </div><span class="iti__country-name">Malawi</span><span class="iti__dial-code">+265</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-my" role="option" data-dial-code="60" data-country-code="my" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__my"></div>
                                                </div><span class="iti__country-name">Malaysia</span><span class="iti__dial-code">+60</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mv" role="option" data-dial-code="960" data-country-code="mv" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mv"></div>
                                                </div><span class="iti__country-name">Maldives</span><span class="iti__dial-code">+960</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ml" role="option" data-dial-code="223" data-country-code="ml" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ml"></div>
                                                </div><span class="iti__country-name">Mali</span><span class="iti__dial-code">+223</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mt" role="option" data-dial-code="356" data-country-code="mt" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mt"></div>
                                                </div><span class="iti__country-name">Malta</span><span class="iti__dial-code">+356</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mh" role="option" data-dial-code="692" data-country-code="mh" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mh"></div>
                                                </div><span class="iti__country-name">Marshall Islands</span><span class="iti__dial-code">+692</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mq" role="option" data-dial-code="596" data-country-code="mq" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mq"></div>
                                                </div><span class="iti__country-name">Martinique</span><span class="iti__dial-code">+596</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mr" role="option" data-dial-code="222" data-country-code="mr" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mr"></div>
                                                </div><span class="iti__country-name">Mauritania (<U202b>موريتانيا<U202c>
                                                         ‎)</span><span class="iti__dial-code">+222</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mu" role="option" data-dial-code="230" data-country-code="mu" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mu"></div>
                                                </div><span class="iti__country-name">Mauritius (Moris)</span><span class="iti__dial-code">+230</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-yt" role="option" data-dial-code="262" data-country-code="yt" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__yt"></div>
                                                </div><span class="iti__country-name">Mayotte</span><span class="iti__dial-code">+262</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mx" role="option" data-dial-code="52" data-country-code="mx" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mx"></div>
                                                </div><span class="iti__country-name">Mexico (México)</span><span class="iti__dial-code">+52</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-fm" role="option" data-dial-code="691" data-country-code="fm" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__fm"></div>
                                                </div><span class="iti__country-name">Micronesia</span><span class="iti__dial-code">+691</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-md" role="option" data-dial-code="373" data-country-code="md" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__md"></div>
                                                </div><span class="iti__country-name">Moldova (Republica Moldova)</span><span class="iti__dial-code">+373</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mc" role="option" data-dial-code="377" data-country-code="mc" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mc"></div>
                                                </div><span class="iti__country-name">Monaco</span><span class="iti__dial-code">+377</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mn" role="option" data-dial-code="976" data-country-code="mn" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mn"></div>
                                                </div><span class="iti__country-name">Mongolia (Монгол)</span><span class="iti__dial-code">+976</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-me" role="option" data-dial-code="382" data-country-code="me" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__me"></div>
                                                </div><span class="iti__country-name">Montenegro (Crna Gora)</span><span class="iti__dial-code">+382</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ms" role="option" data-dial-code="1" data-country-code="ms" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ms"></div>
                                                </div><span class="iti__country-name">Montserrat</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ma" role="option" data-dial-code="212" data-country-code="ma" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ma"></div>
                                                </div><span class="iti__country-name">Morocco (<U202b>المغرب<U202c>
                                                         ‎)</span><span class="iti__dial-code">+212</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mz" role="option" data-dial-code="258" data-country-code="mz" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mz"></div>
                                                </div><span class="iti__country-name">Mozambique (Moçambique)</span><span class="iti__dial-code">+258</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mm" role="option" data-dial-code="95" data-country-code="mm" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mm"></div>
                                                </div><span class="iti__country-name">Myanmar (Burma) (မြန်မာ)</span><span class="iti__dial-code">+95</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-na" role="option" data-dial-code="264" data-country-code="na" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__na"></div>
                                                </div><span class="iti__country-name">Namibia (Namibië)</span><span class="iti__dial-code">+264</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-nr" role="option" data-dial-code="674" data-country-code="nr" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__nr"></div>
                                                </div><span class="iti__country-name">Nauru</span><span class="iti__dial-code">+674</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-np" role="option" data-dial-code="977" data-country-code="np" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__np"></div>
                                                </div><span class="iti__country-name">Nepal (नेपाल)</span><span class="iti__dial-code">+977</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-nl" role="option" data-dial-code="31" data-country-code="nl" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__nl"></div>
                                                </div><span class="iti__country-name">Netherlands (Nederland)</span><span class="iti__dial-code">+31</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-nc" role="option" data-dial-code="687" data-country-code="nc" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__nc"></div>
                                                </div><span class="iti__country-name">New Caledonia
                                                   (Nouvelle-Calédonie)</span><span class="iti__dial-code">+687</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-nz" role="option" data-dial-code="64" data-country-code="nz" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__nz"></div>
                                                </div><span class="iti__country-name">New Zealand</span><span class="iti__dial-code">+64</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ni" role="option" data-dial-code="505" data-country-code="ni" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ni"></div>
                                                </div><span class="iti__country-name">Nicaragua</span><span class="iti__dial-code">+505</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ne" role="option" data-dial-code="227" data-country-code="ne" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ne"></div>
                                                </div><span class="iti__country-name">Niger (Nijar)</span><span class="iti__dial-code">+227</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ng" role="option" data-dial-code="234" data-country-code="ng" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ng"></div>
                                                </div><span class="iti__country-name">Nigeria</span><span class="iti__dial-code">+234</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-nu" role="option" data-dial-code="683" data-country-code="nu" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__nu"></div>
                                                </div><span class="iti__country-name">Niue</span><span class="iti__dial-code">+683</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-nf" role="option" data-dial-code="672" data-country-code="nf" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__nf"></div>
                                                </div><span class="iti__country-name">Norfolk Island</span><span class="iti__dial-code">+672</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kp" role="option" data-dial-code="850" data-country-code="kp" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__kp"></div>
                                                </div><span class="iti__country-name">North Korea (조선 민주주의 인민 공화국)</span><span class="iti__dial-code">+850</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mp" role="option" data-dial-code="1" data-country-code="mp" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mp"></div>
                                                </div><span class="iti__country-name">Northern Mariana Islands</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-no" role="option" data-dial-code="47" data-country-code="no" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__no"></div>
                                                </div><span class="iti__country-name">Norway (Norge)</span><span class="iti__dial-code">+47</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-om" role="option" data-dial-code="968" data-country-code="om" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__om"></div>
                                                </div><span class="iti__country-name">Oman (<U202b>عُمان<U202c>‎)</span><span class="iti__dial-code">+968</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pk" role="option" data-dial-code="92" data-country-code="pk" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__pk"></div>
                                                </div><span class="iti__country-name">Pakistan (<U202b>پاکستان<U202c>
                                                         ‎)</span><span class="iti__dial-code">+92</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pw" role="option" data-dial-code="680" data-country-code="pw" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__pw"></div>
                                                </div><span class="iti__country-name">Palau</span><span class="iti__dial-code">+680</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ps" role="option" data-dial-code="970" data-country-code="ps" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ps"></div>
                                                </div><span class="iti__country-name">Palestine (<U202b>فلسطين<U202c>
                                                         ‎)</span><span class="iti__dial-code">+970</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pa" role="option" data-dial-code="507" data-country-code="pa" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__pa"></div>
                                                </div><span class="iti__country-name">Panama (Panamá)</span><span class="iti__dial-code">+507</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pg" role="option" data-dial-code="675" data-country-code="pg" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__pg"></div>
                                                </div><span class="iti__country-name">Papua New Guinea</span><span class="iti__dial-code">+675</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-py" role="option" data-dial-code="595" data-country-code="py" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__py"></div>
                                                </div><span class="iti__country-name">Paraguay</span><span class="iti__dial-code">+595</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pe" role="option" data-dial-code="51" data-country-code="pe" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__pe"></div>
                                                </div><span class="iti__country-name">Peru (Perú)</span><span class="iti__dial-code">+51</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ph" role="option" data-dial-code="63" data-country-code="ph" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ph"></div>
                                                </div><span class="iti__country-name">Philippines</span><span class="iti__dial-code">+63</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pl" role="option" data-dial-code="48" data-country-code="pl" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__pl"></div>
                                                </div><span class="iti__country-name">Poland (Polska)</span><span class="iti__dial-code">+48</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pt" role="option" data-dial-code="351" data-country-code="pt" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__pt"></div>
                                                </div><span class="iti__country-name">Portugal</span><span class="iti__dial-code">+351</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pr" role="option" data-dial-code="1" data-country-code="pr" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__pr"></div>
                                                </div><span class="iti__country-name">Puerto Rico</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-qa" role="option" data-dial-code="974" data-country-code="qa" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__qa"></div>
                                                </div><span class="iti__country-name">Qatar (<U202b>قطر<U202c>‎)</span><span class="iti__dial-code">+974</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-re" role="option" data-dial-code="262" data-country-code="re" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__re"></div>
                                                </div><span class="iti__country-name">Réunion (La Réunion)</span><span class="iti__dial-code">+262</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ro" role="option" data-dial-code="40" data-country-code="ro" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ro"></div>
                                                </div><span class="iti__country-name">Romania (România)</span><span class="iti__dial-code">+40</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ru" role="option" data-dial-code="7" data-country-code="ru" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ru"></div>
                                                </div><span class="iti__country-name">Russia (Россия)</span><span class="iti__dial-code">+7</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-rw" role="option" data-dial-code="250" data-country-code="rw" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__rw"></div>
                                                </div><span class="iti__country-name">Rwanda</span><span class="iti__dial-code">+250</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bl" role="option" data-dial-code="590" data-country-code="bl" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__bl"></div>
                                                </div><span class="iti__country-name">Saint Barthélemy</span><span class="iti__dial-code">+590</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sh" role="option" data-dial-code="290" data-country-code="sh" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sh"></div>
                                                </div><span class="iti__country-name">Saint Helena</span><span class="iti__dial-code">+290</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kn" role="option" data-dial-code="1" data-country-code="kn" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__kn"></div>
                                                </div><span class="iti__country-name">Saint Kitts and Nevis</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lc" role="option" data-dial-code="1" data-country-code="lc" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__lc"></div>
                                                </div><span class="iti__country-name">Saint Lucia</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mf" role="option" data-dial-code="590" data-country-code="mf" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__mf"></div>
                                                </div><span class="iti__country-name">Saint Martin (Saint-Martin (partie
                                                   française))</span><span class="iti__dial-code">+590</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pm" role="option" data-dial-code="508" data-country-code="pm" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__pm"></div>
                                                </div><span class="iti__country-name">Saint Pierre and Miquelon
                                                   (Saint-Pierre-et-Miquelon)</span><span class="iti__dial-code">+508</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-vc" role="option" data-dial-code="1" data-country-code="vc" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__vc"></div>
                                                </div><span class="iti__country-name">Saint Vincent and the
                                                   Grenadines</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ws" role="option" data-dial-code="685" data-country-code="ws" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ws"></div>
                                                </div><span class="iti__country-name">Samoa</span><span class="iti__dial-code">+685</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sm" role="option" data-dial-code="378" data-country-code="sm" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sm"></div>
                                                </div><span class="iti__country-name">San Marino</span><span class="iti__dial-code">+378</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-st" role="option" data-dial-code="239" data-country-code="st" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__st"></div>
                                                </div><span class="iti__country-name">São Tomé and Príncipe (São Tomé e
                                                   Príncipe)</span><span class="iti__dial-code">+239</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sa" role="option" data-dial-code="966" data-country-code="sa" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sa"></div>
                                                </div><span class="iti__country-name">Saudi Arabia (<U202b>المملكة العربية
                                                      السعودية<U202c>‎)</span><span class="iti__dial-code">+966</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sn" role="option" data-dial-code="221" data-country-code="sn" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sn"></div>
                                                </div><span class="iti__country-name">Senegal (Sénégal)</span><span class="iti__dial-code">+221</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-rs" role="option" data-dial-code="381" data-country-code="rs" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__rs"></div>
                                                </div><span class="iti__country-name">Serbia (Србија)</span><span class="iti__dial-code">+381</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sc" role="option" data-dial-code="248" data-country-code="sc" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sc"></div>
                                                </div><span class="iti__country-name">Seychelles</span><span class="iti__dial-code">+248</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sl" role="option" data-dial-code="232" data-country-code="sl" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sl"></div>
                                                </div><span class="iti__country-name">Sierra Leone</span><span class="iti__dial-code">+232</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sg" role="option" data-dial-code="65" data-country-code="sg" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sg"></div>
                                                </div><span class="iti__country-name">Singapore</span><span class="iti__dial-code">+65</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sx" role="option" data-dial-code="1" data-country-code="sx" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sx"></div>
                                                </div><span class="iti__country-name">Sint Maarten</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sk" role="option" data-dial-code="421" data-country-code="sk" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sk"></div>
                                                </div><span class="iti__country-name">Slovakia (Slovensko)</span><span class="iti__dial-code">+421</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-si" role="option" data-dial-code="386" data-country-code="si" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__si"></div>
                                                </div><span class="iti__country-name">Slovenia (Slovenija)</span><span class="iti__dial-code">+386</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sb" role="option" data-dial-code="677" data-country-code="sb" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sb"></div>
                                                </div><span class="iti__country-name">Solomon Islands</span><span class="iti__dial-code">+677</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-so" role="option" data-dial-code="252" data-country-code="so" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__so"></div>
                                                </div><span class="iti__country-name">Somalia (Soomaaliya)</span><span class="iti__dial-code">+252</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-za" role="option" data-dial-code="27" data-country-code="za" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__za"></div>
                                                </div><span class="iti__country-name">South Africa</span><span class="iti__dial-code">+27</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kr" role="option" data-dial-code="82" data-country-code="kr" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__kr"></div>
                                                </div><span class="iti__country-name">South Korea (대한민국)</span><span class="iti__dial-code">+82</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ss" role="option" data-dial-code="211" data-country-code="ss" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ss"></div>
                                                </div><span class="iti__country-name">South Sudan (<U202b>جنوب السودان<U202c>
                                                         ‎)</span><span class="iti__dial-code">+211</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-es" role="option" data-dial-code="34" data-country-code="es" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__es"></div>
                                                </div><span class="iti__country-name">Spain (España)</span><span class="iti__dial-code">+34</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lk" role="option" data-dial-code="94" data-country-code="lk" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__lk"></div>
                                                </div><span class="iti__country-name">Sri Lanka (ශ්‍රී ලංකාව)</span><span class="iti__dial-code">+94</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sd" role="option" data-dial-code="249" data-country-code="sd" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sd"></div>
                                                </div><span class="iti__country-name">Sudan (<U202b>السودان<U202c>
                                                         ‎)</span><span class="iti__dial-code">+249</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sr" role="option" data-dial-code="597" data-country-code="sr" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sr"></div>
                                                </div><span class="iti__country-name">Suriname</span><span class="iti__dial-code">+597</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sj" role="option" data-dial-code="47" data-country-code="sj" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sj"></div>
                                                </div><span class="iti__country-name">Svalbard and Jan Mayen</span><span class="iti__dial-code">+47</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-se" role="option" data-dial-code="46" data-country-code="se" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__se"></div>
                                                </div><span class="iti__country-name">Sweden (Sverige)</span><span class="iti__dial-code">+46</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ch" role="option" data-dial-code="41" data-country-code="ch" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ch"></div>
                                                </div><span class="iti__country-name">Switzerland (Schweiz)</span><span class="iti__dial-code">+41</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sy" role="option" data-dial-code="963" data-country-code="sy" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__sy"></div>
                                                </div><span class="iti__country-name">Syria (<U202b>سوريا<U202c>‎)</span><span class="iti__dial-code">+963</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tw" role="option" data-dial-code="886" data-country-code="tw" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__tw"></div>
                                                </div><span class="iti__country-name">Taiwan (台灣)</span><span class="iti__dial-code">+886</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tj" role="option" data-dial-code="992" data-country-code="tj" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__tj"></div>
                                                </div><span class="iti__country-name">Tajikistan</span><span class="iti__dial-code">+992</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tz" role="option" data-dial-code="255" data-country-code="tz" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__tz"></div>
                                                </div><span class="iti__country-name">Tanzania</span><span class="iti__dial-code">+255</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-th" role="option" data-dial-code="66" data-country-code="th" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__th"></div>
                                                </div><span class="iti__country-name">Thailand (ไทย)</span><span class="iti__dial-code">+66</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tl" role="option" data-dial-code="670" data-country-code="tl" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__tl"></div>
                                                </div><span class="iti__country-name">Timor-Leste</span><span class="iti__dial-code">+670</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tg" role="option" data-dial-code="228" data-country-code="tg" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__tg"></div>
                                                </div><span class="iti__country-name">Togo</span><span class="iti__dial-code">+228</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tk" role="option" data-dial-code="690" data-country-code="tk" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__tk"></div>
                                                </div><span class="iti__country-name">Tokelau</span><span class="iti__dial-code">+690</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-to" role="option" data-dial-code="676" data-country-code="to" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__to"></div>
                                                </div><span class="iti__country-name">Tonga</span><span class="iti__dial-code">+676</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tt" role="option" data-dial-code="1" data-country-code="tt" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__tt"></div>
                                                </div><span class="iti__country-name">Trinidad and Tobago</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tn" role="option" data-dial-code="216" data-country-code="tn" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__tn"></div>
                                                </div><span class="iti__country-name">Tunisia (<U202b>تونس<U202c>
                                                         ‎)</span><span class="iti__dial-code">+216</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tr" role="option" data-dial-code="90" data-country-code="tr" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__tr"></div>
                                                </div><span class="iti__country-name">Turkey (Türkiye)</span><span class="iti__dial-code">+90</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tm" role="option" data-dial-code="993" data-country-code="tm" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__tm"></div>
                                                </div><span class="iti__country-name">Turkmenistan</span><span class="iti__dial-code">+993</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tc" role="option" data-dial-code="1" data-country-code="tc" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__tc"></div>
                                                </div><span class="iti__country-name">Turks and Caicos Islands</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tv" role="option" data-dial-code="688" data-country-code="tv" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__tv"></div>
                                                </div><span class="iti__country-name">Tuvalu</span><span class="iti__dial-code">+688</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-vi" role="option" data-dial-code="1" data-country-code="vi" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__vi"></div>
                                                </div><span class="iti__country-name">U.S. Virgin Islands</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ug" role="option" data-dial-code="256" data-country-code="ug" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ug"></div>
                                                </div><span class="iti__country-name">Uganda</span><span class="iti__dial-code">+256</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ua" role="option" data-dial-code="380" data-country-code="ua" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ua"></div>
                                                </div><span class="iti__country-name">Ukraine (Україна)</span><span class="iti__dial-code">+380</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ae" role="option" data-dial-code="971" data-country-code="ae" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ae"></div>
                                                </div><span class="iti__country-name">United Arab Emirates (<U202b>الإمارات
                                                      العربية المتحدة<U202c>‎)</span><span class="iti__dial-code">+971</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gb" role="option" data-dial-code="44" data-country-code="gb" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__gb"></div>
                                                </div><span class="iti__country-name">United Kingdom</span><span class="iti__dial-code">+44</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-us" role="option" data-dial-code="1" data-country-code="us" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__us"></div>
                                                </div><span class="iti__country-name">United States</span><span class="iti__dial-code">+1</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-uy" role="option" data-dial-code="598" data-country-code="uy" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__uy"></div>
                                                </div><span class="iti__country-name">Uruguay</span><span class="iti__dial-code">+598</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-uz" role="option" data-dial-code="998" data-country-code="uz" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__uz"></div>
                                                </div><span class="iti__country-name">Uzbekistan (Oʻzbekiston)</span><span class="iti__dial-code">+998</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-vu" role="option" data-dial-code="678" data-country-code="vu" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__vu"></div>
                                                </div><span class="iti__country-name">Vanuatu</span><span class="iti__dial-code">+678</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-va" role="option" data-dial-code="39" data-country-code="va" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__va"></div>
                                                </div><span class="iti__country-name">Vatican City (Città del
                                                   Vaticano)</span><span class="iti__dial-code">+39</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ve" role="option" data-dial-code="58" data-country-code="ve" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ve"></div>
                                                </div><span class="iti__country-name">Venezuela</span><span class="iti__dial-code">+58</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-vn" role="option" data-dial-code="84" data-country-code="vn" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__vn"></div>
                                                </div><span class="iti__country-name">Vietnam (Việt Nam)</span><span class="iti__dial-code">+84</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-wf" role="option" data-dial-code="681" data-country-code="wf" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__wf"></div>
                                                </div><span class="iti__country-name">Wallis and Futuna
                                                   (Wallis-et-Futuna)</span><span class="iti__dial-code">+681</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-eh" role="option" data-dial-code="212" data-country-code="eh" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__eh"></div>
                                                </div><span class="iti__country-name">Western Sahara (<U202b>الصحراء الغربية
                                                      <U202c>‎)</span><span class="iti__dial-code">+212</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ye" role="option" data-dial-code="967" data-country-code="ye" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ye"></div>
                                                </div><span class="iti__country-name">Yemen (<U202b>اليمن<U202c>‎)</span><span class="iti__dial-code">+967</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-zm" role="option" data-dial-code="260" data-country-code="zm" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__zm"></div>
                                                </div><span class="iti__country-name">Zambia</span><span class="iti__dial-code">+260</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-zw" role="option" data-dial-code="263" data-country-code="zw" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__zw"></div>
                                                </div><span class="iti__country-name">Zimbabwe</span><span class="iti__dial-code">+263</span>
                                             </li>
                                             <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ax" role="option" data-dial-code="358" data-country-code="ax" aria-selected="false">
                                                <div class="iti__flag-box">
                                                   <div class="iti__flag iti__ax"></div>
                                                </div><span class="iti__country-name">Åland Islands</span><span class="iti__dial-code">+358</span>
                                             </li>
                                          </ul>
                                       </div><input id="phone" type="text" class="form-control-custom enter_click phone_number" placeholder="Mobile Number" oninput="new SessionStorageUpdates().updatePhone(this)" autocomplete="off" data-intl-tel-input-id="0" style="padding-left: 85px;">
                                    </div><br>
                                 </div>
                                 <div class="col-sm-12">
                                    <input id="email" type="text" class="form-control-custom enter_click" placeholder="Business Email" oninput="new SessionStorageUpdates().updateEmail(this)"><br>
                                 </div>
                                 <div class="col-sm-12">
                                    <input id="password" type="password" class="form-control-custom enter_click" placeholder="Password" oninput="new SessionStorageUpdates().updatePassword(this)"><br>
                                 </div>
                                 <div class="col-sm-12 dropdown show">
                                    <button id="new_account_use_case" class="btn dropdown-toggle" type="button" style="width:100%;font-size:10pt;background-color:white;border:1px solid rgb(210,210,210);color:#495057;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">I work for a</button>
                                    <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="width:93%;font-size: 10pt; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);" x-placement="bottom-start">
                                       <a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="agency" label="Recruitment Agency">Recruitment Agency</a>
                                       <!--<span class="badge badge-warning">Beta</span>-->
                                       <a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="corporate" label="Corporate">Corporate</a>
                                       <!--<a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="sales" label="Sales">Sales</a>-->
                                    </div>
                                 </div>
                              </div>

                              <div style="width:100%; text-align:center;position: relative;padding:20px; margin-top:20px">
                                 <div id="signup_button_desktop" class="form_button enter_click" style="margin: auto;position: absolute;left:0;right:0;top:0;bottom:0;" onclick="new PageContents().signUp()" tabindex="-1">Create account</div>
                              </div>
                           </div>
                           <div id="signup_error" style="margin-top:20px"></div>
                           <div style="color:rgb(197,197,205);cursor:pointer" onclick="new PageContents().changePage('/login')">Already registered? <u style="border-bottom: 1px dashed;text-decoration: none; ">Log in instead</u></div>
                           <br>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="new_shadow" style="border-radius:5px; overflow: hidden; height: 280px; width:590px">
            <img style="width:600px; margin-top:-30px; margin-left:-5px" src="/static/img/animation1.gif" />
         </div>


         <div style="width:100%; text-align:center; margin-top:80px; background-color: rgb(247,247,251);">


            <br><br><br><br>
            <span style="font-size:25pt; line-height:50px">Join an enthusiastic community of users</span><br>
            <span style="font-size:16pt; line-height:50px">Leading professionals from global firms are using Arxena to sharpen
               their competitive edge</span>
            <br>
            <br>
            <br>
            <a href="https://arxena.com/org-chart/accenture" target="_blank"><img src="/static/img/accenture.png" style="width:100px; margin-right:40px; cursor:pointer;"></a>
            <a href="https://arxena.com/org-chart/amazon" target="_blank"><img src="/static/img/amazon.png" style="width:100px; margin-right:40px; margin-top:15px; cursor:pointer;"></a>
            <a href="https://arxena.com/org-chart/ernstandyoung" target="_blank"><img src="/static/img/ey-blue.png" style="width:50px; margin-right:40px; cursor:pointer;"></a>
            <a href="https://arxena.com/org-chart/boston-consulting-group" target="_blank"><img src="/static/img/bcg-blue.png" style="width:80px; margin-right:40px; cursor:pointer;"></a>
            <a href="https://arxena.com/org-chart/mckinsey" target="_blank"><img src="/static/img/mck.png" style="width:100px; margin-right:40px; cursor:pointer;"></a>
            <a href="https://arxena.com/org-chart/deloitte" target="_blank"><img src="/static/img/deloitte-blue.png" style="width:100px; margin-right:40px; cursor:pointer;"></a>
            <a href="https://arxena.com/org-chart/michael-page" target="_blank"><img src="/static/img/michael-page-logo-blue-color.png" style="width:100px; margin-bottom:5px; cursor:pointer;"></a>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <div style="display:table; width:100%">
               <div style="display:table-cell; width:15%; vertical-align:middle; text-align:left; padding-left:50px">
                  <img src="/static/img/arrow_left_blue.png" style="height:20px; margin-right:40px; cursor:pointer" onclick="new PastFunctions().changeTestimonial()">
               </div>
               <div style="display:table-cell; width:70%; font-size:20pt; font-weight:100; vertical-align:middle">
                  <div style="display:table; width:100%">
                     <div style="display:table-cell; width:300px; text-align:center">
                        <img id="testimonial_photo" src="/static/img/lintz.jpg" style="width:200px; border-radius:50%">
                     </div>
                     <div style="display:table-cell; vertical-align:middle; text-align:left">
                        <div style="text-align:left">
                           <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
                        </div>
                        <i id="testimonial_quote">Arxena is a unique tool that I've been waiting for someone to build. In
                           minutes you get a birds-eye view of their team structure and location. This process would take a
                           day to do manually.</i>
                        <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Mannan
                              Pacha</strong> | </span>
                        <span id="testimonial_title" style="font-size:13pt">Manager, BCG</span>
                        ' <br>
                        <img id="testimonial_logo" src="/static/img/EY_logo_2019.png" style="height:20px">
                        <div style="text-align:right">
                           <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
                        </div>
                     </div>
                  </div>
               </div>
               <div style="display:table-cell; width:15%; vertical-align:middle; text-align:right">
                  <img src="/static/img/arrow_right_blue.png" style="height:20px; margin-right:40px; cursor:pointer" onclick="new PastFunctions().changeTestimonial()">
               </div>
            </div>
            <br>
            <br>
         </div>
         <div style="width:100%; text-align:center; margin-top:80px; background-image:url(/static/img/background1.png)">
            <div style="width:100%; text-align:center; padding:70px">
               <strong style="font-size:27pt; line-height:45px">AI powered sourcing designed to deliver happy clients &
                  candidates</strong>
               <br>
               <br>
               <br>
               <div style="display:table; width:100%; margin-top:70px">
                  <div style="display:table-cell; width:33.33%; padding-right:20px">
                     <div class="new_shadow" style="background-color:white;border-radius:10px; padding:20px">
                        <div style="text-align:center">
                           <img src="/static/img/flask.png" style="height:80px"><br><br>
                           <strong style="font-size:14pt">LISTS & ORG CHARTS<br>IN MINUTES</strong>
                           <br>
                           <br>
                           <span style="font-size:14pt">Save long hours of manual research & building your own lists/
                              mappings/ org charts.</span>
                        </div>
                     </div>
                  </div>
                  <div style="display:table-cell; width:33.33%; padding-left:10px; padding-right:10px">
                     <div class="new_shadow" style="background-color:white;border-radius:10px; padding:20px">
                        <div style="text-align:center">
                           <img src="/static/img/micro.png" style="height:80px"><br><br>
                           <strong style="font-size:14pt">GRANULAR RESEARCH<br>DEPTH & BREADTH</strong>
                           <br>
                           <br>
                           <span style="font-size:14pt">Zoom in deep into any org from Executive leadership to N-4
                              resolution.</span>
                        </div>
                     </div>
                  </div>
                  <div style="display:table-cell; width:33.33%; padding-left:20px">
                     <div class="new_shadow" style="background-color:white;border-radius:10px; padding:20px">
                        <div style="text-align:center">
                           <img src="/static/img/dna.png" style="height:80px"><br><br>
                           <strong style="font-size:14pt">EXPAND ACCOUNTS<br>AS DEALS EVOLVE</strong>
                           <br>
                           <br>
                           <span style="font-size:14pt">Edit hierarchies & add to your target accounts with powerful editorial
                              tools.</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div style="background-color: rgb(247,247,251)">
            <br>
            <br>
            <div id="user_case_navi_container"></div>
            <br>
            <br>
            <div id="use_case_container"></div>
            <br>
            <br>
         </div>
         <div style="width:100%; text-align:center; margin-top:120px">
            <strong style="font-size:16pt">Save hours of research on mapping target organizations</strong>
            <p>Fits easily in the budget for any project</p>
            <br>
            <div style="display:table">
               <div style="display:table-cell; width:50%; text-align:right; vertical-align:top; padding-right:30px; padding-top:27px">
                  Billed monthly
               </div>
               <div style="display:table-cell; vertical-align:top; padding-top:16px">
                  <label style="margin-top:10px" class="switch">
                     <input id="landing_monthly_annual_pricing" onclick="toggleLandingMonthlyAnnualPricing(this)" type="checkbox">
                     <div class="slider round">
                        <div id="landing_monthly_annual_pricing_switch_text" class="switch_text"></div>
                     </div>
                  </label>
               </div>
               <div style="display:table-cell; width:50%; text-align:left; vertical-align:top; padding-left:30px; padding-top:11px">
                  Billed anually<div style="display:inline-block;line-height:25pt">
                     <div style="display:table; height:35px">
                        <div style="height:26px; width:100px; padding-top:4px; text-align:center; border-radius:13px; background-color: rgb(17, 158, 97); color:white; font-size:12pt; vertical-align:top; line-height:12pt; font-weight:600">
                           SAVE 20%</div>
                     </div>
                  </div>
               </div>
            </div>
            <br>
         </div>
         <div style="display:table; width:80%;margin-left:10%">
            <div style="display:table-cell; width:25%; padding-right:20px">
               <div class="new_shadow" style="background-color:white;border-radius:10px; padding:20px">
                  <div style="text-align:center">
                     <img src="/static/img/flask2.png" style="height:80px"><br><br>
                     <strong style="font-size:14pt">Free</strong>
                     <br>
                     <span id="plan_free_pricing" style="font-size:40pt"><sup style="font-size:25pt">$</sup>0</span>
                     <br>
                     <span id="plan_free_pricing_annotation" style="font-size:11pt; color: grey">User /Month</span>
                     <br><br>
                     <span style="font-size:11pt">1,000 <span style="font-size:11pt; cursor:pointer; border-bottom: 1px dashed;text-decoration: none;" data-toggle="tooltip" data-original-title="1 credit is approx. equivalent to 1 person in the org chart. E.g. the Google HR
                  org chart for US leadership has 800 people = ~800 credits">Credits</span></span>
                     <br><br>
                     <div style="text-align:left">
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Org
                           chart sharing</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Export PNG</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Export Excel</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Full Account Depth</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">API Access</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Upload Bulk Contacts</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Priority Support</span>
                     </div>
                  </div>
               </div>
            </div>
            <div style="display:table-cell; width:25%; padding-right:20px">
               <div class="new_shadow" style="background-color:white;border-radius:10px; padding:20px">
                  <div style="text-align:center">
                     <img src="/static/img/flask.png" style="height:80px"><br><br>
                     <strong style="font-size:14pt">Light Explorer</strong>
                     <br>
                     <span id="plan_1_pricing" style="font-size:40pt"><sup style="font-size:25pt">$</sup>29</span>
                     <br>
                     <span id="plan_1_pricing_annotation" style="font-size:11pt; color: grey">User /Month</span>
                     <br><br>
                     <span style="font-size:11pt">2,000 <span style="font-size:11pt; cursor:pointer; border-bottom: 1px dashed;text-decoration: none;" data-toggle="tooltip" data-original-title="1 credit is approx. equivalent to 1 person in the org chart. E.g. the Google HR
                  org chart for US leadership has 800 people = ~800 credits">Credits/month</span></span>
                     <br><br>
                     <div style="text-align:left">
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Org
                           chart sharing</span>
                        <br>
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Export
                           PNG</span>
                        <br>
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Export
                           Excel</span>
                        <br>
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Full Account Depth</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">API Access</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Upload Bulk Contacts</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Priority Support</span>
                     </div>
                  </div>
               </div>
            </div>
            <div style="display:table-cell; width:25%; padding-right:20px">
               <div class="new_shadow" style="background-color:white;border-radius:10px; padding:20px">
                  <div style="text-align:center">
                     <img src="/static/img/micro.png" style="height:80px"><br><br>
                     <strong style="font-size:14pt">Pipeline Generator</strong>
                     <br>
                     <span id="plan_2_pricing" style="font-size:40pt"><sup style="font-size:25pt">$</sup>49</span>
                     <br>
                     <span id="plan_2_pricing_annotation" style="font-size:11pt; color: grey">User /Month</span>
                     <br><br>
                     <span style="font-size:11pt">4,000 <span style="font-size:11pt; cursor:pointer; border-bottom: 1px dashed;text-decoration: none;" data-toggle="tooltip" data-original-title="1 credit is approx. equivalent to 1 person in the org chart. E.g. the Google HR
                  org chart for US leadership has 800 people = ~800 credits">Credits/month</span></span>
                     <br><br>
                     <div style="text-align:left">
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Org
                           chart sharing</span>
                        <br>
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Export
                           PNG</span>
                        <br>
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Export
                           Excel</span>
                        <br>
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Full Account Depth</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">API Access</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Upload Bulk Contacts</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Priority Support</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div style="width:100%; text-align:center; margin-top:30px">
            <p>Have special requirements or need an Enterprise plan? <a href="mailto:arnav@arxena.com">Contact us</a></p>
            <br>
         </div>
         <div style="width:100%; text-align:center; margin-top:80px">
            <br><br>
            <span style="font-size:25pt; line-height:50px">Augment your organizational intelligence</span><br>
            <span style="font-size:16pt; line-height:50px">You're needing contextual market insights like never before. We can
               help.</span>
            <br><br><br><br>
            <div class="landing_white_button" style="display:inline-block; background-color:rgb(36,116,204);border-color:rgb(36,116,204); color:white;" onclick="new PageContents().changePage('/signup')">Get started free</div>
            <br>
            <br>
            <br><br><br><br>
         </div>
         <div style="width:100%; text-align:center; background-color: rgb(247,247,251)">
            <div style="display:table; width:100%">
               <div style="display:table-cell; width:40%; padding-left:20px;padding-top:20px; text-align:left">

                  <div style="display:table; width:100%; padding-left:25px">
                     <div style="display:table-cell; width:70px">
                        <a href="https://www.linkedin.com/company/arxena" target="_blank"><img style="width:35px; cursor:pointer" src="/static/img/linkedin-icon-png-circle-2.png" /></a>
                     </div>
                     <div style="display:table-cell; width:70px">
                        <a href="https://twitter.com/arxenainc" target="_blank"><img style="width:43px; cursor:pointer" src="/static/img/tw.png" /></a>
                     </div>
                     <div style="display:table-cell; width:70px">
                        <a href="https://facebook.com/arxenainc" target="_blank"><img style="width:35px; cursor:pointer" src="static/img/facebook.png" /></a>
                     </div>
                     <div style="display:table-cell; width:70px">
                        <a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA" target="_blank"><img style="width:45px; cursor:pointer" src="/static/img/yt.png" /></a>
                     </div>
                     <div style="display:table-cell;">
                     </div>
                  </div>
                  <div style="padding-left:25px; padding-top:20px">
                     Map & track the org chart of any company, in seconds.
                     <br>
                     <br>
                     <a style="font-size:10pt" href="/eula">Terms of Service</a> | <a style="font-size:10pt" href="/privacy">Privacy Policy</a>
                     <br>
                     <span>© 2023 Arxena, Inc. All Rights Reserved.</span>
                     <br>
                     <br>
                  </div>
               </div>
               <div style="display:table-cell; width:40%; padding:20px; text-align:left; vertical-align:middle">
                  <span style="font-size:12pt; cursor:pointer" onclick="$('html').animate({ scrollTop: 1400}, 1000);">PRODUCT</span>
                  <br>
                  <br>
                  <span style="font-size:12pt; cursor:pointer" onclick="$('html').animate({ scrollTop: 2100}, 1000);">USE
                     CASES</span>
                  <br>
                  <br>
                  <span style="font-size:12pt; cursor:pointer" onclick="$('html').animate({ scrollTop: 700}, 1000);">CUSTOMERS</span>
                  <br>
                  <br>
                  <span style="font-size:12pt; cursor:pointer" onclick="window.open('https://www.notion.so/arxena-FAQ-68810ecd75b243af94a8ac93a933ed09', '_blank');">FAQS</span>
                  <br>
                  <br>
                  <a href="mailto:arnav@arxena.com"><span style="font-size:12pt; cursor:pointer">CONTACT US</span></a>
               </div>
            </div>
         </div>
      </div>

      <!-- mobile version -->
      <div class="mobi" id="main_container">
         <div style="padding:10px">
            <div style="display:table; width:100%">
               <div style="background-color:white;">
                  <img style="width:25vw;margin-top:9px;cursor:pointer" src="/static/img/arxena-logo/arxena-logo.png" />
               </div>
               <div style="display:table-cell; vertical-align:middle"></div>
               <div style="display:table-cell; vertical-align:middle; width: 160px; text-align:right; padding-right:10px">
                  <!--<div class="landing_white_button" style="display:inline-block; background-color:white;border:1px solid rgb(36,116,204); color:rgb(36,116,204); width:100px" onclick="new PageContents().changePage('/login')">Log in</div>-->
                  <div class="landing_white_button" style="display:inline-block; background-color:rgb(36,116,204);border-color:rgb(36,116,204); color:white; width:150px" onclick="new PageContents().changePage('/signup')">Sign up </div>
               </div>
            </div>
            <div style="padding-left:20px; margin-top:40px">
               <div style="vertical-align: middle">
                  <span style="font-size:30pt; line-height:50px">Global Org Chart <br>Database & Search
                     <!--<span id="landing_top_animation_mobi" style="font-size:30pt; line-height:50px; color:rgb(36,116,204)">prospects</span>-->
                  </span>
                  <br><br>
                  <span style="font-size:14pt; line-height:30px">Provide a vacancy and get relevant org charts and interested
                     candidates (using GPT3).</span>
                  <div class="landing_white_button" style="margin-top: 40px; background-color:rgb(36,116,204);border-color:rgb(36,116,204); color:white" onclick="new PageContents().changePage('/signup')">Get started free</div>
                  <br>
               </div>
            </div>

            <div style="vertical-align: middle; text-align:center; margin-top:60px">
               <div class="new_shadow" style="display:inline-block; border-radius:5px; overflow: hidden; height: 140px; width:295px">
                  <img style="width:300px; margin-top:-15px; margin-left:-2px" src="/static/img/animation1.gif" />
               </div>

               <br><br>
               <div style="background-color: rgb(247,247,251);">
                  <div class="shadow content_section" style="background-color:rgba(255,255,255);border-radius: 5px; text-align:center; left:0, right:0">
                     <div id="signup_form_content">
                        <span style="font-size:16pt;font-weight:300;">Get started with 10 free org-chart credits.<br>No credit
                           card is needed.</span>
                        <br>
                        <br>
                        <div style="width: 90%; left:5%; position:relative">
                           <div class="row">
                              <div class="col-sm-12">
                                 <input id="full_name" type="text" class="form-control-custom" placeholder="Full Name" oninput="new SessionStorageUpdates().updateFullName(this)"><br>
                              </div>
                              <div class="col-sm-12 phone_number_input" style="height: 62px;">
                                 <div class="iti iti--allow-dropdown iti--separate-dial-code" style="width: 100%;">
                                    <div class="iti__flag-container">
                                       <div class="iti__selected-flag" role="combobox" aria-controls="iti-0__country-listbox" aria-owns="iti-0__country-listbox" aria-expanded="false" tabindex="0" title="India (भारत): +91" aria-activedescendant="iti-0__item-in-preferred">
                                          <div class="iti__flag iti__in"></div>
                                          <div class="iti__selected-dial-code">+91</div>
                                          <div class="iti__arrow"></div>
                                       </div>
                                       <ul class="iti__country-list iti__hide" id="iti-0__country-listbox" role="listbox" aria-label="List of countries">
                                          <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-us-preferred" role="option" data-dial-code="1" data-country-code="us" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__us"></div>
                                             </div><span class="iti__country-name">United States</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-gb-preferred" role="option" data-dial-code="44" data-country-code="gb" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gb"></div>
                                             </div><span class="iti__country-name">United Kingdom</span><span class="iti__dial-code">+44</span>
                                          </li>
                                          <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-ca-preferred" role="option" data-dial-code="1" data-country-code="ca" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ca"></div>
                                             </div><span class="iti__country-name">Canada</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-de-preferred" role="option" data-dial-code="49" data-country-code="de" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__de"></div>
                                             </div><span class="iti__country-name">Germany (Deutschland)</span><span class="iti__dial-code">+49</span>
                                          </li>
                                          <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-au-preferred" role="option" data-dial-code="61" data-country-code="au" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__au"></div>
                                             </div><span class="iti__country-name">Australia</span><span class="iti__dial-code">+61</span>
                                          </li>
                                          <li class="iti__country iti__preferred iti__active" tabindex="-1" id="iti-0__item-in-preferred" role="option" data-dial-code="91" data-country-code="in" aria-selected="true">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__in"></div>
                                             </div><span class="iti__country-name">India (भारत)</span><span class="iti__dial-code">+91</span>
                                          </li>
                                          <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-sg-preferred" role="option" data-dial-code="65" data-country-code="sg" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sg"></div>
                                             </div><span class="iti__country-name">Singapore</span><span class="iti__dial-code">+65</span>
                                          </li>
                                          <li class="iti__country iti__preferred" tabindex="-1" id="iti-0__item-ae-preferred" role="option" data-dial-code="971" data-country-code="ae" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ae"></div>
                                             </div><span class="iti__country-name">United Arab Emirates (<U202b>الإمارات
                                                   العربية المتحدة<U202c>‎)</span><span class="iti__dial-code">+971</span>
                                          </li>
                                          <li class="iti__divider" role="separator" aria-disabled="true"></li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-af" role="option" data-dial-code="93" data-country-code="af" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__af"></div>
                                             </div><span class="iti__country-name">Afghanistan (<U202b>افغانستان<U202c>
                                                      ‎)</span><span class="iti__dial-code">+93</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-al" role="option" data-dial-code="355" data-country-code="al" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__al"></div>
                                             </div><span class="iti__country-name">Albania (Shqipëri)</span><span class="iti__dial-code">+355</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-dz" role="option" data-dial-code="213" data-country-code="dz" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__dz"></div>
                                             </div><span class="iti__country-name">Algeria (<U202b>الجزائر<U202c>
                                                      ‎)</span><span class="iti__dial-code">+213</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-as" role="option" data-dial-code="1" data-country-code="as" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__as"></div>
                                             </div><span class="iti__country-name">American Samoa</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ad" role="option" data-dial-code="376" data-country-code="ad" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ad"></div>
                                             </div><span class="iti__country-name">Andorra</span><span class="iti__dial-code">+376</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ao" role="option" data-dial-code="244" data-country-code="ao" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ao"></div>
                                             </div><span class="iti__country-name">Angola</span><span class="iti__dial-code">+244</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ai" role="option" data-dial-code="1" data-country-code="ai" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ai"></div>
                                             </div><span class="iti__country-name">Anguilla</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ag" role="option" data-dial-code="1" data-country-code="ag" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ag"></div>
                                             </div><span class="iti__country-name">Antigua and Barbuda</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ar" role="option" data-dial-code="54" data-country-code="ar" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ar"></div>
                                             </div><span class="iti__country-name">Argentina</span><span class="iti__dial-code">+54</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-am" role="option" data-dial-code="374" data-country-code="am" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__am"></div>
                                             </div><span class="iti__country-name">Armenia (Հայաստան)</span><span class="iti__dial-code">+374</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-aw" role="option" data-dial-code="297" data-country-code="aw" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__aw"></div>
                                             </div><span class="iti__country-name">Aruba</span><span class="iti__dial-code">+297</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ac" role="option" data-dial-code="247" data-country-code="ac" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ac"></div>
                                             </div><span class="iti__country-name">Ascension Island</span><span class="iti__dial-code">+247</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-au" role="option" data-dial-code="61" data-country-code="au" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__au"></div>
                                             </div><span class="iti__country-name">Australia</span><span class="iti__dial-code">+61</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-at" role="option" data-dial-code="43" data-country-code="at" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__at"></div>
                                             </div><span class="iti__country-name">Austria (Österreich)</span><span class="iti__dial-code">+43</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-az" role="option" data-dial-code="994" data-country-code="az" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__az"></div>
                                             </div><span class="iti__country-name">Azerbaijan (Azərbaycan)</span><span class="iti__dial-code">+994</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bs" role="option" data-dial-code="1" data-country-code="bs" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bs"></div>
                                             </div><span class="iti__country-name">Bahamas</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bh" role="option" data-dial-code="973" data-country-code="bh" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bh"></div>
                                             </div><span class="iti__country-name">Bahrain (<U202b>البحرين<U202c>
                                                      ‎)</span><span class="iti__dial-code">+973</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bd" role="option" data-dial-code="880" data-country-code="bd" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bd"></div>
                                             </div><span class="iti__country-name">Bangladesh (বাংলাদেশ)</span><span class="iti__dial-code">+880</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bb" role="option" data-dial-code="1" data-country-code="bb" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bb"></div>
                                             </div><span class="iti__country-name">Barbados</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-by" role="option" data-dial-code="375" data-country-code="by" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__by"></div>
                                             </div><span class="iti__country-name">Belarus (Беларусь)</span><span class="iti__dial-code">+375</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-be" role="option" data-dial-code="32" data-country-code="be" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__be"></div>
                                             </div><span class="iti__country-name">Belgium (België)</span><span class="iti__dial-code">+32</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bz" role="option" data-dial-code="501" data-country-code="bz" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bz"></div>
                                             </div><span class="iti__country-name">Belize</span><span class="iti__dial-code">+501</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bj" role="option" data-dial-code="229" data-country-code="bj" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bj"></div>
                                             </div><span class="iti__country-name">Benin (Bénin)</span><span class="iti__dial-code">+229</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bm" role="option" data-dial-code="1" data-country-code="bm" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bm"></div>
                                             </div><span class="iti__country-name">Bermuda</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bt" role="option" data-dial-code="975" data-country-code="bt" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bt"></div>
                                             </div><span class="iti__country-name">Bhutan (འབྲུག)</span><span class="iti__dial-code">+975</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bo" role="option" data-dial-code="591" data-country-code="bo" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bo"></div>
                                             </div><span class="iti__country-name">Bolivia</span><span class="iti__dial-code">+591</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ba" role="option" data-dial-code="387" data-country-code="ba" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ba"></div>
                                             </div><span class="iti__country-name">Bosnia and Herzegovina (Босна и
                                                Херцеговина)</span><span class="iti__dial-code">+387</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bw" role="option" data-dial-code="267" data-country-code="bw" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bw"></div>
                                             </div><span class="iti__country-name">Botswana</span><span class="iti__dial-code">+267</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-br" role="option" data-dial-code="55" data-country-code="br" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__br"></div>
                                             </div><span class="iti__country-name">Brazil (Brasil)</span><span class="iti__dial-code">+55</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-io" role="option" data-dial-code="246" data-country-code="io" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__io"></div>
                                             </div><span class="iti__country-name">British Indian Ocean Territory</span><span class="iti__dial-code">+246</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-vg" role="option" data-dial-code="1" data-country-code="vg" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__vg"></div>
                                             </div><span class="iti__country-name">British Virgin Islands</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bn" role="option" data-dial-code="673" data-country-code="bn" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bn"></div>
                                             </div><span class="iti__country-name">Brunei</span><span class="iti__dial-code">+673</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bg" role="option" data-dial-code="359" data-country-code="bg" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bg"></div>
                                             </div><span class="iti__country-name">Bulgaria (България)</span><span class="iti__dial-code">+359</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bf" role="option" data-dial-code="226" data-country-code="bf" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bf"></div>
                                             </div><span class="iti__country-name">Burkina Faso</span><span class="iti__dial-code">+226</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bi" role="option" data-dial-code="257" data-country-code="bi" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bi"></div>
                                             </div><span class="iti__country-name">Burundi (Uburundi)</span><span class="iti__dial-code">+257</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kh" role="option" data-dial-code="855" data-country-code="kh" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__kh"></div>
                                             </div><span class="iti__country-name">Cambodia (កម្ពុជា)</span><span class="iti__dial-code">+855</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cm" role="option" data-dial-code="237" data-country-code="cm" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cm"></div>
                                             </div><span class="iti__country-name">Cameroon (Cameroun)</span><span class="iti__dial-code">+237</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ca" role="option" data-dial-code="1" data-country-code="ca" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ca"></div>
                                             </div><span class="iti__country-name">Canada</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cv" role="option" data-dial-code="238" data-country-code="cv" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cv"></div>
                                             </div><span class="iti__country-name">Cape Verde (Kabu Verdi)</span><span class="iti__dial-code">+238</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bq" role="option" data-dial-code="599" data-country-code="bq" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bq"></div>
                                             </div><span class="iti__country-name">Caribbean Netherlands</span><span class="iti__dial-code">+599</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ky" role="option" data-dial-code="1" data-country-code="ky" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ky"></div>
                                             </div><span class="iti__country-name">Cayman Islands</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cf" role="option" data-dial-code="236" data-country-code="cf" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cf"></div>
                                             </div><span class="iti__country-name">Central African Republic (République
                                                centrafricaine)</span><span class="iti__dial-code">+236</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-td" role="option" data-dial-code="235" data-country-code="td" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__td"></div>
                                             </div><span class="iti__country-name">Chad (Tchad)</span><span class="iti__dial-code">+235</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cl" role="option" data-dial-code="56" data-country-code="cl" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cl"></div>
                                             </div><span class="iti__country-name">Chile</span><span class="iti__dial-code">+56</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cn" role="option" data-dial-code="86" data-country-code="cn" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cn"></div>
                                             </div><span class="iti__country-name">China (中国)</span><span class="iti__dial-code">+86</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cx" role="option" data-dial-code="61" data-country-code="cx" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cx"></div>
                                             </div><span class="iti__country-name">Christmas Island</span><span class="iti__dial-code">+61</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cc" role="option" data-dial-code="61" data-country-code="cc" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cc"></div>
                                             </div><span class="iti__country-name">Cocos (Keeling) Islands</span><span class="iti__dial-code">+61</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-co" role="option" data-dial-code="57" data-country-code="co" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__co"></div>
                                             </div><span class="iti__country-name">Colombia</span><span class="iti__dial-code">+57</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-km" role="option" data-dial-code="269" data-country-code="km" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__km"></div>
                                             </div><span class="iti__country-name">Comoros (<U202b>جزر القمر<U202c>
                                                      ‎)</span><span class="iti__dial-code">+269</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cd" role="option" data-dial-code="243" data-country-code="cd" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cd"></div>
                                             </div><span class="iti__country-name">Congo (DRC) (Jamhuri ya Kidemokrasia ya
                                                Kongo)</span><span class="iti__dial-code">+243</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cg" role="option" data-dial-code="242" data-country-code="cg" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cg"></div>
                                             </div><span class="iti__country-name">Congo (Republic)
                                                (Congo-Brazzaville)</span><span class="iti__dial-code">+242</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ck" role="option" data-dial-code="682" data-country-code="ck" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ck"></div>
                                             </div><span class="iti__country-name">Cook Islands</span><span class="iti__dial-code">+682</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cr" role="option" data-dial-code="506" data-country-code="cr" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cr"></div>
                                             </div><span class="iti__country-name">Costa Rica</span><span class="iti__dial-code">+506</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ci" role="option" data-dial-code="225" data-country-code="ci" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ci"></div>
                                             </div><span class="iti__country-name">Côte d’Ivoire</span><span class="iti__dial-code">+225</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-hr" role="option" data-dial-code="385" data-country-code="hr" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__hr"></div>
                                             </div><span class="iti__country-name">Croatia (Hrvatska)</span><span class="iti__dial-code">+385</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cu" role="option" data-dial-code="53" data-country-code="cu" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cu"></div>
                                             </div><span class="iti__country-name">Cuba</span><span class="iti__dial-code">+53</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cw" role="option" data-dial-code="599" data-country-code="cw" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cw"></div>
                                             </div><span class="iti__country-name">Curaçao</span><span class="iti__dial-code">+599</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cy" role="option" data-dial-code="357" data-country-code="cy" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cy"></div>
                                             </div><span class="iti__country-name">Cyprus (Κύπρος)</span><span class="iti__dial-code">+357</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-cz" role="option" data-dial-code="420" data-country-code="cz" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__cz"></div>
                                             </div><span class="iti__country-name">Czech Republic (Česká
                                                republika)</span><span class="iti__dial-code">+420</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-dk" role="option" data-dial-code="45" data-country-code="dk" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__dk"></div>
                                             </div><span class="iti__country-name">Denmark (Danmark)</span><span class="iti__dial-code">+45</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-dj" role="option" data-dial-code="253" data-country-code="dj" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__dj"></div>
                                             </div><span class="iti__country-name">Djibouti</span><span class="iti__dial-code">+253</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-dm" role="option" data-dial-code="1" data-country-code="dm" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__dm"></div>
                                             </div><span class="iti__country-name">Dominica</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-do" role="option" data-dial-code="1" data-country-code="do" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__do"></div>
                                             </div><span class="iti__country-name">Dominican Republic (República
                                                Dominicana)</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ec" role="option" data-dial-code="593" data-country-code="ec" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ec"></div>
                                             </div><span class="iti__country-name">Ecuador</span><span class="iti__dial-code">+593</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-eg" role="option" data-dial-code="20" data-country-code="eg" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__eg"></div>
                                             </div><span class="iti__country-name">Egypt (<U202b>مصر<U202c>‎)</span><span class="iti__dial-code">+20</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sv" role="option" data-dial-code="503" data-country-code="sv" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sv"></div>
                                             </div><span class="iti__country-name">El Salvador</span><span class="iti__dial-code">+503</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gq" role="option" data-dial-code="240" data-country-code="gq" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gq"></div>
                                             </div><span class="iti__country-name">Equatorial Guinea (Guinea
                                                Ecuatorial)</span><span class="iti__dial-code">+240</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-er" role="option" data-dial-code="291" data-country-code="er" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__er"></div>
                                             </div><span class="iti__country-name">Eritrea</span><span class="iti__dial-code">+291</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ee" role="option" data-dial-code="372" data-country-code="ee" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ee"></div>
                                             </div><span class="iti__country-name">Estonia (Eesti)</span><span class="iti__dial-code">+372</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sz" role="option" data-dial-code="268" data-country-code="sz" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sz"></div>
                                             </div><span class="iti__country-name">Eswatini</span><span class="iti__dial-code">+268</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-et" role="option" data-dial-code="251" data-country-code="et" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__et"></div>
                                             </div><span class="iti__country-name">Ethiopia</span><span class="iti__dial-code">+251</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-fk" role="option" data-dial-code="500" data-country-code="fk" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__fk"></div>
                                             </div><span class="iti__country-name">Falkland Islands (Islas
                                                Malvinas)</span><span class="iti__dial-code">+500</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-fo" role="option" data-dial-code="298" data-country-code="fo" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__fo"></div>
                                             </div><span class="iti__country-name">Faroe Islands (Føroyar)</span><span class="iti__dial-code">+298</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-fj" role="option" data-dial-code="679" data-country-code="fj" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__fj"></div>
                                             </div><span class="iti__country-name">Fiji</span><span class="iti__dial-code">+679</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-fi" role="option" data-dial-code="358" data-country-code="fi" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__fi"></div>
                                             </div><span class="iti__country-name">Finland (Suomi)</span><span class="iti__dial-code">+358</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-fr" role="option" data-dial-code="33" data-country-code="fr" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__fr"></div>
                                             </div><span class="iti__country-name">France</span><span class="iti__dial-code">+33</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gf" role="option" data-dial-code="594" data-country-code="gf" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gf"></div>
                                             </div><span class="iti__country-name">French Guiana (Guyane
                                                française)</span><span class="iti__dial-code">+594</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pf" role="option" data-dial-code="689" data-country-code="pf" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__pf"></div>
                                             </div><span class="iti__country-name">French Polynesia (Polynésie
                                                française)</span><span class="iti__dial-code">+689</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ga" role="option" data-dial-code="241" data-country-code="ga" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ga"></div>
                                             </div><span class="iti__country-name">Gabon</span><span class="iti__dial-code">+241</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gm" role="option" data-dial-code="220" data-country-code="gm" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gm"></div>
                                             </div><span class="iti__country-name">Gambia</span><span class="iti__dial-code">+220</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ge" role="option" data-dial-code="995" data-country-code="ge" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ge"></div>
                                             </div><span class="iti__country-name">Georgia (საქართველო)</span><span class="iti__dial-code">+995</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-de" role="option" data-dial-code="49" data-country-code="de" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__de"></div>
                                             </div><span class="iti__country-name">Germany (Deutschland)</span><span class="iti__dial-code">+49</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gh" role="option" data-dial-code="233" data-country-code="gh" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gh"></div>
                                             </div><span class="iti__country-name">Ghana (Gaana)</span><span class="iti__dial-code">+233</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gi" role="option" data-dial-code="350" data-country-code="gi" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gi"></div>
                                             </div><span class="iti__country-name">Gibraltar</span><span class="iti__dial-code">+350</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gr" role="option" data-dial-code="30" data-country-code="gr" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gr"></div>
                                             </div><span class="iti__country-name">Greece (Ελλάδα)</span><span class="iti__dial-code">+30</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gl" role="option" data-dial-code="299" data-country-code="gl" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gl"></div>
                                             </div><span class="iti__country-name">Greenland (Kalaallit Nunaat)</span><span class="iti__dial-code">+299</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gd" role="option" data-dial-code="1" data-country-code="gd" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gd"></div>
                                             </div><span class="iti__country-name">Grenada</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gp" role="option" data-dial-code="590" data-country-code="gp" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gp"></div>
                                             </div><span class="iti__country-name">Guadeloupe</span><span class="iti__dial-code">+590</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gu" role="option" data-dial-code="1" data-country-code="gu" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gu"></div>
                                             </div><span class="iti__country-name">Guam</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gt" role="option" data-dial-code="502" data-country-code="gt" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gt"></div>
                                             </div><span class="iti__country-name">Guatemala</span><span class="iti__dial-code">+502</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gg" role="option" data-dial-code="44" data-country-code="gg" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gg"></div>
                                             </div><span class="iti__country-name">Guernsey</span><span class="iti__dial-code">+44</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gn" role="option" data-dial-code="224" data-country-code="gn" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gn"></div>
                                             </div><span class="iti__country-name">Guinea (Guinée)</span><span class="iti__dial-code">+224</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gw" role="option" data-dial-code="245" data-country-code="gw" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gw"></div>
                                             </div><span class="iti__country-name">Guinea-Bissau (Guiné Bissau)</span><span class="iti__dial-code">+245</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gy" role="option" data-dial-code="592" data-country-code="gy" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gy"></div>
                                             </div><span class="iti__country-name">Guyana</span><span class="iti__dial-code">+592</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ht" role="option" data-dial-code="509" data-country-code="ht" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ht"></div>
                                             </div><span class="iti__country-name">Haiti</span><span class="iti__dial-code">+509</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-hn" role="option" data-dial-code="504" data-country-code="hn" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__hn"></div>
                                             </div><span class="iti__country-name">Honduras</span><span class="iti__dial-code">+504</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-hk" role="option" data-dial-code="852" data-country-code="hk" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__hk"></div>
                                             </div><span class="iti__country-name">Hong Kong (香港)</span><span class="iti__dial-code">+852</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-hu" role="option" data-dial-code="36" data-country-code="hu" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__hu"></div>
                                             </div><span class="iti__country-name">Hungary (Magyarország)</span><span class="iti__dial-code">+36</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-is" role="option" data-dial-code="354" data-country-code="is" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__is"></div>
                                             </div><span class="iti__country-name">Iceland (Ísland)</span><span class="iti__dial-code">+354</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-in" role="option" data-dial-code="91" data-country-code="in" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__in"></div>
                                             </div><span class="iti__country-name">India (भारत)</span><span class="iti__dial-code">+91</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-id" role="option" data-dial-code="62" data-country-code="id" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__id"></div>
                                             </div><span class="iti__country-name">Indonesia</span><span class="iti__dial-code">+62</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ir" role="option" data-dial-code="98" data-country-code="ir" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ir"></div>
                                             </div><span class="iti__country-name">Iran (<U202b>ایران<U202c>‎)</span><span class="iti__dial-code">+98</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-iq" role="option" data-dial-code="964" data-country-code="iq" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__iq"></div>
                                             </div><span class="iti__country-name">Iraq (<U202b>العراق<U202c>‎)</span><span class="iti__dial-code">+964</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ie" role="option" data-dial-code="353" data-country-code="ie" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ie"></div>
                                             </div><span class="iti__country-name">Ireland</span><span class="iti__dial-code">+353</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-im" role="option" data-dial-code="44" data-country-code="im" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__im"></div>
                                             </div><span class="iti__country-name">Isle of Man</span><span class="iti__dial-code">+44</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-il" role="option" data-dial-code="972" data-country-code="il" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__il"></div>
                                             </div><span class="iti__country-name">Israel (<U202b>ישראל<U202c>‎)</span><span class="iti__dial-code">+972</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-it" role="option" data-dial-code="39" data-country-code="it" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__it"></div>
                                             </div><span class="iti__country-name">Italy (Italia)</span><span class="iti__dial-code">+39</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-jm" role="option" data-dial-code="1" data-country-code="jm" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__jm"></div>
                                             </div><span class="iti__country-name">Jamaica</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-jp" role="option" data-dial-code="81" data-country-code="jp" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__jp"></div>
                                             </div><span class="iti__country-name">Japan (日本)</span><span class="iti__dial-code">+81</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-je" role="option" data-dial-code="44" data-country-code="je" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__je"></div>
                                             </div><span class="iti__country-name">Jersey</span><span class="iti__dial-code">+44</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-jo" role="option" data-dial-code="962" data-country-code="jo" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__jo"></div>
                                             </div><span class="iti__country-name">Jordan (<U202b>الأردن<U202c>‎)</span><span class="iti__dial-code">+962</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kz" role="option" data-dial-code="7" data-country-code="kz" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__kz"></div>
                                             </div><span class="iti__country-name">Kazakhstan (Казахстан)</span><span class="iti__dial-code">+7</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ke" role="option" data-dial-code="254" data-country-code="ke" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ke"></div>
                                             </div><span class="iti__country-name">Kenya</span><span class="iti__dial-code">+254</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ki" role="option" data-dial-code="686" data-country-code="ki" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ki"></div>
                                             </div><span class="iti__country-name">Kiribati</span><span class="iti__dial-code">+686</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-xk" role="option" data-dial-code="383" data-country-code="xk" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__xk"></div>
                                             </div><span class="iti__country-name">Kosovo</span><span class="iti__dial-code">+383</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kw" role="option" data-dial-code="965" data-country-code="kw" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__kw"></div>
                                             </div><span class="iti__country-name">Kuwait (<U202b>الكويت<U202c>‎)</span><span class="iti__dial-code">+965</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kg" role="option" data-dial-code="996" data-country-code="kg" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__kg"></div>
                                             </div><span class="iti__country-name">Kyrgyzstan (Кыргызстан)</span><span class="iti__dial-code">+996</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-la" role="option" data-dial-code="856" data-country-code="la" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__la"></div>
                                             </div><span class="iti__country-name">Laos (ລາວ)</span><span class="iti__dial-code">+856</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lv" role="option" data-dial-code="371" data-country-code="lv" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__lv"></div>
                                             </div><span class="iti__country-name">Latvia (Latvija)</span><span class="iti__dial-code">+371</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lb" role="option" data-dial-code="961" data-country-code="lb" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__lb"></div>
                                             </div><span class="iti__country-name">Lebanon (<U202b>لبنان<U202c>‎)</span><span class="iti__dial-code">+961</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ls" role="option" data-dial-code="266" data-country-code="ls" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ls"></div>
                                             </div><span class="iti__country-name">Lesotho</span><span class="iti__dial-code">+266</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lr" role="option" data-dial-code="231" data-country-code="lr" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__lr"></div>
                                             </div><span class="iti__country-name">Liberia</span><span class="iti__dial-code">+231</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ly" role="option" data-dial-code="218" data-country-code="ly" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ly"></div>
                                             </div><span class="iti__country-name">Libya (<U202b>ليبيا<U202c>‎)</span><span class="iti__dial-code">+218</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-li" role="option" data-dial-code="423" data-country-code="li" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__li"></div>
                                             </div><span class="iti__country-name">Liechtenstein</span><span class="iti__dial-code">+423</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lt" role="option" data-dial-code="370" data-country-code="lt" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__lt"></div>
                                             </div><span class="iti__country-name">Lithuania (Lietuva)</span><span class="iti__dial-code">+370</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lu" role="option" data-dial-code="352" data-country-code="lu" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__lu"></div>
                                             </div><span class="iti__country-name">Luxembourg</span><span class="iti__dial-code">+352</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mo" role="option" data-dial-code="853" data-country-code="mo" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mo"></div>
                                             </div><span class="iti__country-name">Macau (澳門)</span><span class="iti__dial-code">+853</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mk" role="option" data-dial-code="389" data-country-code="mk" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mk"></div>
                                             </div><span class="iti__country-name">North Macedonia (Македонија)</span><span class="iti__dial-code">+389</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mg" role="option" data-dial-code="261" data-country-code="mg" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mg"></div>
                                             </div><span class="iti__country-name">Madagascar (Madagasikara)</span><span class="iti__dial-code">+261</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mw" role="option" data-dial-code="265" data-country-code="mw" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mw"></div>
                                             </div><span class="iti__country-name">Malawi</span><span class="iti__dial-code">+265</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-my" role="option" data-dial-code="60" data-country-code="my" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__my"></div>
                                             </div><span class="iti__country-name">Malaysia</span><span class="iti__dial-code">+60</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mv" role="option" data-dial-code="960" data-country-code="mv" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mv"></div>
                                             </div><span class="iti__country-name">Maldives</span><span class="iti__dial-code">+960</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ml" role="option" data-dial-code="223" data-country-code="ml" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ml"></div>
                                             </div><span class="iti__country-name">Mali</span><span class="iti__dial-code">+223</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mt" role="option" data-dial-code="356" data-country-code="mt" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mt"></div>
                                             </div><span class="iti__country-name">Malta</span><span class="iti__dial-code">+356</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mh" role="option" data-dial-code="692" data-country-code="mh" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mh"></div>
                                             </div><span class="iti__country-name">Marshall Islands</span><span class="iti__dial-code">+692</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mq" role="option" data-dial-code="596" data-country-code="mq" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mq"></div>
                                             </div><span class="iti__country-name">Martinique</span><span class="iti__dial-code">+596</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mr" role="option" data-dial-code="222" data-country-code="mr" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mr"></div>
                                             </div><span class="iti__country-name">Mauritania (<U202b>موريتانيا<U202c>
                                                      ‎)</span><span class="iti__dial-code">+222</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mu" role="option" data-dial-code="230" data-country-code="mu" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mu"></div>
                                             </div><span class="iti__country-name">Mauritius (Moris)</span><span class="iti__dial-code">+230</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-yt" role="option" data-dial-code="262" data-country-code="yt" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__yt"></div>
                                             </div><span class="iti__country-name">Mayotte</span><span class="iti__dial-code">+262</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mx" role="option" data-dial-code="52" data-country-code="mx" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mx"></div>
                                             </div><span class="iti__country-name">Mexico (México)</span><span class="iti__dial-code">+52</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-fm" role="option" data-dial-code="691" data-country-code="fm" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__fm"></div>
                                             </div><span class="iti__country-name">Micronesia</span><span class="iti__dial-code">+691</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-md" role="option" data-dial-code="373" data-country-code="md" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__md"></div>
                                             </div><span class="iti__country-name">Moldova (Republica Moldova)</span><span class="iti__dial-code">+373</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mc" role="option" data-dial-code="377" data-country-code="mc" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mc"></div>
                                             </div><span class="iti__country-name">Monaco</span><span class="iti__dial-code">+377</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mn" role="option" data-dial-code="976" data-country-code="mn" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mn"></div>
                                             </div><span class="iti__country-name">Mongolia (Монгол)</span><span class="iti__dial-code">+976</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-me" role="option" data-dial-code="382" data-country-code="me" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__me"></div>
                                             </div><span class="iti__country-name">Montenegro (Crna Gora)</span><span class="iti__dial-code">+382</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ms" role="option" data-dial-code="1" data-country-code="ms" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ms"></div>
                                             </div><span class="iti__country-name">Montserrat</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ma" role="option" data-dial-code="212" data-country-code="ma" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ma"></div>
                                             </div><span class="iti__country-name">Morocco (<U202b>المغرب<U202c>‎)</span><span class="iti__dial-code">+212</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mz" role="option" data-dial-code="258" data-country-code="mz" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mz"></div>
                                             </div><span class="iti__country-name">Mozambique (Moçambique)</span><span class="iti__dial-code">+258</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mm" role="option" data-dial-code="95" data-country-code="mm" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mm"></div>
                                             </div><span class="iti__country-name">Myanmar (Burma) (မြန်မာ)</span><span class="iti__dial-code">+95</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-na" role="option" data-dial-code="264" data-country-code="na" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__na"></div>
                                             </div><span class="iti__country-name">Namibia (Namibië)</span><span class="iti__dial-code">+264</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-nr" role="option" data-dial-code="674" data-country-code="nr" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__nr"></div>
                                             </div><span class="iti__country-name">Nauru</span><span class="iti__dial-code">+674</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-np" role="option" data-dial-code="977" data-country-code="np" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__np"></div>
                                             </div><span class="iti__country-name">Nepal (नेपाल)</span><span class="iti__dial-code">+977</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-nl" role="option" data-dial-code="31" data-country-code="nl" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__nl"></div>
                                             </div><span class="iti__country-name">Netherlands (Nederland)</span><span class="iti__dial-code">+31</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-nc" role="option" data-dial-code="687" data-country-code="nc" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__nc"></div>
                                             </div><span class="iti__country-name">New Caledonia
                                                (Nouvelle-Calédonie)</span><span class="iti__dial-code">+687</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-nz" role="option" data-dial-code="64" data-country-code="nz" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__nz"></div>
                                             </div><span class="iti__country-name">New Zealand</span><span class="iti__dial-code">+64</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ni" role="option" data-dial-code="505" data-country-code="ni" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ni"></div>
                                             </div><span class="iti__country-name">Nicaragua</span><span class="iti__dial-code">+505</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ne" role="option" data-dial-code="227" data-country-code="ne" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ne"></div>
                                             </div><span class="iti__country-name">Niger (Nijar)</span><span class="iti__dial-code">+227</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ng" role="option" data-dial-code="234" data-country-code="ng" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ng"></div>
                                             </div><span class="iti__country-name">Nigeria</span><span class="iti__dial-code">+234</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-nu" role="option" data-dial-code="683" data-country-code="nu" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__nu"></div>
                                             </div><span class="iti__country-name">Niue</span><span class="iti__dial-code">+683</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-nf" role="option" data-dial-code="672" data-country-code="nf" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__nf"></div>
                                             </div><span class="iti__country-name">Norfolk Island</span><span class="iti__dial-code">+672</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kp" role="option" data-dial-code="850" data-country-code="kp" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__kp"></div>
                                             </div><span class="iti__country-name">North Korea (조선 민주주의 인민 공화국)</span><span class="iti__dial-code">+850</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mp" role="option" data-dial-code="1" data-country-code="mp" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mp"></div>
                                             </div><span class="iti__country-name">Northern Mariana Islands</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-no" role="option" data-dial-code="47" data-country-code="no" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__no"></div>
                                             </div><span class="iti__country-name">Norway (Norge)</span><span class="iti__dial-code">+47</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-om" role="option" data-dial-code="968" data-country-code="om" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__om"></div>
                                             </div><span class="iti__country-name">Oman (<U202b>عُمان<U202c>‎)</span><span class="iti__dial-code">+968</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pk" role="option" data-dial-code="92" data-country-code="pk" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__pk"></div>
                                             </div><span class="iti__country-name">Pakistan (<U202b>پاکستان<U202c>
                                                      ‎)</span><span class="iti__dial-code">+92</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pw" role="option" data-dial-code="680" data-country-code="pw" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__pw"></div>
                                             </div><span class="iti__country-name">Palau</span><span class="iti__dial-code">+680</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ps" role="option" data-dial-code="970" data-country-code="ps" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ps"></div>
                                             </div><span class="iti__country-name">Palestine (<U202b>فلسطين<U202c>
                                                      ‎)</span><span class="iti__dial-code">+970</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pa" role="option" data-dial-code="507" data-country-code="pa" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__pa"></div>
                                             </div><span class="iti__country-name">Panama (Panamá)</span><span class="iti__dial-code">+507</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pg" role="option" data-dial-code="675" data-country-code="pg" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__pg"></div>
                                             </div><span class="iti__country-name">Papua New Guinea</span><span class="iti__dial-code">+675</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-py" role="option" data-dial-code="595" data-country-code="py" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__py"></div>
                                             </div><span class="iti__country-name">Paraguay</span><span class="iti__dial-code">+595</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pe" role="option" data-dial-code="51" data-country-code="pe" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__pe"></div>
                                             </div><span class="iti__country-name">Peru (Perú)</span><span class="iti__dial-code">+51</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ph" role="option" data-dial-code="63" data-country-code="ph" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ph"></div>
                                             </div><span class="iti__country-name">Philippines</span><span class="iti__dial-code">+63</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pl" role="option" data-dial-code="48" data-country-code="pl" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__pl"></div>
                                             </div><span class="iti__country-name">Poland (Polska)</span><span class="iti__dial-code">+48</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pt" role="option" data-dial-code="351" data-country-code="pt" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__pt"></div>
                                             </div><span class="iti__country-name">Portugal</span><span class="iti__dial-code">+351</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pr" role="option" data-dial-code="1" data-country-code="pr" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__pr"></div>
                                             </div><span class="iti__country-name">Puerto Rico</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-qa" role="option" data-dial-code="974" data-country-code="qa" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__qa"></div>
                                             </div><span class="iti__country-name">Qatar (<U202b>قطر<U202c>‎)</span><span class="iti__dial-code">+974</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-re" role="option" data-dial-code="262" data-country-code="re" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__re"></div>
                                             </div><span class="iti__country-name">Réunion (La Réunion)</span><span class="iti__dial-code">+262</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ro" role="option" data-dial-code="40" data-country-code="ro" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ro"></div>
                                             </div><span class="iti__country-name">Romania (România)</span><span class="iti__dial-code">+40</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ru" role="option" data-dial-code="7" data-country-code="ru" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ru"></div>
                                             </div><span class="iti__country-name">Russia (Россия)</span><span class="iti__dial-code">+7</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-rw" role="option" data-dial-code="250" data-country-code="rw" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__rw"></div>
                                             </div><span class="iti__country-name">Rwanda</span><span class="iti__dial-code">+250</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-bl" role="option" data-dial-code="590" data-country-code="bl" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__bl"></div>
                                             </div><span class="iti__country-name">Saint Barthélemy</span><span class="iti__dial-code">+590</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sh" role="option" data-dial-code="290" data-country-code="sh" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sh"></div>
                                             </div><span class="iti__country-name">Saint Helena</span><span class="iti__dial-code">+290</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kn" role="option" data-dial-code="1" data-country-code="kn" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__kn"></div>
                                             </div><span class="iti__country-name">Saint Kitts and Nevis</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lc" role="option" data-dial-code="1" data-country-code="lc" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__lc"></div>
                                             </div><span class="iti__country-name">Saint Lucia</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-mf" role="option" data-dial-code="590" data-country-code="mf" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__mf"></div>
                                             </div><span class="iti__country-name">Saint Martin (Saint-Martin (partie
                                                française))</span><span class="iti__dial-code">+590</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-pm" role="option" data-dial-code="508" data-country-code="pm" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__pm"></div>
                                             </div><span class="iti__country-name">Saint Pierre and Miquelon
                                                (Saint-Pierre-et-Miquelon)</span><span class="iti__dial-code">+508</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-vc" role="option" data-dial-code="1" data-country-code="vc" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__vc"></div>
                                             </div><span class="iti__country-name">Saint Vincent and the
                                                Grenadines</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ws" role="option" data-dial-code="685" data-country-code="ws" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ws"></div>
                                             </div><span class="iti__country-name">Samoa</span><span class="iti__dial-code">+685</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sm" role="option" data-dial-code="378" data-country-code="sm" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sm"></div>
                                             </div><span class="iti__country-name">San Marino</span><span class="iti__dial-code">+378</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-st" role="option" data-dial-code="239" data-country-code="st" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__st"></div>
                                             </div><span class="iti__country-name">São Tomé and Príncipe (São Tomé e
                                                Príncipe)</span><span class="iti__dial-code">+239</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sa" role="option" data-dial-code="966" data-country-code="sa" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sa"></div>
                                             </div><span class="iti__country-name">Saudi Arabia (<U202b>المملكة العربية
                                                   السعودية<U202c>‎)</span><span class="iti__dial-code">+966</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sn" role="option" data-dial-code="221" data-country-code="sn" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sn"></div>
                                             </div><span class="iti__country-name">Senegal (Sénégal)</span><span class="iti__dial-code">+221</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-rs" role="option" data-dial-code="381" data-country-code="rs" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__rs"></div>
                                             </div><span class="iti__country-name">Serbia (Србија)</span><span class="iti__dial-code">+381</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sc" role="option" data-dial-code="248" data-country-code="sc" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sc"></div>
                                             </div><span class="iti__country-name">Seychelles</span><span class="iti__dial-code">+248</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sl" role="option" data-dial-code="232" data-country-code="sl" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sl"></div>
                                             </div><span class="iti__country-name">Sierra Leone</span><span class="iti__dial-code">+232</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sg" role="option" data-dial-code="65" data-country-code="sg" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sg"></div>
                                             </div><span class="iti__country-name">Singapore</span><span class="iti__dial-code">+65</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sx" role="option" data-dial-code="1" data-country-code="sx" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sx"></div>
                                             </div><span class="iti__country-name">Sint Maarten</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sk" role="option" data-dial-code="421" data-country-code="sk" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sk"></div>
                                             </div><span class="iti__country-name">Slovakia (Slovensko)</span><span class="iti__dial-code">+421</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-si" role="option" data-dial-code="386" data-country-code="si" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__si"></div>
                                             </div><span class="iti__country-name">Slovenia (Slovenija)</span><span class="iti__dial-code">+386</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sb" role="option" data-dial-code="677" data-country-code="sb" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sb"></div>
                                             </div><span class="iti__country-name">Solomon Islands</span><span class="iti__dial-code">+677</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-so" role="option" data-dial-code="252" data-country-code="so" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__so"></div>
                                             </div><span class="iti__country-name">Somalia (Soomaaliya)</span><span class="iti__dial-code">+252</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-za" role="option" data-dial-code="27" data-country-code="za" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__za"></div>
                                             </div><span class="iti__country-name">South Africa</span><span class="iti__dial-code">+27</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-kr" role="option" data-dial-code="82" data-country-code="kr" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__kr"></div>
                                             </div><span class="iti__country-name">South Korea (대한민국)</span><span class="iti__dial-code">+82</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ss" role="option" data-dial-code="211" data-country-code="ss" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ss"></div>
                                             </div><span class="iti__country-name">South Sudan (<U202b>جنوب السودان<U202c>
                                                      ‎)</span><span class="iti__dial-code">+211</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-es" role="option" data-dial-code="34" data-country-code="es" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__es"></div>
                                             </div><span class="iti__country-name">Spain (España)</span><span class="iti__dial-code">+34</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-lk" role="option" data-dial-code="94" data-country-code="lk" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__lk"></div>
                                             </div><span class="iti__country-name">Sri Lanka (ශ්‍රී ලංකාව)</span><span class="iti__dial-code">+94</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sd" role="option" data-dial-code="249" data-country-code="sd" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sd"></div>
                                             </div><span class="iti__country-name">Sudan (<U202b>السودان<U202c>‎)</span><span class="iti__dial-code">+249</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sr" role="option" data-dial-code="597" data-country-code="sr" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sr"></div>
                                             </div><span class="iti__country-name">Suriname</span><span class="iti__dial-code">+597</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sj" role="option" data-dial-code="47" data-country-code="sj" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sj"></div>
                                             </div><span class="iti__country-name">Svalbard and Jan Mayen</span><span class="iti__dial-code">+47</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-se" role="option" data-dial-code="46" data-country-code="se" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__se"></div>
                                             </div><span class="iti__country-name">Sweden (Sverige)</span><span class="iti__dial-code">+46</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ch" role="option" data-dial-code="41" data-country-code="ch" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ch"></div>
                                             </div><span class="iti__country-name">Switzerland (Schweiz)</span><span class="iti__dial-code">+41</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-sy" role="option" data-dial-code="963" data-country-code="sy" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__sy"></div>
                                             </div><span class="iti__country-name">Syria (<U202b>سوريا<U202c>‎)</span><span class="iti__dial-code">+963</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tw" role="option" data-dial-code="886" data-country-code="tw" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__tw"></div>
                                             </div><span class="iti__country-name">Taiwan (台灣)</span><span class="iti__dial-code">+886</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tj" role="option" data-dial-code="992" data-country-code="tj" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__tj"></div>
                                             </div><span class="iti__country-name">Tajikistan</span><span class="iti__dial-code">+992</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tz" role="option" data-dial-code="255" data-country-code="tz" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__tz"></div>
                                             </div><span class="iti__country-name">Tanzania</span><span class="iti__dial-code">+255</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-th" role="option" data-dial-code="66" data-country-code="th" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__th"></div>
                                             </div><span class="iti__country-name">Thailand (ไทย)</span><span class="iti__dial-code">+66</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tl" role="option" data-dial-code="670" data-country-code="tl" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__tl"></div>
                                             </div><span class="iti__country-name">Timor-Leste</span><span class="iti__dial-code">+670</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tg" role="option" data-dial-code="228" data-country-code="tg" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__tg"></div>
                                             </div><span class="iti__country-name">Togo</span><span class="iti__dial-code">+228</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tk" role="option" data-dial-code="690" data-country-code="tk" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__tk"></div>
                                             </div><span class="iti__country-name">Tokelau</span><span class="iti__dial-code">+690</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-to" role="option" data-dial-code="676" data-country-code="to" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__to"></div>
                                             </div><span class="iti__country-name">Tonga</span><span class="iti__dial-code">+676</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tt" role="option" data-dial-code="1" data-country-code="tt" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__tt"></div>
                                             </div><span class="iti__country-name">Trinidad and Tobago</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tn" role="option" data-dial-code="216" data-country-code="tn" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__tn"></div>
                                             </div><span class="iti__country-name">Tunisia (<U202b>تونس<U202c>‎)</span><span class="iti__dial-code">+216</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tr" role="option" data-dial-code="90" data-country-code="tr" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__tr"></div>
                                             </div><span class="iti__country-name">Turkey (Türkiye)</span><span class="iti__dial-code">+90</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tm" role="option" data-dial-code="993" data-country-code="tm" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__tm"></div>
                                             </div><span class="iti__country-name">Turkmenistan</span><span class="iti__dial-code">+993</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tc" role="option" data-dial-code="1" data-country-code="tc" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__tc"></div>
                                             </div><span class="iti__country-name">Turks and Caicos Islands</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-tv" role="option" data-dial-code="688" data-country-code="tv" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__tv"></div>
                                             </div><span class="iti__country-name">Tuvalu</span><span class="iti__dial-code">+688</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-vi" role="option" data-dial-code="1" data-country-code="vi" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__vi"></div>
                                             </div><span class="iti__country-name">U.S. Virgin Islands</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ug" role="option" data-dial-code="256" data-country-code="ug" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ug"></div>
                                             </div><span class="iti__country-name">Uganda</span><span class="iti__dial-code">+256</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ua" role="option" data-dial-code="380" data-country-code="ua" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ua"></div>
                                             </div><span class="iti__country-name">Ukraine (Україна)</span><span class="iti__dial-code">+380</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ae" role="option" data-dial-code="971" data-country-code="ae" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ae"></div>
                                             </div><span class="iti__country-name">United Arab Emirates (<U202b>الإمارات
                                                   العربية المتحدة<U202c>‎)</span><span class="iti__dial-code">+971</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-gb" role="option" data-dial-code="44" data-country-code="gb" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__gb"></div>
                                             </div><span class="iti__country-name">United Kingdom</span><span class="iti__dial-code">+44</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-us" role="option" data-dial-code="1" data-country-code="us" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__us"></div>
                                             </div><span class="iti__country-name">United States</span><span class="iti__dial-code">+1</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-uy" role="option" data-dial-code="598" data-country-code="uy" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__uy"></div>
                                             </div><span class="iti__country-name">Uruguay</span><span class="iti__dial-code">+598</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-uz" role="option" data-dial-code="998" data-country-code="uz" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__uz"></div>
                                             </div><span class="iti__country-name">Uzbekistan (Oʻzbekiston)</span><span class="iti__dial-code">+998</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-vu" role="option" data-dial-code="678" data-country-code="vu" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__vu"></div>
                                             </div><span class="iti__country-name">Vanuatu</span><span class="iti__dial-code">+678</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-va" role="option" data-dial-code="39" data-country-code="va" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__va"></div>
                                             </div><span class="iti__country-name">Vatican City (Città del
                                                Vaticano)</span><span class="iti__dial-code">+39</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ve" role="option" data-dial-code="58" data-country-code="ve" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ve"></div>
                                             </div><span class="iti__country-name">Venezuela</span><span class="iti__dial-code">+58</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-vn" role="option" data-dial-code="84" data-country-code="vn" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__vn"></div>
                                             </div><span class="iti__country-name">Vietnam (Việt Nam)</span><span class="iti__dial-code">+84</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-wf" role="option" data-dial-code="681" data-country-code="wf" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__wf"></div>
                                             </div><span class="iti__country-name">Wallis and Futuna
                                                (Wallis-et-Futuna)</span><span class="iti__dial-code">+681</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-eh" role="option" data-dial-code="212" data-country-code="eh" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__eh"></div>
                                             </div><span class="iti__country-name">Western Sahara (<U202b>الصحراء الغربية
                                                   <U202c>‎)</span><span class="iti__dial-code">+212</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ye" role="option" data-dial-code="967" data-country-code="ye" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ye"></div>
                                             </div><span class="iti__country-name">Yemen (<U202b>اليمن<U202c>‎)</span><span class="iti__dial-code">+967</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-zm" role="option" data-dial-code="260" data-country-code="zm" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__zm"></div>
                                             </div><span class="iti__country-name">Zambia</span><span class="iti__dial-code">+260</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-zw" role="option" data-dial-code="263" data-country-code="zw" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__zw"></div>
                                             </div><span class="iti__country-name">Zimbabwe</span><span class="iti__dial-code">+263</span>
                                          </li>
                                          <li class="iti__country iti__standard" tabindex="-1" id="iti-0__item-ax" role="option" data-dial-code="358" data-country-code="ax" aria-selected="false">
                                             <div class="iti__flag-box">
                                                <div class="iti__flag iti__ax"></div>
                                             </div><span class="iti__country-name">Åland Islands</span><span class="iti__dial-code">+358</span>
                                          </li>
                                       </ul>
                                    </div><input id="phone" type="text" class="form-control-custom enter_click phone_number" placeholder="Mobile Number" oninput="new SessionStorageUpdates().updatePhone(this)" autocomplete="off" data-intl-tel-input-id="0" style="padding-left: 85px;">
                                 </div><br>
                              </div>
                              <div class="col-sm-12">
                                 <input id="email" type="text" class="form-control-custom enter_click" placeholder="Business Email" oninput="new SessionStorageUpdates().updateEmail(this)"><br>
                              </div>
                              <div class="col-sm-12">
                                 <input id="password" type="password" class="form-control-custom enter_click" placeholder="Password" oninput="new SessionStorageUpdates().updatePassword(this)"><br>
                              </div>
                              <div class="col-sm-12 dropdown show">
                                 <button id="new_account_use_case_mobi" class="btn dropdown-toggle" type="button" style="width:100%;font-size:10pt;background-color:white;border:1px solid rgb(210,210,210);color:#495057;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">I work for a</button>
                                 <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="width:93%;font-size: 10pt; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);" x-placement="bottom-start">
                                    <a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="agency" label="Recruitment Agency">Recruitment Agency</a>
                                    <!--<span class="badge badge-warning">Beta</span>-->
                                    <a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="corporate" label="Corporate">Corporate</a>
                                    <!--<a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="sales" label="Sales">Sales</a>-->
                                 </div>
                              </div>
                           </div>

                           <div style="width:100%; text-align:center;position: relative;padding:20px; margin-top:20px">
                              <div id="signup_button_desktop" class="form_button enter_click" style="margin: auto;position: absolute;left:0;right:0;top:0;bottom:0;" onclick="new PageContents().signUp()" tabindex="-1">Create account</div>
                           </div>
                        </div>
                        <div id="signup_error" style="margin-top:20px"></div>
                        <div style="color:rgb(197,197,205);cursor:pointer" onclick="new PageContents().changePage('/login')">
                           Already registered? <u style="border-bottom: 1px dashed;text-decoration: none; ">Log in instead</u>
                        </div>
                        <br>
                     </div>
                  </div>
               </div>
            </div>


            <div style="width:100%; text-align:center; margin-top:60px; padding:20px;  background-color: rgb(247,247,251); ">
               <br><br>
               <span style="font-size:25pt; line-height:40px">Join an enthusiastic community of users</span><br><br>
               <span style="font-size:14pt; line-height:30px">Leading professionals from global firms are using arxena to
                  sharpen their competitive edge</span>
               <br>
               <br>
               <br>
               <div style="display:table; width:100%">
                  <div style="display:table-cell; width:50%; height:60px; text-align:center; vertical-align:middle" href="https://arxena.com/accenture" target="_blank">
                     <img src="/static/img/accenture.png" style="width:100px; margin-bottom:25px; cursor:pointer;">
                  </div>
                  <div style="display:table-cell; width:50%; height:60px; text-align:center; vertical-align:middle" href="https://arxena.com/accenture" target="_blank">
                     <img src="/static/img/amazon.png" style="width:100px; cursor:pointer;">
                  </div>
               </div>
               <div style="display:table; width:100%">
                  <div style="display:table-cell; width:50%; height:60px; text-align:center; vertical-align:middle" href="https://arxena.com/accenture" target="_blank">
                     <img src="/static/img/ey-blue.png" style="width:70px; cursor:pointer;">
                  </div>
                  <div style="display:table-cell; width:50%; height:60px; text-align:center; vertical-align:middle" href="https://arxena.com/accenture" target="_blank">
                     <img src="/static/img/deloitte-blue.png" style="width:100px; cursor:pointer;">
                  </div>
               </div>
               <div style="display:table; width:100%">
                  <div style="display:table-cell; width:50%; height:60px; text-align:center; vertical-align:middle" href="https://arxena.com/accenture" target="_blank">
                     <img src="/static/img/mck.png" style="width:100px; margin-top:25px; cursor:pointer;">
                  </div>
                  <div style="display:table-cell; width:50%; height:60px; text-align:center; vertical-align:middle" href="https://arxena.com/accenture" target="_blank">
                     <img src="/static/img/michael-page-logo-blue-color.png" style="width:100px; margin-top:25px; cursor:pointer;">
                  </div>
               </div>
               <br>
               <br>
               <div style="font-size:20pt; font-weight:100; margin-left:15%; text-align:left">
                  <img src="/static/img/quote.png" style="width:40px; margin-right:40px">
                  <br><br>
               </div>
               <div style="display:table; width:100%">
                  <div style="display:table-cell; width:5%; vertical-align:middle; text-align:center;padding:10px; ">
                     <img src="/static/img/arrow_left_blue.png" style="height:20px; cursor:pointer" onclick="new PastFunctions().changeTestimonial()">
                  </div>
                  <div style="display:table-cell; width:90%; font-size:14pt; font-weight:300; vertical-align:middle">
                     <i id="testimonial_quote1">Arxena is a unique tool that I have been waiting for someone to build. In
                        minutes you get a birds-eye view of their team structure and location. This process would take a day
                        to do manually.</i>
                     <br>
                     <br>
                     <div style="display:table; width:100%">
                        <div style="display:table-cell; text-align:left; vertical-align:middle; line-height:23px">
                           <span><strong style="font-size:10pt; font-weight:500" id="testimonial_name1">Aaron
                                 Lintz</strong></span>
                           <br>
                           <span style="font-size:10pt" id="testimonial_title1">Sr. Talent Sourcing Specialist</span>
                           <br>
                           <img id="testimonial_logo1" src="/static/img/EY_logo_2019.png" style="height:20px">
                        </div>
                        <div style="display:table-cell; width:80px; vertical-align:middle">
                           <img id="testimonial_photo1" src="/static/img/lintz.jpg" style="width:70px; border-radius:50%">
                        </div>
                     </div>
                  </div>
                  <div style="display:table-cell; width:5%; vertical-align:middle; text-align:center;padding:10px; ">
                     <img src="/static/img/arrow_right_blue.png" style="height:20px; cursor:pointer" onclick="new PastFunctions().changeTestimonial()">
                  </div>
               </div>
               <div style="font-size:20pt; font-weight:100; margin-left:15%; text-align:right">
                  <br>
                  <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
               </div>
               <br>
            </div>
            <div style="width:100%; text-align:center; margin-top:40px;background-image:url(/static/img/background1.png)">
               <div style="width:100%; text-align:center; padding:20px; padding-top:50px">
                  <strong style="font-size:22pt; line-height:30px">THE MODERN ORG INTELLIGENCE PLATFORM</strong>
                  <br>
                  <div style="width:100%; margin-top:50px; padding:10px">
                     <div class="new_shadow" style="background-color:white;border-radius:10px; padding:20px">
                        <div style="text-align:center">
                           <img src="/static/img/flask.png" style="height:80px"><br><br>
                           <strong style="font-size:14pt">LISTS AND ORG CHARTS<br>IN MINUTES</strong>
                           <br>
                           <br>
                           <span style="font-size:14pt">Save long hours of manual research & building your own candidate
                              lists/ mappings/ org charts.</span>
                        </div>
                     </div>
                     <div class="new_shadow" style="background-color:white;border-radius:10px; padding:20px; margin-top:40px">
                        <div style="text-align:center">
                           <img src="/static/img/micro.png" style="height:80px"><br><br>
                           <strong style="font-size:14pt">GRANULAR RESEARCH<br>DEPTH & BREADTH</strong>
                           <br>
                           <br>
                           <span style="font-size:14pt">Zoom in deep into any org from Executive leadership to N-4
                              resolution.</span>
                        </div>
                     </div>
                     <div class="new_shadow" style="background-color:white;border-radius:10px; padding:20px; margin-top:40px">
                        <div style="text-align:center">
                           <img src="/static/img/dna.png" style="height:80px"><br><br>
                           <strong style="font-size:14pt">EXPAND ACCOUNTS<br>AS DEALS EVOLVE</strong>
                           <br>
                           <br>
                           <span style="font-size:14pt">Edit hierarchies & add to your target accounts with powerful editorial
                              tools.</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div style="background-color: rgb(247,247,251)">
               <br>
               <br>
               <div id="user_case_navi_container1"></div>
               <br>
               <br>
               <div id="use_case_container1"></div>
               <br>
               <br>
               <br>
            </div>
            <div style="width:100%; text-align:center; margin-top:90px; padding:20px">
               <strong style="font-size:16pt">Save hours of research on mapping target organizations</strong>
               <br><br>
               <p>Fits easily in the budget for any project</p>
               <br>
               <div style="display:table">
                  <div style="display:table-cell; width:50%; text-align:right; vertical-align:top; padding-right:10px; padding-top:11px">
                     Billed monthly
                  </div>
                  <div style="display:table-cell; vertical-align:top">
                     <label style="margin-top:10px" class="switch">
                        <input id="landing_monthly_annual_pricing1" onclick="toggleLandingMonthlyAnnualPricing1(this)" type="checkbox">
                        <div class="slider round">
                           <div id="landing_monthly_annual_pricing_switch_text1" class="switch_text"></div>
                        </div>
                     </label>
                  </div>
                  <div style="display:table-cell; width:50%; text-align:left; vertical-align:top; padding-left:10px; padding-top:11px">
                     Billed anually
                  </div>
               </div>
            </div>
            <div style="padding:30px">
               <div class="new_shadow" style="background-color:white;border-radius:10px; padding:20px">
                  <div style="text-align:center">
                     <img src="/static/img/flask2.png" style="height:80px"><br><br>
                     <strong style="font-size:14pt">Free</strong>
                     <br>
                     <span id="plan_free_pricing1" style="font-size:40pt"><sup style="font-size:25pt">$</sup>0</span>
                     <br>
                     <span id="plan_free_pricing_annotation1" style="font-size:11pt; color: grey">User /Month</span>
                     <br><br>
                     <span style="font-size:11pt">1,000 <span style="font-size:11pt; cursor:pointer; border-bottom: 1px dashed;text-decoration: none;" data-toggle="tooltip" data-original-title="1 credit is approx. equivalent to 1 person in the org chart. E.g. the Google HR
               org chart for US leadership has 800 people = ~800 credits">Credits</span></span>
                     <br><br>
                     <div style="text-align:left">
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Org
                           chart sharing</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Export PNG</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Export Excel</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Full Account Depth</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">API Access</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Upload Bulk Contacts</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Priority Support</span>
                     </div>
                  </div>
               </div>
               <div class="new_shadow" style="margin-top:30px;background-color:white;border-radius:10px; padding:20px">
                  <div style="text-align:center">
                     <img src="/static/img/flask.png" style="height:80px"><br><br>
                     <strong style="font-size:14pt">Light Explorer</strong>
                     <br>
                     <span id="plan_1_pricing1" style="font-size:40pt"><sup style="font-size:25pt">$</sup>29</span>
                     <br>
                     <span id="plan_1_pricing_annotation1" style="font-size:11pt; color: grey">User /Month</span>
                     <br><br>
                     <span style="font-size:11pt">2,000 <span style="font-size:11pt; cursor:pointer; border-bottom: 1px dashed;text-decoration: none;" data-toggle="tooltip" data-original-title="1 credit is approx. equivalent to 1 person in the org chart. E.g. the Google HR
               org chart for US leadership has 800 people = ~800 credits">Credits/month</span></span>
                     <br><br>
                     <div style="text-align:left">
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Org
                           chart sharing</span>
                        <br>
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Export
                           PNG</span>
                        <br>
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Export
                           Excel</span>
                        <br>
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Full
                           Account Depth</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">API Access</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Upload Bulk Contacts</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Priority Support</span>
                     </div>
                  </div>
               </div>
               <div class="new_shadow" style="margin-top:30px;background-color:white;border-radius:10px; padding:20px">
                  <div style="text-align:center">
                     <img src="/static/img/micro.png" style="height:80px"><br><br>
                     <strong style="font-size:14pt">Pipeline Generator</strong>
                     <br>
                     <span id="plan_2_pricing1" style="font-size:40pt"><sup style="font-size:25pt">$</sup>49</span>
                     <br>
                     <span id="plan_2_pricing_annotation1" style="font-size:11pt; color: grey">User /Month</span>
                     <br><br>
                     <span style="font-size:11pt">4,000 <span style="font-size:11pt; cursor:pointer; border-bottom: 1px dashed;text-decoration: none;" data-toggle="tooltip" data-original-title="1 credit is approx. equivalent to 1 person in the org chart. E.g. the Google HR
               org chart for US leadership has 800 people = ~800 credits">Credits/month</span></span>
                     <br><br>
                     <div style="text-align:left">
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Org
                           chart sharing</span>
                        <br>
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Export
                           PNG</span>
                        <br>
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Export
                           Excel</span>
                        <br>
                        <img src="/static/img/check.png" style="height:15px"> <span style="font-size:11pt; color: grey">Full
                           Account Depth</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">API Access</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Upload Bulk Contacts</span>
                        <br>
                        <img src="/static/img/cross_grey.png" style="height:15px"> <span style="font-size:11pt; color: rgb(180,180,180)">Priority Support</span>
                     </div>
                  </div>
               </div>
            </div>
            <div style="width:100%; text-align:center; margin-top:30px">
               <p>Have special requirements<br>or need an Enterprise plan? <a href="mailto:arnav@arxena.com">Contact us</a>
               </p>
               <br>
            </div>
            <div style="width:100%; text-align:center; margin-top:20px; padding:20px">
               <br>
               <span style="font-size:25pt; line-height:50px">Stay ahead</span><br>
               <span style="font-size:16pt;">You need insights like never before. We can help.</span>
               <br><br><br><br>
               <div class="landing_white_button" style="display:inline-block; background-color:rgb(36,116,204);border-color:rgb(36,116,204); color:white" onclick="new PageContents().changePage('/signup')">Get started free</div>
               <br>
               <br>
               <br><br><br><br>
            </div>
            <!--<div style="width:100%; text-align:center; background-color: rgb(247,247,251)">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <div style="padding:20px; text-align:left">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <div style="display:table; width:100%; padding-left:25px">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <a href="https://www.linkedin.com/company/arxena" target="_blank"><img style="width:35px; cursor:pointer" src="/static/img/linkedin-icon-png-circle-2.png" /></a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            &nbsp&nbsp&nbsp&nbsp<a href="https://twitter.com/arxenainc" target="_blank"><img style="width:43px; cursor:pointer" src="/static/img/tw.png" /></a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            &nbsp&nbsp&nbsp&nbsp<a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA" target="_blank"><img style="width:45px; cursor:pointer" src="/static/img/yt.png" /></a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <div style="padding-left:25px; padding-top:20px">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Map & track the org chart of any company, in seconds.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <a style="font-size:10pt" href="/eula">Terms of Service</a><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <a style="font-size:10pt" href="/privacy">Privacy Policy</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <span>© 2023 Arxena. All Rights Reserved.</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     </div>-->


            <div style="width:100%; bottom:0%; text-align:center; background-color: rgb(247,247,251)">
               <div style="text-align:left; margin-left:5%; margin-top:5%;">
                  <div style="display:table; width:100%;">
                     <a href="https://www.linkedin.com/company/arxena" target="_blank">
                        <img style="width:35px; cursor:pointer" src="/static/img/linkedin-icon-png-circle-2.png"></a>
                     &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/arxena" target="_blank"><img style="width:43px; cursor:pointer" src="/static/img/tw.png"></a>
                     &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA" target="_blank">
                        <img style="width:45px; cursor:pointer" src="/static/img/yt.png"></a>
                  </div>
                  <!--<div style="padding-left:25px; padding-top:20px">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              The World's First & Only Org Chart Analytics Platform<br>-->
                  <span style="font-size:11pt">World's first &amp; only Org Chart Analytics</span><br><br>

                  <!--<a style="font-size:10pt" href="/api">API</a> <br>-->
                  <a style="font-size:10pt" href="/eula">Terms of Service</a><br>
                  <a style="font-size:10pt" href="/privacy">Privacy Policy</a>
                  <br>
                  <span>© 2023 Arxena, Inc. All Rights Reserved.</span>
                  <br>
                  <br>
               </div>
            </div>
         </div>
      </script>


      <!-- NEW LOGIN PAGE -->
      <script id="new_login_page" language="text">
         <!-- desktop version 
         -->
      <div class="desk" style="height:100%">
         <div style="display:table; width:100%; height:100%">
            <div style="display:table-cell; width:70%; background-color:white; padding:20px">
               <img style="width:10vw;margin-top:5px;cursor:pointer;" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png" />
               <div class="shadow content_section" style="width:500px;padding:30px; background-color:rgba(255,255,255);border-radius: 5px; text-align:center; left:0, right:0; margin-top:50px">
                  <div id="signup_form_content">
                     <span style="font-size:16pt;font-weight:300;">Welcome back!</span>
                     <br>
                     <br>
                     <div style="width: 90%; left:5%; position:relative">
                        <div class="row">
                           <div class="col-sm-12">
                              <input id="email" type="text" class="form-control-custom enter_click" placeholder="Email" oninput="new SessionStorageUpdates().updateEmail(this)"><br>
                           </div>
                           <div class="col-sm-12">
                              <input id="password" type="password" class="form-control-custom enter_click" placeholder="Password" oninput="new SessionStorageUpdates().updatePassword(this)"><br>
                           </div>
                        </div>
                        <br>
                        <div style="width:100%; text-align:center;position: relative;padding:20px">
                           <div id="login_button_desktop" class="form_button enter_click" style="margin: auto;position: absolute;left:0;right:0;top:0;bottom:0;" onclick="new PageContents().logIn()">Log in</div>
                        </div>
                     </div>
                     <div id="login_error" style="margin-top:20px"></div>
                     <div style="color:rgb(197,197,205);cursor:pointer" onclick="new PageContents().changePage('/password_reset')">Forgot your password? <u style="border-bottom: 1px dashed;text-decoration: none; ">Reset it here</u></div>
                     <div style="color:rgb(197,197,205);cursor:pointer" onclick="new PageContents().changePage('/signup')">
                        Need an account? <u style="border-bottom: 1px dashed;text-decoration: none; ">Sign up for free</u>
                     </div>
                  </div>
               </div>
            </div>
            <div class="signup_lateral" style="display:table-cell; width:30%;padding:20px; text-align:left">
               <br><br>
               <div style="text-align:center">
                  <img id="testimonial_photo" src="/static/img/mannan_pacha_dp.webp" style="width:150px; border-radius:50%">
               </div>
               <div style="text-align:left">
                  <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
               </div>
               <i id="testimonial_quote">Arxena helps me map with large F100 accounts saving me hours of manual work for
                  resourcing projects.</i>
               <br>
               <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Mannan
                     Pacha</strong> | </span>
               <span id="testimonial_title" style="font-size:13pt">Manager - Ernst & Young</span>
               <br>
               <img id="testimonial_logo" src="/static/img/EY_logo_2019.png" style="height:20px">
               <br>
               <br>
               <img id="linkedin_logo" src="/static/img/linkedin_logo.png" onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')" style="height:20px;cursor:pointer;">
               <div style="text-align:right">
                  <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
               </div>
            </div>
         </div>
      </div>

      <!-- mobile version -->
      <div class="mobi">
         <div style="width:100%; height:100%">
            <div style="background-color:white; padding:20px">
               <img style="width:25vw;margin-top:5px;cursor: pointer;" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png" />
               <div class="shadow content_section" style="width:100%; padding:30px; background-color:rgba(255,255,255);border-radius: 5px; text-align:center; left:0, right:0; margin-top:50px">
                  <div id="signup_form_content">
                     <span style="font-size:16pt;font-weight:300;">Welcome back!</span>
                     <br>
                     <br>
                     <div style="width: 90%; left:5%; position:relative">
                        <div class="row">
                           <div class="col-sm-12">
                              <input id="email" type="text" class="form-control-custom" placeholder="Email" oninput="new SessionStorageUpdates().updateEmail(this)"><br>
                           </div>
                           <div class="col-sm-12">
                              <input id="password" type="password" class="form-control-custom" placeholder="Password" oninput="new SessionStorageUpdates().updatePassword(this)"><br>
                           </div>
                        </div>
                        <br>
                        <div style="width:100%; text-align:center;position: relative;padding:20px">
                           <div class="form_button" style="margin: auto;position: absolute;left:0;right:0;top:0;bottom:0;" onclick="new PageContents().logIn()">Log in</div>
                        </div>
                     </div>
                     <div id="login_error_mobi" style="margin-top:20px"></div>
                     <div style="color:rgb(197,197,205);cursor:pointer" onclick="new PageContents().changePage('/password_reset')">Forgot your password? <u style="border-bottom: 1px dashed;text-decoration: none; ">Reset it here</u></div>
                  </div>
               </div>
            </div>
            <div class="signup_lateral" style="padding:20px; text-align:left">
               <br><br>
               <div style="text-align:center">
                  <img id="testimonial_photo" src="/static/img/mannan_pacha_dp.webp" style="width:150px; border-radius:50%">
               </div>
               <div style="text-align:left">
                  <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
               </div>
               <i id="testimonial_quote">Arxena helps me map with large F100 accounts saving me hours of manual work for
                  resourcing projects.</i>
               <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Mannan
                     Pacha</strong> | </span>
               <span id="testimonial_title" style="font-size:13pt">Manager - Consulting</span>
               <br>
               <img id="testimonial_logo" src="/static/img/EY_logo_2019.png" style="height:20px">
               <br>
               <br>
               <img id="linkedin_logo" src="/static/img/linkedin_logo.png" onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')" style="height:20px;cursor:pointer;">
               <div style="text-align:right">
                  <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
               </div>
            </div>
         </div>
      </div>
      </script>

      <!-- PASSWORD RESET PAGE -->
      <script id="password_reset_page" language="text">
         <!-- desktop version 
         -->
      <div class="desk" satyle="height:100%">
         <div style="display:table; width:100%; height:100%">
            <div style="display:table-cell; width:70%; background-color:white; padding:20px">
               <img style="width:10vw;margin-top:5px;cursor:pointer;" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png" />
               <div class="shadow content_section" style="width:500px;padding:30px; background-color:rgba(255,255,255);border-radius: 5px; text-align:center; left:0, right:0; margin-top:50px">
                  <div id="reset_password_form_content">
                     <span style="font-size:16pt;font-weight:300;">Reset your password</span>
                     <br>
                     <br>
                     <span style="font-size:10pt;">Please enter below the email address you used to sign up for Arxena.</span>
                     <br>
                     <br>
                     <div style="width: 90%; left:5%; position:relative">
                        <div class="row">
                           <div class="col-sm-12">
                              <input id="email" type="text" class="form-control-custom" placeholder="Email" oninput="new SessionStorageUpdates().updateEmail(this)"><br>
                           </div>
                        </div>
                        <br>
                        <div style="width:100%; text-align:center;position: relative;padding:20px">
                           <div class="form_button" style="margin: auto;position: absolute;left:0;right:0;top:0;bottom:0;" onclick="new PageContents().sendResetLink()">Send reset link</div>
                        </div>
                     </div>
                     <div id="password_reset_error" style="margin-top:20px"></div>

                  </div>
               </div>
            </div>
            <div class="signup_lateral" style="display:table-cell; width:30%;padding:20px; text-align:left">
               <br><br>
               <div style="text-align:center">
                  <img id="testimonial_photo" src="/static/img/mannan_pacha_dp.webp" style="width:150px; border-radius:50%">
               </div>
               <div style="text-align:left">
                  <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
               </div>
               <i id="testimonial_quote">Arxena helps me map in minutes large F100 accounts saving me hours of manual work for
                  resourcing projects.</i>


               <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Mannan
                     Pacha</strong> | </span>
               <span id="testimonial_title" style="font-size:13pt">Manager - Consulting</span>
               <br>
               <img id="testimonial_logo" src="/static/img/EY_logo_2019.png" style="height:20px">
               <br>
               <br>
               <img id="linkedin_logo" src="/static/img/linkedin_logo.png" onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')" style="height:20px;cursor:pointer;">
               <div style="text-align:right">
                  <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
               </div>
            </div>
         </div>
      </div>

      <!-- mobile version -->
      <div class="mobi">
         <div style="width:100%; height:100%">
            <div style="background-color:white; padding:20px">
               <img style="width:25vw;margin-top:5px;cursor: pointer;" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png" />
               <div class="shadow content_section" style="width:100%; padding:30px; background-color:rgba(255,255,255);border-radius: 5px; text-align:center; left:0, right:0; margin-top:50px">
                  <div id="reset_password_form_content_mobi">
                     <span style="font-size:16pt;font-weight:300;">Reset your password</span>
                     <br>
                     <br>
                     <span style="font-size:10pt;">Please enter below the email address you used to sign up for arxena.</span>
                     <br>
                     <br>
                     <div style="width: 90%; left:5%; position:relative">
                        <div class="row">
                           <div class="col-sm-12">
                              <input id="email" type="text" class="form-control-custom" placeholder="Email" oninput="new SessionStorageUpdates().updateEmail(this)"><br>
                           </div>
                        </div>
                        <br>
                        <div style="width:100%; text-align:center;position: relative;padding:20px">
                           <div class="form_button" style="margin: auto;position: absolute;left:0;right:0;top:0;bottom:0;" onclick="new PageContents().sendResetLink()">Send reset link</div>
                        </div>
                     </div>
                     <div id="password_reset_error_mobi" style="margin-top:20px"></div>
                     <div style="color:rgb(197,197,205);cursor:pointer" onclick="new PageContents().changePage('/password_reset')">Forgot your password? <u style="border-bottom: 1px dashed;text-decoration: none; ">Reset it here</u></div>
                  </div>
               </div>
            </div>
            <div class="signup_lateral" style="padding:20px; text-align:left">
               <br><br>
               <div style="text-align:center">
                  <img id="testimonial_photo" src="/static/img/mannan_pacha_dp.webp" style="width:150px; border-radius:50%">
               </div>
               <div style="text-align:left">
                  <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
               </div>
               <i id="testimonial_quote">Arxena helps me map in minutes large F100 accounts saving me hours of manual work for
                  resourcing projects.</i>
               <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Mannan
                     Pacha</strong> | </span>
               <span id="testimonial_title" style="font-size:13pt">Manager - Consulting</span>
               <br>
               <img id="testimonial_logo" src="/static/img/tritonexec2.png" style="height:20px">
               <div style="text-align:right">
                  <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
               </div>
            </div>
         </div>
      </div>
      </script>

      <!-- PASSWORD RESET LINK PAGE -->
      <script id="password_reset_link_page" language="text">
         <!-- desktop version 
         -->
      <div class="desk" style="height:100%">
         <div style="display:table; width:100%; height:100%">
            <div style="display:table-cell; width:70%; background-color:white; padding:20px">
               <img style="width:10vw;margin-top:5px;cursor: pointer;" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png" />
               <div class="shadow content_section" style="width:500px;padding:30px; background-color:rgba(255,255,255);border-radius: 5px; text-align:center; left:0, right:0; margin-top:50px">
                  <div id="password_reset_link_form_content">
                     <span style="font-size:16pt;font-weight:300;">Pick a new password</span>
                     <br>
                     <br>
                     <div style="width: 90%; left:5%; position:relative">
                        <div class="row">
                           <div class="col-sm-12">
                              <input id="password" type="password" class="form-control-custom" placeholder="New password" oninput="new SessionStorageUpdates().updatePassword(this)"><br>
                           </div>
                           <div class="col-sm-12">
                              <input id="confirm_password" type="password" class="form-control-custom" placeholder="Confirm new password" oninput="new SessionStorageUpdates().updatePasswordConfimation(this)"><br>
                           </div>
                        </div>
                        <br>
                        <div style="width:100%; text-align:center;position: relative;padding:20px">
                           <div class="form_button" style="margin: auto;position: absolute;left:0;right:0;top:0;bottom:0;" onclick="new PasswordReset().confirmNewPassword()">Confirm</div>
                        </div>
                     </div>
                     <div id="password_reset_link_error" style="margin-top:20px"></div>
                  </div>
               </div>
            </div>
            <div class="signup_lateral" style="display:table-cell; width:30%;padding:20px; text-align:left">
               <br><br>
               <div style="text-align:center">
                  <img id="testimonial_photo" src="/static/img/mannan_pacha_dp.webp" style="width:150px; border-radius:50%">
               </div>
               <div style="text-align:left">
                  <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
               </div>
               <i id="testimonial_quote">Arxena helps me map in minutes large F100 accounts saving me hours of manual work for
                  resourcing projects.</i>
               <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Mannan
                     Pacha</strong> | </span>
               <span id="testimonial_title" style="font-size:13pt">Manager - Consulting</span>
               <br>
               <img id="linkedin_logo" src="/static/img/linkedin_logo.png" onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')" style="height:20px;cursor:pointer;">
               <div style="text-align:right">
                  <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
               </div>
            </div>
         </div>
      </div>

      <!-- mobile version -->
      <div class="mobi">
         <div style="width:100%; height:100%">
            <div style="background-color:white; padding:20px">
               <img style="width:25vw;margin-top:5px;cursor: pointer;" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png" />
               <div class="shadow content_section" style="width:100%; padding:30px; background-color:rgba(255,255,255);border-radius: 5px; text-align:center; left:0, right:0; margin-top:50px">
                  <div id="password_reset_link_form_content_mobi">
                     <span style="font-size:16pt;font-weight:300;">Pick a new password</span>
                     <br>
                     <br>
                     <div style="width: 90%; left:5%; position:relative">
                        <div class="row">
                           <div class="col-sm-12">
                              <input id="password" type="password" class="form-control-custom" placeholder="New password" oninput="new SessionStorageUpdates().updatePassword(this)"><br>
                           </div>
                           <div class="col-sm-12">
                              <input id="confirm_password" type="password" class="form-control-custom" placeholder="Confirm new password" oninput="new SessionStorageUpdates().updatePasswordConfimation(this)"><br>
                           </div>
                        </div>
                        <br>
                        <div style="width:100%; text-align:center;position: relative;padding:20px">
                           <div class="form_button" style="margin: auto;position: absolute;left:0;right:0;top:0;bottom:0;" onclick="new PasswordReset().confirmNewPassword()">Confirm</div>
                        </div>
                     </div>
                     <div id="password_reset_link_error_mobi" style="margin-top:20px"></div>
                  </div>
               </div>
            </div>
            <div class="signup_lateral" style="padding:20px; text-align:left">
               <br><br>
               <div style="text-align:center">
                  <img id="testimonial_photo" src="/static/img/mannan_pacha_dp.webp" style="width:150px; border-radius:50%">
               </div>
               <div style="text-align:left">
                  <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
               </div>
               <i id="testimonial_quote">Arxena helps me map in minutes large F100 accounts saving me hours of manual work for
                  resourcing projects.</i>
               <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">John
                     Calvani</strong> | </span>
               <span id="testimonial_title" style="font-size:13pt">Manager - Consulting</span>
               <br>
               <img id="linkedin_logo" src="/static/img/linkedin_logo.png" onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')" style="height:20px;cursor:pointer;">
               <div style="text-align:right">
                  <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
               </div>
            </div>
         </div>
      </div>
      </script>

      <!-- NEW SIGNUP PAGE -->
      <script id="new_signup_page" language="text">
         <!-- desktop version 
         -->
      <div class="desk" style="height:100%">
         <div style="display:table; width:100%; height:100%">
            <div style="display:table-cell; width:70%; background-color:white; padding:20px">
               <img style="width:10vw;margin-top:5px;cursor:pointer;" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png" />
               <div class="shadow content_section" style="width:500px;padding:30px; background-color:rgba(255,255,255);border-radius: 5px; text-align:center; left:0, right:0">
                  <div id="signup_form_content">
                     <span style="font-size:16pt;font-weight:300;">Get started with 10 free org-chart credits.<br>No credit
                        card is needed.</span>
                     <br>
                     <br>
                     <div style="width: 90%; left:5%; position:relative">
                        <div class="row">
                           <div class="col-sm-12">
                              <input id="full_name" type="text" class="form-control-custom" placeholder="Full Name" oninput="new SessionStorageUpdates().updateFullName(this)"><br>
                           </div>
                           <div class="col-sm-12 phone_number_input">
                              <input id="phone" type="text" type="tel" class="form-control-custom enter_click phone_number" placeholder="Mobile Number" oninput="new SessionStorageUpdates().updatePhone(this)"><br>
                           </div>
                           <div class="col-sm-12">
                              <input id="email" type="text" class="form-control-custom enter_click" placeholder="Business Email" oninput="new SessionStorageUpdates().updateEmail(this)"><br>
                           </div>
                           <div class="col-sm-12">
                              <input id="password" type="password" class="form-control-custom enter_click" placeholder="Password" oninput="new SessionStorageUpdates().updatePassword(this)"><br>
                           </div>
                           <div class="col-sm-12 dropdown show">
                              <button id="new_account_use_case" class="btn dropdown-toggle" type="button" style="width:100%;font-size:10pt;background-color:white;border:1px solid rgb(210,210,210);color:#495057;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">I work for a</button>
                              <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="width:93%;font-size: 10pt; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);" x-placement="bottom-start">
                                 <a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="agency" label="Recruitment Agency">Recruitment Agency</a>
                                 <!--<span class="badge badge-warning">Beta</span>-->
                                 <a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="corporate" label="Corporate">Corporate</a>
                                 <!--<a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="sales" label="Sales">Sales</a>-->
                              </div>
                           </div>
                        </div>

                        <div style="width:100%; text-align:center;position: relative;padding:20px; margin-top:20px">
                           <div id="signup_button_desktop" class="form_button enter_click" style="margin: auto;position: absolute;left:0;right:0;top:0;bottom:0;" onclick="new PageContents().signUp()">Create account</div>
                        </div>
                     </div>
                     <div id="signup_error" style="margin-top:20px"></div>
                     <div style="color:rgb(197,197,205);cursor:pointer" onclick="new PageContents().changePage('/login')">
                        Already registered? <u style="border-bottom: 1px dashed;text-decoration: none; ">Log in instead</u>
                     </div>
                     <br>
                     <div style="color:rgb(197,197,205)"><u style="border-bottom: 1px dashed;text-decoration: none; ">Account
                           lock: </u>We discourage licence sharing. Your account will be accessible from this device only
                     </div>
                  </div>
               </div>
            </div>
            <div class="signup_lateral" style="display:table-cell; width:30%;padding:20px; text-align:left">

               <br><br>
               <div style="text-align:center">
                  <img id="testimonial_photo" src="/static/img/mannan_pacha_dp.webp" style="width:150px; border-radius:50%">
               </div>
               <div style="text-align:left">
                  <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
               </div>
               <i id="testimonial_quote">Arxena helps me map with large F100 accounts saving me hours of manual work for
                  resourcing projects.</i>
               <br>
               <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Mannan
                     Pacha</strong> | </span>
               <span id="testimonial_title" style="font-size:13pt">Manager - Ernst & Young</span>
               <br>
               <img id="testimonial_logo" src="/static/img/EY_logo_2019.png" style="height:20px">
               <br>
               <br>
               <img id="linkedin_logo" src="/static/img/linkedin_logo.png" onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')" style="height:20px;cursor:pointer;">
               <div style="text-align:right">
                  <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
               </div>


               <!--<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div style="text-align:center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <img id="testimonial_photo" src="/static/img/NicolasDumoulin-300x300.jpg" style="width:150px; border-radius:50%">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <div style="text-align:left">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <i id="testimonial_quote">Arxena is a unique tool that I've been waiting for someone to build. In minutes you get a birds-eye view of their team structure and location. This process would take a day to do manually.</i>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Nicolas Dumoulin</strong> | </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <span id="testimonial_title" style="font-size:13pt">Senior Managing Director</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <img id="testimonial_logo" src="/static/img/michael_page.webp" style="height:20px">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <img id="linkedin_logo" src="/static/img/linkedin_logo.png" onclick="window.open('https://in.linkedin.com/in/nicolas-dumoulin-bb46242')" style="height:20px;cursor:pointer;">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <div style="text-align:right">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>-->
            </div>
         </div>
      </div>

      <!-- mobi version -->
      <div class="mobi">
         <div style="width:100%; height:100%">
            <div style="background-color:white; padding:20px">
               <img style="width:25vw;margin-top:5px" onclick="new PageContents().changePage('/#')" src="/static/img/arxena-logo/arxena-logo.png" />
               <div class="shadow content_section" style="width:100%;padding:30px; background-color:rgba(255,255,255);border-radius: 5px; text-align:center; left:0, right:0">
                  <div id="signup_form_content_mobi">
                     <span style="font-size:16pt;font-weight:300;">Get started with 10 free org-chart credits.<br>No credit
                        card is needed.</span>
                     <br>
                     <br>
                     <div style="width: 90%; left:5%; position:relative">
                        <div class="row">
                           <div class="col-sm-12">
                              <input id="full_name" type="text" class="form-control-custom" placeholder="Full Name" oninput="new SessionStorageUpdates().updateFullName(this)"><br>
                           </div>
                           <div class="col-sm-12 phone_number_input">
                              <input id="phone" type="text" type="tel" class="form-control-custom phone_number" placeholder="Mobile Number" oninput="new SessionStorageUpdates().updatePhone(this)"><br>
                           </div>
                           <div class="col-sm-12">
                              <input id="email" type="text" class="form-control-custom enter_click" placeholder="Business Email" oninput="new SessionStorageUpdates().updateEmail(this)"><br>
                           </div>
                           <div class="col-sm-12">
                              <input id="password" type="password" class="form-control-custom" placeholder="Password" oninput="new SessionStorageUpdates().updatePassword(this)"><br>
                           </div>
                           <!--<div class="col-sm-12 dropdown show">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <button id="new_account_use_case_mobi" class="btn dropdown-toggle" type="button" style="width:100%;font-size:10pt;background-color:white;border:1px solid rgb(210,210,210);color:#495057;" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">I work for a</button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <div class="dropdown-menu " aria-labelledby="dropdownMenuButton" style="width:93%;font-size: 10pt; position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 34px, 0px);" x-placement="bottom-start">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="agency" label="Recruitment Agency">Recruitment Agency</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="corporate" label="Corporate">Corporate</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <a class="dropdown-item" onclick="new Selections().selectNewAccountUseCase(this)" use_case="sales" label="Sales">Sales</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>-->
                        </div>
                        <div style="width:100%; text-align:center;position: relative;padding-top:25%">
                           <div class="form_button" style="margin: auto;position: absolute;left:0;right:0;top:0;bottom:0;" onclick="new PageContents().signUp()">Create account</div>
                        </div>
                     </div>
                     <div id="signup_error_mobi"></div>
                     <div style="color:rgb(197,197,205);cursor:pointer" onclick="new PageContents().changePage('/login')">
                        Already registered? <u style="border-bottom: 1px dashed;text-decoration: none; ">Log in instead</u>
                     </div>
                  </div>
               </div>
            </div>


            <div class="signup_lateral" style="padding:20px; text-align:left">
               <br><br>
               <div style="text-align:center">
                  <img id="testimonial_photo" src="/static/img/mannan_pacha_dp.webp" style="width:150px; border-radius:50%">
               </div>
               <div style="text-align:left">
                  <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
               </div>
               <i id="testimonial_quote">Arxena helps me map with large F100 accounts saving me hours of manual work for
                  resourcing projects.</i>
               <br>
               <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Mannan
                     Pacha</strong> | </span>
               <span id="testimonial_title" style="font-size:13pt">Manager - Ernst & Young</span>
               <br>
               <img id="testimonial_logo" src="/static/img/EY_logo_2019.png" style="height:20px">
               <br>
               <br>
               <img id="linkedin_logo" src="/static/img/linkedin_logo.png" onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')" style="height:20px;cursor:pointer;">
               <div style="text-align:right">
                  <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
               </div>

               <!-- <div style="text-align:center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <img id="testimonial_photo" src="/static/img/NicolasDumoulin-300x300.jpg" style="width:150px; border-radius:50%">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <div style="text-align:left">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <i id="testimonial_quote">Arxena is a unique tool that I've been waiting for someone to build. In minutes you get a birds-eye view of their team structure and location. This process would take a day to do manually.</i>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Nicolas Dumoulin</strong> | </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <span id="testimonial_title" style="font-size:13pt">Senior Managing Director</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <img id="testimonial_logo" src="/static/img/michael_page.webp" style="height:20px">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <img id="linkedin_logo" src="/static/img/linkedin_logo.png" onclick="window.open('https://in.linkedin.com/in/nicolas-dumoulin-bb46242')" style="height:20px;cursor:pointer;">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <div style="text-align:right">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>-->


            </div>
         </div>
      </script>
      <!-- REFERRAL SIGNUP PAGE -->
      <script id="referral_signup_page" language="text">
         <!-- desktop version 
         -->
      <div class="desk" style="height:100%">
         <div style="display:table; width:100%; height:100%">
            <div style="display:table-cell; width:70%; background-color:white; padding:20px">
               <img style="width:10vw; cursor:pointer; margin-top:-3%; margin-left:-5%" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png">
               <div class="shadow content_section" style="width:500px;padding:30px; background-color:rgba(255,255,255);border-radius: 5px; text-align:center; left:0; right:0">
                  <div id="signup_form_content">
                     <span style="font-size:16pt;font-weight:300;">Get up to 1000 free org chart credits by inviting your
                        friends to arxena.</span>
                     <br>
                     <br>
                     <span style="font-size:10pt;">For every friend who joins Arxena, we will give you both 1000 free org
                        charts credits!
                        <br>
                        <br>
                        <div style="width: 90%; left:5%; position:relative">
                           <div style="text-align:center">
                              <!--<textarea id="referred_emails" class="form-control-custom" style="width:400px; height:70px" placeholder="Add emails separated by space"></textarea><br>-->
                              <textarea id="textarea"></textarea><br />
                              <button id="sub_btn">Show Tags</button>

                           </div>
                           <br>

                           <div style="width:100%; text-align:center;position: relative;padding:20px">
                              <div id="referral_signup_button" class="form_button enter_click" style="margin: auto;position: absolute;left:0;right:0;top:0;bottom:0;" onclick="new Modals().addFriendsToInviteAndStart()">Complete</div>
                           </div>
                        </div>
                        <br>
                        <br>
                        <span style="font-size:9pt">More ways to invite your friends</span>
                        <div style="display:table; width:100%; font-size:10pt;">
                           <div style="display:table-cell; width:170px">
                              <div style="width:130px; display:inline-block" class="small_button_white" onclick="new CopyLinks().copySignupInviteLink()">Copy invite link</div>
                           </div>
                           <div style="display:table-cell">
                              <input id="signup_invite_link" type="text" class="search-bar" style="border-color:rgb(232,232,232); placeholder-color:rgb(232,232,232)" readonly>
                           </div>
                        </div>

                  </div>
               </div>
            </div>
            <div class="signup_lateral" style="display:table-cell; width:30%;padding:20px; text-align:left">
               <br><br>
               <div style="text-align:center">
                  <img id="testimonial_photo" src="/static/img/NicolasDumoulin-300x300.jpg" style="width:150px; border-radius:50%">
               </div>
               <div style="text-align:left">
                  <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
               </div>
               <i id="testimonial_quote">Before Arxena, I had used everything from DiscoverOrg to LucidCharts and nothing
                  worked, locating the right decision makers took hours… now it takes me minutes, Arxena has helped close over
                  300k in ARR, this is by far the best sales outreach tool I have used.</i>
               <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Nicolas
                     Dumoulin</strong> | </span>
               <span id="testimonial_title" style="font-size:13pt">Senior Managing Director, Michael Page</span>
               <br>
               <img id="testimonial_logo" src="/static/img/michael_page.webp" style="height:20px">
               <div style="text-align:right">
                  <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
               </div>
            </div>
         </div>
      </div>

      <!-- mobile version -->
      <div class="mobi" style="height:100%">
         <div style="width:100%; height:100%">
            <div style="background-color:white; padding:20px">

               <img style="width:25vw;margin-top:5px;cursor: pointer;" onclick="new PageContents().changePage('/#')" src="static/img/arxena-logo/arxena-logo.png" />
               <div class="shadow content_section" style="width:100%;padding:30px; background-color:rgba(255,255,255);border-radius: 5px; text-align:center; left:0; right:0">
                  <div id="signup_form_content">
                     <span style="font-size:16pt;font-weight:300;">Get free org chart credits by inviting your friends to
                        arxena.</span>
                     <br>
                     <br>
                     <span style="font-size:10pt;">For every friend who joins Arxena, we'll give you both 1000 free org
                        charts!
                        <br>
                        <br>
                        <div style="width: 90%; left:5%; position:relative">
                           <div style="text-align:center">
                              <textarea id="referred_emails_mobi" class="form-control-custom" style="width:250px; height:70px" placeholder="Add emails separated by space"></textarea><br>
                           </div>
                           <br>

                           <div style="width:100%; text-align:center;position: relative;padding:20px">
                              <div class="form_button" style="margin: auto;position: absolute;left:0;right:0;top:0;bottom:0;" onclick="new Modals().addFriendsToInviteAndStart()">Complete</div>
                           </div>
                        </div>
                        <br>
                        <br>
                        <span style="font-size:9pt">More ways to invite your friends</span>
                        <div style="display:table; width:100%; font-size:10pt;">
                           <div style="display:table-cell; width:170px">
                              <div style="width:130px; display:inline-block" class="small_button_white" onclick="new CopyLinks().copySignupInviteLink()">Copy invite link</div>
                           </div>
                           <div style="display:table-cell">
                              <input id="signup_invite_link" type="text" class="search-bar" style="border-color:rgb(232,232,232); placeholder-color:rgb(232,232,232)" readonly>
                           </div>
                        </div>

                  </div>
               </div>
            </div>
            <div class="signup_lateral" style="padding:20px; text-align:left">
               <br><br>
               <div style="text-align:center">
                  <img id="testimonial_photo" src="/static/img/mannan_pacha_dp.webp" style="width:150px; border-radius:50%">
               </div>
               <div style="text-align:left">
                  <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
               </div>
               <i id="testimonial_quote">Arxena helps me map with large F100 accounts saving me hours of manual work for
                  resourcing projects.</i>
               <br>
               <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Mannan
                     Pacha</strong> | </span>
               <span id="testimonial_title" style="font-size:13pt">Manager - Ernst & Young</span>
               <br>
               <img id="testimonial_logo" src="/static/img/EY_logo_2019.png" style="height:20px">
               <br>
               <br>
               <img id="linkedin_logo" src="/static/img/linkedin_logo.png" onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')" style="height:20px;cursor:pointer;">
               <div style="text-align:right">
                  <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
               </div>

               <!--<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <div style="text-align:center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <img id="testimonial_photo" src="/static/img/NicolasDumoulin-300x300.jpg" style="width:150px; border-radius:50%">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <div style="text-align:left">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <img src="/static/img/quote.png" style="width:40px; margin-right:40px;margin-bottom:20px">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <i id="testimonial_quote">Before Arxena, I had used everything from DiscoverOrg to The Org and nothing worked, locating the right decision makers took hours… now it takes me minutes, Arxena has helped close over 300k in ARR, this is by far the best sales outreach tool I have used.</i>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <span style="font-size:13pt"><br><br><strong style="font-weight:500" id="testimonial_name">Nicolas Dumoulin</strong> | </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <span id="testimonial_title" style="font-size:13pt">Enterprise Sales Director</span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <img id="testimonial_logo" src="/static/img/workato.png" style="height:20px">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <div style="text-align:right">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <img src="/static/img/quote1.png" style="width:40px; margin-right:40px">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       </div>-->
            </div>
         </div>
      </div>


   </div>
   )
   }

   export default Homepage