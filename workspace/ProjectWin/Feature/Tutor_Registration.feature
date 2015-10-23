Feature: Tutor Registration Action

Scenario: When Im a tutor link is clicked, it will redirect to Tutor Registration Form
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	Then Page should redirected to Tutor Registration Form
	Then Quit Browser
	
Scenario: First Name Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message First Name is required is displayed
	Then Quit Browser	
	
Scenario: Last Name Field is Required	
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Last Name is required is displayed
	Then Quit Browser	
	
Scenario: Birthdate Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button	
	Then TR: Error Message Invalid Birthdate is displayed
	Then Quit Browser

Scenario: Gender Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Gender is required is displayed
	Then Quit Browser
	
Scenario: Address Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Address is required is displayed
	Then Quit Browser
	
Scenario: Country Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button	
	Then TR: Error Message Country is required is displayed
	Then Quit Browser

Scenario: Zip Code Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message ZIP Code is required is displayed
	Then Quit Browser

Scenario: Email Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Email is required is displayed
	Then Quit Browser

Scenario: Password Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Password is required is displayed
	Then Quit Browser

Scenario: Confirm Password Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Password Confirmation is required is displayed
	Then Quit Browser
	
Scenario: About Me Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message About Me is required is displayed
	Then Quit Browser
	
Scenario: Contact Information Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Contact Information is required is displayed
	Then Quit Browser

Scenario: Skype Account is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Skype Account is required is displayed
	Then Quit Browser
		
Scenario: Educational Background Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Educational Background is required is displayed
	Then Quit Browser
	
Scenario: Work Experience Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Work Experience is required is displayed
	Then Quit Browser
	
Scenario: Documents Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Documents is required is displayed
	Then Quit Browser
	
Scenario: Subject Matter Expertise Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Subject Matter is required is displayed
	Then Quit Browser
	
Scenario: Level Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Level is required is displayed
	Then Quit Browser
	
Scenario: Rate Field is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User click Continue Now Button
	Then TR: Error Message Rate is required is displayed
	Then Quit Browser
	
Scenario: First Name field only accept Alphabet Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When TR: User input First Name Special and Numeric Characters
	When User click Continue Now Button
	Then TR: First Name Error Message Invalid Name is displayed
	Then Quit Browser
	
Scenario: Last Name field only accept Alphabet Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When TR: User input Last Name Special and Numeric Characters
	When User click Continue Now Button
	Then TR: Last Name Error Message Invalid Name is displayed
	Then Quit Browser

Scenario: Birthdate Cannot be equal to the Current Date
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User select birthdate equal to the current date
	When User click Continue Now Button
	Then TR: Birthdate Error Message is displayed
	Then Quit Browser
		
Scenario: Birthdate Cannot be greater than the Current Date
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User select birthdate greater than the current date
	When User click Continue Now Button
	Then TR: Birthdate Error Message is displayed
	Then Quit Browser
	
Scenario: Non-Leap Year Birhtdate
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User select a non leap year birthdate
	When User click Continue Now Button
	Then SR: Birthdate Validation Message is displayed
	Then Quit Browser
	
Scenario: Email field only accept Valid Format
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User input Email Invalid Format
	When User click Continue Now Button
	Then TR: Email Format Error Message is displayed
	Then Quit Browser
	
Scenario: Email should be unique
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User input existing Email
	When User click Continue Now Button
	Then TR: Existing Email Error Message is displayed
	Then Quit Browser
	
Scenario: Password and Confirm Password should be matched
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User input differenet Password and Confirm Password
	When User click Continue Now Button
	Then TR: Password Unmatched Error Message is displayed
	Then Quit Browser

Scenario: Password should contain alphanumeric and special character
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User input invalid password character
	When User click Continue Now Button
	Then TR: Invalid Password Error Message is displayed
	Then Quit Browser

Scenario: Password must be 8-20 characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User input less than 8 character Password
	When User click Continue Now Button
	Then TR: Password Length Error Message is displayed
	Then Quit Browser

Scenario: Contact Type is Required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User input valid Contact Number
	When User click Continue Now Button
	Then TR: Contact Type Error Message is displayed
	Then Quit Browser

Scenario: Contact Information Field only accept Numeric Characters
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When User input invalid Contact Number
	When User click Continue Now Button
	Then TR: Invalid Contact Number Error Message is displayed
	Then Quit Browser

Scenario: New Contact Number field is diplayed upon clicking the Add Link
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When Click Contact Information Add Button
	Then Additional Contact Information field is displayed
	Then Quit Browser

Scenario: Additional Contact Number field will be removed upon clicking the X Button
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When Click Contact Information Add Button
	When Remove Additional Information
	Then Additional Contact Information field will be removed
	Then Quit Browser
	
Scenario: New Social Media Account field is diplayed upon clicking the Add Link 
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When Click Social Media Account Add Button
	Then Additional Social Media Account field is displayed
	Then Quit Browser

Scenario: Additional Social Media Account field will be removed upon clicking the X Button
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When Click Social Media Account Add Button
	When Remove Additional Information
	Then Additional Social Media Account field will be removed
	Then Quit Browser

Scenario: New Educational Background field is diplayed upon clicking the Add Link 
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When Click Educational Background Add Button
	Then Additional Educational Background field is displayed
	Then Quit Browser
	
Scenario: Additional Educational Background field will be removed upon clicking the X Button
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When Click Educational Background Add Button
	When Remove Additional Information
	Then Additional Educational Background field will be removed
	Then Quit Browser
	
Scenario: New Work Experiences field is diplayed upon clicking the Add Link 
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When Click Work Experiences Add Button
	Then Additional Work Experiences field is displayed
	Then Quit Browser
	
Scenario: Additional Work Experiences field will be removed upon clicking the X Button
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When Click Work Experiences Add Button
	When Remove Additional Information
	Then Additional Work Experiences field will be removed
	Then Quit Browser

Scenario: New Documents field is diplayed upon clicking the Add Link 
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When Click Documents Add Button
	Then Additional Documents field is displayed
	Then Quit Browser

Scenario: Additional Documents field will be removed upon clicking the X Button
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	When Click Documents Add Button
	When Remove Additional Documents
	Then Additional Documents field will be removed
	Then Quit Browser
			
Scenario: Documents should accepts the any file format execpt .exe file.
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	Then Quit Browser
	
Scenario: Maximum Document file size is only upto 5MB
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	Then Quit Browser
	
Scenario: User will redirect to Schedule Page upon pressing the Continue Button, if all required fields are valid
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	Then Quit Browser
	
Scenario: Schedule is required
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	Then Quit Browser
	
Scenario: Selected Schedule will be added upon pressing the Add Button
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	Then Quit Browser
	
Scenario: Selected Schedule should be unique
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	Then Quit Browser
	
Scenario: User will redirect to Thank you page upon clicking Join Now button, if all required fields are valid.
	Given Access My Learning Coach
	When Click Sign Up Menu
	When Click Im a Tutor Link
	Then Quit Browser