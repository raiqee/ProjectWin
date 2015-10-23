package cucumberTest;
import java.util.concurrent.TimeUnit;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "Feature"
		//features = "Feature/Parent_Registration.feature"
		//,tags={"@TR"}
		,glue={"stepDefinition"}
		,monochrome = true
		,format={"junit:reports/xml/reports.xml", "pretty", "html:reports/html", "json:reports/json/cucumber.json"}
		)

public class TestRunner {

	}
