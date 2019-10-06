package com.automationpractise;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/resources"},
        snippets = CucumberOptions.SnippetType.CAMELCASE,
        tags = "@smoke",plugin = { "pretty", "html:target/cucumber-reports" },
        monochrome = true)
public class ExecuteTest {
}
