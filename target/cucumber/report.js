$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/GoogleSearch.feature");
formatter.feature({
  "name": "Google Searching",
  "description": "  As a web surfer,\n  I want to search Google,\n  So that I can learn new things.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Simple Google search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@automated"
    },
    {
      "name": "@web"
    },
    {
      "name": "@google"
    },
    {
      "name": "@panda"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a web browser is on the Google page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearchSteps.java:32"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the search phrase \"panda\" is entered",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSearchSteps.java:35"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results for \"panda\" are shown",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.java:38"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/MyGoogleSearch.feature");
formatter.feature({
  "name": "Google Searching",
  "description": "  As a web surfer, I want to search Google, so that I can learn new things.",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: got: \u003cfalse\u003e, expected: is \u003ctrue\u003e\n\tat org.junit.Assume.assumeThat(Assume.java:95)\n\tat org.junit.Assume.assumeTrue(Assume.java:41)\n\tat example.stepdefs.GoogleSearchSteps.lambda$new$2(GoogleSearchSteps.java:30)\n\tat cucumber.runtime.java8.Java8HookDefinition.lambda$execute$0(Java8HookDefinition.java:49)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.java8.Java8HookDefinition.execute(Java8HookDefinition.java:47)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "skipped"
});
formatter.step({
  "name": "a web browser is on the Google page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearchSteps.java:32"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Simple Google search for pandas",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the search phrase \"panda\" is entered",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSearchSteps.java:35"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results for \"panda\" are shown",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.java:38"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: got: \u003cfalse\u003e, expected: is \u003ctrue\u003e\n\tat org.junit.Assume.assumeThat(Assume.java:95)\n\tat org.junit.Assume.assumeTrue(Assume.java:41)\n\tat example.stepdefs.GoogleSearchSteps.lambda$new$2(GoogleSearchSteps.java:30)\n\tat cucumber.runtime.java8.Java8HookDefinition.lambda$execute$0(Java8HookDefinition.java:49)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.java8.Java8HookDefinition.execute(Java8HookDefinition.java:47)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "skipped"
});
formatter.step({
  "name": "a web browser is on the Google page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoogleSearchSteps.java:32"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Simple Google search for elephants",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the search phrase \"elephant\" is entered",
  "keyword": "When "
});
formatter.match({
  "location": "GoogleSearchSteps.java:35"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results for \"elephant\" are shown",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearchSteps.java:38"
});
formatter.result({
  "status": "skipped"
});
});