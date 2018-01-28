package example.stepdefs;

import cucumber.api.Scenario;
import cucumber.api.java8.En;
import example.pages.GooglePage;
import org.junit.Assume;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import static org.assertj.core.api.Assertions.assertThat;

public class GoogleSearchSteps implements En {

    private WebDriver driver;
    private GooglePage googlePage;

    // Warning: Make sure the timeouts for hooks using a web driver are zero

    public GoogleSearchSteps() {
        Before(new String[]{"@web"}, 0, 1, (Scenario scenario) -> {
            //driver = new ChromeDriver();
            driver = new FirefoxDriver();
        });
        Before(new String[]{"@google"}, 0, 10, (Scenario scenario) -> {
            googlePage = new GooglePage(driver);
        });
        Before(new String[]{"@wip"}, 0, 20, (Scenario scenario) -> {
            System.out.println("WIP - SKIP SCENARIO: " + scenario.getName());
            Assume.assumeTrue(false);
        });
        Given("^a web browser is on the Google page$", () -> {
            googlePage.navigateToHomePage();
        });
        When("^the search phrase \"([^\"]*)\" is entered$", (String phrase) -> {
            googlePage.enterSearchPhrase(phrase);
        });
        Then("^results for \"([^\"]*)\" are shown$", (String phrase) -> {
            assertThat(googlePage.pageTitleContains(phrase)).isTrue();
        });
        After(new String[]{"@web"}, (Scenario scenario) -> {
            driver.quit();
        });
    }
}
