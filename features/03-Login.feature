@login @ui
Feature: Login Page UI Verification

@login @ui @smoke
    Scenario: Verify login form header is displayed
    Given User is on SweetBalance homepage
    When User clicks on "Login" link
    Then User should see "Welcome back" heading

@login @ui   
    Scenario: Verify sub text of the header
    Given User is on SweetBalance homepage
    When User clicks on "Login" link
    Then User should see "Sign in to your account or create a new one"

@login @ui
    Scenario: Verify presence of close button
    Given User is on SweetBalance homepage
    When User clicks on "Login" link
    Then User should see close button at the right corner

@login @ui
    Scenario: Verify email input field is displayed
    Given User is on SweetBalance homepage
    When User clicks on "Login" link
    Then User should see an input field to enter email

@login @ui
    Scenario: Validate placeholder text in email field
    Given User is on SweetBalance homepage
    When User clicks on "Login" link
    Then User should see text "Enter email" in email field placeholder

@login @ui
    Scenario: Verify Continue with Email button is displayed
    Given User is on SweetBalance homepage
    When User clicks on "Login" link
    Then User should see a "Continue with email" button

@login @ui
    Scenario: Verify Continue with Email is enabled
    Given User is on SweetBalance homepage
    When User clicks on "Login" link
    Then User should see "Continue with email" button to be enabled

@login @ui
   Scenario: Verify OR separator is visible
    Given User is on SweetBalance homepage
    When User clicks on "Login" link
    Then User should see an "OR" separator

@login @ui
    Scenario: Verify Terms and Privacy message is displayed
    Given User is on SweetBalance homepage
    When User clicks on "Login" link
    Then User should see "By continuing you agree to our T&C and Privacy"

@login @field_validation
# Login page field and functional Validation
@login @field_validation @negative
    Scenario: Verify email input rejects invalid email
    Given User is on the login page
    When User enters an invalid email
    Then Email field should show validation error

@login @field_validation @positive @existing_user
    Scenario: Verify email input accepts valid existing email
    Given User is on the login page
    When Registered user clicks continue with email button after entering a valid existing email
    Then User should get password field
    
@login @field_validation @positive @existing_user
    Scenario: Verify password field in login page
    Given User is on the login page
    When Registered user clicks continue with email button after entering a valid email
    Then User should see Sign in button

@login @field_validation @ui @existing_user
    Scenario: Verify sub text 
    Given User is on the login page
    When Registered user clicks continue with email button after entering a valid email
    Then User should see email id  in sub text

@login @field_validation @ui @existing_user
    Scenario: Verify presence of placeholder in password field
    Given User is on the login page
    When Registered user clicks continue with email button after entering a valid email
    Then User should see text " Enter your password" as placeholder in password field

@login @field_validation @positive @existing_user @smoke
    Scenario: Verify password input accepts valid existing user
    Given User is on the login page
    When Registered user clicks sign in after entering password
    Then User should be navigated to home page

@login @field_validation @positive @new_user   
    Scenario: Verify email input accepts valid new email
    Given User is on the login page
    When Unregistered user clicks continue with email button after entering a valid new email
    Then User should get "Complete your profile"  form

@login @complete_profile    
#Complete Profile Form validation for new user
#User is on login page after clicking login in launch page
@login @complete_profile @new_user @ui
  Scenario: Verify Full Name field is visible
    Given User is on the login page
    When  User clicks continue with email button after entering a valid new emai
    Then "Full Name" input field should be displayed

@login @complete_profile @new_user @ui
    Scenario: Verify Username field is visible
    Given User is on the login page
    When  User clicks continue with email button after entering a valid new emai
    Then "Username" input field should be displayed

@login @complete_profile @new_user @ui
    Scenario: Verify Password field is visible
    Given User is on the login page
    When  User clicks continue with email button after entering a valid new emai
    Then "Password" input field should be displayed

@login @complete_profile @new_user @ui
    Scenario: Verify Terms & Conditions checkbox is visible
    Given User is on the login page
    When  User clicks continue with email button after entering a valid new emai
    Then "Terms & Conditions" checkbox should be displayed

@login @complete_profile @new_user @negative
    Scenario: Verify Create Account button is disabled initially
    Given User is on the login page
    When  User clicks continue with email button after entering a valid new emai
    Then "Create Account" button should be disabled

@login @complete_profile @new_user @positive    
    Scenario: Verify Create Account button is enabled after valid input
    Given User is on complete profile form page
    When  User checks the Terms & conditions box after filling all fields
    Then "Create Account" button should be enabled

@login @complete_profile @new_user @positive @e2e
    Scenario: Verify Create account form  with valid data
    Given User is on complete profile form page
    When  User clicks create account button after filling valid data in all fields
    Then User should redirected to upload blood report 

@login @blood_report
 #Onboarding with blood report
 #Feature: Blood Report Upload Modal Navigation

@login @blood_report @navigation
 Scenario: Verify navigation of blood report modal
 Given User is in upload blood report page
 When User clicks on "Upload Blood Report" button
 Then User should navigate to blood report modal

#Feature: Blood Report Upload Modal
#Background: User clicks Upload blood button after reaching upload report page
@login @blood_report @ui
 Scenario: Verify upload box supports drag & drop
 Given User is on blood report modal 
 When User hovers over the upload box
 Then Upload box should show drag & drop interaction

@login @blood_report @file_validation @negative
Scenario: Verify supported file types PDF only
Given User is on blood report modal
When User tries to upload a non PDF file
Then User should see "Only PDF files are supported" error

@login @blood_report @file_validation @negative
Scenario: Verify file size limit of 10MB
Given User is on blood report modal
When User uploads a PDF file over 10MB
Then User should see "File exceeds 10MB" error

@login @blood_report @file_validation @positive
Scenario: Verify Upload and Process button is enabled after valid upload
Given User is on blood report modal
When User uploads a valid PDF file
Then Upload and Process button should be enabled

@login @blood_report @file_validation @positive
Scenario: Verify valid PDF file upload
Given User is on blood report modal
When User uploads a valid PDF file
Then User should see processing percentage bar

@login @blood_report @navigation
Scenario: Verify upload cancel button functionality
Given User is on blood report modal
When User clicks Cancel
Then Modal should be closed and user returned to previous screen

@login @blood_report @positive @e2e
Scenario: Verify Upload and Process processes the file
Given User is on blood report modal
When User clicks Upload and Process after uploading valid file
Then User should see report analysis

@login @blood_report @onboarding_entry
Scenario: Verify onboarding button in report analysis
Given User is on blood report modal
When User clicks Upload and Process after uploading valid file
Then User should see onboarding button

@login @onboarding
# Onboarding Step 1 UI and validations
@login @onboarding @step1 @ui
Scenario: Verify presence of input fields in onboarding step 1
Given User has successfully uploaded blood report
When User clicks onboarding button
Then User should see text fields for Age height and weight

@login @onboarding @step1 @ui
Scenario: Verify gender dropdown presence
Given User is on onboarding step 1
When User views gender field
Then User should see dropdown options

@login @onboarding @step1 @ui
Scenario: Verify gender dropdown values
Given User is on onboarding step 1
When User opens gender dropdown
Then User should see options Male Female and Prefer not to say

 @login @onboarding @step1 @ui
Scenario: Verify Continue button is enabled
Given User is on onboarding step 1
When User views continue button
Then Continue button should be enabled

@login @onboarding @step1 @positive
Scenario: Verify navigation to onboarding step 2
Given User is on onboarding step 1
When User clicks continue
Then User should move to step 2
Then User should see error message
Then Progress bar should be visible
Then Progress text should read Step 1 of 5

@login @onboarding
#Feature: Onboarding Step 2 UI
@login @onboarding @step2 @ui
Scenario: Verify step 2 UI elements
Given User is in step 1 onboarding process
When User clicks continue after filling form
Then Page should display title Pick your pace chill stroll or marathon magic

@login @onboarding @step2 @ui
Scenario: Verify step 2 subtitle
Given User is on onboarding step 2
When User views subtitle
Then Page should display Select your preferred exercise intensity level

@login @onboarding @step2 @ui
Scenario: Verify step 2 back button
Given User is on onboarding step 2
When User views navigation buttons
Then Back button should be visible

@login @onboarding @step2 @ui
Scenario: Verify step 2 progress bar
Given User is on onboarding step 2
When User views progress bar
Then Progress bar should reflect Step 2 of 5
Then User should see Easy Medium and Hard

@login @onboarding
#Feature: Onboarding Step 3 UI
@login @onboarding @step3 @ui
Scenario: Verify navigation to step 3
Given User is on onboarding step 2
When User selects an intensity option
Then User should navigate to step 3

@login @onboarding @step3 @ui
Scenario: Verify step 3 heading
Given User is on onboarding step 3
When User views heading
Then Page should display title Your taste buds what team are they on
Then Page should display Select your dietary preference
Then User should see All inclusive diet Vegetarian and Vegan

@login @onboarding
#Feature: Onboarding Step 4 UI
@login @onboarding @step4 @ui
Scenario: Verify navigation to step 4
Given User is on onboarding step 3
When User selects dietary preference
Then User should navigate to step 4

@login @onboarding @step4 @ui
Scenario: Verify step 4 heading
Given User is on onboarding step 4
When User views heading
Then Page should display title Whats your go to food passport
Then Page should display To create a meal plan youll enjoy please select your preferred cuisines
Then User should see Indian American Continental Mediterranean Asian Middle Eastern and Mexican

@login @onboarding
#Feature: Onboarding Step 5 UI
@login @onboarding @step5 @ui
Scenario: Verify navigation to step 5
Given User is on onboarding step 4
When User selects food passport

@login @onboarding @step5 @ui
Scenario: Verify step 5 heading
Given User is on onboarding step 5
When User views heading
Then Page should display title Allergic to any foods
Then Page should display Select all that apply
Then User should see Gluten Eggs Soy Nuts Dairy Shellfish Other and None
Then Submit button should be visible

@login @onboarding @step5 @positive
Scenario: Verify single allergy submission
Given User is on onboarding step 5
When User selects one allergy and clicks submit
Then User should navigate to subscription details

@login @onboarding @step5 @positive
Scenario: Verify multiple allergy submission
Given User is on onboarding step 5
When User selects multiple allergies and clicks submit
Then User should navigate to Upgrade to premium plus

#Feature: Onboarding Step 1 UI validation
#Background: User successfully completed profile setup
@login @onboarding @e2e
Scenario: Navigate to onboarding
Given User is on the upload blood report page
When User clicks on the onboarding button
Then User navigates to Step 1

When User selects a condition in step 1
When User selects a gender  in step 2
When User selects any age option in step 3
When User selects from options available in centimeters
When User selects from options available in kilogram
When User selects from the options in step 6
When User selects from one of the cuisine options in step 7
When User select option yes
When User clicks allergy option in step 9
When User clicks continue button
When User checks more than one checkbox
When User clicks continue in step 10
When User clicks option from the preferred intensity level
When User enters valid range of value in input field 
When User clicks "continue"
Then User should be navigated to the "Upgrade to Plus" screen after loading personalised screen





















 















    


  










    




    