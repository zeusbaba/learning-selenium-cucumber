import cucumber.api.PendingException;
import cucumber.api.java8.En;

public class LoadMainPage implements En {
    public LoadMainPage() {
        Given("^I load the main url$", () -> {
            // Write code here that turns the phrase above into concrete actions
            System.out.println("do something here...");
            throw new PendingException();
        });
    }
  }
