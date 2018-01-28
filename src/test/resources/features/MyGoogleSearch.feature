# from https://automationpanda.com/2017/01/27/bdd-101-gherkin-by-example/
# The Cardinal Rule of BDD: One Scenario, One Behavior!

Feature: Google Searching
  As a web surfer, I want to search Google, so that I can learn new things.

  Background:
    Given a web browser is on the Google page

  @wip
  Scenario: Simple Google search for pandas
    When the search phrase "panda" is entered
    Then results for "panda" are shown

  @wip
  Scenario: Simple Google search for elephants
    When the search phrase "elephant" is entered
    Then results for "elephant" are shown