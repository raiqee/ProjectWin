package stepDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;
import Common.Data;

public class QuickRegistrationSteps extends Data{
	
	@Given("^Access My Learning Coach Website$")
	public void access_baseURL() throws Throwable
	{
        driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(baseUrl);
	}
	
	@When("^User select a Subject$")
	public void select_subjectL() throws Throwable
	{
	    driver.findElement(By.xpath("(//button[@type='button'])[2]")).click();
	    driver.findElement(By.linkText("MATH")).click();
	}
	
	@When("^User enters email and password$")
	public void input_required_informations(DataTable dataTable) throws Throwable
	{
        List<List<String>> data =dataTable.raw();
        System.out.println(data.get(0).get(1));
        System.out.println(data.get(1).get(1));
        
	    driver.findElement(By.name("student_email")).clear();
	    driver.findElement(By.name("student_email")).sendKeys(data.get(0).get(1));
	    driver.findElement(By.name("student_pass")).clear();
	    driver.findElement(By.name("student_pass")).sendKeys(data.get(1).get(1));
	    driver.findElement(By.linkText("JOIN NOW")).click();
	}
	
	@When("^User will redirect to Registration Notification Slide$")
	public void registration_notification() throws Throwable
	{
		driver.findElement(By.linkText("Close")).click();
	}
	
}
