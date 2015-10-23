package Common;

import java.awt.GraphicsConfiguration;
import java.awt.GraphicsEnvironment;
import java.io.File;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.DecimalFormat;
import java.util.concurrent.TimeUnit;
import org.monte.media.FormatKeys.MediaType;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.safari.SafariDriver;
import java.awt.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.monte.media.Format;
import org.monte.media.math.Rational;
import org.monte.screenrecorder.ScreenRecorder;
import static org.monte.media.VideoFormatKeys.*;

public class Video extends Data{
	
     public static long startTimeByMillis;

	 public static WebDriver initiateBrowserDriver(String browser){
		WebDriver driver = null;
		if(browser != null){
			if(browser.equals("FIREFOX")){
				driver = new FirefoxDriver();	
			}else if(browser.equals("CHROME")){
				driver = new ChromeDriver();
			}else if(browser.equals("SAFARI")){
				driver = new SafariDriver();
			}
		    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		}
		return driver;
	 }
	  
	 public static long startTime(){
		startTimeByMillis = System.currentTimeMillis(); 
	 	return startTimeByMillis;
	 }
	 
	 public static String getTimeDuration(){
		 DecimalFormat df = new DecimalFormat("#.##");
		 long startTime = startTimeByMillis;
		 startTimeByMillis = 0;
		 return df.format((System.currentTimeMillis() - startTime) / 1000.0);
	 }

	 public static boolean checkIfURLDoesNotExists(String targetUrl) {
	      HttpURLConnection httpUrlConn;
	        try {
	            httpUrlConn = (HttpURLConnection) new URL(targetUrl).openConnection();
	 
	            // A HEAD request is just like a GET request, except that it asks
	            // the server to return the response headers only, and not the
	            // actual resource (i.e. no message body).
	            // This is useful to check characteristics of a resource without
	            // actually downloading it,thus saving bandwidth. Use HEAD when
	            // you don't actually need a file's contents.
	            httpUrlConn.setRequestMethod("HEAD");
	 
	            // Set timeouts in milliseconds
	            httpUrlConn.setConnectTimeout(30000);
	            httpUrlConn.setReadTimeout(30000);
	 
	            return (httpUrlConn.getResponseCode() != HttpURLConnection.HTTP_OK);
	        } catch (Exception e) {
	            System.out.println("Error: " + e.getMessage());
	            return true;
	            
	        }
	 }
	 private static ScreenRecorder screenRecorder;
	 
	 public static void startRecording() throws Exception {
/*		if(!new File(SELENIUM_VIDEOS_PATH).exists()){
			new File(SELENIUM_VIDEOS_PATH).mkdir();
		}*/
		
        GraphicsConfiguration gc = GraphicsEnvironment.getLocalGraphicsEnvironment().getDefaultScreenDevice().getDefaultConfiguration();

        screenRecorder = new ScreenRecorder(gc,
            null, new Format(MediaTypeKey, MediaType.FILE, MimeTypeKey, MIME_AVI),
            new Format(MediaTypeKey, MediaType.VIDEO, EncodingKey, ENCODING_AVI_TECHSMITH_SCREEN_CAPTURE,
                CompressorNameKey, ENCODING_AVI_TECHSMITH_SCREEN_CAPTURE,
                DepthKey, 24, FrameRateKey, Rational.valueOf(15),
                QualityKey, 1.0f,
                KeyFrameIntervalKey, 15 * 60),
            new Format(MediaTypeKey, MediaType.VIDEO, EncodingKey, "black",
                FrameRateKey, Rational.valueOf(30)),
            null, new File(SELENIUM_VIDEOS_PATH));
        
	    screenRecorder.start();
	 }

	 public static void stopRecording(String fileName) throws Exception{
		Thread.sleep(5000);
	    screenRecorder.stop();
	    for(File videoFile : screenRecorder.getCreatedMovieFiles()){
	    	String newFile = videoFile.getAbsolutePath().replace("ScreenRecording", fileName);
	    	videoFile.renameTo(new File(newFile));
	    	
	    }

	 }
}
