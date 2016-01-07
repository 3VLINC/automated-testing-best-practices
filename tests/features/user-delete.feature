Feature: User is deleted

@focus @critical
Scenario: User can delete account
	Given I have an account with the branch number 1234
	And I am logged in
	When I delete my account
	Then my account should be deleted