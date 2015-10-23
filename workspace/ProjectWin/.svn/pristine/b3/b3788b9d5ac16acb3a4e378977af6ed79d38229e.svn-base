Feature: Student Full Registration Action

Scenario: First Name Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button
	Then SR: Error Message First Name is required is displayed
	Then Quit Browser	
	
Scenario: Last Name Field is Required	
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button
	Then SR: Error Message Last Name is required is displayed
	Then Quit Browser	
	
Scenario: Birthdate Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button	
	Then SR: Error Message Invalid Birthdate is displayed
	Then Quit Browser

Scenario: Gender Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button
	Then SR: Error Message Gender is required is displayed
	Then Quit Browser
	
Scenario: Contact Number Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button
	Then SR: Error Message Contact Number is required is displayed
	Then Quit Browser
	
Scenario: Skype ID Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button
	Then SR: Error Message Skype ID is required is displayed
	Then Quit Browser
	
Scenario: Address Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button
	Then SR: Error Message Address is required is displayed
	Then Quit Browser
	
Scenario: Country Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button	
	Then SR: Error Message Country is required is displayed
	Then Quit Browser

Scenario: Zip Code Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button
	Then SR: Error Message ZIP Code is required is displayed
	Then Quit Browser

Scenario: Email Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button
	Then SR: Error Message Email is required is displayed
	Then Quit Browser

Scenario: Password Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button
	Then SR: Error Message Password is required is displayed
	Then Quit Browser

Scenario: Confirm Password Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button
	Then SR: Error Message Password Confirmation is required is displayed
	Then Quit Browser
	
Scenario: Level Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User click Join Now Button	
	Then SR: Error Message Level is required is displayed
	Then Quit Browser
	
Scenario: First Name field only accept Alphabet Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User input First Name Special and Numeric Characters
	When User click Join Now Button
	Then SR: FirstName Error Message Invalid Name is displayed
	Then Quit Browser
	
Scenario: Last Name field only accept Alphabet Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User input Last Name Special and Numeric Characters
	When User click Join Now Button
	Then SR: LastName Error Message Invalid Name is displayed
	Then Quit Browser

Scenario: Birthdate Cannot be equal to the Current Date
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User select birthdate equal to the current date
	When User click Join Now Button
	Then SR: Birthdate Error Message is displayed
	Then Quit Browser
	
Scenario: Birthdate Cannot be greater than the Current Date
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User select birthdate greater than the current date
	When User click Join Now Button
	Then SR: Birthdate Error Message is displayed
	Then Quit Browser

Scenario: Non-Leap Year Birhtdate
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User select a non leap year birthdate
	When User click Join Now Button
	Then SR: Birthdate Validation Message is displayed
	Then Quit Browser
	
Scenario: Mobile Number field only accept Numeric Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User input Latin or Special Characters as Mobile Number
	When User click Join Now Button
	Then SR: Mobile Number Format Error Message is displayed
	Then Quit Browser

Scenario: Email field only accept Valid Format
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User input Email Invalid Format
	When User click Join Now Button
	Then SR: Email Format Error Message is displayed
	Then Quit Browser
	
Scenario: Email is unique
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User input existing Email
	When User click Join Now Button
	Then SR: Existing Email Error Message is displayed
	Then Quit Browser

Scenario: Password and Confirm Password should be matched
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User input differenet Password and Confirm Password
	When User click Join Now Button
	Then SR: Password Unmatched Error Message is displayed
	Then Quit Browser
		
Scenario: Password should contain alphanumeric and special character
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User input invalid password character
	When User click Join Now Button
	Then SR: Invalid Password Error Message is displayed
	Then Quit Browser
	
Scenario: Password must be 8-20 characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When User input less than 8 character Password
	When User click Join Now Button
	Then SR: Password Length Error Message is displayed
	Then Quit Browser
	
Scenario: Guardian Email Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Select Student Birthdate less than 18 years old
	When User click Join Now Button
	Then SR: Error Message Guardian Email is required is displayed
	Then Quit Browser
	
Scenario: Guardian First Name Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Select Student Birthdate less than 18 years old
	When User click Join Now Button
	Then SR: Error Message Guardian First Name is required is displayed
	Then Quit Browser
	
Scenario: Guardian Last Name Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Select Student Birthdate less than 18 years old
	When User click Join Now Button
	Then SR: Error Message Guardian Last Name is required is displayed
	Then Quit Browser
	
Scenario: Guardian Birthdate Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Select Student Birthdate less than 18 years old
	When User click Join Now Button
	Then SR: Error Message Guardian Birthdate is required is displayed
	Then Quit Browser
	
Scenario: Guardian Gender Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Select Student Birthdate less than 18 years old
	When User click Join Now Button
	Then SR: Error Message Guardian Gender is required is displayed
	Then Quit Browser

Scenario: Guardian Email field only accept Valid Format
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Select Student Birthdate less than 18 years old
	When User input Guardian Email using Invalid Format
	When User click Join Now Button
	Then SR: Guardian Email Format Error Message is displayed
	Then Quit Browser

Scenario: Guardian First Name Field only accept Alphabet Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Select Student Birthdate less than 18 years old
	When User input Guardian First Name with Special and Numeric Characters
	When User click Join Now Button
	Then SR: Error Message Guardian First Name is invalid
	Then Quit Browser

Scenario: Guardian Last Name Field only accept Alphabet Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Select Student Birthdate less than 18 years old
	When User input Guardian Last Name with Special and Numeric Characters
	When User click Join Now Button
	Then SR: Error Message Guardian Last Name is invalid
	Then Quit Browser
	
Scenario: Non-Leap Year Guardian Birhtdate
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Select Student Birthdate less than 18 years old
	When User select a non leap year for guardian birthdate
	When User click Join Now Button
	Then SR: Guardian Birthdate Validation Message is displayed
	Then Quit Browser 

Scenario: Guardian must be at least 18 years old 
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Select Student Birthdate less than 18 years old
	When User select Guardian Birthdate less than 18 years old
	When User click Join Now Button
	Then SR: Error Message Guardian must be at least 18years old is displayed
	Then Quit Browser 
	
Scenario: Guardian Birthdate Cannot be equal to the Current Date
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Select Student Birthdate less than 18 years old
	When User select Guardian birthdate equal to the current date
	When User click Join Now Button
	Then SR: Guardian Birthdate Error Message is displayed
	Then Quit Browser

Scenario: Guardian Birthdate Cannot be greater than the Current Date
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Select Student Birthdate less than 18 years old
	When User select Guardian birthdate greater than the current date
	When User click Join Now Button
	Then SR: Guardian Birthdate Error Message is displayed
	Then Quit Browser

Scenario: Successful Student Registration
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Input all Valid Student Information
	When User click Join Now Button
	Then Page will redirect to Thank You page
	Then Quit Browser