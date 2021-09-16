Feature: Responsive Fight API Test

  Scenario: Create A User
    Given I make a POST request to /v1/user
      And I set body to
      """
      username=dasss&score=0
      """
     When I receive a response
     Then I expect response should have a status 201
      And I expect response should have a json like
      """
      {
         "status": "success",
         "message": "User added."
      }
      """

  Scenario: Check Authorization
    Given I make a GET request to /auth/verifytoken
     When I receive a response
     Then I expect response should have a status 200
      And I expect response should have a json like
      """
      [
    {
        "app_id": 165,
        "app": "teny"
    }
]
      """   

   Scenario: Get User
    Given I make a GET request to /v1/user
     When I receive a response
     Then I expect response should have a status 200
      And I expect response should contain a json like
      """
    {
        "user_id": 850,
        "username": "jack",
        "score": 100
    }
      """      

   Scenario: Update User
    Given I make a PUT request to /v1/user
    And I set body to
      """
      {
       "username": "jack",
       "score": 1000
      }
      """
     When I receive a response
     Then I expect response should have a status 201
       And I expect response should have a json like
      """
      
    {
        "status": "success",
    "message": "User added with updated score"
    }

      """  