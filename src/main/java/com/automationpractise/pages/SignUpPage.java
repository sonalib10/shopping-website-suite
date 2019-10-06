package com.automationpractise.pages;

import com.automationpractise.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class SignUpPage extends Driver {

    private static Properties pro;

    public SignUpPage() {
        super();
        try {
            pro = new Properties();
            InputStream file = getClass()
                    .getClassLoader().getResourceAsStream("env.properties");
            pro.load(file);
        } catch (IOException e) {
            System.out.println("env.properties file not found");
        }
    }

    public void navigateToURL() {
        driver.get(pro.getProperty("HOST"));
    }

    public void clickOnSignIn() {

        driver.findElement(By.className("login")).click();
    }

    public  void enterEmailID() {
        driver.findElement(By.id("email_create")).sendKeys(pro.getProperty("EMAIL_ID"));

    }

    public  void enterSignInEmailID() {
        driver.findElement(By.id("email")).sendKeys(pro.getProperty("EMAIL_ID"));
    }

    public  void enterSignInPassword() {
        driver.findElement(By.id("passwd")).sendKeys(pro.getProperty("PASSWORD"));

    }

    public  void login() {
        driver.findElement(By.id("SubmitLogin")).click();
    }

    public  void clickCreateAccount() {
        driver.findElement(By.id("SubmitCreate")).click();
    }

    public  void selectTitle() {
        driver.findElement(By.id("id_gender2")).click();
    }

    public  void enterFirstName() {
        driver.findElement(By.id("customer_firstname")).sendKeys(pro.getProperty("FIRSTNAME"));
    }

    public  void enterLastName() {
        driver.findElement(By.id("customer_lastname")).sendKeys(pro.getProperty("LASTNAME"));
    }

    public  void enterPwd() {
        driver.findElement(By.id("passwd")).sendKeys(pro.getProperty("PASSWORD"));
    }

    public static void selectDateOfBirth() {
        Select drpDays = new Select(driver.findElement(By.id("days")));
        drpDays.selectByValue("16");
        Select drpMonths = new Select(driver.findElement(By.id("months")));
        drpMonths.selectByIndex(3);
        Select drpYears = new Select(driver.findElement(By.id("years")));
        drpYears.selectByValue("1987");
    }

    public  void enterAddress() {
        driver.findElement(By.id("firstname")).sendKeys(pro.getProperty("FIRSTNAME"));
        driver.findElement(By.id("lastname")).sendKeys(pro.getProperty("LASTNAME"));
        driver.findElement(By.id("address1")).sendKeys(pro.getProperty("ADDRESS"));
        driver.findElement(By.id("city")).sendKeys("Sydney");
        Select drpstate = new Select(driver.findElement(By.id("id_state")));
        drpstate.selectByVisibleText("New York");
        driver.findElement(By.id("postcode")).sendKeys("12345");
        Select drpcountry = new Select(driver.findElement(By.id("id_country")));
        drpcountry.selectByVisibleText("United States");
        driver.findElement(By.id("phone_mobile")).sendKeys(pro.getProperty("CELLNO"));

    }

    public  void clickRegister() {
        driver.findElement(By.id("submitAccount")).click();
    }

    public  void userSignIn() {
        clickCreateAccount();
        selectTitle();
        enterFirstName();
        enterLastName();
        enterPwd();
        selectDateOfBirth();
        enterAddress();
        clickRegister();
    }

    public  String getFirstName() {
        return pro.getProperty("FIRSTNAME");

    }

    public  String getLastName() {
        return pro.getProperty("LASTNAME");
    }
}
