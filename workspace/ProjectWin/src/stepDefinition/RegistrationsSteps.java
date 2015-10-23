package stepDefinition;

import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import Common.Data;

public class RegistrationsSteps extends Data {
	

	@Given("^Access My Learning Coach$")
	public void access_url() throws Throwable
	{
		driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(baseUrl);
	}
	
	@When("^Click Sign Up Menu$")
	public void click_signup() throws Throwable
	{
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.findElement(By.linkText("Sign Up")).click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@Then("^Quit Browser$")
	public void quit_browser() throws Throwable
	{
		driver.quit();
	}
	
	/**********************************************CLICK JOIN NOW**********************************************/
	@When("^User click Join Now Button$")
	public void leave_field_blank() throws Throwable
	{
        driver.findElement(By.xpath("//input[@value='Join Now']")).click();
        assertTrue(closeAlertAndGetItsText(driver).matches("^You have not uploaded any image\\. Do you wish to continue[\\s\\S]$"));
        Thread.sleep(5000);
	}
	
	@When("^User click Continue Now Button$")
	public void leave_tfield_blank() throws Throwable
	{
		driver.findElement(By.xpath("//input[@value='Continue']")).click();
        assertTrue(closeAlertAndGetItsText(driver).matches("^You have not uploaded any image\\. Do you wish to continue[\\s\\S]$"));
        Thread.sleep(5000);
	}
	
	/**********************************************UPLOAD WITHOUT IMAGE**********************************************/
	@When("^Do you wish to continue without uploaded image$")
	public void no_image_uploaded() throws Throwable
	{
        assertTrue(closeAlertAndGetItsText(driver).matches("^You have not uploaded any image\\. Do you wish to continue[\\s\\S]$"));
        Thread.sleep(5000);
	}
	
	/**********************************************FIRST NAME FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message First Name is required is displayed$")
	public void error_message_firstname_required() throws Throwable
	{	
		Thread.sleep(5000);
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[2]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("First name is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input First Name Special and Numeric Characters$")
	public void input_firstname_invalid_characters() throws Throwable
	{
	    driver.findElement(By.name("fname")).clear();
	    driver.findElement(By.name("fname")).sendKeys("123!@#");
	}

	@Then("^SR: FirstName Error Message Invalid Name is displayed$")
	public void error_message_firstname_invalid_inputs() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[2]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid name"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
		
	/**********************************************LAST NAME FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message Last Name is required is displayed$")
	public void error_message_lastname_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[4]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Last name is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input Last Name Special and Numeric Characters$")
	public void input_lastname_invalid_characters() throws Throwable
	{
	    driver.findElement(By.name("lname")).clear();
	    driver.findElement(By.name("lname")).sendKeys("#1245!");
	}

	@Then("^SR: LastName Error Message Invalid Name is displayed$")
	public void error_message_lastname_invalid_inputs() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[4]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid name"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************BIRTHDATE FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message Invalid Birthdate is displayed$")
	public void error_message_birthdate_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[5]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid birthdate"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User select birthdate equal to the current date$")
	public void select_equal_birthdate() throws Throwable
	{
	    new Select(driver.findElement(By.id("pickmonth"))).selectByVisibleText("October");
	    new Select(driver.findElement(By.id("pickday"))).selectByVisibleText("22");
	    new Select(driver.findElement(By.id("pickyear"))).selectByVisibleText("2015");
	}
	
	@When("^User select birthdate greater than the current date$")
	public void select_greater_birthdate() throws Throwable
	{
	    new Select(driver.findElement(By.id("pickmonth"))).selectByVisibleText("October");
	    new Select(driver.findElement(By.id("pickday"))).selectByVisibleText("23");
	    new Select(driver.findElement(By.id("pickyear"))).selectByVisibleText("2015");
	}
		
	@Then("^SR: Birthdate Error Message is displayed$")
	public void error_message_equal_OR_greater_birthdate_inputs() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[5]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Student birthdate can not be equal or greater than today"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User select a non leap year birthdate$")
	public void input_non_leap_year_birthdate() throws Throwable
	{
	    new Select(driver.findElement(By.id("pickmonth"))).selectByVisibleText("February");
	    new Select(driver.findElement(By.id("pickday"))).selectByVisibleText("29");
	    new Select(driver.findElement(By.id("pickyear"))).selectByVisibleText("2001");
	}
		
	@Then("^SR: Birthdate Validation Message is displayed$")
	public void validation_message_non_leap_year_birthdate() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[5]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Selected year is not a leap year"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************GENDER REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message Gender is required is displayed$")
	public void error_message_gender_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[6]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Gender is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************CONTACT NUMBER FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message Contact Number is required is displayed$")
	public void error_message_contact_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[8]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Contact number is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input Latin or Special Characters as Mobile Number$")
	public void input_invalid_mobile_number_format() throws Throwable
	{
	    driver.findElement(By.name("mobile")).clear();
	    driver.findElement(By.name("mobile")).sendKeys("mobile!@#");
	}
		
	@Then("^SR: Mobile Number Format Error Message is displayed$")
	public void error_message_invalid_mobile_number_format() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[8]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid contact number"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************SKYPE ID REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message Skype ID is required is displayed$")
	public void error_message_skype_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[9]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Skype ID is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************ADDRESS REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message Address is required is displayed$")
	public void error_message_address_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[11]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Address is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************COUNTRY REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message Country is required is displayed$")
	public void error_message_country_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[12]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Country is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************ZIP CODE REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message ZIP Code is required is displayed$")
	public void error_message_zip_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[13]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Zip code is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************EMAIL FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message Email is required is displayed$")
	public void error_message_email_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[14]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Email is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input Email Invalid Format$")
	public void input_invalid_email_format() throws Throwable
	{
        driver.findElement(By.cssSelector("div.col-md-12 > div.form-group > input[name=\"email\"]")).clear();
        driver.findElement(By.cssSelector("div.col-md-12 > div.form-group > input[name=\"email\"]")).sendKeys("student06@com");
	}
		
	@Then("^SR: Email Format Error Message is displayed$")
	public void error_message_email_format() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[14]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid email"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input existing Email$")
	public void input_existing_email_format() throws Throwable
	{
        driver.findElement(By.cssSelector("div.col-md-12 > div.form-group > input[name=\"email\"]")).clear();
        driver.findElement(By.cssSelector("div.col-md-12 > div.form-group > input[name=\"email\"]")).sendKeys("renaleen.sobere@amdatex.com");
	}
		
	@Then("^SR: Existing Email Error Message is displayed$")
	public void error_message_email_exists() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[14]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Email already exists"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************PASSWORD REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message Password is required is displayed$")
	public void error_message_password_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[15]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Password is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input differenet Password and Confirm Password$")
	public void input_unmatched_password() throws Throwable
	{
	    driver.findElement(By.name("pass")).clear();
	    driver.findElement(By.name("pass")).sendKeys("login@123");
	    driver.findElement(By.name("confirmpass")).clear();
	    driver.findElement(By.name("confirmpass")).sendKeys("login@1235");
	}
		
	@Then("^SR: Password Unmatched Error Message is displayed$")
	public void error_message_unmatched_password() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[16]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Passwords do not match"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input invalid password character$")
	public void input_invalid_password() throws Throwable
	{
	    driver.findElement(By.name("pass")).clear();
	    driver.findElement(By.name("pass")).sendKeys("password");
	    driver.findElement(By.name("confirmpass")).clear();
	    driver.findElement(By.name("confirmpass")).sendKeys("password");
	}
		
	@Then("^SR: Invalid Password Error Message is displayed$")
	public void error_message_invalid_password() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[15]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Password must be alphanumeric and atleast 1 special character"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input less than 8 character Password$")
	public void input_less_minimum_length_password() throws Throwable
	{
	    driver.findElement(By.name("pass")).clear();
	    driver.findElement(By.name("pass")).sendKeys("p@1");
	    driver.findElement(By.name("confirmpass")).clear();
	    driver.findElement(By.name("confirmpass")).sendKeys("p@1");
	}
		
	@Then("^SR: Password Length Error Message is displayed$")
	public void error_message_length_password() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[15]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Password must be 8-20 characters"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************CONFIRM PASSWORD REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message Password Confirmation is required is displayed$")
	public void error_message_passwordconfirmation_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[16]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Password confirmation is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************LEVEL REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^SR: Error Message Level is required is displayed$")
	public void error_message_level_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[17]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Level is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}

	/**********************************************GUARDIAN EMAIL VALIDATIONS**********************************************/
	@When("^Select Student Birthdate less than 18 years old$")
	public void select_student_birthdate() throws Throwable
	{
	    new Select(driver.findElement(By.id("pickmonth"))).selectByVisibleText("September");
	    new Select(driver.findElement(By.id("pickday"))).selectByVisibleText("8");
	    new Select(driver.findElement(By.id("pickyear"))).selectByVisibleText("2015");
	}
		
	@Then("^SR: Error Message Guardian Email is required is displayed$")
	public void error_message_guardian_email_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='guardiandiv']/fieldset/div[1]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Email is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input Guardian Email using Invalid Format$")
	public void input_invalid_gmail_format() throws Throwable
	{
	    driver.findElement(By.name("guardianemail")).clear();
	    driver.findElement(By.name("guardianemail")).sendKeys("guardian@com");
	}
		
	@Then("^SR: Guardian Email Format Error Message is displayed$")
	public void error_message_gmail_format() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='guardiandiv']/fieldset/div[1]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid email"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************GUARDIAN FIRST NAME VALIDATIONS**********************************************/
	@Then("^SR: Error Message Guardian First Name is required is displayed$")
	public void error_message_guardian_firstname_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='guardiandiv']/fieldset/div[2]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("test"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input Guardian First Name with Special and Numeric Characters$")
	public void input_invalid_fname_characters() throws Throwable
	{
	    driver.findElement(By.name("guardianfname")).clear();
	    driver.findElement(By.name("guardianfname")).sendKeys("1234!");
	}
		
	@Then("^SR: Error Message Guardian First Name is invalid$")
	public void error_message_invalid_fname_characters() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='guardiandiv']/fieldset/div[2]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid name"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************GUARDIAN LAST NAME VALIDATIONS**********************************************/
	@Then("^SR: Error Message Guardian Last Name is required is displayed$")
	public void error_message_guardian_lastname_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='guardiandiv']/fieldset/div[4]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Last name is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input Guardian Last Name with Special and Numeric Characters$")
	public void input_invalid_lname_characters() throws Throwable
	{
	    driver.findElement(By.name("guardianlname")).clear();
	    driver.findElement(By.name("guardianlname")).sendKeys("1234!");
	}
		
	@Then("^SR: Error Message Guardian Last Name is invalid$")
	public void error_message_invalid_lname_characters() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='guardiandiv']/fieldset/div[4]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid name"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************GUARDIAN BIRTHDATE VALIDATIONS**********************************************/
	@Then("^SR: Error Message Guardian Birthdate is required is displayed$")
	public void error_message_guardian_birthdate_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='guardiandiv']/fieldset/div[5]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid birthdate"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User select a non leap year for guardian birthdate$")
	public void select_non_leap_year_gbirthdate() throws Throwable
	{
	    new Select(driver.findElement(By.name("guardianbmonth"))).selectByVisibleText("February");
	    new Select(driver.findElement(By.name("guardianbday"))).selectByVisibleText("29");
	    new Select(driver.findElement(By.name("guardianbyear"))).selectByVisibleText("1985");
	}
		
	@Then("^SR: Guardian Birthdate Validation Message is displayed$")
	public void validation_message_non_leap_year_gbirthdate() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='guardiandiv']/fieldset/div[5]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Selected year is not a leap year"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User select Guardian Birthdate less than 18 years old$")
	public void guardian_must_be_atleast_18yrsold() throws Throwable
	{
	    new Select(driver.findElement(By.name("guardianbmonth"))).selectByVisibleText("January");
	    new Select(driver.findElement(By.name("guardianbday"))).selectByVisibleText("29");
	    new Select(driver.findElement(By.name("guardianbyear"))).selectByVisibleText("1998");
	}
		
	@Then("^SR: Error Message Guardian must be at least 18years old is displayed$")
	public void error_message_guardian_age() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='guardiandiv']/fieldset/div[5]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Guardian must be at least 18 years old"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User select Guardian birthdate equal to the current date$")
	public void select_equal_gbirthdate() throws Throwable
	{
	    new Select(driver.findElement(By.name("guardianbmonth"))).selectByVisibleText("October");
	    new Select(driver.findElement(By.name("guardianbday"))).selectByVisibleText("22");
	    new Select(driver.findElement(By.name("guardianbyear"))).selectByVisibleText("2015");
	}
	
	@When("^User select Guardian birthdate greater than the current date$")
	public void select_greater_gbirthdate() throws Throwable
	{
	    new Select(driver.findElement(By.name("guardianbmonth"))).selectByVisibleText("October");
	    new Select(driver.findElement(By.name("guardianbday"))).selectByVisibleText("23");
	    new Select(driver.findElement(By.name("guardianbyear"))).selectByVisibleText("2015");
	}
		
	@Then("^SR: Guardian Birthdate Error Message is displayed$")
	public void error_message_equal_OR_greater_gbirthdate() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='guardiandiv']/fieldset/div[5]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Guardian birthdate can not be equal or greater than today"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************GUARDIAN GENDER VALIDATIONS**********************************************/
	@Then("^SR: Error Message Guardian Gender is required is displayed$")
	public void error_message_guardian_gender_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='guardiandiv']/fieldset/div[6]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Gender is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/*********************************************SUCCESSFUL STUDENT REGISTRATION***********************************************/
	@When("^Input all Valid Student Information$")
	public void input_valid_student_information() throws Throwable
	{
		driver.findElement(By.name("fname")).clear();
	    driver.findElement(By.name("fname")).sendKeys("Studentfive");
	    driver.findElement(By.name("lname")).clear();
	    driver.findElement(By.name("lname")).sendKeys("Full");
	    new Select(driver.findElement(By.id("pickmonth"))).selectByVisibleText("January");
	    new Select(driver.findElement(By.id("pickday"))).selectByVisibleText("9");
	    new Select(driver.findElement(By.id("pickyear"))).selectByVisibleText("2010");
	    new Select(driver.findElement(By.name("gender"))).selectByVisibleText("Female");
	    driver.findElement(By.name("mobile")).clear();
	    driver.findElement(By.name("mobile")).sendKeys("09123456789");
	    driver.findElement(By.name("skype")).clear();
	    driver.findElement(By.name("skype")).sendKeys("rai.student");
	    driver.findElement(By.name("address")).clear();
	    driver.findElement(By.name("address")).sendKeys("Philippines");
	    new Select(driver.findElement(By.name("country"))).selectByVisibleText("Philippines");
	    driver.findElement(By.name("zip")).clear();
	    driver.findElement(By.name("zip")).sendKeys("4702");
	    driver.findElement(By.cssSelector("div.col-md-12 > div.form-group > input[name=\"email\"]")).clear();
	    driver.findElement(By.cssSelector("div.col-md-12 > div.form-group > input[name=\"email\"]")).sendKeys("rai02@student.com");
	    driver.findElement(By.name("pass")).clear();
	    driver.findElement(By.name("pass")).sendKeys("11th@adec");
	    driver.findElement(By.name("confirmpass")).clear();
	    driver.findElement(By.name("confirmpass")).sendKeys("11th@adec");
	    new Select(driver.findElement(By.name("level"))).selectByVisibleText("Grade 12");
	    driver.findElement(By.name("guardianemail")).clear();
	    driver.findElement(By.name("guardianemail")).sendKeys("student@guardian.com");
	    driver.findElement(By.name("guardianfname")).clear();
	    driver.findElement(By.name("guardianfname")).sendKeys("Rai");
	    driver.findElement(By.name("guardianlname")).clear();
	    driver.findElement(By.name("guardianlname")).sendKeys("Guardian");
	    new Select(driver.findElement(By.name("guardianbmonth"))).selectByVisibleText("September");
	    new Select(driver.findElement(By.name("guardianbday"))).selectByVisibleText("23");
	    new Select(driver.findElement(By.name("guardianbyear"))).selectByVisibleText("1990");
	    new Select(driver.findElement(By.name("guardiangender"))).selectByVisibleText("Male");
	}
	/***********************************************************************PARENT REGISTRATION***********************************************************************/
	@When("^Click Parent RadioButton$")
	public void click_parent_radiobutton() throws Throwable
	{	
		driver.findElement(By.xpath("//*[@id='registration-form']/div[1]/label[1]/input")).click();
	}	  
	
	@Then("^Page should redirected to Parent Registration Form$")
	public void parent_registration_form() throws Throwable
	{
		 String url = driver.getCurrentUrl();
		  if(url.equals("http://10.10.1.96/parent/registration"))
		  {
		   sat = true;
		  }
		  
		  else
		  {
		   driver.quit();
		   throw new Exception("Test Condition Failed");
		  }
	}
	
	/**********************************************GUARDIAN FIRST NAME FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Guardian First Name is required is displayed$")
	public void error_message_Gfname_required() throws Throwable
	{	
		Thread.sleep(5000);
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[1]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("First name is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^PR: Error Message Guardian First Name is invalid$")
	public void error_message_invalid_gfname_characters() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[1]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid name"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************GUARDIAN LAST NAME FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Guardian Last Name is required is displayed$")
	public void error_message_Glname_required() throws Throwable
	{	
		Thread.sleep(5000);
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[3]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Last name is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
				
			}
			
		}
	}
	
	@Then("^PR: Error Message Guardian Last Name is invalid$")
	public void error_message_invalid_glname_characters() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[3]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid name"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************GUARDIAN BIRTHDATE FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Invalid Birthdate is displayed$")
	public void error_message_gbirthdate_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[5]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid birthdate"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^PR: Guardian Birthdate Error Message is displayed$")
	public void error_message_equal_OR_greater_pgbirthdate() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[5]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Guardian birthdate can not be equal or greater than today"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^PR: Guardian Birthdate Validation Message is displayed$")
	public void validation_message_non_leap_year_pgbirthdate() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[5]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Selected year is not a leap year"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************GUARDIAN GENDER REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Gender is required is displayed$")
	public void error_message_ggender_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[6]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Gender is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************GUARDIAN CONTACT NUMBER FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Contact Number is required is displayed$")
	public void error_message_gcontact_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[7]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Contact number is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^PR: User input Latin or Special Characters as Mobile Number$")
	public void input_invalid_gmobile_number_format() throws Throwable
	{
	    driver.findElement(By.name("guardianmobile")).clear();
	    driver.findElement(By.name("guardianmobile")).sendKeys("mobile!@#");
	}
		
	@Then("^PR: Mobile Number Format Error Message is displayed$")
	public void error_message_invalid_gmobile_number_format() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[7]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid contact number"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************GUARDIAN SKYPE ID REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Skype ID is required is displayed$")
	public void error_message_gskype_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[8]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Skype ID is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************GUARDIAN ADDRESS REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Address is required is displayed$")
	public void error_message_gaddress_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[9]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Address is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************COUNTRY REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Country is required is displayed$")
	public void error_message_gcountry_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[10]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Country is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************ZIP CODE REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message ZIP Code is required is displayed$")
	public void error_message_gzip_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[11]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Zip code is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************EMAIL FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Email is required is displayed$")
	public void error_message_gemail_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[12]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Email is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^PR: Email Format Error Message is displayed$")
	public void error_message_gemail_format() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[12]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid email"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input existing Guardian Email$")
	public void input_existing_gemail_format() throws Throwable
	{
        driver.findElement(By.cssSelector("div.col-md-12 > div.form-group > input[name=\"email\"]")).clear();
        driver.findElement(By.cssSelector("div.col-md-12 > div.form-group > input[name=\"email\"]")).sendKeys("sarabusabm@ymail.com");
	}
		
	@Then("^PR: Existing Email Error Message is displayed$")
	public void error_message_gemail_exists() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[12]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Email already exists"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
		/**********************************************PASSWORD REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Password is required is displayed$")
	public void error_message_gpassword_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[13]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Password is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^PR: Invalid Password Error Message is displayed$")
	public void error_message_pinvalid_password() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[13]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Password must be alphanumeric and atleast 1 special character"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^PR: Password Length Error Message is displayed$")
	public void error_message_plength_password() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[13]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Password must be 8-20 characters"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
		/**********************************************CONFIRM PASSWORD REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Password Confirmation is required is displayed$")
	public void error_message_gpasswordconfirmation_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[14]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Password confirmation is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^PR: Password Unmatched Error Message is displayed$")
	public void error_message_gunmatched_password() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/fieldset/div[14]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Passwords do not match"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************STUDENT FIRST NAME FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Student First Name is required is displayed$")
	public void error_message_sfname_required() throws Throwable
	{	
		Thread.sleep(5000);
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div[2]/fieldset/div[2]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("First name is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^PR: Student FirstName Error Message Invalid Name is displayed$")
	public void error_message_sfirstname_invalid_inputs() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div[2]/fieldset/div[2]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid name"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
		
	/**********************************************STUDENT LAST NAME FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Student Last Name is required is displayed$")
	public void error_message_slname_required() throws Throwable
	{	
		Thread.sleep(5000);
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div[2]/fieldset/div[4]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Last name is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
				
			}
			
		}
	}
	
	@Then("^PR: Student LastName Error Message Invalid Name is displayed$")
	public void error_message_slastname_invalid_inputs() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div[2]/fieldset/div[4]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid name"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************STUDENT BIRTHDATE FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Invalid Student Birthdate is displayed$")
	public void error_message_sbirthdate_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div[2]/fieldset/div[6]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid birthdate"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^PR: Student Birthdate Error Message is displayed$")
	public void error_message_equal_OR_greater_sbirthdate_inputs() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div[2]/fieldset/div[6]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Student birthdate can not be equal or greater than today"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^PR: Birthdate Validation Message is displayed$")
	public void validation_message_non_leap_year_sbirthdate() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div[2]/fieldset/div[6]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Selected year is not a leap year"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************STUDENT GENDER REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Student Gender is required is displayed$")
	public void error_message_sgender_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div[2]/fieldset/div[7]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Gender is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************LEVEL REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^PR: Error Message Level is required is displayed$")
	public void error_message_slevel_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div[2]/fieldset/div[8]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Level is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/*********************************************SUCCESSFUL PARENT REGISTRATION***********************************************/
	@When("^Input all Valid Guardian Information$")
	public void input_valid_information() throws Throwable
	{
		driver.findElement(By.name("guardianfname")).clear();
	    driver.findElement(By.name("guardianfname")).sendKeys("Rai");
	    driver.findElement(By.name("guardianlname")).clear();
	    driver.findElement(By.name("guardianlname")).sendKeys("Guardian");
	    new Select(driver.findElement(By.id("gpickmonth"))).selectByVisibleText("January");
	    new Select(driver.findElement(By.id("gpickday"))).selectByVisibleText("1");
	    new Select(driver.findElement(By.name("guardianbyear"))).selectByVisibleText("1985");
	    new Select(driver.findElement(By.name("guardiangender"))).selectByVisibleText("Female");
	    driver.findElement(By.name("guardianmobile")).clear();
	    driver.findElement(By.name("guardianmobile")).sendKeys("132456788");
	    driver.findElement(By.name("guardianskype")).clear();
	    driver.findElement(By.name("guardianskype")).sendKeys("rai.guardian");
	    driver.findElement(By.name("guardianaddress")).clear();
	    driver.findElement(By.name("guardianaddress")).sendKeys("Las Pi�as");
	    new Select(driver.findElement(By.name("guardiancountry"))).selectByVisibleText("Philippines");
	    driver.findElement(By.name("guardianzip")).clear();
	    driver.findElement(By.name("guardianzip")).sendKeys("456456465");
	    driver.findElement(By.cssSelector("div.col-md-12 > div.form-group > input[name=\"email\"]")).clear();
	    driver.findElement(By.cssSelector("div.col-md-12 > div.form-group > input[name=\"email\"]")).sendKeys("rai09@guardian.com");
	    driver.findElement(By.name("pass")).clear();
	    driver.findElement(By.name("pass")).sendKeys("11th@adec");
	    driver.findElement(By.name("confirmpass")).clear();
	    driver.findElement(By.name("confirmpass")).sendKeys("11th@adec");
	    driver.findElement(By.name("fname")).clear();
	    driver.findElement(By.name("fname")).sendKeys("Rai");
	    driver.findElement(By.name("lname")).clear();
	    driver.findElement(By.name("lname")).sendKeys("Student");
	    new Select(driver.findElement(By.id("pickmonth"))).selectByVisibleText("January");
	    new Select(driver.findElement(By.id("pickday"))).selectByVisibleText("9");
	    new Select(driver.findElement(By.id("pickyear"))).selectByVisibleText("2000");
	    new Select(driver.findElement(By.name("gender"))).selectByVisibleText("Female");
	    new Select(driver.findElement(By.name("level"))).selectByVisibleText("Grade 12");
	}
	
	@Then("^Page will redirect to Thank You page$")
	public void successful_registration() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("/html/body/div/div/main/div/div/div/div/center/h3"));
		
		for(WebElement wwa: message)
		{
			String findString = wwa.getText().substring(0, 26);
			
			if(findString.equals("Thank you for registering!"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/***********************************************************************TUTOR REGISTRATION***********************************************************************/
	@When("^Click Im a Tutor Link$")
	public void click_tutor_link() throws Throwable
	{	
		driver.findElement(By.linkText("I'm a tutor")).click();
	}	  
	
	@Then("^Page should redirected to Tutor Registration Form$")
	public void tutor_registration_form() throws Throwable
	{
		String url = driver.getCurrentUrl();
		if(url.equals("http://10.10.1.96/tutor/registration"))
		{
			sat = true;
		}
		
		else
		{
			driver.quit();
			throw new Exception("Test Condition Failed");
		}
	}
	
	/**********************************************TUTOR FIRST NAME FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message First Name is required is displayed$")
	public void error_message_tfirstname_required() throws Throwable
	{	
		Thread.sleep(5000);
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[3]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("First name is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^TR: User input First Name Special and Numeric Characters$")
	public void input_tfirstname_invalid_characters() throws Throwable
	{
	    driver.findElement(By.name("firstname")).clear();
	    driver.findElement(By.name("firstname")).sendKeys("123!@#");
	}

	@Then("^TR: First Name Error Message Invalid Name is displayed$")
	public void error_message_tfirstname_invalid_inputs() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[3]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid name"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************TUTOR LAST NAME FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Last Name is required is displayed$")
	public void error_message_tlastname_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[5]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Last name is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^TR: User input Last Name Special and Numeric Characters$")
	public void input_tlastname_invalid_characters() throws Throwable
	{
	    driver.findElement(By.name("lastname")).clear();
	    driver.findElement(By.name("lastname")).sendKeys("123!@#");
	}

	@Then("^TR: Last Name Error Message Invalid Name is displayed$")
	public void error_message_tlastname_invalid_inputs() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[5]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid name"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************TUTOR BIRTHDATE FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Invalid Birthdate is displayed$")
	public void error_message_tbirthdate_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[7]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid birthdate"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^TR: Birthdate Error Message is displayed$")
	public void error_message_equal_OR_greater_tbirthdate_inputs() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[7]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Birthdate can not be equal or greater than today"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^TR: Birthdate Validation Message is displayed$")
	public void validation_message_non_leap_year_Tbirthdate() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[7]/div[2]"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Selected year is not a leap year"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************TUTOR GENDER REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Gender is required is displayed$")
	public void error_message_tgender_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[8]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Gender is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************TUTOR ADDRESS REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Address is required is displayed$")
	public void error_message_taddress_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[9]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Address is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************TUTOR COUNTRY REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Country is required is displayed$")
	public void error_message_tcountry_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[10]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Country is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************TUTOR ZIP CODE REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message ZIP Code is required is displayed$")
	public void error_message_tzip_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[11]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Zip code is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************TUTOR EMAIL FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Email is required is displayed$")
	public void error_message_temail_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[12]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Email is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^TR: Email Format Error Message is displayed$")
	public void error_message_temail_format() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[12]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid email"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^TR: Existing Email Error Message is displayed$")
	public void error_message_temail_exists() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[12]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Email already exists"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************TUTOR PASSWORD REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Password is required is displayed$")
	public void error_message_tpassword_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[13]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Password is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@Then("^TR: Password Unmatched Error Message is displayed$")
	public void error_message_unmatched_tpassword() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[13]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Passwords do not match"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
@Then("^TR: Invalid Password Error Message is displayed$")
	public void error_message_invalid_tpassword() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[13]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Password must be alphanumeric and atleast 1 special character"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}

	@Then("^TR: Password Length Error Message is displayed$")
	public void error_message_length_tpassword() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[13]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Password must be 8-20 characters"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	/**********************************************TUTOR CONFIRM PASSWORD REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Password Confirmation is required is displayed$")
	public void error_message_tpasswordconfirmation_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[14]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Password confirmation is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************TUTOR ABOUT ME REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message About Me is required is displayed$")
	public void error_message_aboutme_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[15]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Please tell us about yourself"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************TUTOR CONTACT INFORMATION REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Contact Information is required is displayed$")
	public void error_message_contactinfo_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[18]/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Kindly complete your Contact Information!"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input valid Contact Number$")
	public void input_valid_contact_information() throws Throwable
	{
	    driver.findElement(By.name("contact")).clear();
	    driver.findElement(By.name("contact")).sendKeys("09123456789");
	}
	
	@Then("^TR: Contact Type Error Message is displayed$")
	public void error_message_contact_type() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[18]/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Kindly complete your Contact Information!"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^User input invalid Contact Number$")
	public void input_invalid_contact_information() throws Throwable
	{
		new Select(driver.findElement(By.id("contacttype"))).selectByVisibleText("Mobile");
	    driver.findElement(By.name("contact")).clear();
	    driver.findElement(By.name("contact")).sendKeys("number");
	}
	
	@Then("^TR: Invalid Contact Number Error Message is displayed$")
	public void error_message_invalid_contact_type() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[18]/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Invalid Contact"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^Click Contact Information Add Button$")
	public void add_contact_information() throws Throwable
	{
		driver.findElement(By.id("add_contact_button")).click();
	}
	
	@Then("^Additional Contact Information field is displayed$")
	public void additional_contact_field_is_displayed() throws Throwable
	{
		int field = driver.findElements(By.xpath("//*[@id='contact']")).size();
		
		if(field > 0)
		{
			System.out.println("Element is Visible");
		}
		else
		{
			driver.quit();
			throw new Exception("Test Condition Failed");
		}
	}
	
	@When("^Remove Additional Information$")
	public void remove_additional_information() throws Throwable
	{
		driver.findElement(By.xpath("(//button[@type='button'])[4]")).click();
	}
	
	@Then("^Additional Contact Information field will be removed$")
	public void additional_contact_field_is_removed() throws Throwable
	{
		List<WebElement> visible = driver.findElements(By.xpath("//*[@id='contact']"));
			if(visible.isEmpty())
			{
				System.out.println("Element is not Visible");
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
	}
	/**********************************************TUTOR SKYPE ACCOUNT REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Skype Account is required is displayed$")
	public void error_message_skypeacct_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[21]/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Skype account is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^Click Social Media Account Add Button$")
	public void add_social_media() throws Throwable
	{
		driver.findElement(By.id("add_social_button")).click();
	}
	
	@Then("^Additional Social Media Account field is displayed$")
	public void additional_social_media_field_is_displayed() throws Throwable
	{
		int field = driver.findElements(By.xpath("//*[@id='social']")).size();
		
		if(field > 0)
		{
			System.out.println("Element is Visible");
		}
		else
		{
			driver.quit();
			throw new Exception("Test Condition Failed");
		}
	}
	
	@Then("^Additional Social Media Account field will be removed$")
	public void additional_social_media_account_field_is_removed() throws Throwable
	{
		List<WebElement> visible = driver.findElements(By.id("contact"));
			if(visible.isEmpty())
			{
				System.out.println("Element is not Visible");
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
	}
	/**********************************************TUTOR EDUCATIONAL BACKGROUND REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Educational Background is required is displayed$")
	public void error_message_education_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[24]/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Kindly complete your Educational Background details"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^Click Educational Background Add Button$")
	public void add_educational_background() throws Throwable
	{
		driver.findElement(By.id("add_education_button")).click();
	}
	
	@Then("^Additional Educational Background field is displayed$")
	public void additional_educational_background_field_is_displayed() throws Throwable
	{
		int field = driver.findElements(By.xpath("//*[@id='course']")).size();
		
		if(field > 0)
		{
			System.out.println("Element is Visible");
		}
		else
		{
			driver.quit();
			throw new Exception("Test Condition Failed");
		}
	}
	
	@Then("^Additional Educational Background field will be removed$")
	public void additional_educational_background_field_is_removed() throws Throwable
	{
		List<WebElement> visible = driver.findElements(By.xpath("//*[@id='course']"));
			if(visible.isEmpty())
			{
				System.out.println("Element is not Visible");
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
	}
	/**********************************************TUTOR WORK EXPERIENCE REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Work Experience is required is displayed$")
	public void error_message_work_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[27]/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Kindly complete your Work Experience details"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^Click Work Experiences Add Button$")
	public void add_work_experiences() throws Throwable
	{
		driver.findElement(By.id("add_work_button")).click();
	}
	
	@Then("^Additional Work Experiences field is displayed$")
	public void additional_work_experiences_field_is_displayed() throws Throwable
	{
		int field = driver.findElements(By.xpath("//*[@id='job']")).size();
		
		if(field > 0)
		{
			System.out.println("Element is Visible");
		}
		else
		{
			driver.quit();
			throw new Exception("Test Condition Failed");
		}
	}
	
	@When("^Remove Additional Documents$")
	public void remove_additional_documents() throws Throwable
	{
		driver.findElement(By.xpath("(//button[@type='button'])[8]")).click();
	}
	
	@Then("^Additional Work Experiences field will be removed$")
	public void additional_work_experiences_field_is_removed() throws Throwable
	{
		List<WebElement> visible = driver.findElements(By.id("//*[@id='job']"));
			if(visible.isEmpty())
			{
				System.out.println("Element is not Visible");
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
	}
	/**********************************************TUTOR DOCUMENTS REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Documents is required is displayed$")
	public void error_message_documents_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[30]/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Complete the documents (diploma, goverment ID and resume)"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	@When("^Click Documents Add Button$")
	public void add_documents() throws Throwable
	{
		driver.findElement(By.id("add_docu_button")).click();
	}
	
	@Then("^Additional Documents field is displayed$")
	public void additional_documents_field_is_displayed() throws Throwable
	{
		int field = driver.findElements(By.xpath("//*[@id='docuDiv']/div[2]/div/div/input")).size();
		
		if(field > 0)
		{
			System.out.println("Element is Visible");
		}
		else
		{
			driver.quit();
			throw new Exception("Test Condition Failed");
		}
	}
	
	@Then("^Additional Documents field will be removed$")
	public void additional_documents_field_is_removed() throws Throwable
	{
		List<WebElement> visible = driver.findElements(By.xpath("//*[@id='docuDiv']/div[2]/div/div/input"));
			if(visible.isEmpty())
			{
				System.out.println("Element is not Visible");
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
	}
	/**********************************************TUTOR SUBJECT MATTER REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Subject Matter is required is displayed$")
	public void error_message_subject_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[32]/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Subject is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************TUTOR LEVEL REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Level is required is displayed$")
	public void error_message_tlevel_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[33]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Level is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Test Condition Failed");
			}
		}
	}
	
	/**********************************************TUTOR RATE REQUIRED FIELD VALIDATIONS**********************************************/
	@Then("^TR: Error Message Rate is required is displayed$")
	public void error_message_rate_required() throws Throwable
	{
		List<WebElement> message = driver.findElements(By.xpath("//*[@id='registration-form']/div/div/div[34]/div/div"));
		for(WebElement wwa: message)
		{
			if(wwa.getText().equals("Rate is required"))
			{
				sat = true;
			}
			else
			{
				driver.quit();
				throw new Exception("Testtwa Condition Failed");
			}
		}
	}
	
	private String closeAlertAndGetItsText(WebDriver driver) {
	    try {
	      Alert alert = driver.switchTo().alert();
	      String alertText = alert.getText();
	      if (acceptNextAlert) {
	        alert.accept();
	      } else {
	        alert.dismiss();
	      }
	      return alertText;
	    } finally {
	      acceptNextAlert = true;
	    }
   }
}
