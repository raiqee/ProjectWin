package cucumberTest;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
import static org.junit.Assert.*;

import Common.Data;

public class Parent_Registration extends Data {
	public void testFullRegistration (WebDriver driver){
		// TODO Auto-generated method stub
		
			driver = new FirefoxDriver();
	        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	        driver.get("http://10.10.1.96/");
	        driver.findElement(By.linkText("Sign Up")).click();
	        driver.findElement(By.name("fname")).clear();
	        driver.findElement(By.name("fname")).sendKeys("Studentfive");
	        driver.findElement(By.name("lname")).clear();
	        driver.findElement(By.name("lname")).sendKeys("Full");
	        new Select(driver.findElement(By.id("pickmonth"))).selectByVisibleText("January");
	        new Select(driver.findElement(By.id("pickday"))).selectByVisibleText("1");
	        new Select(driver.findElement(By.id("pickyear"))).selectByVisibleText("1990");
	        new Select(driver.findElement(By.name("gender"))).selectByVisibleText("Female");
	        driver.findElement(By.name("mobile")).clear();
	        driver.findElement(By.name("mobile")).sendKeys("09123456789");
	        driver.findElement(By.name("skype")).clear();
	        driver.findElement(By.name("skype")).sendKeys("student05");
	        driver.findElement(By.name("address")).clear();
	        driver.findElement(By.name("address")).sendKeys("Philippines");
	        new Select(driver.findElement(By.name("country"))).selectByVisibleText("Philippines");
	        driver.findElement(By.name("zip")).clear();
	        driver.findElement(By.name("zip")).sendKeys("4702");
	        driver.findElement(By.cssSelector("div.col-md-12 > div.form-group > input[name=\"email\"]")).clear();
	        driver.findElement(By.cssSelector("div.col-md-12 > div.form-group > input[name=\"email\"]")).sendKeys("student05@dagobah.com");
	        driver.findElement(By.name("pass")).clear();
	        driver.findElement(By.name("pass")).sendKeys("login@123");
	        driver.findElement(By.name("confirmpass")).clear();
	        driver.findElement(By.name("confirmpass")).sendKeys("login@123");
	        new Select(driver.findElement(By.name("level"))).selectByVisibleText("Post Graduate");
	        driver.findElement(By.xpath("//input[@value='Join Now']")).click();
	        assertTrue(closeAlertAndGetItsText(driver).matches("^You have not uploaded any image\\. Do you wish to continue[\\s\\S]$"));
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
