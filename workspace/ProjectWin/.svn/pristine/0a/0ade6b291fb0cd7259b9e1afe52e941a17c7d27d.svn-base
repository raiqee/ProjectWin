Feature: Parent Full Registration Action

Scenario: When Parent Radio Button is clicked, it will redirect to Parent/Guardians Registration Form
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	Then Page should redirected to Parent Registration Form
	Then Quit Browser

Scenario: Guardian First Name Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message Guardian First Name is required is displayed
	Then Quit Browser

Scenario: Guardian Last Name Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message Guardian Last Name is required is displayed
	Then Quit Browser

Scenario: Guardian Birthdate Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button	
	Then PR: Error Message Invalid Birthdate is displayed
	Then Quit Browser

Scenario: Gender Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message Gender is required is displayed
	Then Quit Browser
	
Scenario: Guardian Contact Number Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message Contact Number is required is displayed
	Then Quit Browser
	
Scenario: Guardian Skype ID Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message Skype ID is required is displayed
	Then Quit Browser
	
Scenario: Guardian Address Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message Address is required is displayed
	Then Quit Browser
	
Scenario: Guardian Country Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button	
	Then PR: Error Message Country is required is displayed
	Then Quit Browser

Scenario: Guardian Zip Code Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message ZIP Code is required is displayed
	Then Quit Browser

Scenario: Guardian Email Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message Email is required is displayed
	Then Quit Browser

Scenario: Guardian Password Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message Password is required is displayed
	Then Quit Browser

Scenario: Guardian Confirm Password Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message Password Confirmation is required is displayed
	Then Quit Browser
	
Scenario: Student First Name Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message Student First Name is required is displayed
	Then Quit Browser

Scenario: Student Last Name Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message Student Last Name is required is displayed
	Then Quit Browser

Scenario: Student Birthdate Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button	
	Then PR: Error Message Invalid Student Birthdate is displayed
	Then Quit Browser

Scenario: Student Gender Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button
	Then PR: Error Message Student Gender is required is displayed
	Then Quit Browser
	
Scenario: Student Level Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User click Join Now Button	
	Then PR: Error Message Level is required is displayed
	Then Quit Browser

Scenario: Guardian First Name field only accept Alphabet Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User input Guardian First Name with Special and Numeric Characters
	When User click Join Now Button
	Then PR: Error Message Guardian First Name is invalid
	Then Quit Browser
	
Scenario: Guardian Last Name field only accept Alphabet Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User input Guardian Last Name with Special and Numeric Characters
	When User click Join Now Button
	Then PR: Error Message Guardian Last Name is invalid
	Then Quit Browser
	
Scenario: Guardian Birthdate Cannot be equal to the Current Date
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User select Guardian birthdate equal to the current date
	When User click Join Now Button
	Then PR: Guardian Birthdate Error Message is displayed
	Then Quit Browser
	
Scenario: Guardian Birthdate Cannot be greater than the Current Date
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User select Guardian birthdate greater than the current date
	When User click Join Now Button
	Then PR: Guardian Birthdate Error Message is displayed
	Then Quit Browser
	
Scenario: Non-Leap Year as Guardian Birhtdate
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User select a non leap year for guardian birthdate
	When User click Join Now Button
	Then PR: Guardian Birthdate Validation Message is displayed
	Then Quit Browser
	
Scenario: Guardian Mobile Number field only accept Numeric Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When PR: User input Latin or Special Characters as Mobile Number
	When User click Join Now Button
	Then PR: Mobile Number Format Error Message is displayed
	Then Quit Browser
	
Scenario: Guardian Email field only accept Valid Format
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User input Email Invalid Format
	When User click Join Now Button
	Then PR: Email Format Error Message is displayed
	Then Quit Browser
	
Scenario: Guardian Email is unique
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User input existing Guardian Email
	When User click Join Now Button
	Then PR: Existing Email Error Message is displayed
	Then Quit Browser
	
Scenario: Guardian Password and Confirm Password should be matched
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User input differenet Password and Confirm Password
	When User click Join Now Button
	Then PR: Password Unmatched Error Message is displayed
	Then Quit Browser
	
Scenario: Guardian Password should contain alphanumeric and special character
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User input invalid password character
	When User click Join Now Button
	Then PR: Invalid Password Error Message is displayed
	Then Quit Browser
	
Scenario: Guardian Password must be 8-20 characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User input less than 8 character Password
	When User click Join Now Button
	Then PR: Password Length Error Message is displayed
	Then Quit Browser
	
Scenario: Student First Name field only accept Alphabet Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User input First Name Special and Numeric Characters
	When User click Join Now Button
	Then PR: Student FirstName Error Message Invalid Name is displayed
	Then Quit Browser
	
Scenario: Student Last Name field only accept Alphabet Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User input Last Name Special and Numeric Characters
	When User click Join Now Button
	Then PR: Student LastName Error Message Invalid Name is displayed
	Then Quit Browser
	
Scenario: Student Birthdate Cannot be equal to the Current Date
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User select birthdate equal to the current date
	When User click Join Now Button
	Then PR: Student Birthdate Error Message is displayed
	Then Quit Browser
	
Scenario: Student Birthdate Cannot be greater than the Current Date
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User select birthdate greater than the current date
	When User click Join Now Button
	Then PR: Student Birthdate Error Message is displayed
	Then Quit Browser
	
Scenario: Non-Leap Year as Student Birhtdate
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When User select a non leap year birthdate
	When User click Join Now Button
	Then PR: Birthdate Validation Message is displayed
	Then Quit Browser	

Scenario: Successful Parent Registration
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Parent RadioButton
	When Input all Valid Guardian Information
	When User click Join Now Button
	Then Page will redirect to Thank You page
	Then Quit Browser
