import percySnapshot from "@percy/testcafe";
import { Selector } from 'testcafe';

fixture("Demo Page")
  .page("http://127.0.0.1:8080");

test("Initial Page Snapshot", async (t) => {
  await t.maximizeWindow();
  await t.wait(3000);
  await percySnapshot(t, "Initial Page");
});

test.skip("Button Click Snapshot", async (t) => {
  await t.maximizeWindow();
  await t.click(".button");
  await t.wait(3000);
  //await percySnapshot(t, "Button Clicked");
});