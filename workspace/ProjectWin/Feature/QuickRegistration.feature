Feature: Quick Registration Action

Scenario: Successful Quick Registration
	Given Access My Learning Coach Website
	When User select a Subject
	And User enters email and password
		|email|testemail32@dagobah.com|
		|pass|login@123|
	Then User will redirect to Registration Notification Slide
	