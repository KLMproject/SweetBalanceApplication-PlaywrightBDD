
@launch
Feature: Verify Homepage UI components

  Background:
    Given User launches the browser
    When User enters the SweetBalance "url"

  Scenario: Validate the presence of App Name on the home page
    Then User should see app name on the top left

  Scenario Outline: Validate homepage text and headings
    Then User should see <element_type> "<element_value>" in launchPage

    Examples:
      | element_type | element_value                                                      |
      | text         | Our Terms of Service and Privacy Policy have recently been updated |
      | heading      | Smart Diabetes Tracking Powered by AI                              |
      | text         | Comprehensive Diabetes Management Tools                            |
      | section      | Take control of your diabetes today                                |
      | text         | Join our community of successful members                           |

        Scenario Outline: Validate homepage buttons
    Then User should see a "<button_text>" input button

    Examples:
      | button_text     |
      | Start Today     |
      | Check Your Risk |

  Scenario Outline: Validate feature cards titles
    Then User should see a card with title "<card_title>"

    Examples:
      | card_title              |
      | Health Tracking         |
      | Nutrition & Exercise    |
      | Smart Insights          |


       Scenario Outline: Validate feature cards descriptions
    Then User should see the text "<description>" in "<card_title>" card

      Examples:
      | card_title           | description |
      | Health Tracking      | Monitor glucose levels, medication, and vital statistics |
      | Health Tracking      | Easy logging of daily readings |
      | Health Tracking      | Visualize trends over time |
      | Health Tracking      | Set personalized targets |
      | Nutrition & Exercise | Balance diet and physical activity for optimal control |
      | Nutrition & Exercise | Carb counting tools |
      | Nutrition & Exercise | Customized exercise plans |
      | Nutrition & Exercise | Meal suggestions based on readings |
      | Smart Insights       | Get personalized guidance based on your data |
      | Smart Insights       | Pattern detection algorithms |
      | Smart Insights       | Early warning notifications |
      | Smart Insights       | Actionable recommendations |
      
       Scenario Outline: Validate feature cards icons
    Then User should see "<icon_name>" icon in "<card_title>" card 

      Examples:
      | card_title           | icon_name  |
      | Health Tracking      | heart      |    
      | Nutrition & Exercise | activity   |      
      | Smart Insights       | clock      |

 Scenario Outline: Verify  testimonials visibility
     Then User should see a testimonial from user "<user_name>"
   
    Examples:
      | user_name |
      | James D.  |
      | Maria L.  |
      | Robert T. |

       Scenario Outline: Validate presence of 5 yellow stars above "Join our community of successful members" text 
  Then User should see 5 yellow stars above "Join our community of successful members" text

    
 Scenario Outline: Validate rating for User
 Then User should see 5 stars under "<user_name>"

   Examples:
      | user_name |
      | James D.  |
      | Maria L.  |
      | Robert T. |
      

       # --- Homepage navigation scenarios  ---

        Scenario: Verify redirection from Start Today button
 When User click the "Start Today" button
 Then User should be redirected to the Login page

  Scenario: Validate Login link visibility
  Then User  should see a link labeled "Login"

  Scenario: Validate Login link redirection
  When User click on the "Login" link
  Then User should be redirected to the Login page

    Scenario: Verify redirection from Check Your Risk button
  When User click on "Check Your Risk" button
  Then User should be redirected to the assessment modal dialog

 #Non-Functional Testing - Home Page

  Scenario: Verify Homepage loads within three seconds of time
   Then Page should be fully loaded within 3 seconds

   Scenario: Verify Homepage is responsive
   Then All elements are readable and accessible without horizontal scrolling

   Scenario: Verify Homepage maintains accessibility standards
   Then All major sections are accessible with appropriate labels and alt texts

   Scenario: Verify Navigation bar remains accessible
   Then User can access other sections without scrolling up