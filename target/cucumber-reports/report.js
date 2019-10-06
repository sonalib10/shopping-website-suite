$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com.automationpractise/placeorder.feature");
formatter.feature({
  "name": "Online Shopping",
  "description": "This feature has steps for online shopping of 2 items and placing an Order.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add two items and place an order",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "PlaceOrder.userIsOnHomePage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NBKR83UJ\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: Driver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:202)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.automationpractise.Driver.initializeBrowser(Driver.java:30)\r\n\tat com.automationpractise.PlaceOrder.userIsOnHomePage(PlaceOrder.java:15)\r\n\tat ✽.user is on Home page(file:src/test/resources/com.automationpractise/placeorder.feature:6)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:12268/status] to be available after 20003 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.automationpractise.Driver.initializeBrowser(Driver.java:30)\r\n\tat com.automationpractise.PlaceOrder.userIsOnHomePage(PlaceOrder.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(FutureTask.java:205)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:156)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 55 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "PlaceOrder.userEntersUsernameAndPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user log in to the website",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrder.userLogInToTheWebsite()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects two items to add to shopping cart",
  "keyword": "When "
});
formatter.match({
  "location": "PlaceOrder.userSelectsTwoItemsToAddToShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "items should be added to shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrder.itemsShouldBeAddedToShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user moves forward to checkout",
  "keyword": "When "
});
formatter.match({
  "location": "PlaceOrder.userMovesForwardToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should successfully place the order",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrder.userShouldSuccessfullyPlaceTheOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/com.automationpractise/usersignup.feature");
formatter.feature({
  "name": "User creates new account on the website",
  "description": "  This feature is to signup new user.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "SignIn Error for existing user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User go to shopping website",
  "keyword": "Given "
});
formatter.match({
  "location": "UserSignUp.userGoToShoppingWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should land to shopping website",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSignUp.userShouldLandToShoppingWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to Signup page to enter email ID",
  "keyword": "And "
});
formatter.match({
  "location": "UserSignUp.navigatesToSignupPageToEnterEmailID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "throws error for existing user email ID",
  "keyword": "Then "
});
formatter.match({
  "location": "UserSignUp.throwsErrorForExistingUserEmailID()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[An account using this email address has already been registered. Please enter a valid password or request a new one].\u003e but was:\u003c[Invalid email address].\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.automationpractise.Assertions.isExistingUser(Assertions.java:80)\r\n\tat com.automationpractise.UserSignUp.throwsErrorForExistingUserEmailID(UserSignUp.java:45)\r\n\tat ✽.throws error for existing user email ID(file:src/test/resources/com.automationpractise/usersignup.feature:17)\r\n",
  "status": "failed"
});
});