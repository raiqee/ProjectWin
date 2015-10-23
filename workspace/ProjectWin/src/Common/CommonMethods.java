package Common;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CommonMethods extends Data{
	
	@Given("^Access My Learning Coach$")
	public void access_url() throws Throwable
	{
		System.out.println("beginning");
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
}
