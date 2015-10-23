$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogIn_Test.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email and Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 9069528164,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigate_to_Login_Page()"
});
formatter.result({
  "duration": 259342059,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_Email_and_Password()"
});
formatter.result({
  "duration": 990783591,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 96595,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Successful LogOut",
  "description": "",
  "id": "login-action;successful-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User LogOut from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 412040,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinition.LoginSteps.user_LogOut_from_the_Application(LoginSteps.java:52)\r\n\tat ✽.When User LogOut from the Application(LogIn_Test.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.Message_displayed_LogOut_Successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Parent_Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Parent Full Registration Action",
  "description": "",
  "id": "parent-full-registration-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "When Parent Radio Button is clicked, it will redirect to Parent/Guardians Registration Form",
  "description": "",
  "id": "parent-full-registration-action;when-parent-radio-button-is-clicked,-it-will-redirect-to-parent/guardians-registration-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Page should redirected to Parent Registration Form",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8447183897,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2791601150,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1700239405,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.parent_registration_form()"
});
formatter.result({
  "duration": 77321904,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 526577772,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Guardian First Name Field is Required",
  "description": "",
  "id": "parent-full-registration-action;guardian-first-name-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "PR: Error Message Guardian First Name is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8129768681,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2793744964,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1999068458,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5484377656,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_Gfname_required()"
});
formatter.result({
  "duration": 5167420362,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 335287781,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Guardian Last Name Field is Required",
  "description": "",
  "id": "parent-full-registration-action;guardian-last-name-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "PR: Error Message Guardian Last Name is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8693902143,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2847290514,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1948309988,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5508120806,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_Glname_required()"
});
formatter.result({
  "duration": 5164741349,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 443322495,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Guardian Birthdate Field is Required",
  "description": "",
  "id": "parent-full-registration-action;guardian-birthdate-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "PR: Error Message Invalid Birthdate is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8715681087,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2815905761,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1943689407,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5456909242,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gbirthdate_required()"
});
formatter.result({
  "duration": 146131037,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 451941522,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Gender Field is Required",
  "description": "",
  "id": "parent-full-registration-action;gender-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "PR: Error Message Gender is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8216730506,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2929314804,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1935540981,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5457276607,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_ggender_required()"
});
formatter.result({
  "duration": 169891091,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 280917849,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Guardian Contact Number Field is Required",
  "description": "",
  "id": "parent-full-registration-action;guardian-contact-number-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "PR: Error Message Contact Number is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8271243820,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2917249132,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1926428412,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5481455040,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gcontact_required()"
});
formatter.result({
  "duration": 145278281,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 344378616,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Guardian Skype ID Field is Required",
  "description": "",
  "id": "parent-full-registration-action;guardian-skype-id-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "PR: Error Message Skype ID is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8242704104,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2840894993,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 2075863616,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5457673554,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gskype_required()"
});
formatter.result({
  "duration": 170472777,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 435089246,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Guardian Address Field is Required",
  "description": "",
  "id": "parent-full-registration-action;guardian-address-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "PR: Error Message Address is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8009491404,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2803082721,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 2038908629,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5509733345,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gaddress_required()"
});
formatter.result({
  "duration": 168892838,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 435640746,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Guardian Country Field is Required",
  "description": "",
  "id": "parent-full-registration-action;guardian-country-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "PR: Error Message Country is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8204865571,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2885395892,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1717865350,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5459634441,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gcountry_required()"
});
formatter.result({
  "duration": 145766389,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 443112099,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Guardian Zip Code Field is Required",
  "description": "",
  "id": "parent-full-registration-action;guardian-zip-code-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "PR: Error Message ZIP Code is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8308991794,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 3094793598,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1936851056,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5483436454,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gzip_required()"
});
formatter.result({
  "duration": 169407511,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 453602661,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Guardian Email Field is Required",
  "description": "",
  "id": "parent-full-registration-action;guardian-email-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 83,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "PR: Error Message Email is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8360113403,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2804680168,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1932474077,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5480850112,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gemail_required()"
});
formatter.result({
  "duration": 166262425,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 363773765,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "Guardian Password Field is Required",
  "description": "",
  "id": "parent-full-registration-action;guardian-password-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 91,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "PR: Error Message Password is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8554317558,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2791626808,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1990406869,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5482725874,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gpassword_required()"
});
formatter.result({
  "duration": 632693862,
  "error_message": "java.lang.Exception: Test Condition Failed\r\n\tat stepDefinition.RegistrationsSteps.error_message_gpassword_required(RegistrationsSteps.java:1249)\r\n\tat ✽.Then PR: Error Message Password is required is displayed(Parent_Registration.feature:95)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 98,
  "name": "Guardian Confirm Password Field is Required",
  "description": "",
  "id": "parent-full-registration-action;guardian-confirm-password-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 99,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "PR: Error Message Password Confirmation is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 7989622333,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2756759188,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1962704515,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5482342209,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gpasswordconfirmation_required()"
});
formatter.result({
  "duration": 172671228,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 456115953,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "Student First Name Field is Required",
  "description": "",
  "id": "parent-full-registration-action;student-first-name-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 107,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "PR: Error Message Student First Name is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8326570951,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2816545102,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1953523725,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5481324335,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_sfname_required()"
});
formatter.result({
  "duration": 5152426341,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 447161258,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Student Last Name Field is Required",
  "description": "",
  "id": "parent-full-registration-action;student-last-name-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 115,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "PR: Error Message Student Last Name is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8190731852,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2798523117,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1995672526,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5456189909,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_slname_required()"
});
formatter.result({
  "duration": 5163911836,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 437251776,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "Student Birthdate Field is Required",
  "description": "",
  "id": "parent-full-registration-action;student-birthdate-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 123,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 124,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "PR: Error Message Invalid Student Birthdate is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8572238420,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2898650894,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 2041013503,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5483009623,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_sbirthdate_required()"
});
formatter.result({
  "duration": 162001964,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 407488619,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "Student Gender Field is Required",
  "description": "",
  "id": "parent-full-registration-action;student-gender-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 131,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 132,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 133,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "PR: Error Message Student Gender is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 7964670231,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2959375596,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1996312168,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5409257825,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_sgender_required()"
});
formatter.result({
  "duration": 149973723,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 484420218,
  "status": "passed"
});
formatter.scenario({
  "line": 138,
  "name": "Student Level Field is Required",
  "description": "",
  "id": "parent-full-registration-action;student-level-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 139,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 140,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "PR: Error Message Level is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8470634544,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2822632726,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1977333888,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5435070833,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_slevel_required()"
});
formatter.result({
  "duration": 167328295,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 431632037,
  "status": "passed"
});
formatter.scenario({
  "line": 146,
  "name": "Guardian First Name field only accept Alphabet Characters",
  "description": "",
  "id": "parent-full-registration-action;guardian-first-name-field-only-accept-alphabet-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 147,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 149,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "User input Guardian First Name with Special and Numeric Characters",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 152,
  "name": "PR: Error Message Guardian First Name is invalid",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 7999189505,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2828684126,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 2031012558,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_fname_characters()"
});
formatter.result({
  "duration": 279688371,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5786146529,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_invalid_gfname_characters()"
});
formatter.result({
  "duration": 172333446,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 395539466,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "Guardian Last Name field only accept Alphabet Characters",
  "description": "",
  "id": "parent-full-registration-action;guardian-last-name-field-only-accept-alphabet-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 156,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 157,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "User input Guardian Last Name with Special and Numeric Characters",
  "keyword": "When "
});
formatter.step({
  "line": 160,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "PR: Error Message Guardian Last Name is invalid",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8132633640,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2871564637,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1957688798,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_lname_characters()"
});
formatter.result({
  "duration": 279109402,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5693475916,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_invalid_glname_characters()"
});
formatter.result({
  "duration": 155794501,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 394229994,
  "status": "passed"
});
formatter.scenario({
  "line": 164,
  "name": "Guardian Birthdate Cannot be equal to the Current Date",
  "description": "",
  "id": "parent-full-registration-action;guardian-birthdate-cannot-be-equal-to-the-current-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 165,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 166,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 167,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 168,
  "name": "User select Guardian birthdate equal to the current date",
  "keyword": "When "
});
formatter.step({
  "line": 169,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "PR: Guardian Birthdate Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8290607274,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2841028113,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1914504313,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_equal_gbirthdate()"
});
formatter.result({
  "duration": 1400851610,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5406094928,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_equal_OR_greater_pgbirthdate()"
});
formatter.result({
  "duration": 174689166,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 361489283,
  "status": "passed"
});
formatter.scenario({
  "line": 173,
  "name": "Guardian Birthdate Cannot be greater than the Current Date",
  "description": "",
  "id": "parent-full-registration-action;guardian-birthdate-cannot-be-greater-than-the-current-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 174,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "User select Guardian birthdate greater than the current date",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "PR: Guardian Birthdate Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8366960809,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2845441316,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 2005878434,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_greater_gbirthdate()"
});
formatter.result({
  "duration": 1430251930,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5432273491,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_equal_OR_greater_pgbirthdate()"
});
formatter.result({
  "duration": 145498337,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 385273487,
  "status": "passed"
});
formatter.scenario({
  "line": 182,
  "name": "Non-Leap Year as Guardian Birhtdate",
  "description": "",
  "id": "parent-full-registration-action;non-leap-year-as-guardian-birhtdate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 183,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 184,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 186,
  "name": "User select a non leap year for guardian birthdate",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 188,
  "name": "PR: Guardian Birthdate Validation Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 189,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8464521866,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2882210658,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1915247494,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_non_leap_year_gbirthdate()"
});
formatter.result({
  "duration": 1349885459,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5473539048,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.validation_message_non_leap_year_pgbirthdate()"
});
formatter.result({
  "duration": 155932150,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 427241172,
  "status": "passed"
});
formatter.scenario({
  "line": 191,
  "name": "Guardian Mobile Number field only accept Numeric Characters",
  "description": "",
  "id": "parent-full-registration-action;guardian-mobile-number-field-only-accept-numeric-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 192,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 193,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 194,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 195,
  "name": "PR: User input Latin or Special Characters as Mobile Number",
  "keyword": "When "
});
formatter.step({
  "line": 196,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 197,
  "name": "PR: Mobile Number Format Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 198,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8380680074,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 3050611162,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 2461112653,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_gmobile_number_format()"
});
formatter.result({
  "duration": 283741756,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5812404480,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_invalid_gmobile_number_format()"
});
formatter.result({
  "duration": 137233996,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 505169817,
  "status": "passed"
});
formatter.scenario({
  "line": 200,
  "name": "Guardian Email field only accept Valid Format",
  "description": "",
  "id": "parent-full-registration-action;guardian-email-field-only-accept-valid-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 201,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 202,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 203,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 204,
  "name": "User input Email Invalid Format",
  "keyword": "When "
});
formatter.step({
  "line": 205,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 206,
  "name": "PR: Email Format Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 207,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8105295632,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2892034109,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1984843577,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_email_format()"
});
formatter.result({
  "duration": 358704921,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5633936924,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gemail_format()"
});
formatter.result({
  "duration": 172397139,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 537716732,
  "status": "passed"
});
formatter.scenario({
  "line": 209,
  "name": "Guardian Email is unique",
  "description": "",
  "id": "parent-full-registration-action;guardian-email-is-unique",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 210,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 211,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 212,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 213,
  "name": "User input existing Guardian Email",
  "keyword": "When "
});
formatter.step({
  "line": 214,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "PR: Existing Email Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 216,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8432255681,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2789055861,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1932372954,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_existing_gemail_format()"
});
formatter.result({
  "duration": 305729285,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5789458845,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gemail_exists()"
});
formatter.result({
  "duration": 127915257,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 506979470,
  "status": "passed"
});
formatter.scenario({
  "line": 218,
  "name": "Guardian Password and Confirm Password should be matched",
  "description": "",
  "id": "parent-full-registration-action;guardian-password-and-confirm-password-should-be-matched",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 219,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 220,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 222,
  "name": "User input differenet Password and Confirm Password",
  "keyword": "When "
});
formatter.step({
  "line": 223,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 224,
  "name": "PR: Password Unmatched Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 225,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8254571453,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2845924595,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1980898863,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_unmatched_password()"
});
formatter.result({
  "duration": 637958010,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5466853438,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gunmatched_password()"
});
formatter.result({
  "duration": 155592557,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 414769498,
  "status": "passed"
});
formatter.scenario({
  "line": 227,
  "name": "Guardian Password should contain alphanumeric and special character",
  "description": "",
  "id": "parent-full-registration-action;guardian-password-should-contain-alphanumeric-and-special-character",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 228,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 229,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 230,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 231,
  "name": "User input invalid password character",
  "keyword": "When "
});
formatter.step({
  "line": 232,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 233,
  "name": "PR: Invalid Password Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 234,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8519579738,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2920596767,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1979077133,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_password()"
});
formatter.result({
  "duration": 562190084,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5487913953,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_pinvalid_password()"
});
formatter.result({
  "duration": 155790276,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 431283086,
  "status": "passed"
});
formatter.scenario({
  "line": 236,
  "name": "Guardian Password must be 8-20 characters",
  "description": "",
  "id": "parent-full-registration-action;guardian-password-must-be-8-20-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 237,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 238,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 239,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "User input less than 8 character Password",
  "keyword": "When "
});
formatter.step({
  "line": 241,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 242,
  "name": "PR: Password Length Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 243,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8756107471,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2897344442,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 2025733620,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_less_minimum_length_password()"
});
formatter.result({
  "duration": 613430927,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5487895841,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_plength_password()"
});
formatter.result({
  "duration": 155775183,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 393354598,
  "status": "passed"
});
formatter.scenario({
  "line": 245,
  "name": "Student First Name field only accept Alphabet Characters",
  "description": "",
  "id": "parent-full-registration-action;student-first-name-field-only-accept-alphabet-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 246,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 247,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 248,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 249,
  "name": "User input First Name Special and Numeric Characters",
  "keyword": "When "
});
formatter.step({
  "line": 250,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 251,
  "name": "PR: Student FirstName Error Message Invalid Name is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 252,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8348693109,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2944748334,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 2127192301,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_firstname_invalid_characters()"
});
formatter.result({
  "duration": 307420006,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5791187903,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_sfirstname_invalid_inputs()"
});
formatter.result({
  "duration": 130193701,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 569098768,
  "status": "passed"
});
formatter.scenario({
  "line": 254,
  "name": "Student Last Name field only accept Alphabet Characters",
  "description": "",
  "id": "parent-full-registration-action;student-last-name-field-only-accept-alphabet-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 255,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 256,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 257,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 258,
  "name": "User input Last Name Special and Numeric Characters",
  "keyword": "When "
});
formatter.step({
  "line": 259,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 260,
  "name": "PR: Student LastName Error Message Invalid Name is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 261,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8458923861,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2870527444,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1936672354,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_lastname_invalid_characters()"
});
formatter.result({
  "duration": 282278637,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5660825160,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_slastname_invalid_inputs()"
});
formatter.result({
  "duration": 170013345,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 445006576,
  "status": "passed"
});
formatter.scenario({
  "line": 263,
  "name": "Student Birthdate Cannot be equal to the Current Date",
  "description": "",
  "id": "parent-full-registration-action;student-birthdate-cannot-be-equal-to-the-current-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 264,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 265,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 266,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 267,
  "name": "User select birthdate equal to the current date",
  "keyword": "When "
});
formatter.step({
  "line": 268,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 269,
  "name": "PR: Student Birthdate Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 270,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8618224474,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2818611942,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1999123698,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_equal_birthdate()"
});
formatter.result({
  "duration": 1373820592,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5457223782,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_equal_OR_greater_sbirthdate_inputs()"
});
formatter.result({
  "duration": 157956427,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 347572905,
  "status": "passed"
});
formatter.scenario({
  "line": 272,
  "name": "Student Birthdate Cannot be greater than the Current Date",
  "description": "",
  "id": "parent-full-registration-action;student-birthdate-cannot-be-greater-than-the-current-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 273,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 274,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 276,
  "name": "User select birthdate greater than the current date",
  "keyword": "When "
});
formatter.step({
  "line": 277,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 278,
  "name": "PR: Student Birthdate Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 279,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8132367400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2807778164,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1949227644,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_greater_birthdate()"
});
formatter.result({
  "duration": 1325720308,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5457025459,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_equal_OR_greater_sbirthdate_inputs()"
});
formatter.result({
  "duration": 138327638,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 365913957,
  "status": "passed"
});
formatter.scenario({
  "line": 281,
  "name": "Non-Leap Year as Student Birhtdate",
  "description": "",
  "id": "parent-full-registration-action;non-leap-year-as-student-birhtdate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 282,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 283,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 284,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 285,
  "name": "User select a non leap year birthdate",
  "keyword": "When "
});
formatter.step({
  "line": 286,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 287,
  "name": "PR: Birthdate Validation Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 288,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8307894230,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2726478038,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1922404006,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_non_leap_year_birthdate()"
});
formatter.result({
  "duration": 1375610928,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5490620738,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.validation_message_non_leap_year_sbirthdate()"
});
formatter.result({
  "duration": 155899851,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 357123775,
  "status": "passed"
});
formatter.scenario({
  "line": 290,
  "name": "Successful Parent Registration",
  "description": "",
  "id": "parent-full-registration-action;successful-parent-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 291,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 292,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 293,
  "name": "Click Parent RadioButton",
  "keyword": "When "
});
formatter.step({
  "line": 294,
  "name": "Input all Valid Guardian Information",
  "keyword": "When "
});
formatter.step({
  "line": 295,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 296,
  "name": "Page will redirect to Thank You page",
  "keyword": "Then "
});
formatter.step({
  "line": 297,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8379113116,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2796868317,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_parent_radiobutton()"
});
formatter.result({
  "duration": 1975388699,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_valid_information()"
});
formatter.result({
  "duration": 7997446561,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5719332092,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.successful_registration()"
});
formatter.result({
  "duration": 155675568,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 414681656,
  "status": "passed"
});
formatter.uri("QuickRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "Quick Registration Action",
  "description": "",
  "id": "quick-registration-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful Quick Registration",
  "description": "",
  "id": "quick-registration-action;successful-quick-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Access My Learning Coach Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User select a Subject",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters email and password",
  "rows": [
    {
      "cells": [
        "email",
        "testemail32@dagobah.com"
      ],
      "line": 7
    },
    {
      "cells": [
        "pass",
        "login@123"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User will redirect to Registration Notification Slide",
  "keyword": "Then "
});
formatter.match({
  "location": "QuickRegistrationSteps.access_baseURL()"
});
formatter.result({
  "duration": 8281817394,
  "status": "passed"
});
formatter.match({
  "location": "QuickRegistrationSteps.select_subjectL()"
});
formatter.result({
  "duration": 500718277,
  "status": "passed"
});
formatter.match({
  "location": "QuickRegistrationSteps.input_required_informations(DataTable)"
});
formatter.result({
  "duration": 2488706337,
  "status": "passed"
});
formatter.match({
  "location": "QuickRegistrationSteps.registration_notification()"
});
formatter.result({
  "duration": 835310571,
  "status": "passed"
});
formatter.uri("Student_Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Student Full Registration Action",
  "description": "",
  "id": "student-full-registration-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "First Name Field is Required",
  "description": "",
  "id": "student-full-registration-action;first-name-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "SR: Error Message First Name is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8251342148,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2943979193,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5406935610,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_firstname_required()"
});
formatter.result({
  "duration": 5129699555,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 440602731,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Last Name Field is Required",
  "description": "",
  "id": "student-full-registration-action;last-name-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "SR: Error Message Last Name is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 7934897716,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2918701082,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5427051301,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_lastname_required()"
});
formatter.result({
  "duration": 130573442,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 506231158,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Birthdate Field is Required",
  "description": "",
  "id": "student-full-registration-action;birthdate-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "SR: Error Message Invalid Birthdate is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 7978647887,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2863028018,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5413469686,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_birthdate_required()"
});
formatter.result({
  "duration": 154509783,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 562564089,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Gender Field is Required",
  "description": "",
  "id": "student-full-registration-action;gender-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "SR: Error Message Gender is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8247771439,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2847610788,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5480125043,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gender_required()"
});
formatter.result({
  "duration": 153677251,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 501668535,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Contact Number Field is Required",
  "description": "",
  "id": "student-full-registration-action;contact-number-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "SR: Error Message Contact Number is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8345791625,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2896527606,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5431644413,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_contact_required()"
});
formatter.result({
  "duration": 154833076,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 507032297,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Skype ID Field is Required",
  "description": "",
  "id": "student-full-registration-action;skype-id-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "SR: Error Message Skype ID is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 7876956773,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2852384714,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5466753220,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_skype_required()"
});
formatter.result({
  "duration": 155279225,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 495135667,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Address Field is Required",
  "description": "",
  "id": "student-full-registration-action;address-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "SR: Error Message Address is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8249538531,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2841196551,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5432660174,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_address_required()"
});
formatter.result({
  "duration": 156199900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 397000471,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Country Field is Required",
  "description": "",
  "id": "student-full-registration-action;country-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "SR: Error Message Country is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8237579718,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2851785521,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5389949308,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_country_required()"
});
formatter.result({
  "duration": 154453636,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 334215874,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Zip Code Field is Required",
  "description": "",
  "id": "student-full-registration-action;zip-code-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "SR: Error Message ZIP Code is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 7997959422,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2761911044,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5415085847,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_zip_required()"
});
formatter.result({
  "duration": 128407893,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 356727131,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Email Field is Required",
  "description": "",
  "id": "student-full-registration-action;email-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "SR: Error Message Email is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8519058424,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2867114910,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5381165465,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_email_required()"
});
formatter.result({
  "duration": 128837743,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 531309740,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Password Field is Required",
  "description": "",
  "id": "student-full-registration-action;password-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "SR: Error Message Password is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8390771275,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2899122703,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5409664129,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_password_required()"
});
formatter.result({
  "duration": 593066804,
  "error_message": "java.lang.Exception: Test Condition Failed\r\n\tat stepDefinition.RegistrationsSteps.error_message_password_required(RegistrationsSteps.java:458)\r\n\tat ✽.Then SR: Error Message Password is required is displayed(Student_Registration.feature:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 80,
  "name": "Confirm Password Field is Required",
  "description": "",
  "id": "student-full-registration-action;confirm-password-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 81,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 84,
  "name": "SR: Error Message Password Confirmation is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 85,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8093162948,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2893645441,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5381734473,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_passwordconfirmation_required()"
});
formatter.result({
  "duration": 180021837,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 400666267,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Level Field is Required",
  "description": "",
  "id": "student-full-registration-action;level-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 88,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "SR: Error Message Level is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8220324759,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2890506090,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5456410871,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_level_required()"
});
formatter.result({
  "duration": 157480695,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 617561286,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "First Name field only accept Alphabet Characters",
  "description": "",
  "id": "student-full-registration-action;first-name-field-only-accept-alphabet-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 95,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 96,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 97,
  "name": "User input First Name Special and Numeric Characters",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "SR: FirstName Error Message Invalid Name is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8068336117,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2788563527,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_firstname_invalid_characters()"
});
formatter.result({
  "duration": 258167217,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5687791276,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_firstname_invalid_inputs()"
});
formatter.result({
  "duration": 155527959,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 322266720,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "Last Name field only accept Alphabet Characters",
  "description": "",
  "id": "student-full-registration-action;last-name-field-only-accept-alphabet-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 103,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "User input Last Name Special and Numeric Characters",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "SR: LastName Error Message Invalid Name is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8199632817,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2764865655,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_lastname_invalid_characters()"
});
formatter.result({
  "duration": 255118726,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5610885034,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_lastname_invalid_inputs()"
});
formatter.result({
  "duration": 154476880,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 477623524,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Birthdate Cannot be equal to the Current Date",
  "description": "",
  "id": "student-full-registration-action;birthdate-cannot-be-equal-to-the-current-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 111,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "User select birthdate equal to the current date",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "SR: Birthdate Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 116,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8168102266,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2797486527,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_equal_birthdate()"
});
formatter.result({
  "duration": 1302143784,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5482954685,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_equal_OR_greater_birthdate_inputs()"
});
formatter.result({
  "duration": 154934501,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 312499415,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Birthdate Cannot be greater than the Current Date",
  "description": "",
  "id": "student-full-registration-action;birthdate-cannot-be-greater-than-the-current-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 119,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "User select birthdate greater than the current date",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 123,
  "name": "SR: Birthdate Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8487376641,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2896738003,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_greater_birthdate()"
});
formatter.result({
  "duration": 1355470786,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5432202251,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_equal_OR_greater_birthdate_inputs()"
});
formatter.result({
  "duration": 137427489,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 275627440,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "Non-Leap Year Birhtdate",
  "description": "",
  "id": "student-full-registration-action;non-leap-year-birhtdate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 127,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 128,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "User select a non leap year birthdate",
  "keyword": "When "
});
formatter.step({
  "line": 130,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "SR: Birthdate Validation Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8528309547,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2882073312,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_non_leap_year_birthdate()"
});
formatter.result({
  "duration": 1299996951,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5434602647,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.validation_message_non_leap_year_birthdate()"
});
formatter.result({
  "duration": 173968928,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 283061664,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "Mobile Number field only accept Numeric Characters",
  "description": "",
  "id": "student-full-registration-action;mobile-number-field-only-accept-numeric-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 135,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "User input Latin or Special Characters as Mobile Number",
  "keyword": "When "
});
formatter.step({
  "line": 138,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 139,
  "name": "SR: Mobile Number Format Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8476714319,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2841031433,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_mobile_number_format()"
});
formatter.result({
  "duration": 279916578,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5637494654,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_invalid_mobile_number_format()"
});
formatter.result({
  "duration": 154484125,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 644047746,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "Email field only accept Valid Format",
  "description": "",
  "id": "student-full-registration-action;email-field-only-accept-valid-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 143,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 144,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "User input Email Invalid Format",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 147,
  "name": "SR: Email Format Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8344034192,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2917561558,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_email_format()"
});
formatter.result({
  "duration": 332377240,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5711529597,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_email_format()"
});
formatter.result({
  "duration": 127076084,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 415797333,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "Email is unique",
  "description": "",
  "id": "student-full-registration-action;email-is-unique",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 151,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "User input existing Email",
  "keyword": "When "
});
formatter.step({
  "line": 154,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 155,
  "name": "SR: Existing Email Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 7997681408,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2794650245,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_existing_email_format()"
});
formatter.result({
  "duration": 300610936,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5738082466,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_email_exists()"
});
formatter.result({
  "duration": 154412583,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 575789207,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "Password and Confirm Password should be matched",
  "description": "",
  "id": "student-full-registration-action;password-and-confirm-password-should-be-matched",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 159,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 160,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 161,
  "name": "User input differenet Password and Confirm Password",
  "keyword": "When "
});
formatter.step({
  "line": 162,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 163,
  "name": "SR: Password Unmatched Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 164,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8513761977,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2841806310,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_unmatched_password()"
});
formatter.result({
  "duration": 562612386,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5483264695,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_unmatched_password()"
});
formatter.result({
  "duration": 129097343,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 269474614,
  "status": "passed"
});
formatter.scenario({
  "line": 166,
  "name": "Password should contain alphanumeric and special character",
  "description": "",
  "id": "student-full-registration-action;password-should-contain-alphanumeric-and-special-character",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 167,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 168,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 169,
  "name": "User input invalid password character",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "SR: Invalid Password Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 7984023422,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2854839445,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_password()"
});
formatter.result({
  "duration": 566939861,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5457009159,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_invalid_password()"
});
formatter.result({
  "duration": 128505395,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 374762398,
  "status": "passed"
});
formatter.scenario({
  "line": 174,
  "name": "Password must be 8-20 characters",
  "description": "",
  "id": "student-full-registration-action;password-must-be-8-20-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 175,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 176,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "User input less than 8 character Password",
  "keyword": "When "
});
formatter.step({
  "line": 178,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "SR: Password Length Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8349605030,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2821042222,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_less_minimum_length_password()"
});
formatter.result({
  "duration": 584892418,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5456617042,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_length_password()"
});
formatter.result({
  "duration": 128598065,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 295339845,
  "status": "passed"
});
formatter.scenario({
  "line": 182,
  "name": "Guardian Email Field is Required",
  "description": "",
  "id": "student-full-registration-action;guardian-email-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 183,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 184,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "Select Student Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 186,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "SR: Error Message Guardian Email is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 188,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8162068374,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2914551101,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_student_birthdate()"
});
formatter.result({
  "duration": 1270681756,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5485009148,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_guardian_email_required()"
});
formatter.result({
  "duration": 174813231,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 299739162,
  "status": "passed"
});
formatter.scenario({
  "line": 190,
  "name": "Guardian First Name Field is Required",
  "description": "",
  "id": "student-full-registration-action;guardian-first-name-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 191,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 192,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 193,
  "name": "Select Student Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 194,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 195,
  "name": "SR: Error Message Guardian First Name is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 196,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8667850061,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2672490866,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_student_birthdate()"
});
formatter.result({
  "duration": 1325256649,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5435158372,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_guardian_firstname_required()"
});
formatter.result({
  "duration": 531754984,
  "error_message": "java.lang.Exception: Test Condition Failed\r\n\tat stepDefinition.RegistrationsSteps.error_message_guardian_firstname_required(RegistrationsSteps.java:647)\r\n\tat ✽.Then SR: Error Message Guardian First Name is required is displayed(Student_Registration.feature:195)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 198,
  "name": "Guardian Last Name Field is Required",
  "description": "",
  "id": "student-full-registration-action;guardian-last-name-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 199,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 200,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 201,
  "name": "Select Student Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 202,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 203,
  "name": "SR: Error Message Guardian Last Name is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 204,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8259492687,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2798475423,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_student_birthdate()"
});
formatter.result({
  "duration": 1250712769,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5482877408,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_guardian_lastname_required()"
});
formatter.result({
  "duration": 147941597,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 372710349,
  "status": "passed"
});
formatter.scenario({
  "line": 206,
  "name": "Guardian Birthdate Field is Required",
  "description": "",
  "id": "student-full-registration-action;guardian-birthdate-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 207,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 208,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 209,
  "name": "Select Student Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 210,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "SR: Error Message Guardian Birthdate is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 212,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8145507393,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2946262166,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_student_birthdate()"
});
formatter.result({
  "duration": 1247801624,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5534038560,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_guardian_birthdate_required()"
});
formatter.result({
  "duration": 148014949,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 381890535,
  "status": "passed"
});
formatter.scenario({
  "line": 214,
  "name": "Guardian Gender Field is Required",
  "description": "",
  "id": "student-full-registration-action;guardian-gender-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 215,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 216,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 217,
  "name": "Select Student Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 218,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 219,
  "name": "SR: Error Message Guardian Gender is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 220,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8144549891,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2943741327,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_student_birthdate()"
});
formatter.result({
  "duration": 1253271038,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5482127284,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_guardian_gender_required()"
});
formatter.result({
  "duration": 139070818,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 354769262,
  "status": "passed"
});
formatter.scenario({
  "line": 222,
  "name": "Guardian Email field only accept Valid Format",
  "description": "",
  "id": "student-full-registration-action;guardian-email-field-only-accept-valid-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 223,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 224,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 225,
  "name": "Select Student Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 226,
  "name": "User input Guardian Email using Invalid Format",
  "keyword": "When "
});
formatter.step({
  "line": 227,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 228,
  "name": "SR: Guardian Email Format Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 229,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8291385169,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2845094176,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_student_birthdate()"
});
formatter.result({
  "duration": 1252667919,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_gmail_format()"
});
formatter.result({
  "duration": 331596025,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5662089353,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_gmail_format()"
});
formatter.result({
  "duration": 172831517,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 307260322,
  "status": "passed"
});
formatter.scenario({
  "line": 231,
  "name": "Guardian First Name Field only accept Alphabet Characters",
  "description": "",
  "id": "student-full-registration-action;guardian-first-name-field-only-accept-alphabet-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 232,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 233,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 234,
  "name": "Select Student Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 235,
  "name": "User input Guardian First Name with Special and Numeric Characters",
  "keyword": "When "
});
formatter.step({
  "line": 236,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 237,
  "name": "SR: Error Message Guardian First Name is invalid",
  "keyword": "Then "
});
formatter.step({
  "line": 238,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8671242371,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2908366581,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_student_birthdate()"
});
formatter.result({
  "duration": 1276557774,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_fname_characters()"
});
formatter.result({
  "duration": 280700812,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5660484963,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_invalid_fname_characters()"
});
formatter.result({
  "duration": 147020922,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 375062448,
  "status": "passed"
});
formatter.scenario({
  "line": 240,
  "name": "Guardian Last Name Field only accept Alphabet Characters",
  "description": "",
  "id": "student-full-registration-action;guardian-last-name-field-only-accept-alphabet-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 241,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 242,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 243,
  "name": "Select Student Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 244,
  "name": "User input Guardian Last Name with Special and Numeric Characters",
  "keyword": "When "
});
formatter.step({
  "line": 245,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 246,
  "name": "SR: Error Message Guardian Last Name is invalid",
  "keyword": "Then "
});
formatter.step({
  "line": 247,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8361439779,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2697284492,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_student_birthdate()"
});
formatter.result({
  "duration": 1285305092,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_lname_characters()"
});
formatter.result({
  "duration": 356375765,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5635258772,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_invalid_lname_characters()"
});
formatter.result({
  "duration": 133953979,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 323127626,
  "status": "passed"
});
formatter.scenario({
  "line": 249,
  "name": "Non-Leap Year Guardian Birhtdate",
  "description": "",
  "id": "student-full-registration-action;non-leap-year-guardian-birhtdate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 250,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 251,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 252,
  "name": "Select Student Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 253,
  "name": "User select a non leap year for guardian birthdate",
  "keyword": "When "
});
formatter.step({
  "line": 254,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 255,
  "name": "SR: Guardian Birthdate Validation Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 256,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8424706146,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2845727178,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_student_birthdate()"
});
formatter.result({
  "duration": 1263489322,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_non_leap_year_gbirthdate()"
});
formatter.result({
  "duration": 1327313829,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5434349386,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.validation_message_non_leap_year_gbirthdate()"
});
formatter.result({
  "duration": 171110307,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 472238631,
  "status": "passed"
});
formatter.scenario({
  "line": 258,
  "name": "Guardian must be at least 18 years old",
  "description": "",
  "id": "student-full-registration-action;guardian-must-be-at-least-18-years-old",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 259,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 260,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 261,
  "name": "Select Student Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 262,
  "name": "User select Guardian Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 263,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 264,
  "name": "SR: Error Message Guardian must be at least 18years old is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 265,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8696205340,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2847372318,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_student_birthdate()"
});
formatter.result({
  "duration": 1326472545,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.guardian_must_be_atleast_18yrsold()"
});
formatter.result({
  "duration": 1349882441,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5432891098,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_guardian_age()"
});
formatter.result({
  "duration": 150727469,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 408249308,
  "status": "passed"
});
formatter.scenario({
  "line": 267,
  "name": "Guardian Birthdate Cannot be equal to the Current Date",
  "description": "",
  "id": "student-full-registration-action;guardian-birthdate-cannot-be-equal-to-the-current-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 268,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 269,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 270,
  "name": "Select Student Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 271,
  "name": "User select Guardian birthdate equal to the current date",
  "keyword": "When "
});
formatter.step({
  "line": 272,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 273,
  "name": "SR: Guardian Birthdate Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 274,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8188616715,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2805546508,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_student_birthdate()"
});
formatter.result({
  "duration": 1390499600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_equal_gbirthdate()"
});
formatter.result({
  "duration": 1446268051,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5432889286,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_equal_OR_greater_gbirthdate()"
});
formatter.result({
  "duration": 135632626,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 261963416,
  "status": "passed"
});
formatter.scenario({
  "line": 276,
  "name": "Guardian Birthdate Cannot be greater than the Current Date",
  "description": "",
  "id": "student-full-registration-action;guardian-birthdate-cannot-be-greater-than-the-current-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 277,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 278,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 279,
  "name": "Select Student Birthdate less than 18 years old",
  "keyword": "When "
});
formatter.step({
  "line": 280,
  "name": "User select Guardian birthdate greater than the current date",
  "keyword": "When "
});
formatter.step({
  "line": 281,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 282,
  "name": "SR: Guardian Birthdate Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 283,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8328304235,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2734448366,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_student_birthdate()"
});
formatter.result({
  "duration": 1253417440,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_greater_gbirthdate()"
});
formatter.result({
  "duration": 1351350087,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5461151593,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_equal_OR_greater_gbirthdate()"
});
formatter.result({
  "duration": 124937100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 496940491,
  "status": "passed"
});
formatter.scenario({
  "line": 285,
  "name": "Successful Student Registration",
  "description": "",
  "id": "student-full-registration-action;successful-student-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 286,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 287,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 288,
  "name": "Input all Valid Student Information",
  "keyword": "When "
});
formatter.step({
  "line": 289,
  "name": "User click Join Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 290,
  "name": "Page will redirect to Thank You page",
  "keyword": "Then "
});
formatter.step({
  "line": 291,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8146128320,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2800630406,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_valid_student_information()"
});
formatter.result({
  "duration": 8419158552,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_field_blank()"
});
formatter.result({
  "duration": 5443150435,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.successful_registration()"
});
formatter.result({
  "duration": 155762807,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 410549184,
  "status": "passed"
});
formatter.uri("Tutor_Registration.feature");
formatter.feature({
  "line": 1,
  "name": "Tutor Registration Action",
  "description": "",
  "id": "tutor-registration-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "When Im a tutor link is clicked, it will redirect to Tutor Registration Form",
  "description": "",
  "id": "tutor-registration-action;when-im-a-tutor-link-is-clicked,-it-will-redirect-to-tutor-registration-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Page should redirected to Tutor Registration Form",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8292975974,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2856204157,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2549575931,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.tutor_registration_form()"
});
formatter.result({
  "duration": 75760681,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 266458725,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "First Name Field is Required",
  "description": "",
  "id": "tutor-registration-action;first-name-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "TR: Error Message First Name is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8111963733,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2893643328,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2477116397,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5456524371,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_tfirstname_required()"
});
formatter.result({
  "duration": 5164728672,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 332771470,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Last Name Field is Required",
  "description": "",
  "id": "tutor-registration-action;last-name-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "TR: Error Message Last Name is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8244351961,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2794777328,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2441210678,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5538997829,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_tlastname_required()"
});
formatter.result({
  "duration": 155973807,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 399926104,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Birthdate Field is Required",
  "description": "",
  "id": "tutor-registration-action;birthdate-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "TR: Error Message Invalid Birthdate is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8352513156,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2950279931,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2527823854,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5490201453,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_tbirthdate_required()"
});
formatter.result({
  "duration": 125002905,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 299083520,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Gender Field is Required",
  "description": "",
  "id": "tutor-registration-action;gender-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "TR: Error Message Gender is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8306040503,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2795386181,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2529323799,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5484510776,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_tgender_required()"
});
formatter.result({
  "duration": 173525192,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 471494847,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Address Field is Required",
  "description": "",
  "id": "tutor-registration-action;address-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "TR: Error Message Address is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8255612268,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2824918716,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2482074157,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5479495663,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_taddress_required()"
});
formatter.result({
  "duration": 147604419,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 378989956,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Country Field is Required",
  "description": "",
  "id": "tutor-registration-action;country-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "TR: Error Message Country is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 7993863173,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2837136526,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2297062866,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5480402453,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_tcountry_required()"
});
formatter.result({
  "duration": 135787480,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 332353695,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Zip Code Field is Required",
  "description": "",
  "id": "tutor-registration-action;zip-code-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "TR: Error Message ZIP Code is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8000145195,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2802141218,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2474195594,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5530399932,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_tzip_required()"
});
formatter.result({
  "duration": 135905207,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 431578608,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Email Field is Required",
  "description": "",
  "id": "tutor-registration-action;email-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "TR: Error Message Email is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8069565293,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2778045192,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2510168930,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5531395771,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_temail_required()"
});
formatter.result({
  "duration": 139977004,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 332228121,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Password Field is Required",
  "description": "",
  "id": "tutor-registration-action;password-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "TR: Error Message Password is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 7854344695,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2783002951,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2480951537,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5608364800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_tpassword_required()"
});
formatter.result({
  "duration": 455522495,
  "error_message": "java.lang.Exception: Test Condition Failed\r\n\tat stepDefinition.RegistrationsSteps.error_message_tpassword_required(RegistrationsSteps.java:1862)\r\n\tat ✽.Then TR: Error Message Password is required is displayed(Tutor_Registration.feature:79)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 82,
  "name": "Confirm Password Field is Required",
  "description": "",
  "id": "tutor-registration-action;confirm-password-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 83,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "TR: Error Message Password Confirmation is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8463047881,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 3012292671,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2479613389,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5581077504,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_tpasswordconfirmation_required()"
});
formatter.result({
  "duration": 161188751,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 489490571,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "About Me Field is Required",
  "description": "",
  "id": "tutor-registration-action;about-me-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 91,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "TR: Error Message About Me is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8202030194,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2911502008,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2544050372,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5545069453,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_aboutme_required()"
});
formatter.result({
  "duration": 155485095,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 406056290,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Contact Information Field is Required",
  "description": "",
  "id": "tutor-registration-action;contact-information-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 99,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "TR: Error Message Contact Information is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8475315497,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2853708675,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2523278436,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5557180706,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_contactinfo_required()"
});
formatter.result({
  "duration": 149407433,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 344549167,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "Skype Account is Required",
  "description": "",
  "id": "tutor-registration-action;skype-account-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 107,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "TR: Error Message Skype Account is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8716870719,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2800981168,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2503822008,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5580941063,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_skypeacct_required()"
});
formatter.result({
  "duration": 649074933,
  "error_message": "java.lang.Exception: Test Condition Failed\r\n\tat stepDefinition.RegistrationsSteps.error_message_skypeacct_required(RegistrationsSteps.java:2084)\r\n\tat ✽.Then TR: Error Message Skype Account is required is displayed(Tutor_Registration.feature:111)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 114,
  "name": "Educational Background Field is Required",
  "description": "",
  "id": "tutor-registration-action;educational-background-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 115,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 116,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 117,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 118,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "TR: Error Message Educational Background is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8263189575,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2951206039,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2623913339,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5561972140,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_education_required()"
});
formatter.result({
  "duration": 140724713,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 540642667,
  "status": "passed"
});
formatter.scenario({
  "line": 122,
  "name": "Work Experience Field is Required",
  "description": "",
  "id": "tutor-registration-action;work-experience-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 123,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 124,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 125,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 127,
  "name": "TR: Error Message Work Experience is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8702328281,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 5153059645,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2572914890,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5681930954,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_work_required()"
});
formatter.result({
  "duration": 155940300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 533517549,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "Documents Field is Required",
  "description": "",
  "id": "tutor-registration-action;documents-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 131,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 132,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 133,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 134,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 135,
  "name": "TR: Error Message Documents is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8472512118,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2842870067,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2514970024,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5462530190,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_documents_required()"
});
formatter.result({
  "duration": 125011056,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 492596113,
  "status": "passed"
});
formatter.scenario({
  "line": 138,
  "name": "Subject Matter Expertise Field is Required",
  "description": "",
  "id": "tutor-registration-action;subject-matter-expertise-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 139,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 140,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 143,
  "name": "TR: Error Message Subject Matter is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8163735550,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2748157367,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2492447900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5456929467,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_subject_required()"
});
formatter.result({
  "duration": 143643705,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 576622041,
  "status": "passed"
});
formatter.scenario({
  "line": 146,
  "name": "Level Field is Required",
  "description": "",
  "id": "tutor-registration-action;level-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 147,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 149,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 150,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "TR: Error Message Level is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8118357142,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2794182360,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2449801029,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5456398193,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_tlevel_required()"
});
formatter.result({
  "duration": 148919928,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 330920460,
  "status": "passed"
});
formatter.scenario({
  "line": 154,
  "name": "Rate Field is Required",
  "description": "",
  "id": "tutor-registration-action;rate-field-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 155,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 156,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 157,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "TR: Error Message Rate is required is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 160,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8982592602,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2917356292,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2472141130,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5482181317,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_rate_required()"
});
formatter.result({
  "duration": 149283670,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 430848406,
  "status": "passed"
});
formatter.scenario({
  "line": 162,
  "name": "First Name field only accept Alphabet Characters",
  "description": "",
  "id": "tutor-registration-action;first-name-field-only-accept-alphabet-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 163,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 164,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 165,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 166,
  "name": "TR: User input First Name Special and Numeric Characters",
  "keyword": "When "
});
formatter.step({
  "line": 167,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 168,
  "name": "TR: First Name Error Message Invalid Name is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 169,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8214883118,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2873698491,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2542532919,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_tfirstname_invalid_characters()"
});
formatter.result({
  "duration": 281466934,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5634449785,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_tfirstname_invalid_inputs()"
});
formatter.result({
  "duration": 180160088,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 478304220,
  "status": "passed"
});
formatter.scenario({
  "line": 171,
  "name": "Last Name field only accept Alphabet Characters",
  "description": "",
  "id": "tutor-registration-action;last-name-field-only-accept-alphabet-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 172,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 173,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 174,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 175,
  "name": "TR: User input Last Name Special and Numeric Characters",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 177,
  "name": "TR: Last Name Error Message Invalid Name is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8201533029,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 3188989211,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2543992716,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_tlastname_invalid_characters()"
});
formatter.result({
  "duration": 306427488,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5687112694,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_tlastname_invalid_inputs()"
});
formatter.result({
  "duration": 147628568,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 331868303,
  "status": "passed"
});
formatter.scenario({
  "line": 180,
  "name": "Birthdate Cannot be equal to the Current Date",
  "description": "",
  "id": "tutor-registration-action;birthdate-cannot-be-equal-to-the-current-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 181,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 182,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 184,
  "name": "User select birthdate equal to the current date",
  "keyword": "When "
});
formatter.step({
  "line": 185,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 186,
  "name": "TR: Birthdate Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 187,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8212032346,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2779008732,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2562450287,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_equal_birthdate()"
});
formatter.result({
  "duration": 1275934432,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5457961227,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_equal_OR_greater_tbirthdate_inputs()"
});
formatter.result({
  "duration": 137469146,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 448405527,
  "status": "passed"
});
formatter.scenario({
  "line": 189,
  "name": "Birthdate Cannot be greater than the Current Date",
  "description": "",
  "id": "tutor-registration-action;birthdate-cannot-be-greater-than-the-current-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 190,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 191,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 192,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 193,
  "name": "User select birthdate greater than the current date",
  "keyword": "When "
});
formatter.step({
  "line": 194,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 195,
  "name": "TR: Birthdate Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 196,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8332683930,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2825225407,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2536053179,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.select_greater_birthdate()"
});
formatter.result({
  "duration": 1472513324,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5531189298,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_equal_OR_greater_tbirthdate_inputs()"
});
formatter.result({
  "duration": 155914341,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 424265430,
  "status": "passed"
});
formatter.scenario({
  "line": 198,
  "name": "Non-Leap Year Birhtdate",
  "description": "",
  "id": "tutor-registration-action;non-leap-year-birhtdate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 199,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 200,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 201,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 202,
  "name": "User select a non leap year birthdate",
  "keyword": "When "
});
formatter.step({
  "line": 203,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 204,
  "name": "SR: Birthdate Validation Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 205,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8047415364,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2917116615,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2527119311,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_non_leap_year_birthdate()"
});
formatter.result({
  "duration": 1376206499,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5434338519,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.validation_message_non_leap_year_birthdate()"
});
formatter.result({
  "duration": 10073294178,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 460586509,
  "status": "passed"
});
formatter.scenario({
  "line": 207,
  "name": "Email field only accept Valid Format",
  "description": "",
  "id": "tutor-registration-action;email-field-only-accept-valid-format",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 208,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 209,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 210,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "User input Email Invalid Format",
  "keyword": "When "
});
formatter.step({
  "line": 212,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 213,
  "name": "TR: Email Format Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 214,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8137119290,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2971763051,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2451600721,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_email_format()"
});
formatter.result({
  "duration": 305466968,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5664121780,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_temail_format()"
});
formatter.result({
  "duration": 155878117,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 564412079,
  "status": "passed"
});
formatter.scenario({
  "line": 216,
  "name": "Email should be unique",
  "description": "",
  "id": "tutor-registration-action;email-should-be-unique",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 217,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 218,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 219,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 220,
  "name": "User input existing Email",
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 222,
  "name": "TR: Existing Email Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 223,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8137554874,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2929950824,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2585277291,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_existing_email_format()"
});
formatter.result({
  "duration": 279466805,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5658065550,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_temail_exists()"
});
formatter.result({
  "duration": 148798277,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 547163461,
  "status": "passed"
});
formatter.scenario({
  "line": 225,
  "name": "Password and Confirm Password should be matched",
  "description": "",
  "id": "tutor-registration-action;password-and-confirm-password-should-be-matched",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 226,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 227,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 228,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 229,
  "name": "User input differenet Password and Confirm Password",
  "keyword": "When "
});
formatter.step({
  "line": 230,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 231,
  "name": "TR: Password Unmatched Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 232,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8347507099,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2786379263,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2570582413,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_unmatched_password()"
});
formatter.result({
  "duration": 586308446,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5496001705,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_unmatched_tpassword()"
});
formatter.result({
  "duration": 10087331302,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 403911269,
  "status": "passed"
});
formatter.scenario({
  "line": 234,
  "name": "Password should contain alphanumeric and special character",
  "description": "",
  "id": "tutor-registration-action;password-should-contain-alphanumeric-and-special-character",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 235,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 236,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 237,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "User input invalid password character",
  "keyword": "When "
});
formatter.step({
  "line": 239,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 240,
  "name": "TR: Invalid Password Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 241,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8579473718,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2876895496,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2566548952,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_password()"
});
formatter.result({
  "duration": 611913775,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5481554051,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_invalid_tpassword()"
});
formatter.result({
  "duration": 160391235,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 496315036,
  "status": "passed"
});
formatter.scenario({
  "line": 243,
  "name": "Password must be 8-20 characters",
  "description": "",
  "id": "tutor-registration-action;password-must-be-8-20-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 244,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 245,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 246,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 247,
  "name": "User input less than 8 character Password",
  "keyword": "When "
});
formatter.step({
  "line": 248,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 249,
  "name": "TR: Password Length Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 250,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8251802788,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2971719582,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2468013488,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_less_minimum_length_password()"
});
formatter.result({
  "duration": 642866867,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5459156897,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_length_tpassword()"
});
formatter.result({
  "duration": 143889119,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 528584543,
  "status": "passed"
});
formatter.scenario({
  "line": 252,
  "name": "Contact Type is Required",
  "description": "",
  "id": "tutor-registration-action;contact-type-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 253,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 254,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 255,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 256,
  "name": "User input valid Contact Number",
  "keyword": "When "
});
formatter.step({
  "line": 257,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 258,
  "name": "TR: Contact Type Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 259,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8106351541,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2939433172,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2500665452,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_valid_contact_information()"
});
formatter.result({
  "duration": 330023633,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5641985434,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_contact_type()"
});
formatter.result({
  "duration": 140517334,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 552483754,
  "status": "passed"
});
formatter.scenario({
  "line": 261,
  "name": "Contact Information Field only accept Numeric Characters",
  "description": "",
  "id": "tutor-registration-action;contact-information-field-only-accept-numeric-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 262,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 263,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 264,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 265,
  "name": "User input invalid Contact Number",
  "keyword": "When "
});
formatter.step({
  "line": 266,
  "name": "User click Continue Now Button",
  "keyword": "When "
});
formatter.step({
  "line": 267,
  "name": "TR: Invalid Contact Number Error Message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 268,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8800858914,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2944200458,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2600900088,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.input_invalid_contact_information()"
});
formatter.result({
  "duration": 796948310,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.leave_tfield_blank()"
});
formatter.result({
  "duration": 5660836027,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.error_message_invalid_contact_type()"
});
formatter.result({
  "duration": 172333144,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 441135817,
  "status": "passed"
});
formatter.scenario({
  "line": 270,
  "name": "New Contact Number field is diplayed upon clicking the Add Link",
  "description": "",
  "id": "tutor-registration-action;new-contact-number-field-is-diplayed-upon-clicking-the-add-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 271,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 272,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 273,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 274,
  "name": "Click Contact Information Add Button",
  "keyword": "When "
});
formatter.step({
  "line": 275,
  "name": "Additional Contact Information field is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 276,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8439976068,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2945756548,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2603546802,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.add_contact_information()"
});
formatter.result({
  "duration": 178558718,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.additional_contact_field_is_displayed()"
});
formatter.result({
  "duration": 76550046,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 659243712,
  "status": "passed"
});
formatter.scenario({
  "line": 278,
  "name": "Additional Contact Number field will be removed upon clicking the X Button",
  "description": "",
  "id": "tutor-registration-action;additional-contact-number-field-will-be-removed-upon-clicking-the-x-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 279,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 280,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 281,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 282,
  "name": "Click Contact Information Add Button",
  "keyword": "When "
});
formatter.step({
  "line": 283,
  "name": "Remove Additional Information",
  "keyword": "When "
});
formatter.step({
  "line": 284,
  "name": "Additional Contact Information field will be removed",
  "keyword": "Then "
});
formatter.step({
  "line": 285,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8350138720,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2746218516,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2557468380,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.add_contact_information()"
});
formatter.result({
  "duration": 203595945,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.remove_additional_information()"
});
formatter.result({
  "duration": 203884524,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.additional_contact_field_is_removed()"
});
formatter.result({
  "duration": 10073126041,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 547230172,
  "status": "passed"
});
formatter.scenario({
  "line": 287,
  "name": "New Social Media Account field is diplayed upon clicking the Add Link",
  "description": "",
  "id": "tutor-registration-action;new-social-media-account-field-is-diplayed-upon-clicking-the-add-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 288,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 289,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 290,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 291,
  "name": "Click Social Media Account Add Button",
  "keyword": "When "
});
formatter.step({
  "line": 292,
  "name": "Additional Social Media Account field is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 293,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8294290879,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2942660666,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2651936874,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.add_social_media()"
});
formatter.result({
  "duration": 204250077,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.additional_social_media_field_is_displayed()"
});
formatter.result({
  "duration": 76806326,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 520394157,
  "status": "passed"
});
formatter.scenario({
  "line": 295,
  "name": "Additional Social Media Account field will be removed upon clicking the X Button",
  "description": "",
  "id": "tutor-registration-action;additional-social-media-account-field-will-be-removed-upon-clicking-the-x-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 296,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 297,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 298,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 299,
  "name": "Click Social Media Account Add Button",
  "keyword": "When "
});
formatter.step({
  "line": 300,
  "name": "Remove Additional Information",
  "keyword": "When "
});
formatter.step({
  "line": 301,
  "name": "Additional Social Media Account field will be removed",
  "keyword": "Then "
});
formatter.step({
  "line": 302,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8342198880,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2790258173,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2541583567,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.add_social_media()"
});
formatter.result({
  "duration": 178574717,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.remove_additional_information()"
});
formatter.result({
  "duration": 203514744,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.additional_social_media_account_field_is_removed()"
});
formatter.result({
  "duration": 10084261379,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 522248789,
  "status": "passed"
});
formatter.scenario({
  "line": 304,
  "name": "New Educational Background field is diplayed upon clicking the Add Link",
  "description": "",
  "id": "tutor-registration-action;new-educational-background-field-is-diplayed-upon-clicking-the-add-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 305,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 306,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 307,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 308,
  "name": "Click Educational Background Add Button",
  "keyword": "When "
});
formatter.step({
  "line": 309,
  "name": "Additional Educational Background field is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 310,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8416660353,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2869510173,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2522982310,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.add_educational_background()"
});
formatter.result({
  "duration": 176743932,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.additional_educational_background_field_is_displayed()"
});
formatter.result({
  "duration": 75760984,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 376361655,
  "status": "passed"
});
formatter.scenario({
  "line": 312,
  "name": "Additional Educational Background field will be removed upon clicking the X Button",
  "description": "",
  "id": "tutor-registration-action;additional-educational-background-field-will-be-removed-upon-clicking-the-x-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 313,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 314,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 315,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 316,
  "name": "Click Educational Background Add Button",
  "keyword": "When "
});
formatter.step({
  "line": 317,
  "name": "Remove Additional Information",
  "keyword": "When "
});
formatter.step({
  "line": 318,
  "name": "Additional Educational Background field will be removed",
  "keyword": "Then "
});
formatter.step({
  "line": 319,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8233316238,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2953748007,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2635587196,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.add_educational_background()"
});
formatter.result({
  "duration": 177689963,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.remove_additional_information()"
});
formatter.result({
  "duration": 203179377,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.additional_educational_background_field_is_removed()"
});
formatter.result({
  "duration": 10095198393,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 405438080,
  "status": "passed"
});
formatter.scenario({
  "line": 321,
  "name": "New Work Experiences field is diplayed upon clicking the Add Link",
  "description": "",
  "id": "tutor-registration-action;new-work-experiences-field-is-diplayed-upon-clicking-the-add-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 322,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 323,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 324,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 325,
  "name": "Click Work Experiences Add Button",
  "keyword": "When "
});
formatter.step({
  "line": 326,
  "name": "Additional Work Experiences field is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 327,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8216915847,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2792541145,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2446465167,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.add_work_experiences()"
});
formatter.result({
  "duration": 203666580,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.additional_work_experiences_field_is_displayed()"
});
formatter.result({
  "duration": 51620283,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 460895615,
  "status": "passed"
});
formatter.scenario({
  "line": 329,
  "name": "Additional Work Experiences field will be removed upon clicking the X Button",
  "description": "",
  "id": "tutor-registration-action;additional-work-experiences-field-will-be-removed-upon-clicking-the-x-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 330,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 331,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 332,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 333,
  "name": "Click Work Experiences Add Button",
  "keyword": "When "
});
formatter.step({
  "line": 334,
  "name": "Remove Additional Information",
  "keyword": "When "
});
formatter.step({
  "line": 335,
  "name": "Additional Work Experiences field will be removed",
  "keyword": "Then "
});
formatter.step({
  "line": 336,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8184461301,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2745281239,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2596325994,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.add_work_experiences()"
});
formatter.result({
  "duration": 203521989,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.remove_additional_information()"
});
formatter.result({
  "duration": 201629021,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.additional_work_experiences_field_is_removed()"
});
formatter.result({
  "duration": 10096778030,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 531620053,
  "status": "passed"
});
formatter.scenario({
  "line": 338,
  "name": "New Documents field is diplayed upon clicking the Add Link",
  "description": "",
  "id": "tutor-registration-action;new-documents-field-is-diplayed-upon-clicking-the-add-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 339,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 340,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 341,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 342,
  "name": "Click Documents Add Button",
  "keyword": "When "
});
formatter.step({
  "line": 343,
  "name": "Additional Documents field is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 344,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8342758831,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 3006704928,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2549762782,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.add_documents()"
});
formatter.result({
  "duration": 178670709,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.additional_documents_field_is_displayed()"
});
formatter.result({
  "duration": 75792980,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 530820424,
  "status": "passed"
});
formatter.scenario({
  "line": 346,
  "name": "Additional Documents field will be removed upon clicking the X Button",
  "description": "",
  "id": "tutor-registration-action;additional-documents-field-will-be-removed-upon-clicking-the-x-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 347,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 348,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 349,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 350,
  "name": "Click Documents Add Button",
  "keyword": "When "
});
formatter.step({
  "line": 351,
  "name": "Remove Additional Documents",
  "keyword": "When "
});
formatter.step({
  "line": 352,
  "name": "Additional Documents field will be removed",
  "keyword": "Then "
});
formatter.step({
  "line": 353,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8571520294,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2937123636,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2598691072,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.add_documents()"
});
formatter.result({
  "duration": 177580689,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.remove_additional_documents()"
});
formatter.result({
  "duration": 254557266,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.additional_documents_field_is_removed()"
});
formatter.result({
  "duration": 10082429688,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 514074403,
  "status": "passed"
});
formatter.scenario({
  "line": 355,
  "name": "Documents should accepts the any file format execpt .exe file.",
  "description": "",
  "id": "tutor-registration-action;documents-should-accepts-the-any-file-format-execpt-.exe-file.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 356,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 357,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 358,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 359,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8345170396,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2920747697,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2638588597,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 418008161,
  "status": "passed"
});
formatter.scenario({
  "line": 361,
  "name": "Maximum Document file size is only upto 5MB",
  "description": "",
  "id": "tutor-registration-action;maximum-document-file-size-is-only-upto-5mb",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 362,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 363,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 364,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 365,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8124817563,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2844954415,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2501021043,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 440484402,
  "status": "passed"
});
formatter.scenario({
  "line": 367,
  "name": "User will redirect to Schedule Page upon pressing the Continue Button, if all required fields are valid",
  "description": "",
  "id": "tutor-registration-action;user-will-redirect-to-schedule-page-upon-pressing-the-continue-button,-if-all-required-fields-are-valid",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 368,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 369,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 370,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 371,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8053884539,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2843162570,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2582246308,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 417907339,
  "status": "passed"
});
formatter.scenario({
  "line": 373,
  "name": "Schedule is required",
  "description": "",
  "id": "tutor-registration-action;schedule-is-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 374,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 375,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 376,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 377,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8162676019,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2843191549,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2548985190,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 468841794,
  "status": "passed"
});
formatter.scenario({
  "line": 379,
  "name": "Selected Schedule will be added upon pressing the Add Button",
  "description": "",
  "id": "tutor-registration-action;selected-schedule-will-be-added-upon-pressing-the-add-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 380,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 381,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 382,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 383,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8228405871,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2842199635,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2553466311,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 620290408,
  "status": "passed"
});
formatter.scenario({
  "line": 385,
  "name": "Selected Schedule should be unique",
  "description": "",
  "id": "tutor-registration-action;selected-schedule-should-be-unique",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 386,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 387,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 388,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 389,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 8123765881,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2907047450,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2569094844,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 564163045,
  "status": "passed"
});
formatter.scenario({
  "line": 391,
  "name": "User will redirect to Thank you pageupon clicking Join Now button, if all required fields are valid.",
  "description": "",
  "id": "tutor-registration-action;user-will-redirect-to-thank-you-pageupon-clicking-join-now-button,-if-all-required-fields-are-valid.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 392,
  "name": "Access My Learning Coach",
  "keyword": "Given "
});
formatter.step({
  "line": 393,
  "name": "Click Sign Up Menu",
  "keyword": "When "
});
formatter.step({
  "line": 394,
  "name": "Click Im a Tutor Link",
  "keyword": "When "
});
formatter.step({
  "line": 395,
  "name": "Quit Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationsSteps.access_url()"
});
formatter.result({
  "duration": 7960760532,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_signup()"
});
formatter.result({
  "duration": 2997468899,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.click_tutor_link()"
});
formatter.result({
  "duration": 2546915030,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationsSteps.quit_browser()"
});
formatter.result({
  "duration": 497614546,
  "status": "passed"
});
});