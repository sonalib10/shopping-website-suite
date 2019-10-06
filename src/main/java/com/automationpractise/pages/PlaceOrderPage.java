package com.automationpractise.pages;

import com.automationpractise.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import java.util.List;

import static com.automationpractise.Assertions.isElementVisible;
import static org.junit.Assert.assertTrue;

public class PlaceOrderPage extends Driver {

    public PlaceOrderPage(){
        super();
    }

private static WebElement element;
    private static Actions action;

    public static void selectTwoProducts() {
        selectProductsByTypes("tshirt");
        selectProductsByTypes("blouses");
    }

    public static void selectProductsByTypes(String type){
        selectClothingCategories("WOMEN");
        if(type.equals("tshirt")){
            selectTshirt();
            scrollPagetoHalf();
            driver.findElement(By.className("product-container")).click();
            isElementVisible(By.id("add_to_cart"));
            driver.findElement(By.id("add_to_cart")).click();
            isElementVisible(By.className("icon-ok"));
            driver.findElement(By.xpath("//div[@class='button-container']/span[@class='continue btn btn-default button exclusive-medium']")).click();

        }else if(type.equals("blouses")) {
            selectBlouses();
            scrollPagetoHalf();
            driver.findElement(By.className("product-container")).click();
            isElementVisible(By.id("add_to_cart"));
            driver.findElement(By.id("add_to_cart")).click();
            isElementVisible(By.className("icon-ok"));
        }

    }

    public static void checkOutAndOrder(){
        //continue to checkout
        driver.findElement(By.xpath("//span[contains(text(),'Proceed to checkout')]")).click();
        driver.findElement(By.xpath("//a[@class='button btn btn-default standard-checkout button-medium']//span[contains(text(),'Proceed to checkout')]")).click();
        driver.findElement(By.name("processAddress")).click();
        driver.findElement(By.xpath(" //input[@name='cgv']")).click();
        driver.findElement(By.xpath("//button[@name='processCarrier']//span[contains(text(),'Proceed to checkout')]")).click();
        //Pay and place order
        driver.findElement(By.className("bankwire")).click();
        driver.findElement(By.xpath("//span[contains(text(),'I confirm my order')]")).click();
    }

    public static void scrollPagetoHalf(){
        JavascriptExecutor js = ((JavascriptExecutor) driver);
        js.executeScript("window.scrollBy(0,500)");
    }

    public static void selectClothingCategories(String type) {
        element = driver.findElement(By.xpath("//ul[@class='sf-menu clearfix menu-content sf-js-enabled sf-arrows']"));
        List<WebElement> litag = element.findElements(By.tagName("li"));
        for (WebElement element : litag) {
            if (element.getText().equals(type)) {
                action = new Actions(driver);
                action.moveToElement(element);
                action.click().build().perform();
                break;
            }
        }
    }

    public  static void selectTshirt(){
        driver.findElement(By.xpath("//li[@class='sfHover']//a[contains(text(),'T-shirts')]")).click();
    }
    public  static void selectBlouses(){
        driver.findElement(By.xpath("//li[@class='sfHover']//a[contains(text(),'Blouses')]")).click();
    }

    public static void isOrderPlacedSuccessfully(){
        try {
            isElementVisible(By.xpath("//strong[contains(text(),'Your order on My Store is complete.')]"));
            assertTrue(true);
        }catch(Exception e){
            System.out.println("Failed to place the Order");
            assertTrue(false);
        }
    }
}
