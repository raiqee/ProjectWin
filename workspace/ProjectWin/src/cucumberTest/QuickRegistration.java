package cucumberTest;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import Common.Data;

public class QuickRegistration{
	private static WebDriver driver = null;
	private static boolean sat = false;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
			driver = new FirefoxDriver();
	        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	        driver.get("http://10.10.1.96/");
	        driver.findElement(By.xpath("(//button[@type='button'])[2]")).click();
	        driver.findElement(By.xpath("//*[@id='step-node-start']/div/div/div[1]/div/div/div/div/ul/li[1]/a")).click();
	        driver.findElement(By.name("student_email")).clear();
	        driver.findElement(By.name("student_email")).sendKeys("testemail10@dagobah.com");
	        driver.findElement(By.name("student_pass")).clear();
	        driver.findElement(By.name("student_pass")).sendKeys("login@123");
	        driver.findElement(By.linkText("JOIN NOW")).click();
	        List<WebElement> actualAnchors = driver.findElements(By.tagName("h2"));
			
			for(WebElement wwa: actualAnchors)
			{
				System.out.println(wwa.getText() + "\n");
				if(wwa.getText().equals("Thank you for registering!"));
				{
					sat = true;
					break;
				}
			}

	}

}