package com.automationpractise;

import com.automationpractise.pages.SignUpPage;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;

import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertEquals;


public class Assertions extends Driver {

    public Assertions() {
        super();
    }

    static WebElement webelement;

    public static void assertLandingPage() {
        isElementVisible(By.xpath("//div[@class='header_user_info']/a[@class='login']"));
        webelement = driver.findElement(By.xpath("//div[@class='header_user_info']/a[@class='login']"));
        String webElementText = webelement.getText();
        assertEquals("User failed to navigate on Shopping website", "Sign in",webElementText );
        System.out.println("User lands on Shopping website");
    }

    public static void userLoggedIn(SignUpPage signUpPage) {
        isElementVisible(By.xpath("//a[@class='account']"));
        String username = driver.findElement(By.xpath("//a[@class='account']")).getText();
        assertEquals("User login fails", signUpPage.getFirstName() + " " + signUpPage.getLastName(),username );
    }

    public static void isElementVisible(By by) {
        try {
            WebDriverWait wait = new WebDriverWait(driver, 20);
            wait.until(ExpectedConditions.visibilityOfElementLocated(by));
        } catch (TimeoutException e) {
            System.out.println("Command completion takes more than the wait time for element" + by);
        } catch (NoSuchElementException e) {
            takeScreenshot("NoSuchElement");
            System.out.println(e + "Element is not available on the page for" + by);
        } catch (ElementNotVisibleException e) {
            takeScreenshot("ElementNotVisible");
            System.out.println(e + "Element is not visible on the page for" + by);
        } catch (Exception e) {
            takeScreenshot("ElementNotFound");
            System.out.println(e + "Exception");
        }
    }

    public static void isItemAddedToShoppingCart() {
        isElementVisible(By.xpath("//div[@class='shopping_cart']//span[@class='ajax_cart_quantity']"));
        String cartvalue = driver.findElement(By.xpath("//div[@class='shopping_cart']//span[@class='ajax_cart_quantity']")).getText();
        if (cartvalue.equals("2")) {
           assertTrue(true);
        } else {
            takeScreenshot("ItemNotAddedToShoppingCart");
            System.out.println("Cannot add items to cart");
            assertTrue(false);
        }
    }

    public static void takeScreenshot(String fileName) {
        try {
            File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(src,
                    new File(System.getProperty("user.home") + "\\screenshots\\" + fileName + ".png"));
        } catch (IOException e) {
            System.out.println("Failed to create file");
        }
    }

    public static void isExistingUser() {
        String error = driver.findElement(By.xpath("//div[@id='create_account_error']/ol/li")).getText();
        assertEquals("An account using this email address has already been registered. Please enter a valid password or request a new one.",error);
    }
}
