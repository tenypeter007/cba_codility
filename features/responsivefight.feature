Feature: Responsive Fight 

  Scenario Outline: As a user, I can create a user

    Given I am on the home page
    When I create a user with <username> 
    Then I should see a start button 

    Examples:
      | username |
      | jack |  

  Scenario Outline: As a user, I complete Game challeges

    Given I am on the home page
    When I create a user with <username> 
    Then I should see a start button 
    When I start the challenge
    When I start game challenge
    Then I select option "1" in game challenge
    When I go to next question in game challenge
    Then I select option "1" in game challenge
    When I go to next question in game challenge
    Then I select option "1" in game challenge
    When I go to next question in game challenge
    Then I check <username> is displayed in leaderboard
    Then I navigate to home page from leaderboard

    Examples:
      | username |
      | jack |

  Scenario Outline: As a user, I complete Bus challeges

    Given I am on the home page
    When I create a user with <username> 
    Then I should see a start button 
    When I start the challenge
    When I start bus challenge
    Then I select option "1" in bus challenge
    When I go to leaderboard from bus challenge
    Then I check <username> is displayed in leaderboard
    Then I navigate to home page from leaderboard
   

    Examples:
      | username |
      | jack |  