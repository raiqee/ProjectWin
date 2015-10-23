package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import Common.Data;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps extends Data{
	
	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page() throws Throwable
	{
        driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(baseUrl);
	}
	
	@When("^User Navigate to LogIn Page$")
	public void user_navigate_to_Login_Page() throws Throwable
	{
        driver.findElement(By.linkText("Log-in")).click();
	}
	
	@When("^User enters Email and Password$")
	public void user_enters_Email_and_Password() throws Throwable
	{
		elementId = "email";
        driver.findElement(By.id(elementId)).clear();
        driver.findElement(By.id(elementId)).sendKeys(email);
        elementId = "password";
        driver.findElement(By.id(elementId)).clear();
        driver.findElement(By.id(elementId)).sendKeys(password);
        driver.findElement(By.id("loginbtn")).click();
	}
	
	@Then("^Message displayed Login Successfully$")
	public void message_displayed_Login_Successfully() throws Throwable
	{
		System.out.println("Successfully Logged-in");
	}
	
	@When("^User LogOut from the Application$")
	public void user_LogOut_from_the_Application() throws Throwable
	{
        driver.findElement(By.linkText("Admin Leah")).click();
        driver.findElement(By.xpath("//li[@onclick=\"location.href = '/logout'\"]")).click();
	}
	
	@Then("^Message displayed LogOut Successfully$")
	public void Message_displayed_LogOut_Successfully() throws Throwable
	{
		System.out.println("Successfully Logged-out");
	}
	
}
