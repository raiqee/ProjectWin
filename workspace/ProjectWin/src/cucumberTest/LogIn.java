package cucumberTest;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class LogIn {
private static WebDriver driver = null;
	public static void main(String[] args) 
	{		 
        driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("http://10.10.1.96/");
        driver.findElement(By.linkText("Log-in")).click();
        driver.findElement(By.id("email")).clear();
        driver.findElement(By.id("email")).sendKeys("admin@dagobah.com");
        driver.findElement(By.id("password")).clear();
        driver.findElement(By.id("password")).sendKeys("admin@123");
        driver.findElement(By.id("loginbtn")).click();
        driver.findElement(By.linkText("Admin")).click();
        driver.findElement(By.xpath("//li[@onclick=\"location.href = '/logout'\"]")).click();
        driver.quit();
	}

}