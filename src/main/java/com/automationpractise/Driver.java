package com.automationpractise;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.util.concurrent.TimeUnit;

public class Driver {

    public static WebDriver driver;
    private DesiredCapabilities capabilities;
    private String baseUrl;
    private String browserName;

    public void initializeBrowser(String browser) {
        capabilities = new DesiredCapabilities();
        switch (browser) {
            case "Chrome":
                System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
                driver = new ChromeDriver();driver.manage().window().maximize();

                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
                break;
            case "Firefox":
                FirefoxProfile firefoxProfile = new FirefoxProfile();
                firefoxProfile.setPreference("geo.prompt.testing", true);
                firefoxProfile.setPreference("geo.prompt.testing.allow", true);
                System.setProperty("webdriver.gecko.driver", "geckodriver.exe");
                FirefoxOptions firefoxOptions = new FirefoxOptions();
                firefoxOptions.setProfile(firefoxProfile);
                driver = new FirefoxDriver(firefoxOptions);
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
                driver.manage().window().maximize();
                break;

        }

    }

    public void closeBrowser() {
        driver.close();
    }

    public void navigateToURL(String url) {
        driver.get(url);

    }

    private void setBrowser(String browserName) {
        this.browserName = browserName;
    }

    private void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public String getBrowser() {
        return this.browserName;
    }
}















